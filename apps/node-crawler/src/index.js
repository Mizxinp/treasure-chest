const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHTML(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(`Error fetching the HTML from ${url}:`, error);
    throw error;
  }
}

async function main() {
  const url = 'https://www.tezign.com/page/2021/12/07/marketing-business-fanling/';
  const html = await fetchHTML(url);

  console.log(html); // 输出完整的HTML内容

  // 你也可以使用cheerio解析和操作HTML
  const $ = cheerio.load(html);
  const title = $('title').text();
  console.log(`Page title: ${title}`);
}

main();
