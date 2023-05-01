import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,//Res 
} from "@nestjs/common";

import { Response } from "express";
import { ProductsService } from "src/services/products.service";
@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService){}
  //CLASE 2 Param
  //Primero se definen las rutas especificas como la siguiente y despues las dinamicas
  //Con esto evitamos un choque de rutas.
  @Get()
  getProductsFilter() {
    // return {
    //   message: "Yo soy un filter",
    // };
    return this.productsService.findAll();
  }

  //ruta dinamica
  @Get(":productId")
  //Es un objeto que tiene los valores de estado de las respuestas en modod de constantes
  //En este caso ACCEPTED = 202
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param("productId") productId: string) {
    return this.productsService.findOne(+productId);
  }
  // Asi seria la manera de implementar la respuesta con cierto estado utilizando Express
    // getProduct(@Res() response: Response, @Param("productId") productId: string){
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    // return {
    //   message: `product ${productId}`,
  // };

  //CLASE 3 Querys
  //Esta es la manera de recivir Querys para recibir variables dinamicas.

  @Get("product2")
  getProduct2(
    @Query("limit") limit = 100,
    @Query("offset") offset: number = 0,
    @Query("brand") brand: string
  ) {
    return {
      message: `products: limit => ${limit} offset=>${offset} brand=>${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: "Accion de crear",
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() payload: any) {
    return this.productsService.update(+id,payload);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.productsService.delete(id);
  }
}
