const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6288298793719']
global.packname = 'Zann' 
global.author = 'ZannMods'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

//JIKA INGIN REUPLOAD HARAP UNTUK TAG @ZANNMODS//