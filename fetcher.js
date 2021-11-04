const fs = require('fs')
const { url } = require('inspector')
const request = require('request');
//fs = file system


//obtain values from cmd line

//first value: urlv
//second value: file path


const argv = process.argv.slice(2);

request(argv[0], function(err, res, body) {
// file location from argv
  fs.writeFile(argv[1], body, err => {
    //write file to the content sync

    if(err){
      console.log("There is an error!")
    }
  })
  console.log(`Downloaded and saved ${res.headers['content-length']} bytes to ${argv[1]}`)

})

//Downloaded and saved 1256 bytes to ./index.html





//Worked with Mei Lin, Fei and Siddarth Patel