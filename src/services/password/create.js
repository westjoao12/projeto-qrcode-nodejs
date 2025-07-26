import chalk from "chalk";
import {handle} from "./handle.js";

export const createPassword = async () => {
  console.log(chalk.green("password"));
  const password = await handle();
  console.log(password);
}