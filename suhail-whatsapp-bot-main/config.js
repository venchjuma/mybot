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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_05_09_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDc0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICA2NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICA4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDMxLFxuICAgICAgICA3MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGb0pkK01Wd21RNG5NZ3hPMFJtODVLSVhwSHJVK0lhNk9lYS9DWXBnSzRrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjVjIyTURsVVJIMjFOM1BpSXQ2dHl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjY2MxYjEwLWNjNmEtNGI5MC1iMDg0LWRlNTQ1MmYyZGE5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDI0NyxcbiAgICAgIDI0MCxcbiAgICAgIDE1MyxcbiAgICAgIDEsXG4gICAgICA4NCxcbiAgICAgIDI0MCxcbiAgICAgIDE2MyxcbiAgICAgIDEyOSxcbiAgICAgIDI1MSxcbiAgICAgIDIxMSxcbiAgICAgIDIzLFxuICAgICAgMTU3LFxuICAgICAgMTkxLFxuICAgICAgMTIzLFxuICAgICAgNDgsXG4gICAgICAxOCxcbiAgICAgIDEyOCxcbiAgICAgIDUxLFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyOSxcbiAgICAgIDIzOCxcbiAgICAgIDQ2LFxuICAgICAgMjUzLFxuICAgICAgMjcsXG4gICAgICAyMSxcbiAgICAgIDE2MixcbiAgICAgIDE5OCxcbiAgICAgIDE3NCxcbiAgICAgIDY5LFxuICAgICAgMTIzLFxuICAgICAgNjQsXG4gICAgICAxNjQsXG4gICAgICA1NCxcbiAgICAgIDQ1LFxuICAgICAgMjQsXG4gICAgICAxNzQsXG4gICAgICAxMTQsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjRFS1FCOEtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc2Nzg4NjU2NDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjEzOTcwMjA5NTk2NjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luUnY1QUVFUExrckxjR0dDb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMHpGTUpFNFhXU3RuYnhZY0hvWktoTHlvNnNReUhRK21RQmQxZlcxTjNDOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVa3dJUER4TVgwZE9UclVxYU9LTnVLbmE0WUtGSGdHc2o5dkZwd2gxaFdqT1NVeEJKL2dMNWRjK1k2SzNsMkM5dEFnbnNXRUI5ckoyYjNOeXlST1pCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0bjJIa2x0Q2JhVHVsdm9sdm9OVG1Hay80czdoUjA2eXR5OEVFVFNBUmRWQzJXeERVMkhYWTg2Y3RsUFY0R2U5SzRXVEFCNFo0WHB3Uk03VGtzckNpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3Njc4ODY1NjQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2Njg5OTEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFNDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIU0MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6L2tPN2VXVHh0MFRiNXJZYjdpeGJkYjF2YUg0SzJ5bkpKUWxVNG40ZldvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMDgzMzg4MjUsXCJjdXJyZW50SW5kZXhcIjoyNSxcImRldmljZUluZGV4ZXNcIjpbMCwyMywxOSwyNV19LFwidGltZXN0YW1wXCI6XCIxNzE4MTU1MTM4MjI1XCJ9Igp9"  // PUT your SESSION_ID 


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
