# Intro

it's not a generic crawler. it's more of a **config** based crawler.
usually, it opens headless browser and then capture the require fields based on the config provided.

# Steps to run

`npm install` followed by `npm start`

# Requests

- `POST /`

  ** Request - 1 **

  `{ "url": "https://www.amazon.in/s?k=mobile&ref=nb_sb_noss", "host": "amazon" }`

  ** Request - 2 **

`{`
`"url": "https://www.flipkart.com/search?q=mobile&as=on&as-show=on&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=mobile&requestId=8b35979b-7101-45c0-ad17-4ef6964837b8&as-backfill=on",`
`"host": "flipkart"`
`}`
