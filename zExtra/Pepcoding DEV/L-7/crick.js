const log = console.log

//npm module -> cheerio
//npm module -> request

const request = require('request')
const cheerio = require('cheerio')

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

request( url , cb)

function cb(error, response, html) {
    if(error) log(error)

    else handHtml(html)
}

function handHtml(html)
{
    let $ = cheerio.load(html)
    let eleArr = $('.d-flex.match-comment-padder.align-items-center .match-comment-long-text')
    let lbc  = $(eleArr[0]).text()
    let lbd  = $(eleArr[1]).text()
    
    
    // log(lbc)
    // log(lbd)
    // // log(eleArr)
    // log(eleArr.length)


    log(`last ball commentary ->  
                                ${lbc}`)


}