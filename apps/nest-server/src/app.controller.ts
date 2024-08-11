import {
  Controller,
  Get,
  Res,
  Req,
  Query,
  HttpException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HttpStatus } from 'src/config/httpStatus';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('code') code: string, @Res() res, @Req() req): string {
    return res.send({
      code: HttpStatus.SUCCESS,
      message: 'success',
      result: 'hello world',
    });
  }
  htmlToPdf(@Query() code: string, @Res() res, @Req() req): string {
    this.appService.htmlToPdf();
    return res.send({
      code: HttpStatus.SUCCESS,
      message: 'success',
      result: null,
    });
  }
}
