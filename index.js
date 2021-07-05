'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const puppeteer = require('puppeteer')
const { dbConfig: { amazon, flipkart } } = require('./configs/dbConfig')

const app = express()
const port = 3000

app.use(bodyParser.json())

// post request
app.post('/', async (req, res) => {
    try {
        let config
        // initializing the config
        switch (req.body.host) {
            case 'amazon':
                config = amazon
                break;
            case 'flipkart':
                config = flipkart
            default:
                break;
        }

        if (!config) {
            return res.status(200).json({
                error: 'unable to find config'
            })
        }

        const { body: { url } } = req
        const browser = await puppeteer.launch({
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-infobars',
                '--disable-features=site-per-process',
                '--window-position=0,0',
                '--disable-extensions',
                '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X   10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0    Safari/537.36"'
            ]
        });

        // opening a new tab
        const page = await browser.newPage()

        await page.goto(url, { waitUntil: 'load', timeout: 30000 })

        // waiting for the selector to get loaded
        await page.waitForSelector(config.waitGroup)

        const returnedResponse = await page.evaluate((config) => {
            let dataArray = [];
            // extracting the categories
            const categories = document.querySelector(config.category).innerText.split('\n')
            const elementArray = document.querySelectorAll(config.productListing)

            for (let i = 0, len = elementArray.length; i < len; i++) {
                const p = {}
                const value = elementArray[i]
                // capturing product name
                if (value.querySelector(config.productName)) {
                    p["name"] = value.querySelector(config.productName).innerHTML
                }

                // capturing product link
                if (value.querySelector(config.productLink)) {
                    p["link"] = value.querySelector(config.productLink).href
                }

                if (Object.keys(p).length != 0) { dataArray.push(p) }
            }

            return {
                categories: categories,
                productDetails: dataArray
            }
        }, config)

        // closing the browser
        await browser.close();

        return res.status(200).json({
            data: returnedResponse
        })
    } catch (error) {
        return res.status(500).json({
            error: new Error(error).message
        })
    }
})

app.listen(port, () => console.log(`app listening on port: ${port}`))