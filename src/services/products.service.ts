import { Injectable , NotFoundException} from '@nestjs/common';
import { Product } from '../entities/product.entity'


@Injectable()
export class ProductsService{
  private counterId = 1;
  private products : Product[] = [{
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

  findOne(id: number){
    const product = this.products.find((item)=>item.id === id);
    if(!product){
      throw new NotFoundException('Product #${id} not found');
    }
    return product; 
  }

  create(payload: any){
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload:any){
    const product = this.findOne(id);
    if(product){
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,//Haciendo un merge de estos dos objetos
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
		const index = this.products.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new NotFoundException('Product #${id} not found');
		}
		this.products.splice(index, 1);
		return true;
	}
}
