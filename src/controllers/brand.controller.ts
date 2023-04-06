import { Controller, Get, Param, Query,Post, Put, Delete, Body } from '@nestjs/common';

@Controller('brands')
export class BrandController {


  @Get()
  getBransQuery(@Query('name') name:string){
    return `This brand is ${name} was obtain with Query `;
  }
  @Get()
  getBrands(){
    return 'Here put all Brands'
  }

  @Get(':name')
  getBrand(@Param('name') name:string){
    return `This brand is ${name}`
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
