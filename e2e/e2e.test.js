import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Testing of blocks', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  test('should render the page and make click to button for modal appear', async () => {
    await page.goto(baseUrl); 
    
    await page.waitForSelector('body');

    await page.waitForSelector('.container');

    const buttons = await page.$('button');

    await buttons.click();
    
    expect(await page.waitForSelector('.tip')).toBeTruthy();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
