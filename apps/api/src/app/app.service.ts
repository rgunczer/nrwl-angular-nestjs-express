import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return ({ message: 'Welcome to apiZ!' });
  }

  getCatsData(): { message: string, age: number} {
    return ({
      message: 'apple',
      age: 12
    });
  }
}
