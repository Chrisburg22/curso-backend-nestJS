import { Controller, Post, Query} from "@nestjs/common";
import { SendgridService } from "./sendgrid.service";

@Controller('sendgrid')
export class SendgridController {
  constructor(private readonly sendgridServices: SendgridService) {}

  @Post()
  async sendEmail(@Query('email') email:string, @Query('name') name:string): Promise<void>{
    await this.sendgridServices.sendEmail(email, name);
  }
}
