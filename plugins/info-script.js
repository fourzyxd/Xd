const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/fourzyxd*
Tuh Link Script Yt XynaBotz 
(Wajib Subs Kalau Ga subs Gw Doain Error Mampus lu)`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'O W N E R','.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/mincezz._",
    mediaType: "VIDEO",
    description: "https://github.com/fourzyxd", 
    title: '𝐊𝐮𝐫𝐨𝐍𝐞𝐰',
    body: wm,
    thumbnail: thumb,
    sourceUrl: urlnya
  }
  } }) 
          }
handler.help = ['script']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

module.exports = handler