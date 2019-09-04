const puppeteer = require('puppeteer')
const express = require('express')
const app = express()

async function browserGo() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto('https://www.naver.com')
    await page.screenshot({ path: './images/naver_screenShot.png' })
    await browser.close()
}
browserGo()

app.listen(3000, () => {
    console.log('server connect ok')
})
