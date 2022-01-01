import nodemailer = require("nodemailer");
import env from "expresswebcorets/lib/Env";
import ejs = require("ejs");
import IMailer from "./IMailer";

class Mailer implements IMailer {
  sendMailTransport(payload: { body: string; client_name: string; sender_name: string; to: string; template: string; from: string; subject: string; token?: string; reset_link?: string; url?: string }): void {
    let path = this.templateToUse(payload.template);
    ejs.renderFile(
      __dirname + `/Templates/${path}.ejs`,
      {
        body: payload.body,
        client_name: payload.client_name,
        sender_name: payload.sender_name,
        to: payload.to,
        token: payload.token,
        url: payload.url,
        reset_link: payload.reset_link,
      },
      (err: any, data) => {
        if (err) {
          console.log(err);
          throw new Error(err);
        } else {
          let transporter = nodemailer.createTransport({
            host: env("MAIL_HOST"),
            port: env("MAIL_PORT"),
            auth: {
              user: env("MAIL_AUTH_USER"),
              pass: env("MAIL_AUTH_PASSWORD"),
            },
          });
          let mailOptions = this.mailOptions(payload, data);
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log("message sent " + info);
            }
          });
        }
      },
    );
  }

  private mailOptions(payload: { to?: string; from: string; subject: string }, data: string): object {
    return {
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: data,
    };
  }

  private templateToUse(template = "mail") {
    return template;
  }
}

export default Mailer;
