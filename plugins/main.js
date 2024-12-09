const { cmd, command } = require('../command');
const config = require('../config');
const os = require("os");
const { runtime, fetchJson } = require('../lib/functions');

// alive
cmd({
    pattern: "alive",
    desc: "Check if bot is online.",
    react: "🍁",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const alive = 'https://raw.githubusercontent.com/Niko-AND-Janiya/BUNNY-DATA/refs/heads/main/Voice/AUD-20241111-WA0117.aac'

        let img = await fetchJson('20241123_110122.jpg');
        let ALIVE_IMG = img.alive;
        let aliveMsg = `
🧚‍♀️⃟💛 _`𝐇𝐄𝐋𝐋𝐎𝐖 𝐒𝐀𝐑 𝐈𝐀𝐌 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖`_💛⃟🧚‍♀️

✘◍ My name is Bunny MD.
❏ Use the menu command to explore my features.

┏━━━━❮ 📅 TODAY'S INFO 📅❯━━━━
┃
┃ 📅 Date: ${new Date().toLocaleDateString()}
┃ ⌚ Time: ${new Date().toLocaleTimeString()}
┃
┗━━━━━━━━━━━━━━━━━━━
┏━━━━❮📝 STATUS DETAILS 📝❯━━━━
┃🗣️ User: ${m.pushname || 'User'}
┃🤖 Bot: Bunny MD User Bot
┃📜 Prefix: ${config.PREFIX}
┃📚 Version: ${require('../package.json').version}
┃📝 Platform: ${os.platform()}
┃📟 Host: ${os.hostname()}
┃⚙️ Mode: ${config.MODE}
┃💻 Uptime: ${runtime(process.uptime())}
┃✨ Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━━━━━━
> 🍁◍ ʙᴜɴɴʏ ᴍᴅ ᴜꜱᴇʀ ʙᴏᴛ ᴄʀᴇᴀᴛ ʙʏ ᴍʀ ɴɪᴋᴏ | ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ
> GitHub: github.com/NIKO-PAMIYA/BUNNY-MD
`;

        await conn.sendMessage(from, { audio: { url:alive }, mimetype: 'audio/aac', ptt: true }, { quoted: mek });

        await conn.sendMessage(from, {
            image: { url: ALIVE_IMG },
            caption: aliveMsg,
            contextInfo: {
                mentionedJid: ['94743595234@s.whatsapp.net'],
                externalAdReply: {
                    title: 'Bunny MD User Bot',
                    body: 'Created by Mr. Niko and Mr. Rashmika',
                    mediaType: 1,
                    sourceUrl: "https://whatsapp.com/channel/0029VarBXqP1Hsq0cLnUcm1o",
                    thumbnailUrl: 'https://raw.githubusercontent.com/Niko-AND-Janiya/BUNNY-DATA/refs/heads/main/media/IMG-20241112-WA0145.jpg',
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        });
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

// system
cmd({
    pattern: "system",
    desc: "Shows system information.",
    react: "⚙️",
    category: "info",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const systemInfo = `
System Information:
Platform: ${os.platform()}
Architecture: ${os.arch()}
Hostname: ${os.hostname()}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
Uptime: ${runtime(os.uptime())}
`;

        reply(systemInfo);
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

// runtime
cmd({
    pattern: "runtime",
    desc: "Shows bot's runtime.",
    react: "⏳",
    category: "info",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        reply(`Bot Uptime: ${uptime}`);
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});

// ping
cmd({
    pattern: "ping",
    desc: "Check bot response speed.",
    react: "🏓",
    category: "info",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const startTime = Date.now()
      const message = await conn.sendMessage(from, { text: '⌛ ᴘʟɴɢɪɴɢ. .....' })
      const endTime = Date.now()
      const ping = endTime - startTime
      await conn.sendMessage(from, { text: `🎯 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ : ${ping}ms` }, { quoted: message })
});

// owner
cmd({
    pattern: "owner",
    desc: "Shows bot owner's contact information.",
    react: "👤",
    category: "info",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        let tex = `
🎋 𝙃𝙀𝙇𝙇𝙊𝙒 𝙈𝙔 𝘿𝙀𝘼𝙍 ${pushname},

🐇⃟💚 𝓘𝓪𝓶 𝓑𝓾𝓷𝓷𝔂 𝓜𝓭 𝓤𝓼𝓮𝓻 𝓑𝓸𝓽 𝓒𝓻𝓮𝓪𝓽 𝓑𝔂 𝓜𝓻 𝓝𝓲𝓴𝓸 💚⃟🐇

> 🎋 ᴍʏ ᴏᴡɴᴇʀ ɪɴꜰᴏ 🧩

*⚡ηαмє -: ᴍʀ ɴɪᴋᴏ ᴘᴀᴍɪʏᴀ ᴀɴᴅ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ
*⚡αgє -: 18*
*⚡ηυмвєя* -: +94 74 359 5243|+94 71 777 5628
*⚡уσυтυвє* -: https://youtube.com/@tech_with_pamiya

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ -: ᴍʀ ɴɪᴋᴏ ᴘᴀᴍɪʏᴀ ᴀɴᴅ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ
WhatsApp.com

ʙᴜɴɴʏ ᴍᴅ ᴜꜱᴇʀ ʙᴏᴛ | WhatsApp Channel

ʙᴜɴɴʏ ᴍᴅ ᴜꜱᴇʀ ʙᴏᴛ WhatsApp Channel. . 2 followers`
// send a contact!
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:MR PAMIYA\n' // full name
            + 'ORG:NIKO PAMIYA;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=94743595243:+94 71777 5628\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await conn.sendMessage(
    from,
    { 
        contacts: { 
            displayName: 'NIKO PAMIYA', 
            contacts: [{ vcard }] 
        }
    }
);

await conn.sendMessage(from, { 
  image: {url: 'https://raw.githubusercontent.com/Niko-AND-Janiya/BUNNY-DATA/refs/heads/main/media/IMG-20241112-WA0145.jpg'},
  caption: tex ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363317542947574@g.us',
      newsletterName: "ʙᴜɴɴʏ ᴍᴅ ᴜꜱᴇʀ ʙᴏᴛ ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ʙᴜɴɴʏ ᴍᴅ ᴜꜱᴇʀ ʙᴏᴛ ',
body: ' ʙᴜɴɴʏ ᴍᴅ ᴜꜱᴇʀ ʙᴏᴛ ᴄʀᴇᴀᴛ ʙʏ ᴍʀ ɴɪᴋᴏ | ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VarBXqP1Hsq0cLnUcm1o" ,
thumbnailUrl: 'https://raw.githubusercontent.com/Niko-AND-Janiya/BUNNY-DATA/refs/heads/main/media/IMG-20241112-WA0145.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: mek});
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
