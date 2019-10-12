import { Controller, Get, Req, Param, Query } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getData(@Req() request: Request) {
  //   console.log(request.query);
  //   return this.appService.getCatsData();
  // }
  @Get()
  getData(@Query('color') color: string, @Query('age') age: number) {
    console.log('color: ', color);
    console.log('age:', age);
    return this.appService.getCatsData();
  }
}
