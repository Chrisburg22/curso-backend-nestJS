import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity'


@Injectable()
export class ProductsService : Product[] {
  private counterId = 1;
  private products = [{
    id: 1,
    name: 'Product 1',
    description: 'sha la sha la',
    price: 122,
    stock: 10,
    image: ''
  }];

  findAll(){
    return this.products;
  }

  FindOne(id: number){
    return this.products.find((item)=>item.id === id);
  }

  createImageBitmap(payload: any){
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
