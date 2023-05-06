import { Injectable } from '@nestjs/common';
import { htmlToPdf } from 'html-to-files';
import path from 'path';
import ejs from 'ejs';
import fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    const pdfResult = path.join(__dirname, `../src/test-123.pdf`);
    // const pdfTempalte = path.join(__dirname, '../src/index.html');
    // console.log('pdfResult', pdfResult);
    // console.log('pdfTempalte', pdfTempalte);
    const html = this.generateHtml();
    console.log('getHello', html);
    htmlToPdf(html, pdfResult);
    return 'Hello World!';
  }
  generateHtml(): string {
    const dataStr = fs.readFileSync(
      path.join(__dirname, '../src/test.ejs'),
      'utf8',
    );
    // const dataStr = fs.readFileSync('./test.ejs', 'utf8');
    const html = ejs.render(dataStr, {
      user: { show: true, name: 'zhangsan' },
    });
    return html;
  }
}
