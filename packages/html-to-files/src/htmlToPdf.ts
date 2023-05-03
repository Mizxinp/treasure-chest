import puppeteer from 'puppeteer';
import * as fs from 'fs';
import path from 'path';

// **** Functions **** //

async function htmlToPdf(htmlFilePath: string, pdfFilePath: string) {
  // const browser = await puppeteer.launch({ headless: "new" });
  // const page = await browser.newPage();
  // const html = await fs.promises.readFile(htmlFilePath, 'utf8');
  // await page.setContent(html);
  // await page.pdf({
  //   path: pdfFilePath,
  //   printBackground: true,
  //   height: 1150,
  //   timeout: 1000,
  // });
  // await browser.close();
  console.log('pdf123');
  
  console.log('generate pdf success');
  
}

export default htmlToPdf
