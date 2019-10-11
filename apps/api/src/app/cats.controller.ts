import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getCatsData();
  }
}
