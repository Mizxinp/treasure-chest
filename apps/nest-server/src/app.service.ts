import { Injectable } from '@nestjs/common';
import { htmlToPdf } from 'html-to-files';
import path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    const pdfResult = path.join(__dirname, `../src/test-123.pdf`);
    const pdfTempalte = path.join(__dirname, '../src/index.html');
    console.log('pdfResult', pdfResult);
    console.log('pdfTempalte', pdfTempalte);
    htmlToPdf(pdfTempalte, pdfResult);
    return 'Hello World!';
  }
}
