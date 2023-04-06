import { Controller,Get, Param, Query, Post, Body, Put, Delete, HttpStatus, HttpCode } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  //CLASE 2 Param
  //Primero se definen las rutas especificas como la siguiente y despues las dinamicas
  //Con esto evitamos un choque de rutas.
  @Get('filter')
  getProductsFilter(){
    return {
      message: 'Yo soy un filter',
    };
  }
  //ruta dinamica
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`
    };
  }
 //CLASE 3 Querys
  //Esta es la manera de recivir Querys para recibir variables dinamicas.

  @Get()
  getProduct2(
    @Query('limit') limit = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit => ${limit} offset=>${offset} brand=>${brand}`
    };
  }

  @Post()
  create(@Body() payload:any){
    return{
      message: "Accion de crear",
      payload,
    }
  }

   @Put(':id')
  update(@Param('id') id:number, @Body() payload:any){
    return{
      id,
      payload
    }
  }

  @Delete(':id')
  delete(@Param('id') id:number){
    return id;
  }

}
