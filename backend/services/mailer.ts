import nodemailer, { SendMailOptions, SentMessageInfo } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export default class Mailer {
  private static transporter(): Mail {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    })
  }

  public static send(options: SendMailOptions): Promise<SentMessageInfo> {
    return this.transporter().sendMail(options)
  }
}
