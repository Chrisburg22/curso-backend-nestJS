import { Injectable } from '@nestjs/common';
import { SendGridService } from "@anchan828/nest-sendgrid";


@Injectable()
export class SendgridService {
  constructor(private readonly sendGrid: SendGridService) { }

  async sendEmail(email: string, name: string): Promise<void> {
    try {
      await this.sendGrid.send({
        to: email,
        from: "christian.ramos0244@alumnos.udg.mx",
        subject: "User Created",
        text: `Hello ${name}, you user created with success!`,
        html: `<strong>Hello ${name}, you user created with success</strong>`,
      });
      console.log("Message send with success!")
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

}
