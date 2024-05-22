import { BodyConstructor } from "src/utils/selectTemplate";

// TODO: interpolate the sender/receiver names and subject
export const requestReceived: BodyConstructor = (
	senderName: string,
	receiverName: string,
) => `
	You receive this email because you have a new 
	appointment request${senderName && ` from ${senderName}`
	}, please go to your sensorium 
	account and confirm it soon. 👌 <br />
	If you dont do so, in less than 1 hour it will be cancelled 
	atomatically, thank you for your understanding.
	😉
`;

export const requestMade: BodyConstructor = (
	senderName: string,
	receiverName: string,
) => `
	Your receive this email because your
	appointment request has been made successfuly
	, please go to your sensorium 
	account and confirm it soon. 👌 <br />
	Please wait for the confirm email and go to your sensorium
	account calendar , thank you for your understanding.
	😉
`;

export const acceptanceReceived: BodyConstructor = (
	senderName: string,
	receiverName: string,
) => `
	Congratulations, your request has been accepted by ${senderName}. 👌 <br />
	Please go to your sensorium account and check in your calendar the details. ✅
`;

export const acceptanceMade: BodyConstructor = (
	senderName: string,
	receiverName: string,
) => `
	Your acceptance has been sent to ${senderName}. 👌 <br />
	Please go and check it  in your calendar. 😉
	
`;
export const cancellationReceived: BodyConstructor = (
	senderName: string,
	receiverName: string,
) => `
Your request has been cancelled, please go to your sensorium account and reschedule if you need it. 👌 <br />
You can choose other day and timeslot. <br />
We will send the request to the ${senderName}.
😉
`;

export const cancellationMade: BodyConstructor = (
	senderName: string,
	receiverName: string,
) => `
	Your cancelation has been sent to ${senderName},<br />
	you can confirm in your calendar has been removed 
	atomatically, thank you for your understanding. <br />
`;

export const rejectionReceived: BodyConstructor = (
	senderName: string,
	receiverName: string,
) => `
Your receive this email because your previous appointment
has been rejected, please go to your sensorium 
account and reschedule your appointment. 👌 <br />
We will inform you when is confirmed, thank you for your understanding.
😉
`;

export const rejectionMade: BodyConstructor = (
	senderName: string,
	receiverName: string,
) => `
	You receive this email because you have rejected the appointment request. 👌 <br />
	Is possible you are going to receive other time slot request to schedule the appointment.
	😉
`;
