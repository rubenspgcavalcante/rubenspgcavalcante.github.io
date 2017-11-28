import {
  AVAILABLE_SIZES,
  BANNER_AUTUMN,
  BANNER_SPRING,
  BANNER_SUMMER,
  BANNER_WINTER
} from "../app/modules/ui/constants/banners";
import { exec } from "child_process";
import flattenDeep from "lodash/flattenDeep";

function generateExecutors() {
  const command = cmd => new Promise((res, rej) => {
    exec(cmd, (error, stdout, stderr) => error ? rej(error) : res(stdout));
  });

  const cmdTmpl = (file, width) =>
    `primitive -i app/assets/banners/${file}.png -o app/assets/banners/${file}.thumb.png -n 800 -s ${width} -m 7`;

  return [BANNER_SPRING, BANNER_SUMMER, BANNER_AUTUMN, BANNER_WINTER]
    .map(partial => AVAILABLE_SIZES.map(
      ([width, height]) => ({ path: `${partial}.${width}x${height}`, width, height })
    ))
    .map((sources) => {
      return sources.map(({ path, width }) => {
        const primitive = cmdTmpl(path, width);
        return () => {
          console.info(`Executing on ${path}.png`);
          return command(primitive);
        }
      });
    });
}

async function main(executors) {
  try {
    for(let executor of flattenDeep(executors)){
      await executor();
    }
  }
  catch (err) {
    console.warn(err);
  }
}

main(generateExecutors()).catch(err => console.error(err));