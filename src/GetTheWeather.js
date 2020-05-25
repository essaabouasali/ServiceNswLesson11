const axios = require("axios");

const { weatherapikey } = require("../config/Keys");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    }); 
}


async function Program() {
    
    let city = "Sydney";
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherapikey}`)
    console.log(`the maximum temperature in ${response.data.name} is ${response.data.main.temp_max - 273.1}`);
    //console.log(response.data);
}

Program().then(() => {
    process.exit(0);
});

