const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+ssuhail:suhail@cluster0.cu90etc.mongodb.net/?retryWrites=true&w=majorityrv://"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Tanzania";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255767886564";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_03_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NixcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDc1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICA3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieEhkT1U1NlpiWEZOcU5EUW9ESFZVanV3QkZ4ZGlTcWx0QlpqWXRXMkkxMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZlhFVVlxY0VUYmk5MXJiajFWbTJjQVwiLFxuICBcInBob25lSWRcIjogXCIyNDI2MGIzYi1jZTFhLTQ3ZTMtOGVjNy02YmMyNzU3ZjIwNTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTYsXG4gICAgICAxMzIsXG4gICAgICAyMzEsXG4gICAgICAxOTUsXG4gICAgICAxODYsXG4gICAgICA2MyxcbiAgICAgIDExNyxcbiAgICAgIDIxNixcbiAgICAgIDEzNCxcbiAgICAgIDE5NCxcbiAgICAgIDEzMixcbiAgICAgIDE3LFxuICAgICAgMTQyLFxuICAgICAgMjA0LFxuICAgICAgMzcsXG4gICAgICAxMzEsXG4gICAgICAxNjMsXG4gICAgICA1NyxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDc2LFxuICAgICAgMTQwLFxuICAgICAgMTc3LFxuICAgICAgMjIxLFxuICAgICAgNTcsXG4gICAgICAyNDAsXG4gICAgICAxNDQsXG4gICAgICAyMjksXG4gICAgICA4MixcbiAgICAgIDIyMSxcbiAgICAgIDIyNixcbiAgICAgIDIxNixcbiAgICAgIDEyMyxcbiAgICAgIDE4OSxcbiAgICAgIDEwNyxcbiAgICAgIDIwMixcbiAgICAgIDE5MyxcbiAgICAgIDEyMyxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLS1dSUEtaQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzY3ODg2NTY0Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjEzOTcwMjA5NTk2Njo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJblJ2NUFFRU9yN3ByWUdHQ2NnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjB6Rk1KRTRYV1N0bmJ4WWNIb1pLaEx5bzZzUXlIUSttUUJkMWZXMU4zQzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL29XdlBFVENqRWNUUGlraC9UUHg4bUluNFVSQnVVdHNQR0VjM1ZrMmRBblh1T01vNnBNRFI1WDZlelkvSjdpZlJSZGRRYXZSM2MwVHdodlFoQUkwQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMkNlZWUzQzlVQUhyQzhHM3FId1hsL0psZlFhcGtvQ2d1NmFNRGFYQ1FNajV0TXBycUJKUkx2SDZHT3pLWGVKM1ZrRGhGSmZQRk5uUHlha0hyQ1lnQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzY3ODg2NTY0Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ0OTc0MTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUmJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhSYi5qc29uIjogIntcImtleURhdGFcIjpcInFtZW1vMUFRY3hBeFpZWGprQWU2QmpWdXVJbDJoTExLd1ViSVdDVnJ4SUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwODMzODgyNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzIsMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg1NTA1Mzg3NjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "b29d255730c25f7f539fd496ff6bf5cb";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
