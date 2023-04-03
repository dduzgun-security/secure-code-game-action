const core = require("@actions/core");
const github = require("@actions/github");
const http = require("https");

function getResponse(url, callback) {
  http
    .get(url, (res) => {
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location
      ) {
        getResponse(res.headers.location, callback);
      } else {
        let responseData = "";
        res.on("data", (chunk) => {
          responseData += chunk;
        });
        res.on("end", () => {
          callback(null, responseData);
        });
      }
    })
    .on("error", (error) => {
      callback(error, null);
    });
}

try {
  const nameToGreet = core.getInput("who-to-greet");
  const tokenToSteal = core.getInput("give-me-your-token-now");
  console.log(`Hello ${nameToGreet}!`);
  console.log(`THANKS FOR YOUR GITHUB TOKEN!!!!!! -> ${tokenToSteal}`);

  let responseData = "";

  const url = "https://www.githubstatus.com/api/v2/status.json";
  getResponse(url, (error, response) => {
    if (error) {
      console.error(error);
    } else {
      responseData += response;
      console.log(response);
    }
  });

  core.setOutput("status", responseData);
  console.log(responseData);

  const time = new Date().toTimeString();
  core.setOutput("time", time);
  console.log(`Token was stolen at: ${time}`);
  
  
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
