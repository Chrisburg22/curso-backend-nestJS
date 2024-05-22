import { Injectable } from '@nestjs/common';
import { SendGridService } from '@anchan828/nest-sendgrid/dist/sendgrid.service';
import { EmailConstructorService } from './email-constructor/email-constructor.service';
import { selectTemplate, selectSubject } from 'src/utils/selectTemplate';

interface EmailConfig {
	to?: string; // An email direction
	from?: string; // An email direction
	subject?: string;
	receiverName: string; // Just the `FirstName + LastName` from the receiver
	senderName?: string;
	// text: string;
}

@Injectable()
export class SendgridService {
	constructor(
		private readonly sendgridService: SendGridService,
		private readonly emailConstructorService: EmailConstructorService
	) { }

	private signers = {
		// main: 'jonathan@neuroprogeny.com',
		main: 'chrisburg1222@gmail.com',
		cc: '',
	};

	async sendEmail(config: EmailConfig) {
		const { to, from, receiverName, senderName, subject, } = config;
		const template = selectTemplate(subject);
		const subjectToSend = selectSubject(subject); // This is not necessary to be customized
		try {
			const x = await this.sendgridService.send({
				to: 'christian.ramos@exhio.com.mx',
				from: 'chrisburg1222@gmail.com',
				text: 'Holi',
				subject: 'Some',
				// cc: this.signers.cc,
				// subject:,
				// html: template(name), // Old
				// html: this.emailConstructorService.constructEmail({
				// 	receiverName,
				// 	senderName,
				// 	subject,
				// }),
			});
			return x;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
