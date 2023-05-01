import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { UserController } from './controllers/user.controller';
import { CustomerController } from './controllers/customer.controller';
import { OrderController } from './controllers/order.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, CategoriesController, ProductsController, UserController, CustomerController, OrderController, BrandController, ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
