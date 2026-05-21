const {devices, firefox, chromium} = require('@playwright/test');
 
const config = ({
  testDir: './tests',
  workers:3,
  retries :1,    //tests means under tests what are all .js we want to run
  browserName:chromium,
 
  timeout:40000,  // this timeout for every action / step
  expect :{
    timeout:40000,//this is the timeout for the expect timeout means ex:title expect
    trace:'retain-on-failure',
  },
  reporter : 'html',
 
projects : [
                {
                name : 'safari',
                  use:  {
                    browserName : 'webkit',
                    headless : true,
                    screenshot:'only-on-failure',
                    trace:'on',
                  ...devices['iPhone 7 Plus'],
                        },
                }       ,
 
 
              {
                name: 'chrome',
                use: {
                  browserName : 'chromium',
                  headless : true,
                  screenshot:'only-on-failure',
                  video: 'retain-on-failure',
                  trace:'on',
                  //viewport:{width:720,height:720},
                  permissions:['geolocation'],
                  ignoreHttpsErrors : true,
                    },
              }
          ]
}
 
);
module.exports = config