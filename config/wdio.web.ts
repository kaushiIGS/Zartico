import { config } from "./wdio.conf";

config.specs = [

   
  //  "../test/specs/Sanity/LoginUserFlow.ts",
  //  "../test/specs/Sanity/HomePageFlow.ts",
  //  "../test/specs/Sanity/ProfileFlow.ts",
   // "../test/specs/Sanity/HelpPageFlow.ts",
  // "../test/specs/Sanity/LogOutFlow.ts",
   //  "../test/specs/APIs/apiRequests.ts", 
   "../test/specs/Regression/AllFunctionality.ts",
   //"../test/specs/Regression/ErrorScenario.ts"
];

// config.suites ={
  // "../test/specs/Sanity",
// }


config.capabilities = [
   {
     browserName: "chrome",
     browserVersion: "latest"
   },
    //browserVersion: "123.0.6301.2",
    // 'goog:chromeOptions': {
    //       args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage']
    // }
 //  },
  //    {
  //     browserName: "edge",
  //     browserVersion: "latest",
  //  },
  // {
  //   browserName: "firefox",
  //   // browserVersion: "latest",
  // }
];

exports.config = config;
