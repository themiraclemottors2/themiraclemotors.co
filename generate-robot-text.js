const fs = require('fs');

const txtContent = `User-agent: *
Disallow: /404`

fs.writeFile('./public/robots.txt', txtContent, 'utf8', function (err) {
    if (err) {
        console.log('An error occured while writing to robots.txt');
        return console.log(err);
    }

    console.log('robots.txt file has been saved');
});

