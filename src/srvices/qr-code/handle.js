import qr from 'qrcode-terminal';
import chalk from 'chalk';

export const handle = async (err, result) => {
    if (err){
        console.log(chalk.red('Error generating QR code:', err));
        return;
    }

    const isSmall = result.type == 2; // Assuming type 2 indicates a small QR code

    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));
        console.log(qrcode);
    });
}