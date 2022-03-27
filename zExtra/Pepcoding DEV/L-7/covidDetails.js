const log = console.log

//npm module -> cheerio
//npm module -> request

const request = require('request')
const cheerio = require('cheerio')

request("https://www.worldometers.info/coronavirus/" , cb)

function cb(error, response, html) {
    if(error) log(error)

    else handHtml(html)
}

function handHtml(html)
{
    let seltool = cheerio.load(html)

    let contentArr = seltool('#maincounter-wrap span')

    // log(contentArr)

    let totalCases = seltool(contentArr[0]).text()
    let totalDeaths = seltool(contentArr[1]).text()
    let totalRecovery = seltool(contentArr[2]).text()

    log('total Cases ->' , totalCases)
    log('total Deaths ->' , totalDeaths)
    log('total Recovery ->' , totalRecovery)


}