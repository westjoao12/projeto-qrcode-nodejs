import prompt from 'prompt';
import promptSchema from './prompts-schema/prompt-schema-main.js';

import {createQRCode} from "./services/qr-code/create.js";

async function main() {
    prompt.get(promptSchema, async (err, result) => {
        if(err) console.log('Error in prompt:', err);

        if(result.select == 1) await createQRCode();
    });

    prompt.start();
}

main();