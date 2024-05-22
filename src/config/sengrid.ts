import { registerAs, ConfigType } from '@nestjs/config';

const sendgridConfig = registerAs('sendgrid', () => {
	return {
		apikey: process.env.SENDGRID_API_KEY,
	};
});

export type SendgridConfiguration = ConfigType<typeof sendgridConfig>;

export default sendgridConfig;
