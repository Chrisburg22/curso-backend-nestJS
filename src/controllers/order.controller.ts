import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get(':id')
  getOrder(@Param('id') id:number){
    return `This is the order number: ${id}`
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
