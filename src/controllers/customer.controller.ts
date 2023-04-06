import { Controller, Get, Query, Put, Post, Delete, Body, Param } from '@nestjs/common';

@Controller('customer')
export class CustomerController {

  @Get()
  getCustomer(@Query('id') id:string){
    return `The customer Id is ${id}`
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
