import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import {handle} from "./handle.js";

export const createQRCode = async () => {
  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}