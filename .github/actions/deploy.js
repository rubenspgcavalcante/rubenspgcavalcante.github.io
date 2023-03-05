const { promisify } = require("util");
const publish = promisify(require("gh-pages").publish);
const chalk = require("chalk");
const core = require("@actions/core");
const github = require("@actions/github");

(async () => {
  core.setOutput("start", chalk.blue("📦 Deployment process in progress..."));
  try {
    await publish("out");
    core.setOutput(
      "success",
      chalk.green("🚀 Successfully deployed to gh-pages")
    );
  } catch (error) {
    core.setFailed(chalk.red(`❌ ${error.message}`));
    process.exit(1);
  }
})();
