import prompt from 'prompt';
import {promptSchema} from './prompts-schema/prompt-schema-main.js';

import {createQRCode} from "./services/qr-code/create.js";
import {createPassword} from "./services/password/create.js";

(async function main() {
    prompt.get(promptSchema, async (err, result) => {
        if(err) console.log('Error in prompt:', err);

        if(result.select == 1) await createQRCode();
        if(result.select == 2) await createPassword();
    });

    prompt.start();
})();