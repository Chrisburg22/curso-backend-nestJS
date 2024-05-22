
//
// TODO: Create a variant when Clinician is sending email, to include
// appointment title
//

import { IsString, IsEmail, IsOptional } from "class-validator";

export class PatientAppointmentRequestDTO {
	@IsString()
	FirstName: string;

	@IsString()
	LastName: string;

	@IsString()
	FirstNameSender: string;

	@IsString()
	LastNameSender: string;

	@IsEmail()
	EmailReceiver: string;

	@IsEmail()
	EmailSender: string;

	// @IsString()
	// PhoneNumber: string;

	@IsString()
	@IsOptional()
	Subject: string;
}
