import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //CLASE 1
  //Creacion de endPoints para el controlador.
  @Get('nuevo')
  newEndPoint(): string {
    return 'Yo soy nuevo';
  }
  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }




}
