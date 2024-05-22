import { Injectable } from '@nestjs/common';
import { afterBody, beforeBody } from '../templates/visibleMailParts';
import { selectTemplate } from 'src/utils/selectTemplate';

interface ConstructEmailPayload {
	receiverName: string;
	senderName: string;
	subject: string;
}

@Injectable()
export class EmailConstructorService {
	// private before: string;
	private after: string;

	constructor() {
		this.after = afterBody;
	}

	constructEmail(payload: ConstructEmailPayload) {
		const { receiverName, senderName, subject } = payload;
		const before = beforeBody(receiverName);

		console.log(`Sending email as: ${senderName}`);
		console.log(`Receiving email as: ${receiverName}`);

		const bodyConstructor = selectTemplate(subject);
		/**
		 * TODO: pass down to body constructor sender/receiverName and subject
		 * (if exists, for a patient it wouldn't exist)
		 */
		const body = bodyConstructor(senderName, receiverName);
		return `${before}${body}${this.after}`;
	}
}
