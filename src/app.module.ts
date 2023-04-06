import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendGridModule } from "@anchan828/nest-sendgrid";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { UserController } from './controllers/user.controller';
import { CustomerController } from './controllers/customer.controller';
import { OrderController } from './controllers/order.controller';
import { BrandController } from './controllers/brand.controller';
import { SendgridController } from './controllers/sendgrid.controller';
import { SendgridService } from './controllers/sendgrid.service';
import { ProductsService } from './services/products.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SendGridModule.forRoot({
      apikey:process.env.SENDGRID_API_KEY,
    })
  ],
  controllers: [AppController, CategoriesController, ProductsController, UserController, CustomerController, OrderController, BrandController, SendgridController],
  providers: [AppService, SendgridService, ProductsService],
})
export class AppModule {}
