import {
  AVAILABLE_SIZES,
  BANNER_AUTUMN,
  BANNER_SPRING,
  BANNER_SUMMER,
  BANNER_WINTER
} from "../app/modules/ui/constants/banners";
import { exec } from "child_process";

const command = cmd => new Promise((res, rej) => {
  exec(cmd, (error, stdout, stderr) => error ? rej(error) : res(stdout));
});

const cmdTmpl = (file, width) =>
  `primitive -i app/assets/banners/${file}.png -o app/assets/banners/${file}.thumb.png -n 800 -s ${width} -m 7`;

const executors = [BANNER_SPRING, BANNER_SUMMER, BANNER_AUTUMN, BANNER_WINTER]
  .map(
    partial => AVAILABLE_SIZES.map(
      ([width, height]) => ({ path: `${partial}.${w}x${h}`, width, height })
    )
  )
  .map(({ path, width }) => {
    const primitive = cmdTmpl(path, width);
    return async () => {
      console.info(`Executing on ${path}.png`);
      return exec(primitive);
    }
  });

try {
  executors.map(async (exec) => await exec());
}
catch (err) {
  console.warn(err);
  return 1;
}