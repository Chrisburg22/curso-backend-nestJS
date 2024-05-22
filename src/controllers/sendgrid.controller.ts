import { Controller, Inject, Post, Query, forwardRef } from "@nestjs/common";
import { SendgridService } from "./sendgrid.service";

@Controller('sendgrid')
export class SendgridController {

  constructor(
    @Inject(forwardRef(() => SendgridService))
    private sendgridServices: SendgridService) { }

  @Post()
  async sendEmail(@Query('email') email: string, @Query('name') name: string): Promise<void> {
    await this.sendgridServices.sendEmail(email, name);
  }
}
