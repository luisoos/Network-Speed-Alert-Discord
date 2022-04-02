// To-Do: Enter value of Mbps under what the program should contact you on Discord (line 10).
//        Enter your token (=> see https://github.com/branchard/fast-speedtest-api#how-to-get-app-token-) (line 26).
//        Enter your Discord Webhook (line 51).


// Importing packages
const FastSpeedtest = require("fast-speedtest-api");
const { Webhook } = require('discord-webhook-node');

let x = 1500; // Under what Mbps should the program contact you?


// Set Interval
let date = new Date();

let sec = date.getSeconds();

setTimeout(()=>{
  
  setInterval(()=>{
    

    let speedtest = new FastSpeedtest({
        
      token: "YOUR_TOKEN", // Enter your token, see https://github.com/branchard/fast-speedtest-api#how-to-get-app-token-
        
      verbose: false, // default: false
        
      timeout: 10000, // default: 5000
        
      https: true, // default: true
        
      urlCount: 5, // default: 5
        
      bufferSize: 8, // default: 8
        
      unit: FastSpeedtest.UNITS.Mbps // default: Bps
    
    });
    
    speedtest.getSpeed().then(s => {
      
      console.log(`Speed: ${s} Mbps`);
      
      var speed = Math.floor(s);
      
      if (speed < x) { // Check if the speed is under X

        // Send message to Discord Webhook 
        
        const hook = new Webhook("YOUR_WEBHOOK_URL"); // Enter your Discord Webhook URL here
        
        hook.setUsername('Network Speed Alert'); // Set Name
        
        // hook.setAvatar(IMAGE_URL); // Set Avatar
        
        hook.send("Your Network speed is currently at: " + speed + " Mbps."); // Content of the discord webhook

        console.log("Successfully sent message to Discord Webhook.");
      
      };
    
    }).catch(e => {
        
      console.error(e.message);
    
    });
    

  }, 60 * 100);

}, (60 - sec) * 100);