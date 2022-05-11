import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express.Router();
const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "3d77a16cf70168",
     pass: "8c0d12a242c4ba"
   }
 });

routes.get("/", (req, res) => {
   res.send("Hello World")
})

routes.post("/feedbacks", async (req, res) => {
   const { type, comment, screenshot } = req.body;

   const feedback = await prisma.feedback.create({
      data: {
         type,
         comment,
         screenshot,
      }
   })

   await transport.sendMail({
      from: "DuStein Projeto NLW RETURN <ola@projeto.com>",
      to: "Destinatario <email@email.com>",
      subject: "Novo feedback",
      html: [
         `<div style="font-family: sans-serif; font-size: 18px; color: #111;">`,
         `<p>Tipo do feedback: ${type}</p>`,
         `<p>Comentario: ${comment}>`,
         `</div>`
      ].join('\n')
   });

   return  res.status(201).json({data: feedback});
});
