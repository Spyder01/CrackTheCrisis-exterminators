const express = require('express');
const request = require("request");
const cheerio = require("cheerio");


const app = express.Router();


app.get('/intern', (req, res) => {
    scrapper(res);
})


const scrapper = (res, filters='')=>{
    var jobs = [];

    const url = `https://internshala.com/internships/.net%20development,android,angular.js%20development,backend%20development,cloud%20computing,computer%20science,computer%20vision,front%20end%20development,machine%20learning,mathematics%20and%20computing,web%20development-internship/${filters}`

    request(url, (error, response, html)=>{
            if(!error && response.statusCode == 200) {
               // console.log(html)
                const $ = cheerio.load(html);
                var a = 0;
                $('.individual_internship').each((i, ele)=>{
                    const job = {
                        position: null,
                        company: null,
                        stipend: null,
                        place: null,
                        apply_by: null,
                        startDate: null,
                        link: null
                    }
                   job.position = $(ele).find('.company a').text ().split('\n')[0];
                   job.company = $(ele).find('.company .company_name').text ().trim ();
                   job.place = $(ele).find('.individual_internship_details #location_names').text ().trim();
                   job.startDate = $(ele).find('#start-date-first .start_immediately_mobile').text();
                   job.stipend = $(ele).find('.stipend').text();
                   job.apply_by = $(ele).find('.apply_by').text().trim().split('\n').pop().trim()
                   const link = `https://internshala.com${$(ele).find('.profile a').attr()['href']}`
                   job.link = link;
                   jobs.push (job);

                })
                
            }
            res.json(jobs);
            console.table(jobs)
    });

}

module.exports = app;

