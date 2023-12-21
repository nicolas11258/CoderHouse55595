import { Command } from "commander";
import dotenv from "dotenv";

const commander = new Command();

commander.option(
  `--mode <mode>`,
  "Modo del servidor: development o production"
);

commander.parse();

const mode = commander.opts().mode;

const envPath = `.env.${mode}`;
dotenv.config({ path: envPath });

export default {
  port: process.env.PORT,
  url: process.env.URL,
  mode: mode,
};
