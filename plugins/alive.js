const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url:20241123_110122.jpg},caption: 🧚‍♂️⃟💚 ʜᴇʟʟᴏᴡ ᴍʀ ${pushnumber} . ɪᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ `ᴛʀʏᴘ .ᴍᴇɴᴜ ɢᴇᴛ ᴍʏ ᴍᴇɴᴜ`. ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ᴍʏ ʙᴏᴛ. ʜᴀᴠᴇ ɴɪᴄᴇ ᴅᴀʏ 🧡

 📅 ${tiny('Date Today')} : ${dayToday().date}
 ⌚ ${tiny('Time Now')} : ${dayToday().time}
\`\`\`
🎋 ᴜꜱᴇʀ : ${pushName}
🎋 ʙᴏᴛ : 🍁 𝗕𝗨𝗡𝗡𝗬 𝗠𝗗 𝗕𝗢𝗧 𝗩𝗜 🍁
🎋 ᴘʀᴇꜰɪx: ${prefix}
🎋 ᴠᴇʀꜱɪᴏɴ : ${require('../../package.json').version}
🎋 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.platform()}
🎋 ʜᴏꜱᴛ : ${os.hostname()}
🎋 ᴏᴡɴᴇʀ : ${Config.ownername}
🎋 ᴍᴏᴅᴇ : ${bot.worktype}
🎋 ᴘʟᴜɢɪɴꜱ : ${commands.length}
🎋 ᴜꜱᴇʀ : ${await totalUsers()}
🎋 ᴜᴘᴛɪᴍᴇ : ${formatRuntime(process.uptime())}
🎋 ᴍᴇᴍ : ${getMemoryInfo().usedMemory}/${getMemoryInfo().totalMemory}\`\`\`},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
