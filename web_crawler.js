var cheerio = require('cheerio');
var fs = require('fs');
var gm = require('gm');
var request = require('request');

var options = {
    url: 'https://en.wikipedia.org/wiki/Japan'
};


request.get(options, function(err, response, pageData) {
    if (err) {
        console.log(err.message);
        return;
    }

    var $ = cheerio.load(pageData);
    var country = $('#firstHeading').text();
    var capital = $("th:contains('Capital')").next().children('a').text();
    var religion = $("#mw-content-text > table.infobox.geography.vcard > tr:nth-child(11) > td > a:nth-child(1)").text();

    console.log('The capital of ' + country + ' is ' + capital + '. Currently the largest city in ' + country + ' is ' +  religion + '.');

}); // End get request
