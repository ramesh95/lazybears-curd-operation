import SendGrid = require('@sendgrid/mail');
// import * as SendGrid from "@sendgrid/mail";
const SENDGRID_KEY = <string>process.env.SENDGRID_KEY;
SendGrid.setApiKey(SENDGRID_KEY)

export class EmailUtility {

    async sendEmail(
        to: string,
        from: string,
        subject: string,
        text?: string,
        html?: string,
    ) {
        try {
            const mail:any = {
                to: to
                , from: from
                , subject: subject
                , text: text
                , html: html
            };
            await SendGrid.send(mail);
        } catch (error) {
            throw error
        }
    }
}