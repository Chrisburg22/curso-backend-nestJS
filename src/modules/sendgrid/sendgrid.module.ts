import { Module } from '@nestjs/common';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { ConfigModule } from '@nestjs/config';

import { SendgridService } from './sendgrid.service';
import { SendgridController } from './sendgrid.controller';

import { EmailConstructorService } from './email-constructor/email-constructor.service';
import sendgridConfig, { SendgridConfiguration } from 'src/config/sengrid';

@Module({
	imports: [
		SendGridModule.forRootAsync({
			imports: [ConfigModule.forRoot({ load: [sendgridConfig] })],
			inject: [sendgridConfig.KEY],
			useFactory: (config: SendgridConfiguration) => {
				const { apikey } = config;
				console.log(apikey);
				return {
					apikey,
				};
			},
		}),
	],
	providers: [SendgridService, EmailConstructorService],
	exports: [SendgridService],
	controllers: [SendgridController],
})
export class SendgridModule { }
