import {
	Body,
	Controller,
	HttpCode,
	HttpException,
	HttpStatus,
	Post,
} from '@nestjs/common';
import { SendgridService } from './sendgrid.service';

import { PatientAppointmentRequestDTO } from './dto/patient-appointment-request.dto';

@Controller('sendgrid')
export class SendgridController {
	constructor(private readonly sendgridService: SendgridService) { }

	@Post('/feedback')
	@HttpCode(HttpStatus.NO_CONTENT)
	async reponse(
		@Body() data: PatientAppointmentRequestDTO,
	): Promise<{ appointmentSentRequestRequest: any }> {
		try {
			const {
				FirstName,
				LastName,
				FirstNameSender,
				LastNameSender,
				EmailSender,
				EmailReceiver,
				Subject,
			} = data;

			const senderName = `${FirstNameSender} ${LastNameSender}`;
			const receiverName = `${FirstName} ${LastName}`;

			const appointmentSentRequestRequest = await this.sendgridService.sendEmail({
				receiverName,
				senderName,
				// from: EmailSender,
				// subject: `${Subject}Received`,
			});

			// const appointmentRequestConfirmationForSender =
			// 	await this.sendgridService.sendEmail({
			// 		receiverName: senderName,
			// 		senderName: receiverName,
			// 		to: EmailSender,
			// 		// from: EmailReceiver, // Could be included just to bring a bit more information
			// 		// subject: Subject,
			// 	});

			return {
				appointmentSentRequestRequest,
				// appointmentRequestConfirmationForSender,
			};
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
