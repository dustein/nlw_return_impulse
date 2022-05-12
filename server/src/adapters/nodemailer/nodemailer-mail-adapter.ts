import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "3d77a16cf70168",
     pass: "8c0d12a242c4ba"
   }
 });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
   await transport.sendMail({
      from: "DuStein Projeto NLW RETURN <ola@projeto.com>",
      to: "Destinatario <email@email.com>",
      subject: subject,
      html: body,
   });
   }
}

// [
//    `<div style="font-family: sans-serif; font-size: 18px; color: #111;">`,
//    `<p>Tipo do feedback: ${type}</p>`,
//    `<p>Comentario: ${comment}>`,
//    `</div>`
// ].join('\n')