'use strict'

const dbConfig = {
    amazon: {
        waitGroup: "#search > div.s-desktop-width-max",
        category: "#searchDropdownBox",
        productListing: "#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div",
        productName: "div > span > div > div > div:nth-child(2) > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 > div > div > div:nth-child(1) > h2 > a > span",
        productLink: "div > span > div > div > div:nth-child(2) > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 > div > div > div:nth-child(1) > h2 > a"
    },
    flipkart: {
        waitGroup: "#container > div > div._36fx1h._6t1WkM._3HqJxg",
        category: "#container > div > div._331-kn > div > div",
        productListing: "#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div",
        productName: "div > div > div > a > div._3pLy-c.row > div.col.col-7-12 > div",
        productLink: "div > div > div > a"
    }
}

module.exports = {
    dbConfig
}