const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917478172267";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "917478172267,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "917478172267,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_45_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA4NyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgMjAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4LFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiblkycExBYml5a1Q2Tzd2OCtRRVFYMzZVUlpOOW1PUGpjNkJqdHR0L05Saz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnFYU3JKdFRTTldyR0ExTzFUaUtTQVwiLFxuICBcInBob25lSWRcIjogXCJiZDMxYzY2OS0yOTQ1LTQ3ZTQtYTZlMC05OGFiNThkYzYzZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyMTcsXG4gICAgICAxMixcbiAgICAgIDE0NCxcbiAgICAgIDY3LFxuICAgICAgMTU5LFxuICAgICAgODksXG4gICAgICAyMTYsXG4gICAgICAxNTYsXG4gICAgICAyMjUsXG4gICAgICAxOCxcbiAgICAgIDExOSxcbiAgICAgIDE2NCxcbiAgICAgIDgxLFxuICAgICAgMjMsXG4gICAgICAxNyxcbiAgICAgIDEzLFxuICAgICAgMTM3LFxuICAgICAgMTA4LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDIwMSxcbiAgICAgIDE2LFxuICAgICAgMTQxLFxuICAgICAgMzEsXG4gICAgICA0OCxcbiAgICAgIDEyMCxcbiAgICAgIDI1MCxcbiAgICAgIDExMCxcbiAgICAgIDIzNCxcbiAgICAgIDc4LFxuICAgICAgNzAsXG4gICAgICAzMSxcbiAgICAgIDE0OCxcbiAgICAgIDE3LFxuICAgICAgMTE5LFxuICAgICAgMTgsXG4gICAgICAyNDYsXG4gICAgICAyMzMsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdml3dmtERVBXenBMTUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJUeENHV1Vpb29mTzlHRHBSWTlzZkJVcWZWbElmU0pGOVB5Y21HQlloMUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT09XZ0RrTVZ3UGkxWlVhcnVscllxaEcrbFptd1pNYzFMVnZkWWJzWkkxRzZKbHdUcEc2OE1aNjhmdlBnblQycVIvdzMzKzVOSCtNcVFLbk9xSVdSQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUlOSUFPeFJkbi9tTEM3L051THllUXFBSHdRNlRwdTROQWtzbUZQSDBpR05YYmJPUWZzYjhJelpUZDlQbzJ4TEJEUnJxUDVKSzlJRHd5eUsyQ1k1aGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc0NzgxNzIyNjc6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNDQyNTQxMjcwMjI5Njo3MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzQ3ODE3MjI2Nzo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTYzOTQ3XG59Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 
