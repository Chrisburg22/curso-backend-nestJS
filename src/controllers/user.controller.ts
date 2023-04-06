import { Controller,Get, Query, Param, Post, Delete, Put, Body, } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  getOne(@Query('name') name:string, @Query('email') email:string, @Query('age') age:number){
    return `User name: ${name} <br>
    User email: ${email}<br>
    User age: ${age}
    `;
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
