/* Bem, meu nome é Gabriel então o bot vai chamar o dono apenas pelo meu nome. então mude isso caso seu nome não seja Gabriel. ( eu não recomendo, visto que Gabriel é um nome muito charmoso)

Ti0 Momonga não se responsabiliza por cases ou coisas de outros bots( veja a linha final da index) e nem pelo... hentai

não tenho problemas com créditos, então fique a vontade

Esse bot é de graça!

Veja o vídeo de como instalar o bot no meu canal:
https://youtube.com/channel/UCEXnX1CqgbV5xVabZG71aUw
*/


const {
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	DisconectReason,
	MessageTypeProto,
  WAConnection,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	ProxyAgent,
	waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent, 
  WAMessage, 
  BaileysError, 
  WA_MESSAGE_STATUS_TYPE, 
  MediaConnInfo, 
  URL_REGEX, 
  WAUrlInfo, 
  WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
	relayWAMessage,
  GroupSettingChange
} = require('@adiwajshing/baileys')
const { 
 pSmoky,
 pOuro,
 pSemi,
 pFogo,
 pShadow,
 pRomantic,
 pSmoke,
 pBurnPapper,
 pNaruto,
 pLoveMsg,
 pMsgGrass,
 pDoubleHeart,
 pCoffeCup,
 pLoveText,
 pHarryPotter,
 pAwolfMetal,
 pCup,
 pButterfly } = require('./lib/photooxy')
 
 /////////////NODES///////////////
const fs = require('fs')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const encodeUrl = require('encodeurl')
const axios = require('axios')
const toMs = require('ms')
const crypto = require('crypto')
const ms = require('parse-ms')
const yts = require('yt-search')
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const imageToBase64 = require('image-to-base64')
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { countUserMessage }  = require("./lib/query");
/////////////////////////////////////////
 
const { validmove, setGame } = require('./src/tictactoe');
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js') // JOGO DA VELHA
const {getMsgId, getMsgMessage, messageContage, addMsgId} = require('./lib/contageMsg')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { recognize } = require('./lib/ocr')
const { help } = require('./dono/help')
const { tabela } = require('./dono/tabela')
const { dono } = require('./dono/dono')
const { lista } = require('./dono/lista')
const { dlist } = require('./src/dlist')
const { adms } = require('./dono/adms')
const { owner } = require('./dono/owner')
const textpro = require('./lib/textpro.js')
const sayoapi = require('./lib/sayo-api')
const { exec } = require('child_process')
const { jrb } = require('./database/ltk')
const { fbDown } = require("./lib/fb")
const { color, bgcolor } = require('./lib/color')
const { menulite } = require('./dono/menulite')
const { menulogos } = require('./dono/menulogos')
const { menuprem } = require('./dono/menuprem')
const { destrava } = require('./src/destrava')
const { menumusic } = require('./dono/menumusic')
const { all } = require('./dono/all')
const { destrava2 } = require('./src/destrava')
const { webp2gifFile } = require("./lib/gif.js")
const { cmdadd } = require('./lib/totalcmd.js')
const { msgFilter, isUrl } = require('./utils')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateV, y2mateA, wikiSearch, jagoKata } = require('./lib/y2mate')
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')
const { mediafireDl } = require('./lib/mediafire.js')
const { isFiltered, addFilter } = require('./lib/antispam')
const { addLimit, getLimit } = require('./lib/limit.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/banned.js")
const { removeBackgroundFromImageFile } = require('remove.bg')

////////////////////////////////////////////
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
let _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'));
const anticatalogo = JSON.parse(fs.readFileSync('./database/json/anticatalogo.json'));
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const sotoy = JSON.parse(fs.readFileSync('./lib/sotoy.json'))
const videonye = JSON.parse(fs.readFileSync('./lib/media/video.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const antidoc = JSON.parse(fs.readFileSync('./database/json/antidoc.json'))
const setting2 = JSON.parse(fs.readFileSync('./database/vips/miguel.json'))
const setting3 = JSON.parse(fs.readFileSync('./database/ban.json'))
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
let bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
const antiloc = JSON.parse(fs.readFileSync('./database/json/antiloc.json'))
const anticontato = JSON.parse(fs.readFileSync('./database/json/anticontato.json'))
const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))
const qdiario = JSON.parse(fs.readFileSync('./data/qdiario.json'))
const fundo = JSON.parse(fs.readFileSync('./dono/fundobemvindo.json'))
const suprer = JSON.parse(fs.readFileSync('./database/bot/suprer.json'))
const akaky = fs.readFileSync('./lib/imgkk.jpg');
const string = JSON.parse(fs.readFileSync('././database/ttt/string.json'))
const list = JSON.parse(fs.readFileSync('./dono/list.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
const totalcmd = JSON.parse(fs.readFileSync('./data/totalcmd.json'))[0].totalcmd
const infos = JSON.parse(fs.readFileSync('./dono/settings.json'))
/////////////////////////////////////////

//NÃO APAGUE NADA DAQUI.
prefix = setting.prefix
stringt = string.stringt
strin = string.strin
memberlimit = setting.memberlimit
crtt = setting.crtt 
cdd = setting.cdd
limitawal = setting.limitawal
NamaBot = setting.NamaBot
NamaOwner = setting.NamaOwner
miguelNumber = setting2.miguelNumber
banNumber = setting3.banNumber
ownerNumber = setting.ownerNumber
NumberOwner = setting.NumberOwner
cr = setting.cr
suprem = suprer.suprem
ytb = setting.ytb
instagram = setting.instagram
ZeksKey = setting.ZeksKey
lolhuman = setting.lolhuman
banChats = setting.banChats
fundo1 = fundo.fundo1
fundo2 = fundo.fundo2
A = list.A 
B = list.B 
C = list.C
D = list.D
E = list.E
F = list.F
G = list.G
H = list.H
I = list.I
J = list.J
K = list.K
L = list.L
M = list.M 
N = list.N
O = list.O
P = list.P
Q = list.Q
R = list.R 
S = list.S
T = list.T
U = list.U
V = list.V
W = list.W
X = list.X
Y = list.Y
OFF = setting.OFF

//Vcard
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${setting.NamaBot}\n` 
+ 'ORG:ALE;\n'
+ `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.NumberOwner}\n` 
+ 'END:VCARD'
            
battre = 'Não Detectado'
offline = false
blocked = []   
hitt = []

/*********** LOAD FILE ***********/
setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antiporn = JSON.parse(fs.readFileSync('./database/json/antiporn.json'))
const especial = JSON.parse(fs.readFileSync('./database/json/especial.json'))
const offin = JSON.parse(fs.readFileSync('./database/json/offin.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const antitravatxt = JSON.parse(fs.readFileSync('./database/antitravatxt.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
const supre = JSON.parse(fs.readFileSync('./database/bot/supre.json'));
const strings = JSON.parse(fs.readFileSync('./database/ttt/strings.json'));
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const daily = JSON.parse(fs.readFileSync('./database/diario.json'))
const countMessage = JSON.parse(fs.readFileSync('./src/json/countmsg.json'))
let videonyer = JSON.parse(fs.readFileSync('./lib/media/video.json'))
/************************************/

//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen
/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}

const getLevelingLevel = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}        
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": ` `, 
"caption": ` `, 
'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')
		}
	}
}

const getLevelingId = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].jid
}
}

const addLevelingXp = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}
}

const addLevelingLevel = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}
}

const addLevelingId = (userId) => {
const obj = {jid: userId, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}
        
const bayarLimit = (sender, amount) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id === sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit -= amount
fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
}
}
        
const limitAdd = (sender) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
}
}
     
const addATM = (sender) => {
const obj = {id: sender, uang : 0}
uang.push(obj)
fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}
        
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}
}
const checkATMuser = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}
}

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
const client = new WAConnection()
client.logger.level = 'warn'
console.log(banner.string)
client.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Quase la...')
	})
client.on('open', () => {
success('2', 'Conectado [100%]')
	})
await client.connect({timeoutMs: 30*1000})
fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

client.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})

client.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
battre = batterylevel
})




client.on('group-participants-update', async (tdy) => {
if(antifake.includes(tdy.jid)) {
const mdata = await client.groupMetadata(tdy.jid)  
if (tdy.action == 'add'){
num = tdy.participants[0]
if(!num.split('@')[0].startsWith(55)) {
client.sendMessage(mdata.id, ' ⛹️⛹️numeros estrangeiros não sao Permitidos neste grupo, consulte um Administrador👋🏌️', MessageType.text)
setTimeout(async function () {
client.groupRemove(mdata.id, [num])
}, 1000)
}
}
}
try {
const grupo = await client.groupMetadata(tdy.jid)
if (tdy.action == 'add') {
const grupo = await client.groupMetadata(tdy.jid)
if (!welkom.includes(tdy.jid)) return
num = tdy.participants[0]
try {
capa = await client.getProfilePicture(num)
} catch {
capa = 'https://i.imgur.com/DUzsRhs.jpg'
}
exe1 = await getBuffer(capa)
exe2 = await imageToBase64(JSON.stringify(capa).replace(/\"/gi, ''))
fs.writeFileSync('exeFT.jpeg', exe2, 'base64')
var imgbb = require('imgbb-uploader')
data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'exeFT.jpeg')
buffu = await getBuffer(`https://api-exteam.herokuapp.com/api/welcome?titulo=NOVO MEMBRO&nome=${num.split('@')[0]}&perfil=${data.display_url}&fundo=${fundo1}&grupo=Você está no Grupo: ${encodeURIComponent(grupo.subject)}`)

client.sendMessage(grupo.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `0@s.whatsapp.net`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": exe1, "mimetype": "application/octet-stream", "title": `*BEM VINDO(A)*`, "fileLength": "36", "pageCount": 0, "fileName": `_*BEM VINDO(A)*_` }}, "messageTimestamp": "1614069378", "status": "PENDENTE"}})
} else if (tdy.action == 'remove') {
if (!welkom.includes(tdy.jid)) return
const grupo = await client.groupMetadata(tdy.jid)
num = tdy.participants[0]
try {
capa = await client.getProfilePicture(num)
} catch {
capa = 'https://i.imgur.com/DUzsRhs.jpg'
}
let exe1 = await getBuffer(capa)
exe2 = await imageToBase64(JSON.stringify(capa).replace(/\"/gi, ''))
fs.writeFileSync('exeFT.jpeg', exe2, 'base64')
var imgbb = require('imgbb-uploader')
data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'exeFT.jpeg')
buffu = await getBuffer(`https://api-exteam.herokuapp.com/api/goodbye?titulo=ADEUS :(&nome=${num.split('@')[0]}&perfil=${data.display_url}&fundo=${fundo2}&grupo=Saiu de: ${encodeURIComponent(grupo.subject)}`)
client.sendMessage(grupo.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}})
}
} catch (e) {
console.log('Erro : %s', color(e, 'red'))
}})








//call auto block
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
client.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('bloqueando o '+ callerId)
client.sendMessage(callerId, '「 ❗ 」Sistema de bloqueio automático, não gosto que me ligue!!', MessageType.text)
await sleep(4000)
await client.blockUser(callerId, 'add')
})

client.on('chat-update', async(mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
const content = JSON.stringify(mek.message)
const speed = require('performance-now');
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const apiKey = 'Your-Api-Key'
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const jam = moment.tz('America/Sao_Paulo').format('HH:mm')
const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			            
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const argss = body.split(/ +/g)
const isCmd = body.startsWith(prefix)
const isGroup = from.endsWith('@g.us')
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(' ')
const botNumber = client.user.jid
const sender = isGroup ? mek.participant : mek.key.remoteJid
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			
mess = {
wait: '❬❗❭ Espere',
success: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: '𝗠𝗮𝗮𝗳 𝗹𝗶𝗻𝗸 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱☹️'
},
only: {
group: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NamaOwner}*`,
benned: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
ownerG: '[❗] Este é um recurso especial para o proprietário ❌',
ownerB: '[❗] Este é um recurso especial para o proprietário ❌',
userB: `──「 LISTA 」──\nOlá Kak !\nDesculpe, irmã. Você não está registrado como amigo de ${setting.NamaOwner} Registre-se para fazer amizade com o ${setting.NamaOwner} por meio, \n\nCommand : ${prefix}daftar nama|idade\nExemplo : ${prefix}daftar bot|17\n\n──「 ${setting.NamaOwner} 」──`,
admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

/************************************/

const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]

const miguelNumber = [`${setting2.miguelNumber}@s.whatsapp.net`]
			
const banNumber = [`${setting3.banNumber}@s.whatsapp.net`]

const mod = [`${setting.ownerNumber}@s.whatsapp.net`]
			
const adminbotnumber = [`${setting.ownerNumber}@s.whatsapp.net`]
		
const frendsowner = [`${strings.strin}@s.whatsapp.net`]	
		
		   //CONSTS IS//
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	
const isGroupAdmins = groupAdmins.includes(sender) || false
	
const isBanchat = isGroup ? bancht.includes(from) : false	
	
const hour_now = moment().format('HH:mm:ss')
	
const isAntifake = isGroup ? antifake.includes(from) : false
	 
const isBanned = ban.includes(sender)
		
const isLevelingOn = isGroup ? _leveling.includes(from) : false
	
const isWelkom = isGroup ? welkom.includes(from) : false
		
const isNsfw =  isGroup ? nsfw.includes(sender) : true

const Antidoc = isGroup ? antidoc.includes(from) : false
  
const Anticontato = isGroup ? anticontato.includes(from) : false	
   
const isAntiCatalogo = isGroup ? anticatalogo.includes(from) : false   
   
const Antiloc = isGroup ? antiloc.includes(from) : false	
  
const isAntiLink = isGroup ? antilink.includes(from) : false
	 
const isAntiPorn = isGroup ? antiporn.includes(from) : true

const isEspecial = isGroup ? especial.includes(from) : true

const isOffin = isGroup ? offin.includes(from) : false

const isAntiRacismo = isGroup ? antiracismo.includes(from) : false	 
	 
const isSimi = isGroup ? samih.includes(from) : false

const isUser = checkRegisteredUser(sender)

const isOwner = ownerNumber.includes(sender)

const isMiguel = miguelNumber.includes(sender)

const isBan = banNumber.includes(sender)
		
const isPremium = premium.includes(sender)

const isAntiTravatxt = isGroup ? antitravatxt.includes(from) : false
			
const issupre = supre.includes(sender)
		
const isstringss = strings.includes(sender)		
const ismod = mod.includes(sender)
			
const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
		
const isAdminbot = adminbotnumber.includes(sender)
		
const isfrendsowner = frendsowner.includes(sender)

//AFK
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('0m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Boa noite'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Boa noite'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Bom dia'
                                         }

const cekafk = (_dir) => {
    setInterval(() => {
let position = null
Object.keys(_dir).forEach((i) => {
if (Date.now() >= _dir[i].expired) {
position = i
}
})
if (position !== null) {
_dir.splice(position, 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
}
}, 1000)
}

const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${setting.NamaBot}`,"title": "hmm" }}}

const fakegroup = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "558198923680-1621790113@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": `${ucapanWaktu} ${pushname}`, 
"caption": `${ucapanWaktu} ${pushname}`, 
'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')
}
}
}
})
}

const fakestatus = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
 },
 message: {
 "locationMessage": {
 //"mimetype": "image/jpeg",
 "name": `${ucapanWaktu} ${pushname}`,
"jpegThumbnail": fs.readFileSync('./lib/logo.jpg')
}
}
}
})
} 

const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./lib/logo.jpg`)
},
"title": `${ucapanWaktu} ${pushname}`,
"description": "ngab",
"currencyCode": "IDR",
"priceAmount1000": "50.000",
"retailerId": "Self Bot",
"productImageCount": 0
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
	
const isImage = type === 'imageMessage'

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./src/json/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./src/json/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
}
else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./src/json/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}			
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
	}
const reply = (ytb) => {
client.sendMessage(from, ytb, text, {quoted:mek, thumbnail:akaky})
}
const sendImage = (ytb) => {
client.sendMessage(from, ytb, image, {quoted:mek, thumbnail:akaky})
}
const sendMess = (hehe, ytb) => {
client.sendMessage(hehe, ytb, text)
}
const mentions = (ytb, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, ytb.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, ytb.trim(), extendedText, {quoted: mek, thumbnail:akaky, contextInfo: {"mentionedJid": memberr}})
	}
const costum = (pesan, tipe, target, target2) => {
client.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}
  
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
client.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}  

//BALANCEAMENTO DA MOEDA/DINHERO DO BOT
if (isUser) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 0.5
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
  
const getpc = async function(totalchat){
pc = []
a = []
b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}
const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await client.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  
            
const sendPtt = (teks) => {
client.sendMessage(from, audio, mp3, {quoted:mek, thumbnail:akaky})
}
		    
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
client.sendMessage(to, media, type, { quoted: mek, thumbnail:akaky, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
client.sendMessage(from, hasil, type, options).catch(e => {
client.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Erro ao baixar e enviar mídia_')
console.log(e)
})
})
})
})
}

const sendGif = (from, gif) => {
client.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
}

//FUNCTION AFK
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
if (!mek.key.fromMe){
if (isAfk(mek.key.remoteJid)) return
addafk(mek.key.remoteJid)
heheh = ms(Date.now() - waktuafk) 
client.sendMessage(mek.key.remoteJid,`*Com licença @${ownerNumber} Atualmente offline!*\n\n*Razão :* ${alasanafk}\n*Desde as :* ${heheh.hours} Jam, ${heheh.minutes} Minuto, ${heheh.seconds} Segundos atrás\n\nPor favor ligue novamente mais tarde`, MessageType.text,{quoted:mek, thumbnail:akaky, contextInfo:{ mentionedJid: [`${setting.ownerNumber}@s.whatsapp.net`]}})
 }
 }   
 if (mek.key.remoteJid.endsWith('@g.us') && offline) {
 if (!mek.key.fromMe){
 if (mek.message.extendedTextMessage != undefined){
 if (mek.message.extendedTextMessage.contextInfo != undefined){
 if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
 for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
 if (ment === `${setting.ownerNumber}@s.whatsapp.net`){
 if (isAfk(mek.key.remoteJid)) return
 addafk(mek.key.remoteJid)
 heheh = ms(Date.now() - waktuafk)
 client.sendMessage(mek.key.remoteJid,`*Com licença @${ownerNumber} Atualmente offline!*\n\n*Razão :* ${alasanafk}\n*Desde as :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos atrás\n\nPor favor ligue novamente mais tarde`, MessageType.text,{quoted:mek, thumbnail:akaky,contextInfo:{ mentionedJid: [`${setting.ownerNumber}@s.whatsapp.net`]}})
 }
 }
 }
 }
 }
 }
 }

function ttaudio(url) {

return new Promise(async (resolve, reject) => {

getDataFirst = await axios.get('https://www.tiktok.com')

newCookie = getDataFirst.headers['set-cookie'].join('')

axios.get(url, {

headers: {

'user-agent': userAgent(),

'Cookie': newCookie

}

})

.then(({ data }) => {

$ = cheerio.load(data)

ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)

meta = ttdata.props.pageProps.itemInfo.itemStruct

resolve({

status: true,

message: success,

result: {

description: meta.desc,

duration: meta.video.duration,

resolution: meta.video.width + 'x' + meta.video.height,

jpeg_thumb: meta.video.originCover,

gif_thumb: meta.video.dynamicCover,

audio: meta.music.playUrl,

}

})

})

.catch((response) => {

reject({ status: false, message: response })

})

})

}

//BAN CHATS/GRUPOS
if (isBanchat){

if (!isOwner) return

if (budy.toLowerCase().startsWith('unbangp')){

if (!isBanchat) return reply(`Este grupo esta banido, ou seja não estou ouvindo niguem`)

let lfd = bancht.indexOf(from)

bancht.splice(lfd, 1)

fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))

reply(`Grupo desbanido...`)

}

}

////////_FUNCIONALIDADE PATENTE
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
 //function leveling
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10000) + 50000
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`            ◪ *LEVEL UP* ◪\n\n├─ ❏ *NÚMERO*: ${sender.split("@")[0]}.                                                                                       ├─ ❏ *PATENTE*: ${patt}\n├─ ❏ *XP*: ${getLevelingXp(sender)}\n└─ ❏ *LEVEL*: ${getLevel} -> ${getLevelingLevel(sender)}`)
}
} catch (err) {
console.error(err)
}
}

//conversar com o bot


if (!isBan) if (messagesC.includes("bemvindo")){
client.updatePresence(from, Presence.composing)
if (isBan) return reply(` vc está banido `)
if (!isBan) tujuh = fs.readFileSync('./assets/bv.mp3');
if (!isBan) client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("porra é essa") || (budy.includes("Porra é essa"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/mas que porra.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("bom dia") || (budy.includes("Bom dia"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
ujuh = fs.readFileSync('./stickers/bom dia.webp');
client.sendMessage(from, ujuh, sticker, {quoted:mek, thumbnail:akaky})
tujuh = fs.readFileSync('./assets/voz/bom dia.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("boa tarde") || (budy.includes("Boa tarde"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
ujuh = fs.readFileSync('./stickers/boa tarde.webp');
client.sendMessage(from, ujuh, sticker, {quoted:mek, thumbnail:akaky})
tujuh = fs.readFileSync('./assets/voz/boa tarde.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("boa noite") || (budy.includes("Boa noite"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
ujuh = fs.readFileSync('./stickers/boa noite.webp');
client.sendMessage(from, ujuh, sticker, {quoted:mek, thumbnail:akaky})
tujuh = fs.readFileSync('./assets/voz/boa noite.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("tenso") || (budy.includes("Tenso"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/tenso.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("interessante") || (budy.includes("Interessante"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/interessante.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (!isBan) if (messagesC.includes("rsrs")){
client.updatePresence(from, Presence.composing)
if (isBan) return reply(` vc está banido `)
if (!isBan) tujuh = fs.readFileSync('./assets/Risada.mp3');
if (!isBan) client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (!isOwner) if (budy.includes("gabriel-sama") || (budy.includes("Gabriel-sama"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/barra dono.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (!isOwner) if (budy.includes("gabriel sama") || (budy.includes("Gabriel sama"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/barra dono.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes("geme vadia") || (budy.includes("Geme vadia"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/geme vadia.m4a')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("geme Albedo") || (budy.includes("geme albedo"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/geme vadia.m4a')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("Geme Albedo") || (budy.includes("Geme albedo"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/geme vadia.m4a')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (!isOwner) if (budy.includes("gabriel sama") || (budy.includes("Gabriel sama"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/barra dono.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (!isCmd) if (isOwner) if (messagesC.includes("bot")){
client.updatePresence(from, Presence.composing)
setTimeout(function(){
tujuh = fs.readFileSync('./stickers/mestre1.webp');
client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},1000);
setTimeout(function(){
reply(`Mestre`)
},2000);
setTimeout(function(){
tujuh = fs.readFileSync('./stickers/mestre2.webp');
client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},3000);
}
if (!isCmd) if (!isOwner) if (!isPremium) if (messagesC.includes("bot")){
client.updatePresence(from, Presence.composing)
setTimeout(function(){
tujuh = fs.readFileSync('./stickers/qfoi.webp');
client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},1000);
setTimeout(function(){
reply(`fala humano miserável`)
},2000);
}


if (!isCmd) if (!isOwner) if (isPremium) if (messagesC.includes("bot")){
client.updatePresence(from, Presence.composing)
setTimeout(function(){
tujuh = fs.readFileSync('./stickers/happy.webp');
client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},2000);
setTimeout(function(){
reply(`Olá`)
},1000);
}


if (messagesC.includes("cadebot")){
client.updatePresence(from, Presence.composing)
if (isBan) return reply(` vc está banido `)
reply("olha eu aqui carai")
}
if (isOwner) if (messagesC.includes("mamaeu")){
client.updatePresence(from, Presence.composing)
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./lib/albedotimida.webp');
client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
tujuh = fs.readFileSync('./assets/voz/rsrsrs.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (!isOwner) if (messagesC.includes("mamaeu")){
client.updatePresence(from, Presence.composing)
if (isBan) return reply(` vc está banido `)
reply("não")
}

if (isOwner) if (budy.includes("albedo me") || (budy.includes("Albedo me"))){
if (isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./assets/voz/rsrsrs.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (!isOwner) if (budy.includes("albedo me") || (budy.includes("Albedo me"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./assets/voz/nao diriga palavras a mim.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (!isOwner) if (budy.includes("albedo pega") || (budy.includes("Albedo pega"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./assets/voz/nao diriga palavras a mim.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (messagesC.includes("foda")){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./assets/foda.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

//


if (!isOwner) if (!isGroupAdmins) if (budy.includes("4991579631") || (budy.includes("5549991579631"))){
if (!isOwner) if (!isGroupAdmins) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./assets/naodigno.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (!isOwner) if (budy.includes("dono bot") || (budy.includes("Dono bot"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
reply("O dono deste bot é Gabriel: wa.me//554991579631")
}
if (!isOwner) if (budy.includes("gabriel-sama") || (budy.includes("Gabriel-sama"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
reply("O dono deste bot é Gabriel: wa.me//554991579631")
}
if (budy.includes("dono do bot") || (budy.includes("Dono do bot"))){
wtujuh = fs.readFileSync('./assets/barra dono.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (!isOwner) if (budy.includes("dono desse bot") || (budy.includes("Dono desse bot"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
reply("O dono deste bot é Gabriel: wa.me//554991579631")
}
if (!isOwner) if (budy.includes("dono deste bot") || (budy.includes("Dono deste bot"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
reply("O dono deste bot é Gabriel: wa.me//554991579631")
}
if (!isOwner) if (budy.includes("quem é Gabriel") || (budy.includes("Quem é Gabriel"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
reply("O dono deste bot é Gabriel: wa.me//554991579631")
}
if (!isOwner) if (budy.includes("quem é esse Gabriel") || (budy.includes("Quem é esse Gabriel"))){
if (!isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
client.updatePresence(from, Presence.composing)
reply("O dono deste bot é Gabriel: wa.me//554991579631")
}

//XINGAMENTOS
if (!isOwner) if (budy.includes("fuder Albedo") || (budy.includes("fuder albedo") || (budy.includes("fude albedo") || (budy.includes("fude Albedo") || (budy.includes("estuprar albedo") || (budy.includes("estuprar Albedo") ||(budy.includes("fdp Albedo")))))))){
random = Math.floor(Math.random() * 4) + 1
ram = random
if (ram == 1 ) {random = 'sua ameba irritante'} else if (ram == 2 ) {random = 'seu inseto insolente!'} else if (ram == 3 ) {random = 'humano patético'} else if (ram == 4 ) {random = 'sua opinião é irrelevante'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/tmnc.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
if (!isOwner) if (!isGroupAdmins) client.groupRemove(from, [sender])
},2000);

setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/tmnc2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},4000);

}
///se for o dono
if (isOwner) if (budy.includes("fuder Albedo") || (budy.includes("fuder albedo") || (budy.includes("fude albedo") || (budy.includes("fude Albedo") || (budy.includes("estuprar albedo") || (budy.includes("estuprar Albedo") ||(budy.includes("fdp Albedo")))))))){


setTimeout(function(){
tujh = fs.readFileSync('./stickers/a1.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);



setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/a2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},2500);

}
/// fim
if (!isOwner) if (budy.includes("Albedo puta")){
random = Math.floor(Math.random() * 4) + 1
if (ram == 1 ) {random = 'sua ameba irritante'} else if (ram == 2 ) {random = 'seu inseto insolente!'} else if (ram == 3 ) {random = 'humano patético'} else if (ram == 4 ) {random = 'sua opinião é irrelevante'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/tmnc.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
if (!isOwner) if (!isGroupAdmins) client.groupRemove(from, [sender])
},2000);

setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/tmnc2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},4000);

}
if (!isOwner) if (budy.includes("albedo puta") || (budy.includes("Albedo sua puta") || (budy.includes("albedo sua puta") || (budy.includes("albedo sua vadia") || (budy.includes("Albedo sua vadia") || (budy.includes("puta albedo") ||(budy.includes("puta Albedo")))))))){
random = Math.floor(Math.random() * 4) + 1
if (ram == 1 ) {random = 'sua ameba irritante'} else if (ram == 2 ) {random = 'seu inseto insolente!'} else if (ram == 3 ) {random = 'humano patético'} else if (ram == 4 ) {random = 'sua opinião é irrelevante'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/tmnc.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
if (!isOwner) if (!isGroupAdmins) client.groupRemove(from, [sender])
},2000);

setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/tmnc2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},4000);

}
///se for o dono
if (isOwner) if (budy.includes("fdp albedo") || (budy.includes("Albedo sua puta") || (budy.includes("albedo sua puta") || (budy.includes("albedo sua vadia") || (budy.includes("Albedo sua vadia") || (budy.includes("puta albedo") ||(budy.includes("puta Albedo")))))))){

setTimeout(function(){
tujh = fs.readFileSync('./stickers/a1.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);


setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/a2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},2500);

}
///
if (!isOwner) if (budy.includes("vadia Albedo") || (budy.includes("vadia albedo") || (budy.includes("Albedo sua feia") || (budy.includes("albedo sua feia") || (budy.includes("bot lixo") || (budy.includes("lixo de bot") ||(budy.includes("pau albedo")))))))){
random = Math.floor(Math.random() * 4) + 1
if (ram == 1 ) {random = 'sua ameba irritante'} else if (ram == 2 ) {random = 'seu inseto insolente!'} else if (ram == 3 ) {random = 'humano patético'} else if (ram == 4 ) {random = 'sua opinião é irrelevante'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/tmnc.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
if (!isOwner) if (!isGroupAdmins) client.groupRemove(from, [sender])
},2000);

setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/tmnc2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},4000);

}

///se for o dono
if (isOwner) if (budy.includes("vadia Albedo") || (budy.includes("vadia albedo") || (budy.includes("Albedo sua feia") || (budy.includes("albedo sua feia") || (budy.includes("bot lixo") || (budy.includes("lixo de bot") ||(budy.includes("pau albedo")))))))){


setTimeout(function(){
tujh = fs.readFileSync('./stickers/a1.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);


setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/a2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},2500);

}
///



if (!isOwner) if (budy.includes("Albedo chupa") || (budy.includes("albedo chupa") || (budy.includes("pau Albedo") || (budy.includes("albedo mama") || (budy.includes("Albedo mama") || (budy.includes("mama Albedo") ||(budy.includes("mama albedo")))))))){
random = Math.floor(Math.random() * 4) + 1
if (ram == 1 ) {random = 'sua ameba irritante'} else if (ram == 2 ) {random = 'seu inseto insolente!'} else if (ram == 3 ) {random = 'humano patético'} else if (ram == 4 ) {random = 'sua opinião é irrelevante'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/tmnc.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
if (!isOwner) if (!isGroupAdmins) client.groupRemove(from, [sender])
},2000);

setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/tmnc2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},4000);

}

///se for o dono 
if (!isOwner) if (budy.includes("Albedo chupa") || (budy.includes("albedo chupa") || (budy.includes("pau Albedo") || (budy.includes("albedo mama") || (budy.includes("Albedo mama") || (budy.includes("mama Albedo") ||(budy.includes("mama albedo")))))))){


setTimeout(function(){
tujh = fs.readFileSync('./stickers/a1.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);



setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/a2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},2500);

}
///


if (!isOwner) if (budy.includes("comer albedo") || (budy.includes("comer Albedo") || (budy.includes("Albedo sua filha") || (budy.includes("albedo sua filha") || (budy.includes("matar albedo") || (budy.includes("matar Albedo") ||(budy.includes("piroca Albedo")))))))){
random = Math.floor(Math.random() * 4) + 1
if (ram == 1 ) {random = 'sua ameba irritante'} else if (ram == 2 ) {random = 'seu inseto insolente!'} else if (ram == 3 ) {random = 'humano patético'} else if (ram == 4 ) {random = 'sua opinião é irrelevante'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/tmnc.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
if (!isOwner) if (!isGroupAdmins) client.groupRemove(from, [sender])
},2000);

setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/tmnc2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},4000);

}
/// se for o dono
if (isOwner) if (budy.includes("comer albedo") || (budy.includes("comer Albedo") || (budy.includes("Albedo sua filha") || (budy.includes("albedo sua filha") || (budy.includes("matar albedo") || (budy.includes("matar Albedo") ||(budy.includes("piroca Albedo")))))))){


setTimeout(function(){
tujh = fs.readFileSync('./stickers/a1.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/a2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},2500);

}
///

if (!isOwner) if (budy.includes("cu Albedo") || (budy.includes("cu albedo") || (budy.includes("cu bot") || (budy.includes("cú albedo") || (budy.includes("cú Albedo") || (budy.includes("albedo vai tomar") ||(budy.includes("Albedo vai tomar")))))))){
random = Math.floor(Math.random() * 4) + 1

ram = random
if (ram == 1 ) {random = 'sua ameba irritante'} else if (ram == 2 ) {random = 'seu inseto insolente!'} else if (ram == 3 ) {random = 'humano patético'} else if (ram == 4 ) {random = 'sua opinião é irrelevante'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/tmnc.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
if (!isOwner) if (!isGroupAdmins) client.groupRemove(from, [sender])
},2000);

setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/tmnc2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},4000);

}
///se for o dono
if (isOwner) if (budy.includes("cu Albedo") || (budy.includes("cu albedo") || (budy.includes("cu bot") || (budy.includes("cú albedo") || (budy.includes("cú Albedo") || (budy.includes("albedo vai tomar") ||(budy.includes("Albedo vai tomar")))))))){


setTimeout(function(){
tujh = fs.readFileSync('./stickers/a1.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);


setTimeout(function(){
tujuyh = fs.readFileSync('./stickers/a2.webp');
client.sendMessage(from, tujuyh, sticker, {quoted:mek, thumbnail:akaky})
},2500);

}
///



//FIM DOS XINGAMENTOS

if (budy.includes("Albedo sua linda") || (budy.includes("albedo sua linda") || (budy.includes("albedo linda") || (budy.includes("Albedo linda") || (budy.includes("linda albedo") || (budy.includes("linda Albedo") ||(budy.includes("albedo gostosa")))))))){
random = Math.floor(Math.random() * 4) + 1

ram = random
if (ram == 1 ) {random = '👉👈 obrigada'} else if (ram == 2 ) {random = 'owwn vlw, humano'} else if (ram == 3 ) {random = 'assim eu fico encabulada ｡◕‿◕｡'} else if (ram == 4 ) {random ='fofo, não vou te matar'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/brigada.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);


}


if (!isOwner) if (budy.includes("Albedo gostosa") || (budy.includes("albedo sua gotosa") || (budy.includes("Albedo sua gostosa") || (budy.includes("gostosa albedo") || (budy.includes("gostosa Albedo") || (budy.includes("foda albedo") ||(budy.includes("foda Albedo")))))))){
random = Math.floor(Math.random() * 4) + 1

ram = random
if (ram == 1 ) {random = '👉👈 obrigada'} else if (ram == 2 ) {random = 'owwn vlw, humano'} else if (ram == 3 ) {random = 'assim eu fico encabulada ｡◕‿◕｡'} else if (ram == 4 ) {random ='fofo, não vou te matar'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/brigada.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);


}

if (isOwner) if (budy.includes("Albedo gostosa") || (budy.includes("albedo sua gotosa") || (budy.includes("Albedo sua gostosa") || (budy.includes("gostosa albedo") || (budy.includes("gostosa Albedo") || (budy.includes("foda albedo") ||(budy.includes("foda Albedo")))))))){

iwtujuh = fs.readFileSync('./assets/voz/me beija.mp3')
client.sendMessage(from, iwtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

setTimeout(function(){
tujh = fs.readFileSync('./stickers/secsu.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);


}

if (budy.includes("Albedo é foda") || (budy.includes("fofa Albedo") || (budy.includes("albedo é foda") || (budy.includes("Albedo e foda") || (budy.includes("albedo e foda") || (budy.includes("fofa albedo") ||(budy.includes("albedo fofa")))))))){
random = Math.floor(Math.random() * 4) + 1

ram = random
if (ram == 1 ) {random = '👉👈 obrigada'} else if (ram == 2 ) {random = 'owwn vlw, humano'} else if (ram == 3 ) {random = 'assim eu fico encabulada ｡◕‿◕｡'} else if (ram == 4 ) {random ='fofo, não vou te matar'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/brigada.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);


}

if (budy.includes("Albedo fofa") || (budy.includes("amor albedo") || (budy.includes("amor Albedo") || (budy.includes("bonita albedo") || (budy.includes("bonita Albedo") || (budy.includes("Albedo é legal") ||(budy.includes("legal Albedo")))))))){
random = Math.floor(Math.random() * 4) + 1

ram = random
if (ram == 1 ) {random = '👉👈 obrigada'} else if (ram == 2 ) {random = 'owwn vlw, humano'} else if (ram == 3 ) {random = 'assim eu fico encabulada ｡◕‿◕｡'} else if (ram == 4 ) {random ='fofo, não vou te matar'} 


kuy = (random)
reply(`${kuy}`)

setTimeout(function(){
tujh = fs.readFileSync('./stickers/brigada.webp');
client.sendMessage(from, tujh, sticker, {quoted:mek, thumbnail:akaky})
},1000);


}

///END


if (budy.includes("bah") || (budy.includes("Bah"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/voz/bah.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (isOwner) if (budy.includes("Albedo come") || (budy.includes("albedo come"))){
if (isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/voz/seu desejo.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

//if (isOwner) if (budy.includes("amo albedo") || (budy.includes("amo Albedo"))){
//if (isBan) return reply(` vc está banido `)
//if (!isGroup) return
//const iuijry = fs.readFileSync('./gifs/mamaeu.mp4')
//client.sendMessage(from, iuijry,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: ' >////<' })
//tujuh = fs.readFileSync('./assets/own.mp3')
//client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
//}
if (isCmd) if (isOwner) if (budy.includes("/menu") || (budy.includes("/Menu"))){
tujuih = fs.readFileSync('./assets/voz/gab sama bem vindo.mp3');
client.sendMessage(from, tujuih, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}




if (isCmd) if (isMiguel) if (budy.includes("/menu") || (budy.includes("/Menu"))){
ktujuih = fs.readFileSync('./assets/voz/miguel.mp3');
if (!isOwner) if (!isPremium) if (isMiguel) client.sendMessage(from, ktujuih, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}


if (isCmd) if (isGroupAdmins) if (isPremium) if (!isOwner) if (!isMiguel) if (budy.includes("/menu") || (budy.includes("/Menu"))){
itujuih = fs.readFileSync('./assets/voz/aki esta seu menu.mp3');
client.sendMessage(from, itujuih, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (isCmd) if (!isGroupAdmins) if (!isPremium) if (!isOwner) if (!isMiguel) if (budy.includes("/menu") || (budy.includes("/Menu"))){
itujuih = fs.readFileSync('./assets/ESA.mp3');
client.sendMessage(from, itujuih, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (isOwner) if (budy.includes("Albedo mal") || (budy.includes("albedo mal"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
wtujuh = fs.readFileSync('./assets/voz/exaltei.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/mau.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

}
if (isOwner) if (budy.includes("amo albedo") || (budy.includes("amo Albedo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
wtujuh = fs.readFileSync('./assets/voz/own.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love1.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},1000);
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love2.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},2000);
}
if (isOwner) if (budy.includes("Albedo eu te amo") || (budy.includes("albedo eu te amo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
wtujuh = fs.readFileSync('./assets/voz/own.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love1.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},1000);
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love2.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},2000);
}
if (isOwner) if (budy.includes("Albedo te amo") || (budy.includes("albedo te amo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
wtujuh = fs.readFileSync('./assets/voz/own.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love1.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},1000);
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love2.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},2000);
}

if (isPremium) if (!isOwner) if (budy.includes("amo albedo") || (budy.includes("amo Albedo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/voz/fofo mas n.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love3.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},3000);
}
if (isPremium) if (!isOwner) if (budy.includes("Albedo te amo") || (budy.includes("albedo te amo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/voz/fofo mas n.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love3.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},3000);
}

if (isPremium) if (!isOwner) if (budy.includes("Albedo eu te amo") || (budy.includes("albedo eu te amo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/voz/fofo mas n.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
setTimeout(function(){
if (isOwner) tujuh = fs.readFileSync('./stickers/love3.webp');
if (isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},3000);
}

if (!isOwner) if (!isPremium) if (budy.includes("amo albedo") || (budy.includes("amo Albedo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/riddiculo.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
//membro comun
if (!isOwner) if (!isPremium) if (budy.includes("Albedo te amo") || (budy.includes("albedo te amo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/riddiculo.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}


if (!isOwner) if (!isPremium) if (budy.includes("Albedo eu te amo") || (budy.includes("albedo eu te amo"))){
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/riddiculo.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}


if (isOwner) if (budy.includes("bunda albedo") || (budy.includes("bunda Albedo"))){
if (isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
tujuh = fs.readFileSync('./assets/voz/me beija.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("glub glub") || (budy.includes("Glub glub"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/glub.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("late Albedo") || (budy.includes("Late Albedo"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/au au.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("mia bot") || (budy.includes("Mia bot"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/miau.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("mia Albedo") || (budy.includes("Mia Albedo"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/miau.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("mia albedo") || (budy.includes("Mia albedo"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/miau.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("miau") || (budy.includes("Miau"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/miau.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("late bot") || (budy.includes("Late bot"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/au au.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("auau") || (budy.includes("Auau"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/au au.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("late albedo") || (budy.includes("Late albedo"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/au au.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("canta Albedo") || (budy.includes("Canta Albedo"))){
random = Math.floor(Math.random() * 3) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './assets/voz/lalala.mp3'} else if (ram == 2 ) {random = './assets/voz/lalala mais.mp3'} else if (ram == 3 ) {random = './assets/voz/lala2.mp3'}


canta = fs.readFileSync(random)

client.sendMessage(from, canta, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("albedo canta") || (budy.includes("Albedo canta"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/lalala.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes("canta bot") || (budy.includes("Canta bot"))){
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
tujuh = fs.readFileSync('./assets/voz/lalala.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (!isCmd) if (budy.includes("*Menu") || (budy.includes("*menu"))){
reply(`o comando certo é */menu*`)
}
if (!isCmd) if (budy.includes("*!Menu") || (budy.includes("!menu"))){
reply(`o comando certo é */menu*`)
}
if (!isCmd) if (budy.includes("*#Menu") || (budy.includes("#menu"))){
reply(`o comando certo é */menu*`)
}
if (!isCmd) if (budy.includes("*.Menu") || (budy.includes(".menu"))){
reply(`o comando certo é */menu*`)
}

if (isOwner) if (budy.includes("sua gostosa") || (budy.includes("Sua gostosa"))){
if (isOwner) //if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return
reply (`｡◕‿◕｡`)
}
/// fim da conversa

let palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'ALBEDO',
embaralhada: 'EBDOLA',
dica: 'OVERLORD'
},
{
original: 'SHALLTEAR',
embaralhada: 'ALLSHTEAR',
dica: 'OVERLORD'
},
{
original: 'AINZ-SAMA',
embaralhada: 'NZAI-MASA',
dica: 'OVERLORD'
},
{
original: 'ELFEN LIED',
embaralhada: 'DELI FENEL',
dica: 'ANIME'
},
{
original: 'STEINS GATE',
embaralhada: 'TEGA EINSTS',
dica: 'ANIME'
},
{
original: 'ÁGUIA',
embaralhada: 'IAUGÁ',
dica: 'ANIMAL'
},
{
original: 'LAGARTO',
embaralhada: 'GARLATO',
dica: 'ANIMAL'
},
{
original: 'MINHOCA',
embaralhada: 'CAOHNMI',
dica: 'ANIMAL'
},
{
original: 'CHIMPANZÉ',
embaralhada: 'ZÉPANMIHC',
dica: 'ANIMAL'
},
{
original: 'TATU',
embaralhada: 'UTTA',
dica: 'ANIMAL'
},
{
original: 'GUAXINIM',
embaralhada: 'XIMINGAU',
dica: 'ANIMAL'
},
{
original: 'URSO',
embaralhada: 'SOUR',
dica: 'ANIMAL'
},
{
original: 'PINGUIM',
embaralhada: 'MIGUPIN',
dica: 'ANIMAL'
},
{
original: 'ORNITORRINCO',
embaralhada: 'ROCIRORNITON',
dica: 'ANIMAL'
},
{
original: 'DARLING IN THE FRANXX',
embaralhada: 'RINGDAL NI HTE XANXFR',
dica: 'ANIME'
},
{
original: 'NEON GENESIS EVANGELION',
embaralhada: 'NOEN SEISNEG GELIONEVAN',
dica: 'ANIME'
},
{
original: 'CORPSE PARTY',
embaralhada: 'PSECOR TYPAR',
dica: 'ANIME'
},
{
original: 'OVERLORD',
embaralhada: 'ROLDOVER',
dica: 'ANIME'
},
{
original: 'ASTOLFO',
embaralhada: 'TOLFOAS',
dica: 'PERSONAGEM ANIME'
},
{
original: 'ZERO TWO',
embaralhada: 'EROZ OWT',
dica: 'PERSONAGEM ANIME'
},
{
original: 'E=M.C²',
embaralhada: 'M=C.E²',
dica: 'EQUIVALÊNCIA MASSA-ENERGIA'
},
{
original: 'ALBERT EINSTEIN',
embaralhada: 'BERTAL TEINSEIN',
dica: 'FISICO-TEÓRICO'
},
{
original: 'STEPHEN KING',
embaralhada: 'PHENSTE GINK',
dica: 'ESCRITOR'
},
{
original: 'KONOSUBA',
embaralhada: 'BASUNOKO',
dica: 'ANIME'
},
{
original: 'MEGUMIN',
embaralhada: 'MINGUME',
dica: 'PERSONAGEM ANIME'
},
{
original: 'AQUA',
embaralhada: 'QUAA',
dica: 'PERSONAGEM ANIME'
},
{
original: 'DARKNESS',
embaralhada: 'KNESDARS',
dica: 'PERSONAGEM ANIME'
},
{
original: 'HINATA',
embaralhada: 'TANAHI',
dica: 'PERSONAGEM ANIME'
},
{
original: 'SWORD ART ONLINE',
embaralhada: 'WORDS RAT NELION',
dica: 'ANIME'
},
{
original: 'MIRAI NIKKI',
embaralhada: 'RAIMI KINIK',
dica: 'ANIME'
},
{
original: 'BORUTO',
embaralhada: 'TORUBO',
dica: 'PERSONAGEM ANIME'
},
{
original: 'CORNO',
embaralhada: 'ONROC',
dica: 'VOCÊ'
},
{
original: 'KRATOS',
embaralhada: 'TOSKRA',
dica: 'BOM DE GUERRA'
},
{
original: 'ESCANOR',
embaralhada: 'NORESCA',
dica: 'PERSONAGEM ANIME'
},
{
original: 'STAR WARS',
embaralhada: 'RATS RASW',
dica: 'FILME'
},
{
original: 'STAN LEE',
embaralhada: 'TANS ELE',
dica: 'CRIADOR DO HOMEM ARANHA'
},
{
original: 'ZEROTWO',
embaralhada: 'TOWROZE',
dica: 'PERSONAGEM ANIME'
},
{
original: 'BUNDA',
embaralhada: 'DABUN',
dica: 'VOCÊ JÁ DEU'
},
{
original: 'FÊMUR',
embaralhada: 'MURFÊ',
dica: 'PARTE DO CORPO'
},
{
original: 'DARLING IN THE FRANXX',
embaralhada: 'RINGDAL NI HTE XANXFR',
dica: 'ANIME'
},
{
original: 'SIMBA',
embaralhada: 'BASIM',
dica: 'REI LEÃO'
},
{
original: 'CUPHEAD',
embaralhada: 'DAHEPUC',
dica: 'JOGO'
},
{
original: 'FREE FIRE',
embaralhada: 'EFRE REFI',
dica: 'JOGO DE CORNO'
},
{
original: 'GRAND THEFT AUTO',
embaralhada: 'GANDR HEFTT TOAU',
dica: 'GTA'
},
{
original: 'TREVOR',
embaralhada: 'VORRET',
dica: 'GTA V'
},
{
original: 'SEBASTIÃO',
embaralhada: 'ÃOTISEBAS',
dica: 'NOME'
},
{
original: 'LEON E NILCE',
embaralhada: 'NOLE E CELNI',
dica: 'COISA DE NERD'
},
{
original: 'COISA DE NERD',
embaralhada: 'SAICO ED REND',
dica: 'CANAL YOUTUBE'
},
{
original: 'VOICE MAKERS',
embaralhada: 'ECIOV KERSMA',
dica: 'CANAL YOUTUBE'
},
{
original: 'MIA KHALIFA',
embaralhada: 'MAI LIFAHAK',
dica: 'ATRIZ PORNO'
},
{
original: 'SASHA GREY',
embaralhada: 'SHASA REYG',
dica: 'ATRIZ PORNO'
},
{
original: 'STOYA',
embaralhada: 'YATOS',
dica: 'ATRIZ PORNO'
},
{
original: 'ECCHI',
embaralhada: 'HICCE',
dica: 'GENÊRO ANIME'
},
{
original: 'SIRIUS',
embaralhada: 'RIUSSI',
dica: 'ESTRELA'
},
{
original: 'EVA',
embaralhada: 'VEA',
dica: 'NOME'
},
{
original: 'CORRA',
embaralhada: 'RACOR',
dica: 'FILME'
},
{
original: 'DARK',
embaralhada: 'KARD',
dica: 'SÉRIE NETFLIX'
},
{
original: 'SOBERANO',
embaralhada: 'RANOBESO',
dica: 'REI'
},
{
original: 'RATO',
embaralhada: 'TORA',
dica: 'MOUSE'
},
{
original: 'MOUSE',
embaralhada: 'SMOUE',
dica: 'RATO'
},
{
original: 'PUBG',
embaralhada: 'GUBP',
dica: 'JOGO'
},
{
original: 'FINAL FANTASY',
embaralhada: 'LANFI TASYFAN',
dica: 'JOGO'
},
{
original: 'GOD OF WAR',
embaralhada: 'DOG FO RAW',
dica: 'JOGO'
},
{
original: 'CRASH BANDICOOT',
embaralhada: 'SAHCR COTOBANDI',
dica: 'JOGO'
},
{
original: 'CU',
embaralhada: 'CU',
dica: 'CU'
},
{
original: 'GADO',
embaralhada: 'DOGA',
dica: 'VOCÊ'
},
{
original: 'MÉXICO',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'MÉXICO',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'CANADÁ',
embaralhada: 'DÁCANA',
dica: 'PAÍS'
},
{
original: 'INGLATERRA',
embaralhada: 'GLAINRATER',
dica: 'PAÍS'
},
{
original: 'BRASIL',
embaralhada: 'LISBAR',
dica: 'PAÍS'
},
{
original: 'EQUADOR',
embaralhada: 'QUADORE',
dica: 'PAÍS'
},
{
original: 'PARIS',
embaralhada: 'RISPA',
dica: 'CIDADE'
},
{
original: 'BOQUETE',
embaralhada: 'QUETEBO',
dica: 'ATO LIBIDINOSO'
},
{
original: '',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'GOSTOSO',
embaralhada: 'TOSOGOS',
dica: 'CRIADOR DO BOT'
},
{
original: 'IMAGINE DRAGONS',
embaralhada: 'GINEIMA GONSDRA',
dica: 'BANDA'
},
{
original: 'BRKSEDU',
embaralhada: 'DUEKSBR',
dica: 'YOUTUBER'
},
{
original: 'VIBRADOR',
embaralhada: 'DORBRIVA',
dica: 'OBJETO LIBIDINOSO'
},
{
original: 'SEXO',
embaralhada: 'XOSE',
dica: 'VOCÊ NUNCA FEZ'
},
{
original: 'BUNDA',
embaralhada: 'DANBU',
dica: 'VOCÊ JÁ DEU'
},
{
original: 'ALBEDO',
embaralhada: 'DOBEAL',
dica: 'BOT'
},
{
original: 'ANOTHER',
embaralhada: 'THERANO',
dica: 'ANIME'
},
{
original: 'PETER PARKER',
embaralhada: 'KERRAP TERPE',
dica: 'MARVEL'
},
{
original: 'TONY STARK',
embaralhada: 'TARKS NYTO',
dica: 'MARVEL'
},
{
original: 'HULK',
embaralhada: 'KHLU',
dica: 'MARVEL'
},
{
original: 'SCORPION',
embaralhada: 'ONPICORS',
dica: 'MORTAL KOMBAT'
},
{
original: 'MORTAL KOMBAT',
embaralhada: 'BATMOK LAMORT',
dica: 'MORTAL KOMBAT'
},
{
original: 'CETRION',
embaralhada: 'TRIONCE',
dica: 'MORTAL KOMBAT'
},
{
original: 'MISAKI MEI',
embaralhada: 'MIE KISAMI',
dica: 'ANIME'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'GABRIEL',
embaralhada: 'LEIBAGR',
dica: 'DONO DO BOT'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'CAORROCHO',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
  original: 'GEOVANA',
embaralhada: 'OAENVAG',
dica: 'NOME'
},
{
  original: 'MAÇA',
embaralhada: 'Mçaa',
dica: 'FRUTA'
},
{
  original: 'GARFO',
embaralhada: 'FGROA',
dica: 'OBJETO'
},
{
  original: 'CADEIRA',
embaralhada: 'CIAEDRA',
dica: 'Objeto'
},
{
  
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]	
		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./src/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 34567) + 56720
dinhero = Math.floor(Math.random() * 35) + 250
if(budy.toUpperCase() == dataAnagrama.original) { client.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./src/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
addKoinUser(sender, dinhero)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp* e ${dinhero} em *dinhero*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`, MessageType.text) 
}, 5000)
}}

//COLORS//AQUI			
colors = ['red','white','black','blue','yellow','green']


const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

////FINALIZAR TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}


const {
wa_version,
mcc,
mnc,
os_version,
device_manufacturer,
device_model
} = client.user.phone

//_VISUALIZA AS MENSAGENS 
client.chatRead(from)

//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBan) return
BannedExpired(ban)
    
 // CREDITOS TIRINGA-BOT| ASS: { -JR }
//if (isCmd && isFiltered(from) && !isGroup) {
//console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
//contextInfo: {
//mentionedJid: [sender]
//} 
//return console.log('SPAM DO CARA AI.')}

        
//if (isCmd && isFiltered(from) && isGroup) {
//console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname)contextInfo: {
//mentionedJid: [sender]
//} 
//return console.log('SPAM DO CARA AI.')}   
         
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do leke', color(sender.split('@')[0]), 'args :', color(args.length))
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do leke', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do leke', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do leke', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
/*-------[ Tictactoe jogo Function--------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
client.sendMessage(from, chatAccept, MessageType.text, {quoted: mek, thumbnail:akaky,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
}/* else {
client.sendMessage(from,
`『❗』 Esta e uma opção apenas para o @${boardnow.O} !`,
MessageType.text, {quoted: mek, thumbnail:akaky,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
} */
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
 client.sendMessage(from,
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`,
 MessageType.text, {quoted: mek, thumbnail:akaky,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
 },
 }
 );
 } /* else {
 client.sendMessage(from,
 `『❗』 Esta e uma opção apenas para o @${boardnow.O} !`,
MessageType.text, {
quoted: mek, thumbnail:akaky,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
} */
}
}

if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
return;
}
const dinherowin = Math.ceil(Math.random() * 1) + 10
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
//    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
//    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
addKoinUser(winnerJID + "@s.whatsapp.net", dinherowin)           
client.sendMessage(from, chatWon, MessageType.text, {quoted: mek, thumbnail:akaky,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 2000000) //20 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou +${dinherowin} de dolar por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
client.sendMessage(from, chatMove, MessageType.text, {quoted: mek, thumbnail:akaky,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
}


countUserMessage(sender);

if(isCmd && !isGroup && !isOwner && banChats === true) return reply (`Somente pode ser utilizado em Grupo`)
const atibot = mek.isBaileys
if (atibot === true) return 

switch(command) {

case 'wallpaperhd':
//addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/walpaperanime`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `wallpaper anime celular hd`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)

break
case 'sla':
case '?':
case 'help':
case 'ajuda':
reply (` 
𝑀𝐸𝑁𝑈 𝐷𝐸 𝐴𝐽𝑈𝐷𝐴

- Oque eu sou? bem,meu nome é Albedo,eu sou inspirada em um personagem do anime 
*Overlord* , sou um robô criado por wa.me//554991579631 🤖.

- Oque eu consigo fazer? Bem,eu posso criar figurinhas,baixar músicas, vídeos, proteger o seu grupo contra links, números fakes ou travas. Basta usar */menu* para ver os meus comandos!

*Breve descrição de cada menu:*

_ menu Admin : são comandos para adms, desde abrir a fechar grupo, marcar todos os membros,mudar nome e descrição até banir quem quebra as regras

_ menu Figurinhas : nesse menu você encontra os comandos para criar figurinhas,basta marcar uma foto ou vídeo de até 10 segundos para converte-la em sticker

_ Downloads : aki vc pode fazer download de vídeos, áudios, pesquisar coisas no YouTube,Spotify ou Wikipedia

_ menu Diversão : comandos para zoar com seus amigos e mini jogos para passar o tempo (como: roletahard, pedra papel tesoura,jogo da velha)

_ menu Galeria : aki vc encontra fotos e vídeos pré instaladas no bot,ou seja basta vc digitar o comando certo para receber o que quer. Aki vc encontra Openings de animes, músicas, fotos, wallpapers e... Hentai ¯\_(ツ)_/¯

_ menu Maker : use esse menu para editar áudios,editar vídeos (reverter,estourar, afinar), e criação de logos e filtros para fotos

Bom, Aki está o seu Help *baka* . Caso ainda tenha dúvidas entre em contato com Gabriel-sama,meu dono.

 `)
break
case 'tmdopau':
case 'tamanhodopau':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 25)}`
hasil = `Ta poha meno😌\n\nVocê tem  : *${random}* cm de pau😁`
reply(hasil)
break
case 'sn': //jogos
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O ${pushname} é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break


case 'chance': //Jogos
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do ${pushname} ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {quoted: mek, thumbnail:akaky, contextInfo: {mentionedJid: [sender]}})
break


case 'status':
client.updatePresence(from, Presence.composing)



if (isAntiLink) a1 = (`🅞🅝`)
if (!isAntiLink) a1 = (`🄾🄵🄵`)

if (isAntiTravatxt) a3 = (`🅞🅝`)
if (!isAntiTravatxt) a3 = (`🄾🄵🄵`)

if (isAntifake) a2 = (`🅞🅝`)
if (!isAntifake) a2 = (`🄾🄵🄵`)

if (isAntiPorn) a4 = (`🅞🅝`)
if (!isAntiPorn) a4 = (`🄾🄵🄵`)

if (isWelkom) a5 = `🅞🅝`
if (!isWelkom) a5 = `🄾🄵🄵`

if (isOffin) a6 = `*sim*`
if (!isOffin) a6 = `*não*`

if (isEspecial) a7 = `1`
if (!isEspecial) a7 = `0`

if (isBotGroupAdmins) a9 = `bot é adm`
if (!isBotGroupAdmins) a9 = `bot não é adm`

if (isLevelingOn) a8 = `🅞🅝`
if (!isLevelingOn) a8 = `🄾🄵🄵`

if (isGroupAdmins) b1 = `sim`
if (!isGroupAdmins) b1 = `não`

if (isPremium) b2 = `sim`
if (!isPremium) b2 = `não`

if (isOwner) b3 = `*dono ✓*`
if (!isOwner) b3 = ` `

client.sendMessage(from, `╭────────╮
     *𝙎𝙏𝘼𝙏𝙐𝙎*
╰────────╯

grupo: *${groupName}*
membros: *${groupMembers.length}*
admins: *${groupAdmins.length}*

━━━ • ✙ • ━━━
𝚂𝚎𝚞 𝚜𝚝𝚊𝚝𝚞𝚜: ${b3}

- nome: ${pushname}
- número: ${sender.split('@')[0]}
- admin: ${b1}
- premium: ${b2}

━━━ • ✙ • ━━━
𝚂𝚝𝚊𝚝𝚞𝚜 𝚍𝚘 𝚋𝚘𝚝:

Offline: ${a6}
*${a9}*

- Welcome:  ${a5}
- Leveling:    ${a8}
- AntiLink:    ${a1}
- AntiFake:   ${a2}
- AntiTrava:  ${a3}
- AntiPorn:   ${a4}
━━━ • ✙ • ━━━`, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})



break
case 'menuint':
if (!isOwner)return reply(`só dono`)
stu = `꧁ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚒𝚗𝚝𝚎𝚛𝚊çõ𝚎𝚜 ꧂


۞ _total:_ 

─────────────
*Interações globais:*
───────────
╭───────────────╮
➟ ${prefix}audGlobal1\n("mas bah tchê")\nação: budy.includes\narquivo: bah.mp3

➟ ${prefix}audGlobal2\n("au au au")\nação: budy.includes\narquivo: au au.mp3

➟ ${prefix}audGlobal3\n("boa noite")\nação: budy.includes\narquivo: boa noite.mp3

➟ ${prefix}audGlobal4\n("boa tarde")\nação: budy.includes\narquivo: boa tarde.mp3

➟ ${prefix}audGlobal5\n("bom dia")\nação: budy.includes\narquivo: bom dia.mp3

➟ ${prefix}audGlobal6\n("quem você está chamando de bugada?...")\nação: exec. bug\narquivo: bugada.mp3

➟ ${prefix}audGlobal7\n("ownn que doguinho fofo, quem é o cute cute da mamãe")\nação: undefined\narquivo: cute cute.mp3

➟ ${prefix}audGlobal8\n("empate")\nação: empate jogodavelha & ttt\narquivo: empate.mp3

➟ ${prefix}audGlobal9\n("vitória")\nação: vitória jogodavelha & ttt\narquivo: vitória.mp3

*!Owner & !Premium* ➟ ${prefix}audGlobal10\n("derrota")\nação: derrota jogodavelha & ttt\narquivo: derrota.mp3

*!Owner & !Premium* ➟ ${prefix}audGlobal11\n(" esse comando não existe baka!")\nação: exec. comando errado\narquvo: baka.mp3

➟ ${prefix}audGlobal12\n("Eu só aceito ordens de Gabriel-sama!")\nação: membros executar ação p/ dono\narquivo: eu só aceito ordens de gabriel sama.mp3

➟ ${prefix}audGlobal13\n("precisa falar com Gabriel-sama? Você pode entrar em contato com ele digitando /dono")\nação: budy.includes\narquivo: barra dono.mp3

➟ ${prefix}audGlobal14\n("glub glub glub")\nação: budy.includes\narquivo: glub.mp3

*!Admin* ➟ ${prefix}audGlobal15\n("como ousa quebrar as regras? Eu,albedo...")\nação: quebrar regras/grupo\narquivo: golpe de misericórdia.mp3

➟ ${prefix}audGlobal16\n("deveras interessante")\nação: budy.includes\narquivo: interessante.mp3

➟ ${prefix}audGlobal17\n(" lá lá lá")\nação: budy.includes\narquivos: lalala.mp3 & lalala mais.mp3 & lala2.mp3 & lala3.mp3

➟ ${prefix}audGlobal18\n("mas que por... Oque significa isso?")\ação: budy.includes\narquivo: mas que porra.mp3

➟ ${prefix}audGlobal19\n(" miau! ")\nação: budy.includes\narquivo: miau.mp3

➟ ${prefix}audGlobal20\n(" _risada maléfica_ ")\nação: budy.includes\narquivo: risada.mp3

➟ ${prefix}audGlobal21\n(" _rsrs_ ")\nação: budy.includes\narquivo: rsrsrs.mp3

*!dono & !admin* ➟ ${prefix}audGlobal22\n("parece que você subiu de ranking! Talvez um dia você...")\nação: level up\narquivo subiurank.mp3

➟ ${prefix}audGlobal23\n(" tensoo")\nação: budy.includes\narquivo: tenso.mp3

*!dono & !admin* ➟ ${prefix}audGlobal24\n(" agora você vai morrer!")\nação: xingar dono\narquivo: vai morrer.mp3

➟ ${prefix}audGlobal25\n("você está banido de utilizar meus comandos")\ação: banido\narquivo: vc esta banido.mp3

➟ ${prefix}audGlobal26\n(" é mesmo?")\nação: budy.includes\narquivo: é mesmo?.mp3
╰───────────────╯

─────────────
*Interações com membros comuns:*
───────────

─────────────
*Interações com o dono:*
───────────
╭───────────────╮
➟ ${prefix}audAinz1\n("Ainz-sama,o alvo foi removido com sucesso!")\nação: remover\narquivo: ainz sucesso.mp3

➟ ${prefix}audAinz2\n(" _risada_ desculpa mestre, acho que me exaltei")\nação: undefined\narquivo: exaltei.mp3

➟ ${prefix}audAinz3\n("Olá Gabriel-sama, seja bem vindo ao menu!")\nação: menu\narquivo: gab sama bem vindo.mp3

➟ ${prefix}audAinz4\n("Cala a boca e me beija!")\nação: budy.includes\narquivo: me beija.mp3

➟ ${prefix}audAinz5\n("Ownn que fofo.... Digo, agradeço pela vossa...")\nação: budy.includes\narquivo: own.mp3

➟ ${prefix}audAinz6\n("Certo Gabriel-sama,seu desejo é uma ordem")\nação: undefined\narquivo: seu desejo.mp3

➟ ${prefix}audAinz7\n("você só está vivo pq Gabriel-sama permite!")\nação: undefined\narquivo: so esta vivo pq gabriel permite.mp3

➟ ${prefix}audAinz8\n("mestre, mas esse comando não existe!")\nacão: exec. comando errado\narquivo: cmdnaoexiste.mp3

╰───────────────╯









`
client.sendMessage(from, stu, text)
break
case 'comandos':
case 'menu':
case 'cmd':
case 'bot':
case '?':
if (isBan) return reply(` vc está banido `)
 
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  


random = Math.floor(Math.random() * 10) + 1
ran = random
if (ran == 1 ) {random = './lib/logo/comum.mp4'} else if (ran == 2 ) {random = './lib/logo/comum2.mp4'} else if (ran == 3 ) {random = './lib/logo/comum3.mp4'} else if (ran == 4 ) {random = './lib/logo/comum4.mp4'} else if (ran == 5 ) {random = './lib/logo/comum5.mp4'} else if (ran == 6 ) {random = './lib/logo/comum6.mp4'} else if (ran == 7 ) {random = './lib/logo/comum7.mp4'} else if (ran == 8 ) {random = './lib/logo/comum8.mp4'} else if (ran == 9 ) {random = './lib/logo/comum9.mp4'} else if (ran == 10 ) {random = './lib/logo/comum10.mp4'}
kiu = random

setTimeout(function(){
const iijry = fs.readFileSync(kiu)
if (!isOwner) client.sendMessage(from, iijry,  MessageType.video, {mimetype: 'video/gif', caption: help(prefix), quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})
},500);


if (isOwner) random = Math.floor(Math.random() * 7) + 1
rani = random
if (rani == 1 ) {random = './lib/logo/dono.mp4'} else if (rani == 2 ) {random = './lib/logo/dono2.mp4'} else if (rani == 3 ) {random = './lib/logo/dono3.mp4'} else if (rani == 4 ) {random = './lib/logo/dono4.mp4'} else if (rani == 5 ) {random = './lib/logo/dono5.mp4'} else if (rani == 6 ) {random = './lib/logo/dono6.mp4'} else if (rani == 7 ) {random = './lib/logo/dono7.mp4'} 
ki = random


setTimeout(function(){
const iijry = fs.readFileSync(ki)
if (isOwner) client.sendMessage(from, iijry,  MessageType.video, {mimetype: 'video/gif', caption: help(prefix), quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})
},500);


break

case 'menumods':
case 'menumod':
case 'modmenu':
if (!isPremium) return reply(`Apenas para Premium`)
if (isBan) return reply(` vc está banido `)
reply(`

───────────────────
           *мєทυ мσ∂s*
─────────────────

_ *Whatsapp Imune (Explosion)*
base: https://drive.google.com/file/d/1YiVby3jzWttNbfxzFzXoYaIB9i2icsxH/view?usp=drivesdk
mod: https://drive.google.com/file/d/1YhDzxcxkoq7rl86Ed49KOTCjBPbgEmYF/view?usp=drivesdk
─────────────────
_ *TextNow*
𝐶𝑟𝑖𝑎𝑟 𝑛𝑢𝑚𝑒𝑟𝑜 𝑓@𝑘𝑒
https://drive.google.com/file/d/1Z9HptDPOQtV7MujA0nL-XgUjG2Hv1011/view?usp=drivesdk
─────────────────
_ *Pure Tuber*
𝑌𝑜𝑢 𝑇𝑢𝑏𝑒 𝑠𝑒𝑚 𝑎𝑛ú𝑛𝑐𝑖𝑜𝑠
https://drive.google.com/file/d/1YoRz2XmBnHawf8b685baeX0SbYN3gjkQ/view?usp=drivesdk
─────────────────
 *Tube Mate* 
𝑏𝑎𝑖𝑥𝑎𝑟 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑜 𝑌𝑜𝑢𝑡𝑢𝑏𝑒
https://drive.google.com/file/d/1YnTZ_-NEbd6mqaWevA3SPKFDyUDKsBBH/view?usp=drivesdk
─────────────────
_ *Lucky Patcher*
https://drive.google.com/file/d/1YnCPt_CFoGF8GxShXzDo3ZXDHsMt20d-/view?usp=drivesdk
─────────────────
_ *Kinemaster premium*
𝑀𝑒𝑙ℎ𝑜𝑟 𝑒𝑑𝑖𝑡𝑜𝑟 𝑑𝑒 𝑣𝑖𝑑𝑒𝑜𝑠
https://drive.google.com/file/d/1ZIGSjdjuul70cZxGg-pJ9MaMwK6cv8lH/view?usp=drivesdk
─────────────────
_ *MX Player Pro*
𝑅𝑒𝑝𝑟𝑜𝑑𝑢𝑡𝑜𝑟 𝑑𝑒 𝑣𝑖𝑑𝑒𝑜𝑠
https://drive.google.com/file/d/1Zz7QeVttZdpZoKq81fJky05pd5aUjydE/view?usp=drivesdk
─────────────────
_ *Aptoide*
𝐿𝑜𝑗𝑎 𝑑𝑒 𝑎𝑝𝑝𝑠
https://aptoide.br.aptoide.com/app#
─────────────────
_ *Uptodown*
𝐿𝑜𝑗𝑎 𝑑𝑒 𝑎𝑝𝑝𝑠
https://uptodown-android.br.uptodown.com/android/download
─────────────────
_ *Apkpure*:
𝐿𝑜𝑗𝑎 𝑑𝑒 𝑎𝑝𝑝𝑠
https://www.google.com/amp/s/m.apkpure.com/br/apkpure/com.apkpure.aegon/amp
─────────────────
_ *TapTap*
𝐿𝑜𝑗𝑎 𝑑𝑒 𝑎𝑝𝑝𝑠 𝑑𝑎 𝐶ℎ𝑖𝑛𝑎
https://drive.google.com/file/d/1Yx4Wzwj7J6LV5tijNlAbRrV6Gic0cCmr/view?usp=drivesdk
─────────────────
_ *Citra MMJ* 
𝐸𝑚𝑢𝑙𝑎𝑑𝑜𝑟 𝑑𝑒 3𝐷𝑆
https://github.com/citra-emu/citra-android/pull/238
─────────────────
_ *Dolphin MMJr*
𝐸𝑚𝑢𝑙𝑎𝑑𝑜𝑟 𝑑𝑒 𝐺𝑎𝑚𝑒𝑐𝑢𝑏𝑒/𝑊𝑖𝑖
https://drive.google.com/file/d/1YsVBad8gcZ71wJYIT70P9LtIylzlYYbN/view?usp=drivesdk
─────────────────
_ *Better Anime*
𝐴𝑝𝑝 𝑝𝑎𝑟𝑎 𝑣𝑒𝑟 𝑎𝑛𝑖𝑚𝑒𝑠
https://drive.google.com/file/d/1ZFG2mYYMFa1gJDO1E3LNrQR2oUf7siIt/view?usp=drivesdk
─────────────────

_ *Crunchy DL*
𝐴𝑝𝑝 𝑝𝑎𝑟𝑎 𝑣𝑒𝑟 𝑎𝑛𝑖𝑚𝑒𝑠
https://drive.google.com/file/d/1Za9FM43dM98RMd3tJiBFlEsMyZyfhO3L/view?usp=drivesdk
─────────────────
_ *X-Animes*
𝐴𝑝𝑝 𝑝𝑎𝑟𝑎 𝑣𝑒𝑟 𝑎𝑛𝑖𝑚𝑒𝑠
https://drive.google.com/file/d/1ZbnslnaWF_rGQaVBxR0ucRdkpmBAVsxt/view?usp=drivesdk
─────────────────
_ *SmartFlix*
𝐴𝑝𝑝 𝑝𝑎𝑟𝑎 𝑎𝑠𝑠𝑖𝑠𝑡𝑖𝑟 𝑓𝑖𝑙𝑚𝑒𝑠/𝑠𝑒𝑟𝑖𝑒𝑠
https://drive.google.com/file/d/1Zo7n31l3LK_Gg79uhSm92W3JtnH1y4I-/view?usp=drivesdk
─────────────────
_ *Tyflex Plus*
𝐴𝑝𝑝 𝑝𝑎𝑟𝑎 𝑎𝑠𝑠𝑖𝑠𝑡𝑖𝑟 𝑓𝑖𝑙𝑚𝑒𝑠/𝑠𝑒𝑟𝑖𝑒𝑠
https://drive.google.com/file/d/1ZtDUEIRcbXpT4_HY2GW_pRP5O2lfWtnY/view?usp=drivesdk
─────────────────
_ *Bubble Translator*
𝑇𝑟𝑎𝑑𝑢𝑧𝑖𝑟 𝑎 𝑡𝑒𝑙𝑎
https://drive.google.com/file/d/1_-zJAoGaxifrWwaVNrI8ZuZ1Sp5CaEBO/view?usp=drivesdk
─────────────────
_ *Web Video Caster*
𝑡𝑟𝑎𝑛𝑠𝑚𝑖𝑡𝑖𝑟 𝑡𝑒𝑙𝑎 𝑑𝑜 𝑐𝑒𝑙𝑢𝑙𝑎𝑟 𝑝𝑎𝑟𝑎 𝑎 𝑇𝑉
https://play.google.com/store/apps/details?id=com.instantbits.cast.webvideo
─────────────────
_ *Photomath*
𝐶𝑜𝑙𝑎𝑟 𝑛𝑜𝑠 𝑠𝑒𝑢𝑠 𝑑𝑒𝑣𝑒𝑟𝑒𝑠 𝑑𝑒 𝑐𝑎𝑠𝑎 (𝑟𝑒𝑠𝑜𝑙𝑣𝑒 𝑜𝑝𝑒𝑟𝑎𝑐𝑜𝑒𝑠 𝑚𝑎𝑡𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑠)
https://play.google.com/store/apps/details?id=com.microblink.photomath
─────────────────
554991579631
Albedo by Gabriel ™

`)
break
case 'getsticker':
				case 'gets':
			     	await limitAdd(sender)
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					
					break
					
				case 'stickerlist':
				case 'liststicker':
			     	await limitAdd(sender)
					teks = '*lista das figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, thumbnail:akaky, contextInfo: { "mentionedJid": setiker } })
					break



				case 'addsticker':
			     	await limitAdd(sender)
					if (!isQuotedSticker) return reply('[❗] Marque a figurinha')
					svst = body.slice(12)
					if (!svst) return reply('[❗] qual e o nome da figurinha?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `[❗] figurinha guardada na nuvem 🔐\npara ver a lista de todas as figurinhas guardadas digite ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
case `admin`:
case `adm`:
case `administrativo`:
case `menuadm`:
case `menuadmin`:
case `menuadministrativo`:
case `menuadms`:
case `menuadmins`:
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
tujuh = fs.readFileSync('./assets/apenasainz.mp3');
if (!isOwner) if (!isPremium) if (!isGroupAdmins) client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isGroupAdmins) if (!isOwner) return
client.sendMessage(from, `╭◪「 *MENU ADMINS* 」
╰───────────────╮  
╭───────────────╯
 |
 |➟ ${prefix}status
 |➟ ${prefix}add
 |➟ ${prefix}ban _(𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒𝑟 𝑚𝑒𝑛𝑠𝑎𝑔𝑒𝑚)_
 |➟ ${prefix}banir _@tag_
 |➟ ${prefix}promover _@tag_
 |➟ ${prefix}rebaixar _@tag_
 |➟ ${prefix}linkgp
 |➟ ${prefix}infogp
 |➟ ${prefix}hidetag _(𝑠𝑒𝑢 𝑡𝑒𝑥𝑡𝑜)_
 |➟ ${prefix}marcar
 |➟ ${prefix}grupo f
 |➟ ${prefix}grupo a
 |➟ ${prefix}setname
 |➟ ${prefix}setdesc
 |➟ ${prefix}leveling
 |➟ ${prefix}welcome
 |➟ ${prefix}simih
 |➟ ${prefix}hideadms
 |➟ ${prefix}opentime
 |➟ ${prefix}fechartime
 |➟ ${prefix}topativos
 |➟ ${prefix}checkativo
 |➟ ${prefix}atividade
╰───────────────
╰───────────────╮  
╭───────────────╯
 |➟ ${prefix}antilink
 |➟ ${prefix}antifake
 |➟ ${prefix}anticatalogo
 |➟ ${prefix}anticontato
 |➟ ${prefix}antitrava
 |➟ ${prefix}antiloc
 |➟ ${prefix}antidocumento
 |➟ ${prefix}antiporn
╰───────────────╯



║▌│█║▌│ █║▌│█│║▌║
      Albedo by Gabriel®
          554991579631`, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})

break
case `figurinhas`:
case `figurinha`:
case 'figu':
case `stickers`:
if (isBan) return reply(` vc está banido `)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')

client.sendMessage(from, `╭◪「 *MENU FIGU.* 」
╰───────────────╮  
╭───────────────╯
 |
 |➟ ${prefix}s
 |➟ ${prefix}s2
 |➟ ${prefix}s3
 |➟ ${prefix}toimg
 |➟ ${prefix}togif
 |➟ ${prefix}semoji
 |➟ ${prefix}attp
 |➟ ${prefix}rename
 |➟ ${prefix}addsticker
 |➟ ${prefix}getsticker
 |➟ ${prefix}stickerlist
 |➟ ${prefix}setname
╰───────────────╯




║▌│█║▌│ █║▌│█│║▌║
      Albedo by Gabriel®
          554991579631`, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})

break
case `download`:
case `downloads`:
case `search`:
case `baixar`:
if (isBan) return reply(` vc está banido `)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')

client.sendMessage(from, `╭◪「 *DOWNLOADS/PESQUISA* 」
╰───────────────╮  
╭───────────────╯
 |
 |➟ ${prefix}tts
 |➟ ${prefix}ytsearch
 |➟ ${prefix}wikipedia
 |➟ ${prefix}playstore
 |➟ ${prefix}pinterest
 |➟ ${prefix}img
 |➟ ${prefix}ytmp4
 |➟ ${prefix}ytmp3
 |➟ ${prefix}jooxplay
╰───────────────╮  
╭───────────────╯
 |➟ ${prefix}play
 |➟ ${prefix}play2
 |➟ ${prefix}play3
 |➟ ${prefix}play4
 |➟ ${prefix}play5
╰───────────────╮
╭───────────────╯
 |➟ ${prefix}playmp4
 |➟ ${prefix}facemp4
 |➟ ${prefix}tomp3
 |➟ ${prefix}upload
 |➟ ${prefix}uploadmp4 (max. 10MB)
╰───────────────╯




║▌│█║▌│ █║▌│█│║▌║
      Albedo by Gabriel®
          554991579631`, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})

break
case `diversao`:
case `diversão`:
case `brincadeiras`:
if (isBan) return reply(` vc está banido `)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')

client.sendMessage(from, `╭◪「 *DIVERSÃO* 」
╰───────────────╮  
╭───────────────╯
 |
 |➟ ${prefix}ppt
 |➟ ${prefix}ttt
 |➟ ${prefix}jogodavelha _(PvP)_
 |➟ ${prefix}cassino
 |➟ ${prefix}caracoroa
 |➟ ${prefix}anagrama 1/0
 |➟ ${prefix}roletahard
╰───────────────╮  
╭───────────────╯
 |➟ ${prefix}amgolpe
 |➟ ${prefix}beijar
 |➟ ${prefix}sn
 |➟ ${prefix}chance
 |➟ ${prefix}casal
 |➟ ${prefix}chute
 |➟ ${prefix}conselho
 |➟ ${prefix}corno
 |➟ ${prefix}dedada
 |➟ ${prefix}fatality
 |➟ ${prefix}feio
 |➟ ${prefix}frases
 |➟ ${prefix}gadometro
 |➟ ${prefix}gay
 |➟ ${prefix}gostosa
 |➟ ${prefix}gostoso
 |➟ ${prefix}licençalolis
 |➟ ${prefix}memes
 |➟ ${prefix}ship
 |➟ ${prefix}tamanhodopau
╰───────────────╮
╭───────────────╯
 |➟ ${prefix}rankotakus
 |➟ ${prefix}rankgays
 |➟ ${prefix}rankpau
 |➟ ${prefix}rankcornos
 |➟ ${prefix}rankgostosas
╰───────────────╯





║▌│█║▌│ █║▌│█│║▌║
      Albedo by Gabriel®
          554991579631`, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})
break
case 'ship':
if (args.length < 1) return reply(` Marque dois pombinhos!\nExemplo: */ship* @tag @tag`)
txt = body.slice(6)
jk = txt.split(" ")[0];
jk2 = txt.split(" ")[1];
random = Math.floor(Math.random() * 100) + 0
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
suspi = `[ALBEDO]

𝐸𝑢 𝑠ℎ𝑖𝑝𝑝𝑜 𝑒𝑠𝑠𝑒𝑠 𝑑𝑜𝑖𝑠:

*${jk} com ${jk2}*

𝑐𝑜𝑚 𝑢𝑚𝑎 𝑝𝑜𝑟𝑐𝑒𝑛𝑡𝑎𝑔𝑒𝑚 𝑑𝑒: ${random}% 😁👉👈❤` 
owew = fs.readFileSync('./videos/ship.mp4')
client.sendMessage(from, owew,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: suspi})

break

case 'gadometro':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
rate = body.slice(11)
reply(' ❰ Pesquisando sua ficha de gado: '+rate+' aguarde... ❱')

random = Math.floor(Math.random() * 4) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './fotos/gado1.jpg'} else if (ram == 2 ) {random = './fotos/gado2.jpg'} else if (ram == 3 ) {random = './fotos/gado3.jpg'} else if (ram == 4 ) {random = './fotos/gado4.jpg'}


gado = fs.readFileSync(random)

client.sendMessage(from, gado, MessageType.image)
break
case 'beijar':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
if (!isGroup) return reply('So em gp man')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = fs.readFileSync('./ft/beijo.mp4')
client.sendMessage(from, wew,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break
case 'dedada':
case 'jutso':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer meter o dedo')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} você levou uma dedada do *${pushname}* 🤡` 
const jry = fs.readFileSync('./assets/dedada.mp4')
client.sendMessage(from, jry,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'apalpar':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você deseja apalpar!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = ` *${pushname}* reivendicou a teta do @${mentioned[0].split('@')[0]} para si 🤕 ` 
jki = fs.readFileSync('./gifs/apalpar.mp4')
client.sendMessage(from, jki,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'fatality':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você deseja dar um fatality!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} recebeu um [FATALITY] do @${sender.split('@')[0]} 🤕` 
jki = fs.readFileSync('./gifs/mk/fatal.mp4')
client.sendMessage(from, jki,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'fatality2':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você deseja dar um fatality!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} recebeu um [FATALITY] do @${sender.split('@')[0]} 🤕` 
jki = fs.readFileSync('./gifs/mk/fatal1.mp4')
client.sendMessage(from, jki,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'fatality3':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você deseja dar um fatality!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} recebeu um [FATALITY] do @${sender.split('@')[0]} 🤕` 
jki = fs.readFileSync('./gifs/mk/fatal2.mp4')
client.sendMessage(from, jki,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'fatality4':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você deseja dar um fatality!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} recebeu um [FATALITY] do @${sender.split('@')[0]} 🤕` 
jki = fs.readFileSync('./gifs/mk/fatal3.mp4')
client.sendMessage(from, jki,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'fatality5':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você deseja dar um fatality!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} recebeu um [FATALITY] do @${sender.split('@')[0]} 🤕` 
jki = fs.readFileSync('./gifs/mk/fatal4.mp4')
client.sendMessage(from, jki,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'fatality6':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você deseja dar um fatality!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} recebeu um [FATALITY] do @${sender.split('@')[0]} 🤕` 
jki = fs.readFileSync('./gifs/mk/fatal5.mp4')
client.sendMessage(from, jki,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'roletahard':
if (!isOwner) if (!isGroupAdmins) return reply (`Só admin`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')

if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')

if (!isGroup) return reply(`SOMENTE EM GRUPOS`)

client.updatePresence(from, Presence.composing)

jds = []

const A2 = groupMembers

const B2 = groupMembers

const TAMBOR = ["na perna","na cabeça","no pescoço","no peito","no olho","no estômago","na boca","na perna","na testa","no braço"]

 const C2 = A2[Math.floor(Math.random() * A2.length)]

 tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		

 reply(`😈GIRANDO O TAMBOR, E SE PREPAREM PARA AS CONSEQUÊNCIAS😈 `)

 setTimeout( () => {

D1 = `💥POW💥 O TAMBOR GIROU E ACERTOU O @${C2.jid.split('@')[0]}, MORREU COM UM TIRO *${tpa}*`             			

mentions(D1, jds, true)				

}, 5000)

jds.push(C2.jid)				  

setTimeout( () => {

jds.push(C2.jid)

client.groupRemove(from, [C2.jid])

client.updatePresence(from, Presence.composing)

}, 6000)
if (!isBan) tujuh = fs.readFileSync('./assets/bang bang.mp3');
if (!isBan) client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'conselho': //case by Albedo-bot
random = Math.floor(Math.random() * 33) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = 'Lute como nunca. Perca como sempre.'} else if (ram == 2 ) {random = 'Se alguém te ofendeu sem você merecer, volte lá e mereça!'} else if (ram == 3 ) {random = 'Nunca deixe ninguém dizer que você não consegue! Diga você mesmo: Eu não consigo'} else if (ram == 4 ) {random = 'É só uma fase ruim, logo vai piorar'} else if (ram == 5 ) {random = 'O não você já tem. Agora falta você buscar a humilhação.'} else if (ram == 6 ) {random = 'Nenhum obstáculo é grande para quem desiste.'} else if (ram == 7 ) {random = 'Hoje é sempre uma oportunidade de mostrar que você pode ser pior que ontem.'} else if (ram == 8 ) {random = 'Se não for ajudar, atrapalhe.'} else if (ram == 9 ) {random = 'O pior ainda está por vir! Acredite.'} else if (ram == 10 ) {random = 'Vá,e se der medo volta.'} else if (ram == 11 ) {random = 'Errar. Superar. Aprender. E Desistir.'} else if (ram == 12 ) {random = 'Só dará errado se você tentar.'} else if (ram == 13 ) {random = 'Nunca é tarde para começar a desistir.'} else if (ram == 14 ) {random = 'Pare de achar que ninguém gosta de você! Tenha certeza.'} else if (ram == 15 ) {random = 'Você é mais fraco do que pensa.'} else if (ram == 16 ) {random = 'Você é mais fraco do que pensa.'} else if (ram == 17 ) {random = 'Se ontem foi ruim, fica tranquilo, porque hoje será pior.'} else if (ram == 18 ) {random = 'Confie em si mesmo,assim sua maior decepção será você mesmo.'} else if (ram == 19 ) {random = 'A batalha é longa, mas a derrota é certa!'} else if (ram == 20 ) {random = 'Nada como um dia pior que o outro.'} else if (ram == 21 ) {random = 'Não deixe que uma frase motivacional melhore seu dia de merda.'} else if (ram == 22 ) {random = 'Tente! Não vai dar certo mesmo.'} else if (ram == 23 ) {random = 'A maior derrota é acreditar em si mesmo.'} else if (ram == 24 ) {random = 'É dando que se fode.'} else if (ram == 25 ) {random = 'Se você não quer perder, desista de lutar!'} else if (ram == 26 ) {random ='Haverá um dia que ficarei sem me masturbar,mas esse dia não é hoje'} else if (ram == 27 ) {random ='Se você não quer perder, desista de lutar!'} else if (ram == 28 ) {random ='Relaxa, amanhã tudo vai estar pior.'} else if (ram == 29 ) {random ='Vai dar tudo errado.'} else if (ram == 30 ) {random ='Quando tudo estiver indo mal, pense "ainda pode piorar".'} else if (ram == 31 ) {random ='A melhor parte do sonho é quando percebemos que é impossível realizá-lo.'} else if (ram == 32 ) {random ='Acredite. Você nasceu para conquistar grandes fracassos.'} else if (ram == 33 ) {random ='Seja o protagonista do seu fracasso.'} 








kuu = (random)

reply(`
───────────────────
*𝙘𝙤𝙣𝙨𝙚𝙡𝙝𝙤𝙨 𝙙𝙖 𝘼𝙡𝙗𝙚𝙙𝙤*
─────────────────

❝ *${kuu}* ❞
- 𝐴𝑙𝑏𝑒𝑑𝑜,2021
`)
break

case 'caracoroa':
case 'caraoucoroa':
case 'moeda':
reply(' ❰ Jogando a moeda ....❱')

random = Math.floor(Math.random() * 2) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './fotos/moeda.webp'} else if (ram == 2 ) {random = './fotos/moeda2.webp'}

moeda = fs.readFileSync(random)

client.sendMessage(from, moeda, sticker, {quoted: mek})
break


case 'fs':
case 'friendships':
case 'menufriendships':
case 'friendship':
case 'friendshipmenu':
case 'friendshipsmenu':
case 'menufriendship':
reply (`
───────────────────
[MENU FRIENDSHIP]
───────────────────

utlize assim: */fs(nome)*
exemplo: */fsScorpion* ou */fsJohnnyCage*

_ Baraka

_ Cassie Cage

_ Cetrion

_ Dvorah

_ Frost

_ Fujin

_ Geras

_ Jacqui

_ Jade

_ Jax

_ Johnny Cage

_ Joker

_ Kabal

_ Kano

_ Kitana

_ Kung Lao

_ Liu Kang

_ NightWolf

_ Noob Saibot

_ Raiden

_ Rambo

_ Robocop

_ Scorpion

_ Shang Tsung

_ Shao Kahn

_ Sheeva

_ Sindel

_ Skarlet

_ Sonya

_ Spawn

_ Subzero

_ Terminator

─────────────────
`)
break
///FATALITYS
case 'ftbaraka':
case 'fatalitybaraka':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm01 = fs.readFileSync('./videos/mk/fatal/baraka.mp4')
client.sendMessage(from, mm01,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Baraka* \n [FATALITY]' })
break

case 'ftcassiecage':
case 'fatalitycassiecage':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm02 = fs.readFileSync('./videos/mk/fatal/cassie cage.mp4')
client.sendMessage(from, mm02,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Cassie Cage* \n [FATALITY]' })
break

case 'ftcetrion':
case 'fatalitycetrion':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm03 = fs.readFileSync('./videos/mk/fatal/cetrion.mp4')
client.sendMessage(from, mm03,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Cetrion* \n [FATALITY]' })
break

case 'ftdvorah':
case 'fatalitydvorah':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm03 = fs.readFileSync('./videos/mk/fatal/dvorah.mp4')
client.sendMessage(from, mm03,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Dvorah* \n [FATALITY]' })
break

case 'ftfrost':
case 'fatalityfrost':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm04 = fs.readFileSync('./videos/mk/fatal/frost.mp4')
client.sendMessage(from, mm04,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Frost* \n [FATALITY]' })
break

case 'ftfujin':
case 'fatalityfujin':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm05 = fs.readFileSync('./videos/mk/fatal/fujin.mp4')
client.sendMessage(from, mm05,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Fujin* \n [FATALITY]' })
break

case 'ftgeras':
case 'fatalitygeras':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm06 = fs.readFileSync('./videos/mk/fatal/geras.mp4')
client.sendMessage(from, mm06,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Geras* \n [FATALITY]' })
break

case 'ftjacqui':
case 'fatalityjacqui':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm07 = fs.readFileSync('./videos/mk/fatal/jacqui.mp4')
client.sendMessage(from, mm07,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Jacqui* \n [FATALITY]' })
break

case 'ftjade':
case 'fatalityjade':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm08 = fs.readFileSync('./videos/mk/fatal/jade.mp4')
client.sendMessage(from, mm08,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Jade* \n [FATALITY]' })
break

case 'ftjax':
case 'fatalityjax':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm09 = fs.readFileSync('./videos/mk/fatal/jax.mp4')
client.sendMessage(from, mm09,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Jax* \n [FATALITY]' })
break

case 'ftjohnnycage':
case 'fatalityjohnnycage':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm10 = fs.readFileSync('./videos/mk/fatal/johnny cage.mp4')
client.sendMessage(from, mm10,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Johnny Cage* \n [FATALITY]' })
break

case 'ftjoker':
case 'fatalityjoker':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm11 = fs.readFileSync('./videos/mk/fatal/joker.mp4')
client.sendMessage(from, mm11,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Joker* \n [FATALITY]' })
break

case 'ftkabal':
case 'fatalitykabal':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm12 = fs.readFileSync('./videos/mk/fatal/kabal.mp4')
client.sendMessage(from, mm12,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Kabal* \n [FATALITY]' })
break

case 'ftkano':
case 'fatalitykano':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm13 = fs.readFileSync('./videos/mk/fatal/kano.mp4')
client.sendMessage(from, mm13,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Kano* \n [FATALITY]' })
break

case 'ftkitana':
case 'fatalitykitana':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm15 = fs.readFileSync('./videos/mk/fatal/kitana.mp4')
client.sendMessage(from, mm15,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Kitana* \n [FATALITY]' })
break

case 'ftkotalkahn':
case 'fatalitykotalkahn':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm16 = fs.readFileSync('./videos/mk/fatal/kotal kahn.mp4')
client.sendMessage(from, mm16,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Kotal Kahn* \n [FATALITY]' })
break

case 'ftkunglao':
case 'fatalitykunglao':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm15 = fs.readFileSync('./videos/mk/fatal/kung lao.mp4')
client.sendMessage(from, mm15,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Kung Lao* \n [FATALITY]' })
break

case 'ftliukang':
case 'fatalityliukang':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm16 = fs.readFileSync('./videos/mk/fatal/liu kang.mp4')
client.sendMessage(from, mm16,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Liu Kang* \n [FATALITY]' })
break

case 'ftmileena':
case 'fatalitymileena':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm12 = fs.readFileSync('./videos/mk/fatal/kabal.mp4')
client.sendMessage(from, mm12,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Kabal* \n [FATALITY]' })
break

case 'ftnightwolf':
case 'fatalitynightwolf':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm13 = fs.readFileSync('./videos/mk/fatal/nightwolf.mp4')
client.sendMessage(from, mm13,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Nightwolf* \n [FATALITY]' })
break

case 'ftnoobsaibot':
case 'fatalitynoobsaibot':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm14 = fs.readFileSync('./videos/mk/fatal/noob saibot.mp4')
client.sendMessage(from, mm14,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Noob Saibot* \n [FATALITY]' })
break

case 'ftraiden':
case 'fatalityraiden':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm15 = fs.readFileSync('./videos/mk/fatal/raiden.mp4')
client.sendMessage(from, mm15, MessageType.video, {mimetype: 'video/mp4',caption: ' *Raiden* \n [FATALITY]' })
break

case 'ftrain':
case 'fatalityrain':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm16 = fs.readFileSync('./videos/mk/fatal/rain.mp4')
client.sendMessage(from, mm16,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Rain* \n [FATALITY]' })
break

case 'ftrambo':
case 'fatalityrambo':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm17 = fs.readFileSync('./videos/mk/fatal/rambo.mp4')
client.sendMessage(from, mm17, MessageType.video, {mimetype: 'video/mp4',caption: ' *Rambo* \n [FATALITY]' })
break

case 'ftrobocop':
case 'fatalityrobocop':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm18 = fs.readFileSync('./videos/mk/fatal/robocop.mp4')
client.sendMessage(from, mm18,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Robocop* \n [FATALITY]' })
break

case 'ftscorpion':
case 'fatalityscorpion':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm19 = fs.readFileSync('./videos/mk/fatal/scorpion.mp4')
client.sendMessage(from, mm19, MessageType.video, {mimetype: 'video/mp4',caption: ' *Scorpion* \n [FATALITY]' })
break

case 'ftshang':
case 'ftshangtsung':
case 'fatalityshangtsung':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm20 = fs.readFileSync('./videos/mk/fatal/shang tsung.mp4')
client.sendMessage(from, mm20, MessageType.video, {mimetype: 'video/mp4',caption: ' *Shang Tsung* \n [FATALITY]' })
break

case 'ftshaokahn':
case 'fatalityshaokahn':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm21 = fs.readFileSync('./videos/mk/fatal/shaokahn.mp4')
client.sendMessage(from, mm21, MessageType.video, {mimetype: 'video/mp4',caption: ' *Shao Kahn* \n [FATALITY]' })
break

case 'ftsheeva':
case 'fatalitysheeva':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm22 = fs.readFileSync('./videos/mk/fatal/sheeva.mp4')
client.sendMessage(from, mm22, MessageType.video, {mimetype: 'video/mp4',caption: ' *Sheeva* \n [FATALITY]' })
break

case 'ftsindel':
case 'fatalitysindel':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm23 = fs.readFileSync('./videos/mk/fatal/sindel.mp4')
client.sendMessage(from, mm23, MessageType.video, {mimetype: 'video/mp4',caption: ' *Sindel* \n [FATALITY]' })
break

case 'ftskarlet':
case 'fsscarlet':
case 'fatalityscorpion':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm24 = fs.readFileSync('./videos/mk/fatal/skarlet.mp4')
client.sendMessage(from, mm24, MessageType.video, {mimetype: 'video/mp4',caption: ' *Skarlet* \n [FATALITY]' })
break

case 'ftspawn':
case 'fatalityspawn':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm25 = fs.readFileSync('./videos/mk/fatal/spawn.mp4')
client.sendMessage(from, mm25, MessageType.video, {mimetype: 'video/mp4',caption: ' *Spawn* \n [FATALITY]' })
break


case 'ftsubzero':
case 'fatalitysubzero':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm19 = fs.readFileSync('./videos/mk/fatal/subzero.mp4')
client.sendMessage(from, mm19, MessageType.video, {mimetype: 'video/mp4',caption: ' *Sub-zero* \n [FATALITY]' })
break

case 'ftterminator':
case 'fatalityterminator':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
mm19 = fs.readFileSync('./videos/mk/fatal/terminator.mp4')
client.sendMessage(from, mm19, MessageType.video, {mimetype: 'video/mp4',caption: ' *Terminator* \n [FATALITY]' })
break
///FRIENDSHIPS
case 'fsfrost':
case 'friendshipfrost':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
frost = fs.readFileSync('./videos/mk/frost.mp4')
client.sendMessage(from, frost,  MessageType.video, {mimetype: 'video/mp4',caption: ' *Frost* \n [FRIENDSHIP]' })
break

case 'fsjoker':
case 'friendshipjoker':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab1 = fs.readFileSync('./videos/mk/joker.mp4')
client.sendMessage(from, ab1,  MessageType.video, {mimetype: 'video/mp4', caption: ' *The Joker* \n [FRIENDSHIP]' })
break

case 'fsshaokahn':
case 'friendshipshaokahn':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab2 = fs.readFileSync('./videos/mk/shao kahn.mp4')
client.sendMessage(from, ab2,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Shao Kahn* \n [FRIENDSHIP]' })
break

case 'fsshangtsung':
case 'fsshang':
case 'friendshipshangtsung':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab3 = fs.readFileSync('./videos/mk/shang tsung.mp4')
client.sendMessage(from, ab3,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Shang Tsung* \n [FRIENDSHIP]' })
break

case 'fsnightwolf':
case 'friendshipnightwolf':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab4 = fs.readFileSync('./videos/mk/nightwolf.mp4')
client.sendMessage(from, ab4,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Nightwolf* \n [FRIENDSHIP]' })
break

case 'fsbaraka':
case 'friendshipbaraka':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab5 = fs.readFileSync('./videos/mk/baraka.mp4')
client.sendMessage(from, ab5,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Baraka* \n [FRIENDSHIP]' })
break

case 'fscassiecage':
case 'friendshipcassie':
case 'fscassie':
case 'friendshipcassiecage':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab6 = fs.readFileSync('./videos/mk/cassie cage.mp4')
client.sendMessage(from, ab6,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Cassie Cage* \n [FRIENDSHIP]' })
break

case 'fscassie':
case 'friendshipcassiecage':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab6 = fs.readFileSync('./videos/mk/cassie cage.mp4')
client.sendMessage(from, ab6,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Cassie Cage* \n [FRIENDSHIP]' })
break

case 'fscetrion':
case 'friendshipcetrion':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab7 = fs.readFileSync('./videos/mk/cetrion.mp4')
client.sendMessage(from, ab7,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Cetrion* \n [FRIENDSHIP]' })
break

case 'fsrambo':
case 'friendshiprambo':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ax1 = fs.readFileSync('./videos/mk/rambo.mp4')
client.sendMessage(from, ax1, MessageType.video, {mimetype: 'video/mp4', caption: ' *Rambo* \n [FRIENDSHIP]' })
break

case 'fsdvorah':
case 'friendshipdevorah':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab8 = fs.readFileSync('./videos/mk/devorah.mp4')
client.sendMessage(from, ab8,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Devorah* \n [FRIENDSHIP]' })
break

case 'fsdvorah':
case 'friendshipdevorah':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab8 = fs.readFileSync('./videos/mk/devorah.mp4')
client.sendMessage(from, ab8,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Devorah* \n [FRIENDSHIP]' })
break

case 'fsfujin':
case 'friendshipfujin':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab9 = fs.readFileSync('./videos/mk/fujin.mp4')
client.sendMessage(from, ab9,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Fujin* \n [FRIENDSHIP]' })
break

case 'fsgeras':
case 'friendshipgeras':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ab0 = fs.readFileSync('./videos/mk/geras.mp4')
client.sendMessage(from, ab0,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Geras* \n [FRIENDSHIP]' })
break

case 'fsjacqui':
case 'friendshipjacqui':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac0 = fs.readFileSync('./videos/mk/jacqui.mp4')
client.sendMessage(from, ac0,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Jacqui* \n [FRIENDSHIP]' })
break

case 'fsjade':
case 'friendshipjade':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac1 = fs.readFileSync('./videos/mk/jade.mp4')
client.sendMessage(from, ac1,  MessageType.video, {mimetype: 'video/mp4', caption: ' *Jade* \n [FRIENDSHIP]' })
break

case 'fsjax':
case 'friendshipjax':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac2 = fs.readFileSync('./videos/mk/jax.mp4')
client.sendMessage(from, ac2, MessageType.video, {mimetype: 'video/mp4', caption: ' *Jax* \n [FRIENDSHIP]' })
break

case 'fsjohnnycage':
case 'friendshipjohnnycage':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac3 = fs.readFileSync('./videos/mk/johnny cage.mp4')
client.sendMessage(from, ac3, MessageType.video, {mimetype: 'video/mp4', caption: ' *Johnny Cage* \n [FRIENDSHIP]' })
break

case 'fskabal':
case 'friendshipkabal':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac4 = fs.readFileSync('./videos/mk/kabal.mp4')
client.sendMessage(from, ac4, MessageType.video, {mimetype: 'video/mp4', caption: ' *Kabal* \n [FRIENDSHIP]' })
break

case 'fskano':
case 'friendshipkano':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac5 = fs.readFileSync('./videos/mk/kano.mp4')
client.sendMessage(from, ac5, MessageType.video, {mimetype: 'video/mp4', caption: ' *Kano* \n [FRIENDSHIP]' })
break

case 'fskitana':
case 'friendshipkitana':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac6 = fs.readFileSync('./videos/mk/kitana.mp4')
client.sendMessage(from, ac6, MessageType.video, {mimetype: 'video/mp4', caption: ' *Kitana* \n [FRIENDSHIP]' })
break

case 'fskunglao':
case 'friendshipkunglao':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac7 = fs.readFileSync('./videos/mk/jax.mp4')
client.sendMessage(from, ac7, MessageType.video, {mimetype: 'video/mp4', caption: ' *Kung Lao* \n [FRIENDSHIP]' })
break

case 'fsliukang':
case 'friendshipliukang':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac8 = fs.readFileSync('./videos/mk/liu kang.mp4')
client.sendMessage(from, ac8, MessageType.video, {mimetype: 'video/mp4', caption: ' *Liu Kang* \n [FRIENDSHIP]' })
break

case 'fsnoobsaibot':
case 'friendshipnoobsaibot':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac9 = fs.readFileSync('./videos/mk/noob saibot.mp4')
client.sendMessage(from, ac9, MessageType.video, {mimetype: 'video/mp4', caption: ' *Noob Saibot* \n [FRIENDSHIP]' })
break

case 'fsraiden':
case 'friendshipraiden':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ad0 = fs.readFileSync('./videos/mk/raiden.mp4')
client.sendMessage(from, ad0, MessageType.video, {mimetype: 'video/mp4', caption: ' *Raiden* \n [FRIENDSHIP]' })
break

case 'fsrobocop':
case 'friendshiprobocop':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ad2 = fs.readFileSync('./videos/mk/robocop.mp4')
client.sendMessage(from, ad2, MessageType.video, {mimetype: 'video/mp4', caption: ' *Robocop* \n [FRIENDSHIP]' })
break

case 'fsskarlet':
case 'friendshipskarlet':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac3 = fs.readFileSync('./videos/mk/skarlet.mp4')
client.sendMessage(from, ac3, MessageType.video, {mimetype: 'video/mp4', caption: ' *Scarlet* \n [FRIENDSHIP]' })
break

case 'fsscorpion':
case 'friendshipscorpion':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac4 = fs.readFileSync('./videos/mk/scorpion.mp4')
client.sendMessage(from, ac4, MessageType.video, {mimetype: 'video/mp4', caption: ' *Scorpion* \n [FRIENDSHIP]' })
break

case 'fssheeva':
case 'friendshipsheeva':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac5 = fs.readFileSync('./videos/mk/sheeva.mp4')
client.sendMessage(from, ac5, MessageType.video, {mimetype: 'video/mp4', caption: ' *Sheeva* \n [FRIENDSHIP]' })
break

case 'fssindel':
case 'friendshipsindel':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac6 = fs.readFileSync('./videos/mk/sindel.mp4')
client.sendMessage(from, ac6, MessageType.video, {mimetype: 'video/mp4', caption: ' *Sindel* \n [FRIENDSHIP]' })
break

case 'fssonya':
case 'fssonyablade':
case 'friendshipsonya':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac7 = fs.readFileSync('./videos/mk/sonya.mp4')
client.sendMessage(from, ac7, MessageType.video, {mimetype: 'video/mp4', caption: ' *Sonya* \n [FRIENDSHIP]' })
break

case 'fsspawn':
case 'friendshipspawn':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac8 = fs.readFileSync('./videos/mk/spawn.mp4')
client.sendMessage(from, ac8, MessageType.video, {mimetype: 'video/mp4', caption: ' *Spawn* \n [FRIENDSHIP]' })
break
case 'fssubzero':
case 'friendshipsubzero':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ac9 = await getBuffer('https://telegra.ph/file/6d65f62c0d5ea64247474.mp4')
client.sendMessage(from, ac9, MessageType.video, {mimetype: 'video/mp4', caption: ' *Sub-zero* \n [FRIENDSHIP]', thumbnail: fs.readFileSync('./lib/logo.jpg')})
break
//case 'fssubzero':
//case 'friendshipsubzero':
//ac9 = fs.readFileSync('./videos/mk/subzero.mp4')
//client.sendMessage(from, ac9, MessageType.video, {mimetype: 'video/mp4', caption: ' *Sub-zero* \n [FRIENDSHIP]' })
//break

case 'fsterminator':
case 'friendshipterminator':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
ae0 = fs.readFileSync('./videos/mk/terminator.mp4')
client.sendMessage(from, ae0, MessageType.video, {mimetype: 'video/mp4', caption: ' *The Terminator* \n [FRIENDSHIP]' })
break
/// fim dos friendships
case 'wallpaperneko':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
                    try {
              
                        axios.get('https://nekos.life/api/v2/img/wallpaper').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek, thumbnail:akaky, caption: 'b-baka >////<' 
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
case 'baka':
                    try {
              
                        axios.get('https://nekos.life/api/v2/img/baka').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek, thumbnail:akaky, caption: 'b-baka >////<' 
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
///vídeos
case 'overlord':
case 'overlord1':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/overlord1.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Overlord* (1° temporada)  '})
break
case 'overlord2':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/overlord2.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Overlord* (2°temporada)  '})
break
case 'overlord3':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/overlord3.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Overlord* (3°temporada)  '})
break

case 'tokyoghoul':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wrew = fs.readFileSync(`./videos/tokyo.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wrew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Tokyo Ghoul* '})
break

case 'another':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/another.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Another* '})
break

case 'sao':
case 'sao1':
case 'swordartonline':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/sao1.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Sword art Online* (1° abertura) '})
break
case 'sao2':
case 'swordartonline2':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/sao2.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Sword art Online* (2°abertura) '})
break
case 'sao3':
case 'swordartonline3':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/sao3.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Sword art Online* (3°abertura) '})
break
case 'sao4':
case 'swordartonline4':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/sao4.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Sword art Online* (4°abertura) '})
break
case 'sao5':
case 'swordartonline5':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/sao5.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Sword art Online* (5°abertura) '})
break
case 'sao6':
case 'swordartonline6':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/sao6.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Sword art Online* (6°abertura) '})
break
case 'sao7':
case 'swordartonline7':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/sao7.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Sword art Online* (7°abertura) '})
break
case 'sao8':
case 'swordartonline8':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/sao8.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Sword art Online* (8°abertura) '})
break

case 'parade':
case 'deathparade':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/parade.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Abertura de *Death Parade*'})
break
case 'elfenlied':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/elfen lied.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' trailer de *Elfen Lied*'})
break
case 'umbrella':
case 'guardachuva':
case 'anotherguardachuva':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/umbrella.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' cena do guarda chuva do anime *Another* \n *ATENÇÃO:* \n se vc não gosta de morte/sangue não assista esse vídeo'})
break
case 'evangelion':
case 'neongenesisevangelion':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/evangelion.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' Köm,susser, töd música do anime *Neon Gênesis Evangelion*'})
break
case 'mirainikki':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/mirai nikki.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' abertura de *Mirai Nikki*'})
break
case 'deathnote':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/death note.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' abertura de *Death Note*'})
break
case 'darling':
case 'franxx':
case 'darlinkinthefranxx':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/darling.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' abertura de *Darling in the FRANXX*'})
break
case 'titan':
case 'attackontitan':
case 'shingekinokyojin':
case 'shingeki':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/titan.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' abertura de *Shingeki no Kyojin*'})
break
case 'corpseparty':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
reply (`aguarde,isso pode levar um tempo...`)
wew = fs.readFileSync(`./videos/corpse.mp4`)
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, wew, video, { quoted: mek, thumbnail:akaky, caption: ' abertura de *Corpse Party*'})
break
///fim dos videos
///fim de Openings
case 'gato':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/meow?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'kemonomimi':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/erokemonomimi?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: 'uWu'})
break
case 'lolita2':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/lolis`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'lolita':
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://lolhuman.herokuapp.com/api/random/loli?apikey=genbotkey`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'rr':
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    client.sendMessage(from, ''+ cu+'', text, { quoted: mek })
                    break
case 'dado': 
					kapankah = body.slice(1)
					const elu =['Caiu⚀','Caiu⚁','Caiu⚂','Caiu⚃','Caiu⚄','Caiu⚅']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { quoted: mek })
					break
case 'neko':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/neko?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/uwu`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})

res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
break
case 'foxgirl':
case 'foxygirl':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/foxgirl?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
break

case 'abraco':
case 'abraço':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/cuddle?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
break
case 'orgasm':
case 'ahegao':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/gasm?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 

case 'kitsune':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/erokitsune?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 

case 'yuri':
addFilter
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/yuri`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/eroyuri?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
break
case 'uwu':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/uwu`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 


case 'nekoporn':
case 'nekohentai':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
 if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
if (!isOwner) if (!isPremium) return reply (`Comando exclusivo para usuários Premium, para não haver flood`)
//addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/neko2`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: 'nih'})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/nsfwholoero?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: 'nih'})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/nsfwkemonomimi?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: 'nih'})
ini_buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/anime`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/neko?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
break
case 'ytsrc':     

teks = body.slice(7)  
anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
const objs = []
for(i=0;i< anu.resultados.length; ++i) {
let data = {
rowId: `${prefix}play `+ anu.resultados[i].title,
title: `${prefix}play `+ anu.resultados[i].title
}
objs.push(data)
}
payload = {
listMessage: {
title: "✅ Músicas encotradas ✅",
buttonText: "Mostra lista de músicas",
description: `Palavra chave: ${teks}`,
listType: 1,
sections: [
{
title: "Músicas relacionadas",
rows: objs
}
]
}
}
let preparedPayload = await client.prepareMessageFromContent(from, payload,{});
await client.relayWAMessage(preparedPayload, {waitForAck: true})
break
case 'loli':
case 'lolli':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://docs-jojo.herokuapp.com/api/randomloli`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'test1':
const bufi = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/bj?apikey=brizaloka`)
client.sendMessage(from, bufi, MessageType.gif,{mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: '.'})
break
case 'opening':
case 'openings':
case 'anime':
case 'animes':
reply(`

───────────────────
[MENU OPENINGS]

menu em construção,em breve terá novas Openings
───────────────────

  ${prefix}Another
.....
  ${prefix}CorpseParty
.....
  ${prefix}Darling
.....
  ${prefix}DeathNote
.....
  ${prefix}ElfenLied
.....
  ${prefix}Evangelion
.....
  ${prefix}MiraiNikki
.....
  ${prefix}Overlord
.....
  ${prefix}DeathParade
.....
  ${prefix}SAO
.....
  ${prefix}Titan
.....
  ${prefix}TokyoGhoul

───────────────────
`)
break

case 'ft':
case 'fatalitymenu':
case 'menufatality':
case 'fatalitys':
reply(`
───────────────────
[MENU FATALITYS]
───────────────────

utlize assim: */ft(nome)*
exemplo: */ftScorpion* ou */ftJohnnyCage*

_ Baraka

_ Cassie Cage

_ Cetrion

_ Dvorah

_ Frost

_ Fujin

_ Geras

_ Jacqui

_ Jade

_ Jax

_ Johnny Cage

_ Joker

_ Kabal

_ Kano

_ Kitana

_ Kotal Kahn

_ Kung Lao

_ Liu Kang

_ Mileena

_ NightWolf

_ Noob Saibot

_ Raiden

_ Rambo

_ Robocop

_ Scorpion

_ Shang Tsung

_ Shao Kahn

_ Sheeva

_ Sindel

_ Skarlet

_ Spawn

_ Subzero

_ Terminator

────────────────
`)
break
case `galeria`:
case `fotos`:
case 'midias':
if (isBan) return reply(` vc está banido `)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')

client.sendMessage(from, `✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

🄶🄰🄻🄴🅁🄸🄰

➟ ${prefix}ft
➟ ${prefix}fs
➟ ${prefix}baka
➟ ${prefix}anime

➟ ${prefix}abraço
➟ ${prefix}avatar
➟ ${prefix}ahegao
➟ ${prefix}foxgirl
➟ ${prefix}kemonomimi
➟ ${prefix}kitsune
➟ ${prefix}loli
➟ ${prefix}megumin
➟ ${prefix}neko
➟ ${prefix}shinobu
➟ ${prefix}uwu
➟ ${prefix}waifu
➟ ${prefix}wallpaper
➟ ${prefix}yuri

➟ ${prefix}cachorro
➟ ${prefix}gato
➟ ${prefix}pandared
➟ ${prefix}lagarto
➟ ${prefix}dogzim
➟ ${prefix}koala
➟ ${prefix}ganso
➟ ${prefix}pássaro
➟ ${prefix}raposa

🔞 Hentai:

➟ ${prefix}albedohot
➟ ${prefix}anal
➟ ${prefix}boobs
➟ ${prefix}boquete
➟ ${prefix}cum
➟ ${prefix}feet
➟ ${prefix}femdom
➟ ${prefix}futanari
➟ ${prefix}hentai
➟ ${prefix}hot
➟ ${prefix}keta
➟ ${prefix}kuni
➟ ${prefix}muitohentai
➟ ${prefix}nekohentai
➟ ${prefix}pussy
➟ ${prefix}spank
➟ ${prefix}waifuhentai
➟ ${prefix}yurihentai

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏




║▌│█║▌│ █║▌│█│║▌║
      Albedo by Gabriel®
          554991579631`, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})

break
case 'menuhentai':
case 'hentaimenu':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)

client.sendMessage(from, `🔞 Hentai:

➟ ${prefix}albedohot
➟ ${prefix}anal
➟ ${prefix}boobs
➟ ${prefix}boquete
➟ ${prefix}cum
➟ ${prefix}feet
➟ ${prefix}femdom
➟ ${prefix}futanari
➟ ${prefix}hentai
➟ ${prefix}hot
➟ ${prefix}keta
➟ ${prefix}kuni
➟ ${prefix}muitohentai
➟ ${prefix}nekohentai
➟ ${prefix}pussy
➟ ${prefix}spank
➟ ${prefix}waifuhentai
➟ ${prefix}yurihentai`, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})

break
case `maker`:
if (isBan) return reply(` vc está banido `)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')

client.sendMessage(from, `✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

🄼🄰🄺🄴🅁

*edição de áudio:*
➟ ${prefix}adolesc
➟ ${prefix}bass
➟ ${prefix}bass2
➟ ${prefix}esquilo
➟ ${prefix}estourar
➟ ${prefix}fast
➟ ${prefix}grave
➟ ${prefix}grave2

*edição de vídeos:*
➟ ${prefix}fastvid
➟ ${prefix}slowvid
➟ ${prefix}reversevid
➟ ${prefix}tomp3

*edição de fotos:*
➟ ${prefix}arma
➟ ${prefix}arteft
➟ ${prefix}cubof
➟ ${prefix}deletef
➟ ${prefix}firef
➟ ${prefix}gtav
➟ ${prefix}paisagem
➟ ${prefix}petmak
➟ ${prefix}preso
➟ ${prefix}qbcabeça
➟ ${prefix}rip
➟ ${prefix}trash
➟ ${prefix}triggered
➟ ${prefix}vidroqb
➟ ${prefix}wanted
➟ ${prefix}zombie

*plaquinhas:*
➟ ${prefix}plaq
➟ ${prefix}plaq2
➟ ${prefix}plaq3
➟ ${prefix}plaq4
➟ ${prefix}plaq5
➟ ${prefix}plaq6
➟ ${prefix}plaq7

*logos:*
➟ ${prefix}8bit
➟ ${prefix}amongus
➟ ${prefix}areia
➟ ${prefix}bannergold
➟ ${prefix}batle
➟ ${prefix}blood
➟ ${prefix}bracelet
➟ ${prefix}break
➟ ${prefix}carbon
➟ ${prefix}cemiterio
➟ ${prefix}coffe
➟ ${prefix}coffe2
➟ ${prefix}colaq
➟ ${prefix}comentarioL
➟ ${prefix}comporn
➟ ${prefix}copo
➟ ${prefix}cslogo
➟ ${prefix}fire
➟ ${prefix}folha
➟ ${prefix}folha2
➟ ${prefix}folha3
➟ ${prefix}folha4
➟ ${prefix}folha5
➟ ${prefix}glitch
➟ ${prefix}gold
➟ ${prefix}googlelogo
➟ ${prefix}grafity
➟ ${prefix}grass
➟ ${prefix}hallowen
➟ ${prefix}harryp
➟ ${prefix}horror
➟ ${prefix}jokerlogo
➟ ${prefix}lobometal
➟ ${prefix}love
➟ ${prefix}luxury
➟ ${prefix}madeira
➟ ${prefix}metalblue
➟ ${prefix}metalgold
➟ ${prefix}narutobanner
➟ ${prefix}natal
➟ ${prefix}neon
➟ ${prefix}neon2
➟ ${prefix}neondevil
➟ ${prefix}neve
➟ ${prefix}ossos
➟ ${prefix}papel
➟ ${prefix}pink
➟ ${prefix}placa
➟ ${prefix}pornhub
➟ ${prefix}pubg
➟ ${prefix}romantic
➟ ${prefix}shadow
➟ ${prefix}show
➟ ${prefix}space
➟ ${prefix}steel
➟ ${prefix}stone
➟ ${prefix}style
➟ ${prefix}thunder
➟ ${prefix}toxic
➟ ${prefix}vidro
➟ ${prefix}wooden

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏





║▌│█║▌│ █║▌│█│║▌║
      Albedo by Gabriel®
          554991579631`, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})

break






const comandost = totalcmd
const useTime = getRegisterTime(sender) 
const users = `${_level.length}`
const chatss = `${totalchat.length}`
break 
case 'pinterest':        
if (isBan) return reply(` vc está banido `)
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} tiringa`)
reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da sua imagem...*')
pin = await hx.pinterest(q)
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
await client.sendMessage(from, buffer, image, {quoted: mek})
break
case 'anime':
if (isBan) return reply(` vc está banido `)
reply('*「 ❗ 」 Aguarde um pouco amigo(a)...*')
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
client.sendMessage(from,media,image,{quoted:mek, thumbnail:akaky})})
.catch((error) => {
console.log(error); 
})});
break
case 'avatar':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isBan) return reply(` vc está banido `)
reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
wanime = await axios.get(`https://nekos.life/api/v2/img/${command}`)
bufwanime = await getBuffer(wanime.data.url)
client.sendMessage(from, bufwanime, image, { quoted: mek })
break
case 'waifus': case 'uwu':
if (isBan) return reply(` vc está banido `)
reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/${command}`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 		
case 'loli':
if (isBan) return reply(` vc está banido `)
reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
anu = await axios.get('https://nekos.life/api/v2/img/neko')
loliz = await getBuffer(anu.data.url)
client.sendMessage(from, loliz, image, {quoted: mek})
break
case 'loli2':
if (isBan) return reply(` vc está banido `)
reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
anu = await axios.get('https://nekos.life/api/v2/img/fox_girl')
loliz = await getBuffer(anu.data.url)
client.sendMessage(from, loliz, image, {quoted: mek})
break
case 'plaq':
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/fotobundatop.jpg?text.0.text=${teks}&text.0.position.x=-61%25&text.0.position.y=-8%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break
case 'plaq6':
if (args.length < 1) return reply(`${prefix}plaq6 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break
case 'plaq2':
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break
case 'plaq3':
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break
case 'plaq4':
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break
case 'plaq5':
if (args.length < 1) return reply(`${prefix}plaq5 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
plaq = ` *Plaquinha feita ✓* `
client.sendMessage(from, buffer, image, {caption: plaq, quoted: selo, sendEphemeral:true, contextInfo : {forwardingScore: 500, isForwarded:true}})
break
case 'plaq7':
teks1 = body.slice(5) 
if (teks1.length < 1) return reply('Use no mínimo 1 Letras!')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
reply(' *❲❗❳ Aguarde* ') //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
client.sendMessage(from, buffer, image, {caption: plaq, quoted: selo, sendEphemeral:true})
break
case 'msg':
case 'rankmsg':
case 'mensagens':
_msgContage.sort((a, b) => (a.message < b.message) ? 1 : -1)
let leaderboardkvl = '🏆  《 Rᴀɴᴋɪɴɢ ᴅᴇ Mᴇɴsᴀɢᴇɴs 》  🏆\n'
let nm = 0
try {
for (let i = 0; i < 10; i++) {
nm++
leaderboardkvl += `
┏🌖•──•────────•──•🌘┓
┣❲📱❳「${nm}」 @${_msgContage[i].user.replace('@s.whatsapp.net', '')} 
┣❲💬❳「Mᴇɴsᴀɢᴇɴs : ϟ${_msgContage[i].message}
┣❲👥❳ Gʀᴜᴘᴏ: ϟ${_msgContage[i].grupo}
┗───────「★」───────┚`
}
client.sendMessage(from, leaderboardkvl, text, {quoted: fmsg})
} catch (err) {
console.error(err)
await reply(`Maximo 10 Pessoas No grupo!`)
}
break
case 'rg':
case 'registrar':
case 'registro':
case 'register':
if (isUser) return reply(`┏ ✘「͢registroꫂ」✘┓\n┣───────────────\n┣❲❗❳ Voce ja possui registro\n┣❲❗❳ seja feliz ${pushname}\n┗━━━━━━━━━━━━━━┈`)
	const serialUser = createSerial(20)
	try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
	addRegisteredUser(sender, serialUser)
const asLevel = getLevelingLevel(sender)
const asXp = getLevelingXp(sender)
const dpter = `          ✨ *Registramento* ✨
•⳹❋ཻུ۪۪⸙ཻུ⸙。　•　✧ ﾟ　。.•.  ﾟﾟཻུ⸙ཻུ⸙❋۪۪⳹
.　。⊱͢Nmr: @${sender.split("@")[0]}✔️
.　。　•　✦　ﾟ　✭　。.　。✮ ✪
ﾟ•.ﾟ⊱͢Nome: ${pushname}✔️ﾟ•.ﾟﾟ
.✧　。　•　 ⁑　ﾟ　✮　。　ﾟ•..ﾟ✰
　.✦.⊱͢Tempo: ${time}✔️ﾟ•✦
.✰　。　•　 ✯　ﾟ　。.　。•　
ﾟ•..ﾟ⊱͢Nivel: ${asLevel}✔️.ﾟ✫•..ﾟ。　
.　。　•　 ✥　ﾟ　✫　。.　。✯　•　
★⊱͢Xpꫂ: ${asXp}✔️≛•..ﾟ✩.。.ﾟ
.　。　•　 ✷　ﾟ　✶　。.　
.ﾟ⊱͢Patente: ${patt}✔️✸⁂
⳹❋ཻུ۪۪⸙
.　。　•　 　ﾟ　　。
✘➫ Parabens, você esta registrado!✅\nEscreva ${prefix}menu
Não esϙueça de ver as regras do grupo
e você recebeu ${dinheiro} em dólares, para utilizar com o comando que deseja!`
xp = Math.floor(Math.random() * 10) + 3000
dinhero = Math.floor(Math.random() * 100) + 300
addLevelingXp(sender, xp)
addKoinUser(sender, dinhero)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp* e ${dinhero} em *Dólar*`
reply(recompensa)
wtujuh = fs.readFileSync('./assets/voz/vitória.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
daftarimg = await getBuffer(ppimg)
client.sendMessage(from, daftarimg , MessageType.image, {caption: dpter, quoted: selo})
console.log(color('[Registro]','red'), color(time, 'gray'), 'Serial:', color(serialUser, 'cyan'), color('no grupo:', 'gray'), color(groupName, 'red'))
break
case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${setting.NamaBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].jid.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
client.sendMessage(from, leaderboardlvl, text, {sendEphemeral: true, quoted: selo})
} catch (err) {
console.error(err)
await reply(`10 Pessoas No grupo!`)
}
break
case 'bateria':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
reply('《 Aguarde, esta informação é apenas para saber a porcentagem da bateria do celular do Bot 》')
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=Bateria&text2=${battre}%&theme=battlefield`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image,  {quoted: { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "caption": `${battre}%🔋`,}}}})
break
case 'addpremium':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 
case 'addsuprem':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
if (!issupre) return 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
supre.push(`${mentioned}`)
fs.writeFileSync('./src/@jimp/supre.json', JSON.stringify(supre))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de super suprem com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 
case 'delsuprem':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
if (!issupre) return 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
supre.splice(`${mentioned}`)
fs.writeFileSync('./src/@jimp/supre.json', JSON.stringify(supre))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários super suprem✖`
mentions(`${susp}`, mentioned, true)   
break 
case 'unblocksp':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
if (!issupre) return 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break
case 'delpremium':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break 
case 'online':
case 'listonline': 
if (!isOwner) if (!isPremium) addFilter(from)  
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '𝒍𝒊𝒔𝒕𝒂 𝒅𝒆 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒐𝒏𝒍𝒊𝒏𝒆𝒔:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
 quoted: mek, thumbnail:akaky,
 contextInfo: {
 mentionedJid: online
}
})
break
case 'seradm':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
client.groupMakeAdmin(from, [sender])
reply (` ｡◕‿◕｡ como quiser mestre. Agora vc é adm`)
break

case 'deixaradm':
case 'merebaixe':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
client.groupDemoteAdmin(from, [sender])
reply (` ｡◕‿◕｡ como quiser mestre. Agora vc não é mais um adm`)
break
case 'on':
case 'online':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
var value = '🟢 *ONLINE*'
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break
case 'off':
case 'offline':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
var value = '🔴 *OFFLINE*'
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break
case 'criargp':          //case by: Bielzinho-bot
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
const gp = args.join(' ')
if (!gp) return reply('*Escreva o nome do grupo que vc quer criar....*')
var group = await client.groupCreate(`${gp}`, [sender])
reply(`*Grupo criado com sucesso*\n*Nome do grupo :* *${gp}*`)
client.sendMessage(group.gid, `Bem vindo ao grupo amigo(a)`, MessageType.text, {quoted: mek})
break
case 'menudono':
case 'menuowner':
if (!isOwner) if (!isPremium) addFilter(from)  
msgFilter.isFiltered(from)
if (isBan) return reply(` vc está banido `)
wew = fs.readFileSync('./lib/logo.mp4') 
await client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: selo, caption: dono(prefix, time)})
break 
case 'menulogos':
case 'menulogo':
if (!isOwner) if (!isPremium) addFilter(from)  
msgFilter.isFiltered(from)
if (isBan) return reply(` vc está banido `)
wew = fs.readFileSync('./lib/logo.mp4') 
await client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: selo, caption: menulogos(prefix)})
break 
case 'lista':
if (!isOwner) if (!isPremium) addFilter(from)  
msgFilter.isFiltered(from)
if (isBan) return reply(` vc está banido `)
wew = fs.readFileSync('./lib/lista.jpg') 
client.sendMessage(from, wew, image, {quoted: selo, caption: lista(prefix, time, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W, X, Y)})
break
case 'legenda': 
gh = body.slice(9)           
var top = gh.split('/')[0]
var bottom = gh.split('/')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Use fotos/adesivos!')
}
await limitAdd(sender)
break
case 'albedo':
albedo = fs.readFileSync(`./lib/albedoqm.jpg`)
client.sendMessage(from, albedo, image, { quoted: mek, thumbnail:akaky, caption: ' \n 𝐀𝐋𝐁𝐄𝐃𝐎 \n ─────────────────── \n\n Dados da personagem: \n\n ─────────────────── \n 𝐴𝑁𝐼𝑀𝐸 \n *Overlord* \n\n 𝑁𝑂𝑀𝐸 𝐸𝑀 𝐽𝐴𝑃𝑂𝑁Ê𝑆 \n アルベド \n\n 𝑃𝑅𝑂𝑁𝑈𝑁𝐶𝐼𝐴 𝐷𝑂 𝑁𝑂𝑀𝐸 \n Arubedo \n\n 𝐴𝑃𝐸𝐿𝐼𝐷𝑂𝑆 \n Misericordiosa, Demônio Branco Puro \n\n 𝑆𝐸𝑋𝑂 \n Feminino \n\n 𝐴𝐿𝑇𝑈𝑅𝐴 \n 170cm \n\n 𝑅𝐴Ç𝐴 \n Raça Heteromórfica, Súcubo \n\n 𝐹𝐴𝑀Í𝐿𝐼𝐴 \n Nigredo (Irmã mais velha); Rubedo (Irmã mais nova)\n\n 𝐿𝑂𝐶𝐴𝐿 𝑂𝑁𝐷𝐸 𝑅𝐸𝑆𝐼𝐷𝐸 \n Grande Tumba de Nazarick, Sala do Trono → Sala no 9º Andar \n\n ─────────────────── \n\n    Albedo (アルベド) é a Supervisora dos Guardiões dos Andares da Grande Tumba de Nazarick. Ela é encarregada da administração e supervisão das atividades dos sete Guardiões, sendo assim, ela está hierarquicamente acima de todos os NPCs de Nazarick. Ela é a irmã mais velha de Nigredo e a irmã mais nova de Rubedo. Juntamente com suas irmãs, ela foi criada por Tabula Smaragdina. \n\n    Extremamente leal e apaixonada, Albedo tende a ser manhosa e apegada a Ainz, as vezes mostrando tendências obsessivas quando ocorrem situações que envolvem ele. Ela está sempre competindo por sua atenção, mostrando explosões de ciúmes a qualquer momento que alguém tenta ficar próximo dele. Apesar disso, ela afirma que ele como regente supremo, seria estranho ter apenas uma esposa, e que ela ficaria contente de ele ter outra esposas, contanto que ela fosse a que ele amasse mais.\n    Devido sua natureza como súcubo e como ela foi programada por Ainz para ama-lo, Albedo é bem direta. Ela as vezes perde o controle perto dele quando ele diz algo, chegando ao ponto de tentar abusa-lo. \n\n ─────────────────── \n bot Albedo by Gabriel \n wa.me//554991579631 \n ─────────────────── \n\n'})
albedo = fs.readFileSync(`./assets/abertura.ogg`)
client.sendMessage(from, albedo, audio)
break
case 'grupoinfo':
case 'regras':
case 'infogrupo':
case 'infogp':
case 'gpinfo':
client.updatePresence(from, Presence.composing)
ppUrl = await client.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, caption: `*NOME* : ${groupName}\n*MEMBROS* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* :\n\n ${groupDesc}`})
break 
case  'rename':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isQuotedSticker) return reply('Marque uma figurinha...')
if (args.length < 1) return reply(`Exemplo: ${prefix}rename Pedro|5501328282\nEmojis nem letras modificadas, não funciona`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
dfp = args.join(' ').split('|')
satu = dfp[0] !== 'ALE' ? dfp[0] : `BOT`
dua = typeof dfp[1] !== 'undefined' ? dfp[1] : `${setting.NamaBot}`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, client, mek, from)
break 
case 'getstickker':
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
gtr = body.slice(12)
lur = await fetchJson(`http://docs-jojo.herokuapp.com/api/getsticker?q=${gtr}`)  
const ti =['0','1','2','3','4','5','6','7','8','9','10','11','12','13']
const kl = ti[Math.floor(Math.random() * ti.length)]
send = await getBuffer(lur.result.sticker[kl])
client.sendMessage(from, send, MessageType.image, {quoted: mek})
break



case 'block':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break
case 'unblock':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'entrargp':		           
               
           if (isBan) return reply(`banido`)           
               
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Cadê o link do gp?`)
		            hen = args[0]
		            if (!q) return fakestatus('Insira o link do grupo')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('certifique-se de que o link está correto')
		            var response = await akame.acceptInvite(codeInvite)
		            fakestatus('SUCESSO')
		            } catch {
		            fakegroup('LINK TA COM ERROR!')
		            }
		            break
case 'banativos':
if(!isOwner) return reply(mess.only.ownerB)
if(!isGroup) return reply(mess.only.group)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) { 
var indnum = numbersIds.indexOf(obj.jid)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
client.groupRemove(from, [obj.jid])
}
}
} else {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
client.groupRemove(from, [obj.jid])
}
}
}
}
break
case 'atividade':
case 'atividades':  
try{
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = ` ⋆⃟ۣۜ᭪➣ Atividade dos membros do grupo:\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) {
var indnum = numbersIds.indexOf(obj.jid)
teks += ` ⋆⃟ۣۜ᭪➣ @${countMessage[ind].numbers[indnum].jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n ⋆⃟ۣۜ᭪➣ Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
} else {
teks += ` ⋆⃟ۣۜ᭪➣ @${obj.jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensagens: 0\n ⋆⃟ۣۜ᭪➣ Comandos: 0\n`
}
mem.push(obj.jid)
}
client.sendMessage(from, teks, extendedText, {quoted: mek, thumbnail:akaky, contextInfo:{mentionedJid: mem}})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'checkativo':
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isGroup) return reply(mess.only.group)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break



case 'rankativo5':
case 'rankativos5':  
case 'topativos5':
case 'topativo5':
case 'top5ativo':
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isGroup) return reply(mess.only.group)

var ind = groupIdscount.indexOf(from)

countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardiy = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardiy += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardiy += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardiy += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 4) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n` 
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardiy, mentioned_jid, true)
} catch (err) {
			console.log(err)

}
break

case 'rankativo10':
case 'rankativos10':  
case 'topativos10':
case 'topativo10':
case 'top10ativo':
case 'top10ativos':
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isGroup) return reply(mess.only.group)

var ind = groupIdscount.indexOf(from)

countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardiy = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 10; i++) {
if (i == 0) boardiy += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardiy += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardiy += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 4) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n` 
else if (i == 5) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n` 
else if (i == 6) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n` 
else if (i == 7) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n` 
else if (i == 8) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n` 
else if (i == 9) boardiy += `${i + 1}º 🏁 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n` 
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardiy, mentioned_jid, true)
} catch (err) {
			console.log(err)

}
break

case 'rankativo':
case 'rankativos':  
case 'topativos':
case 'topativo':
case 'top3ativo':
case 'top3ativos':
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isGroup) return reply(mess.only.group)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await client.sendMessage(from, `É necessário 3 jogadores para se construir um ranking`, text, {quoted: mek})
}
break

case 'join': case 'entrar':
if (!isOwner) return reply(`só meu dono pode usar esse comando`)
hen = args[0]
if (!q) return fakestatus('cade o link do grupo')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await client.acceptInvite(codeInvite)
            fakestatus('Sucesso')
break
case 'unbangp':
case 'unmute':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(mess.only.ownerB)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Grupo desmutado... agora os comandos estão disponíveis`)
break
case 'dlist':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isPremium) return reply(`Este comando é apenas para o Tipo Premium apenas ${prefix}owner Para comprar premium`)
 client.sendMessage(from, dlist(prefix), text, { quoted: mek })
break
case 'menupremium':
case 'menuprem':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isPremium) return reply(`Este comando é apenas para o Tipo Premium apenas ${prefix}owner Para comprar premium`)
await client.sendMessage(from, menuprem(prefix), text, {quoted: selo })
break 
case 'destrava':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isPremium) return reply(`Este comando é apenas para o Tipo Premium apenas ${prefix}owner Para comprar premium`)
client.sendMessage(from, destrava(prefix), text, { quoted: mek })
break 
case 'ytsearch':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('Cade o txt?')
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await client.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Titulo: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `${setting.NamaBot}`
await client.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./lib/logo.jpg'),quoted: mek, thumbnail:akaky, caption: ytresult})
await limitAdd(sender)
break 
case 'ytmp4':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)        
if (!q) return reply('Use o comando juntamente com um link do youtube')
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(`O seguinte link: "${body.slice(command + 2)}" não é um link válido do youtube`)
reply('*「 ❗ 」 Aguarde um pouco, baixando seu vídeo...*')
ase = await y2mateV(q).catch(e => {
reply('Erro,tente novamente😔')
})
vidionye = await getBuffer(ase[0].link)
client.sendMessage(from, vidionye, video, {mimetype: 'video/mp4', filename: `${ase[0].output}`, quoted: mek
})
break
case 'ytmp4':
if (args.length < 1) return reply('Cadê o url vey?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
qwe = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=HIRO`, {method: 'get'})
if (qwe.error) return reply(qwe.error)
teks = `*Titulo* : ${qwe.judul}`
thumb = await getBuffer(qwe.thumbnail)
client.sendMessage(from, thumb, image, {quoted: mek, thumbnail:akaky, caption: teks})
buffer = await getBuffer(qwe.url)
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${qwe.judul}.mp4`, quoted: mek})
break
case 'videourl':
case 'videopralink':  
case 'videoupload':
case 'uploadvideo':
case 'mp4upload':
case 'uploadmp4':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')  
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await client.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('Marque um vídeo')
}
break
case 'imgpralink': case 'tourl':       
case 'upload':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')      
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var jnckk = await  client.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
.then(data => {
var caps = `╭─「 IMAGEM PARA LINK 」\n│\n│• ID : ${data.id}\n│• Tipo : ${data.image.mime}\n│• Extensão : ${data.image.extension}\n│\n│• LINK : ${data.display_url}\n╰─────────────────────`
ibb = fs.readFileSync(jnckk)
client.sendMessage(from, ibb, image, { quoted: mek, thumbnail:akaky, caption: caps })
})
.catch(err => {
throw err 
})
await limitAdd(sender)
break
case 'bcgp':
case 'bcgc':  
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isGroupAdmins) return reply('Precisa ser adm')
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = mek.participant
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of fgp) {
client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.jid, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break
case 'playmp4':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isPremium) return reply(`só premium`)
if (isBan) return reply('VOCÊ FOI BANIDO DE UTILIZAR OS COMANDOS DO BOT!!')      
if (args.length === 0) return reply(`Use assim : *${prefix + command}* _O título da música_`) 
const uangsaku = Math.floor(Math.random() * 1) + 0.3
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
aramas = await yts(q);
aramat = aramas.all 
mulaikah = aramat[0].url      
console.log(color('[YT PLAY VÍDEO]', 'magenta'), color(`PROCURANDO O VÍDEO NO YT`, 'yellow'))       
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 1000000) return sendMediaURL(from, thumb, `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n*Link* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP4\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(mess.error.api)
}
await limitAdd(sender)
break 
case 'facebook':
case 'facemp4':  
case 'fb':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT!!')
if (!q) return reply(mess.wrongFormat)
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.Iv)
teks = args[0]
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」

• *Título:* ${a.judul}
• *Fonte :* ${a.source}
• *Tamanho :* ${a.size}
• *Qualidade :* ${a.quality}
• *Modelo :* ${a.type}
• *Nome do arquivo :* ${a.judul}.${a.type}`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: mek})
sendFileFromUrl(a.link, video, {mimetype: 'video/mp4',quoted: mek})
await limitAdd(sender)
break
case 'ytmp3':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT!!')
if (args.length === 0) return reply(`Use assim :  *${prefix + command} [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(`link inválido`)
try {
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesizeF) >= 30000) return sendMediaURL(from, thumb, `*Dados obtidos com sucesso!*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Para tamanhos superiores a 30 MB, é apresentado na forma de um link_`)
captions = `*「 YOUTUBE MP3 」*\n\n*Titulo* : ${title}\n*Ext* : mp3\n*Tamanho* : ${filesizeF}\n\n_Enviando o áudio..._`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(mess.error.api)
}
await limitAdd(sender)
break 

case 'play2': 
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
 if (!isPremium) return reply (`só usuários Premium`)
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
reply(` se a música não for enviada em alguns minutos, tente utilizar outros players! (play, play2, play3, play4)\nexemplo: */play2 heathens*`)
aramas = await yts(q);
aramat = aramas.all 
var mulaikah = aramat[0].url							
console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
 try {
 yta(mulaikah)
 .then((res) => {
 const { dl_link, thumb, title, filesizeF, filesize } = res
 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho do arquivo* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(err)
}
await limitAdd(sender)
break 

case 'play4': 
if (!isPremium) return reply(`so Premium`)
if (isBanned) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
reply(mess.wait)
aramas = await yts(q);
aramat = aramas.all 
var mulaikah = aramat[0].url							
console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
 try {
 yta(mulaikah)
 .then((res) => {
 const { dl_link, thumb, title, filesizeF, filesize } = res
 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 .then(async (a) => {
 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho do arquivo* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(err)
}
await limitAdd(sender)
break
case 'play5':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
 if (!isPremium) return reply (`só usuários Premium`)
if (args.length < 1) return reply('Cade o texto mano? tu é burro? use assim: \n\n*/play3 SEU TEXTO* ')
addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
query = args.join(" ")
url = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${query}&apikey=apiteam`)
resu = `Titulo: ${url.titulo}\n*Musica encontrada!*`
imagem = await getBuffer (url.thumb)
audioa = await getBuffer (url.url)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky, caption: resu})
client.sendMessage(from, audioa, audio, {quoted:mek, mimetype: 'audio/mp4'})
break 
case 'spotify':
if (!isOwner) if (!isPremium) addFilter(from)  
if (args.length == 0) return 
reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
url = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=genbotkey&url=${url}`)
get_result = get_result.result
ini_txt = `Titulo : ${get_result.title}\n`
ini_txt += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.thumbnail)
await client.sendMessage(from, thumbnail, image, {quoted: mek, thumbnail:akaky, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
break 
case 'spotifyy':
if (!isOwner) if (!isPremium) addFilter(from)  
if (args.length == 0) return 
reply(`Exemplo: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
url = args[0]
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/spotifyurl?url=${url}`)
get_result = get_result.result
ini_txt = `Titulo : ${get_result.title}\n`
ini_txt += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.image)
await client.sendMessage(from, image, image, {quoted: mek, thumbnail:akaky, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
break 
case 'metadinha':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
tdt = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`) 
cowo = await getBuffer(tdt.result.male)
client.sendMessage(from, cowo, image, {quoted: mek})
cewe = await getBuffer(tdt.result.female)
client.sendMessage(from, cewe, image, {quoted: mek})
break
case 'placa': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
jld = body.slice(7)
jr = await getBuffer(`https://api-gdr2.herokuapp.com/api/mudeminhaopiniao?text=${jld}`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'spotifysrc':
if (!isOwner) if (!isPremium) addFilter(from)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica sad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=genbotkey&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Titulo : ${x.title}\n`
ini_txt += `Artista : ${x.artists}\n`
ini_txt += `Duração : ${x.duration}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Previas : ${x.preview_url}\n\n\n`
}
reply(ini_txt)
break
case 'arma':
case 'figuarma':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
lfy = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${lfy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'wanted':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
qkl = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${qkl.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/wanted?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'calunia':
if (isBan) return reply(` vc está banido `)
if (args.length == 2) return reply(`Use assim: ${prefix + command} 558167892920|sou gay|Já sabia\nPode usar qualquer coisa`)
k = `${body.slice(10)}`
txt1 = k.split("|")[0];
txt2 = k.split("|")[1];
txt3 = k.split("|")[2];
 client.sendMessage(from, `${txt3}`,text,{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
 break
case 'triggered':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
dsr = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${dsr.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/triggered?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'rip':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
qhy = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${qhy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/rip?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'saycat': 
data = await fetchJson(`https://pastebin.com/raw/cVDj0qz6`)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
buffer = await getBuffer(nimek.result)
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, thumbnail:akaky, caption: `saycat`})
 break
case 'trash':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
der = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${der.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/trash?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'preso':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
lder = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${lder.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'perfil':
	try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const asLvl = getLevelingLevel(sender)
const ssXp = getLevelingXp(sender)
const dptr = `          ✨ *⊱͢Olá:${pushname}✔️* ✨
•⳹❋ཻུ۪۪⸙ཻུ⸙。　•　✧ ﾟ　。.•.  ﾟﾟཻུ⸙ཻུ⸙❋۪۪⳹
.　。⊱͢Nmr: @${sender.split("@")[0]}✔️
.　。　•　✦　ﾟ　✭　。.　。✮ ✪
.✧　。　•　 ⁑　ﾟ　✮　。　ﾟ•..ﾟ✰
　.✦.⊱͢Tempo: ${time}✔️ﾟ•✦
.✰　。　•　 ✯　ﾟ　。.　。•　
ﾟ•..ﾟ⊱͢Nivel: ${asLvl}✔️.ﾟ✫•..ﾟ。　
.　。　•　 ✥　ﾟ　✫　。.　。✯　•　
★⊱͢Xpꫂ: ${ssXp}✔️≛•..ﾟ✩.。.ﾟ
.　。　•　 ✷　ﾟ　✶　。.　
.ﾟ⊱͢Patente: ${patt}✔️✸⁂
⳹❋ཻུ۪۪⸙
.　。　•　 　ﾟ　　。
✘➫ Olá Seja Bem Vindo(a),  ao Seu Perfil.
✅\nEscreva ${prefix}menu`
daftarimg = await getBuffer(ppimg)
client.sendMessage(from, daftarimg , MessageType.image, {caption: dptr, quoted: selo})
break
case 'hitler':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/hitler?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'deletef':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/deletarCanvas?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'petmak':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'heroiimg':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://dapuhy-api.herokuapp.com/api/canvas/crush?img=${imgtrg}&apikey=eZmRwQ7L04xF6d9`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'exec':
if (!isOwner) return reply(`só dono`)
return eval(`${args.join(' ')}`)
break
case 'execut':
if (!isGroupAdmins) return reply('só dono')
return eval(`${args.join(' ')}`)
break
case 'executt':
if (isBan) return reply(` vc está banido `)
if (args.length < 1) return reply('cade o text' + `Wa Automate function/função da Wa Automate.\n\nEx: ${prefix}execut `)
if (!isGroupAdmins) return reply('só Adm')
try {
const waitEval = (cmd) => { return new Promise((resolve, reject) => { eval(cmd) }) }
(async () => { await waitEval(body.slice(8).replace('await ', '')) })()
} catch (error) {
reply(from, 'deu erro', text)
console.log(color('[EXEC]', 'crimson'), color(`→ Obtive erros no comando ${prefix}${command} → erro - Você pode ignorar.`, 'gold'))
}
break 
case 'tapa':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
const jrq = fs.readFileSync('./lib/tapa.mp4')
client.sendMessage(from, jrq,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break
case 'chute':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
const ijry = fs.readFileSync('./lib/chute.mp4')
client.sendMessage(from, ijry,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break 
case 'rankcornos':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(`Esse comando so pode ser usado em grupos parsa`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.jid.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.jid.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.jid.split('@')[0]}\nCom uma porcentagem de ${porc}\n@${cornos4.jid.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.jid.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NamaBot} ⚡`
membr.push(cornos1.jid)
membr.push(cornos2.jid)
membr.push(cornos3.jid)
membr.push(cornos4.jid)
membr.push(cornos5.jid)
mentions(ytb, membr, true)
break
case 'rankotakus':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(`Comando so pode ser utiizado em grupos parsa`)
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku8 = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus8 = otaku8[Math.floor(Math.random() * otaku8.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.jid.split('@')[0]}\n@${otakus2.jid.split('@')[0]}\n@${otakus3.jid.split('@')[0]}\n@${otakus4.jid.split('@')[0]}\n@${otakus5.jid.split('@')[0]}\n@${otakus6.jid.split('@')[0]}\n@${otakus7.jid.split('@')[0]}\n@${otakus8.jid.split('@')[0]}\n@${otakus9.jid.split('@')[0]}\n@${otakus10.jid.split('@')[0]}\n\n⚡ ${setting.NamaBot} ⚡`
membr.push(otakus1.jid)
membr.push(otakus2.jid)
membr.push(otakus3.jid)
membr.push(otakus4.jid)
membr.push(otakus5.jid)
membr.push(otakus6.jid)
membr.push(otakus7.jid)
membr.push(otakus8.jid)
membr.push(otakus9.jid)
membr.push(otakus10.jid)
mentions(ytb, membr, true)
break
case 'rankpau':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.jid.split('@')[0]}\n${pc1}\n@${paus2.jid.split('@')[0]}\n${pc2}\n@${paus3.jid.split('@')[0]}\n${pc3}\n@${paus4.jid.split('@')[0]}\n${pc4}\n@${paus5.jid.split('@')[0]}\n${pc5}\n\n ${setting.NamaBot}`
membr.push(paus1.jid)
membr.push(paus2.jid)
membr.push(paus3.jid)
membr.push(paus4.jid)
membr.push(paus5.jid)
mentions(pdr, membr, true)
break 
case 'mediafire':
if (args.length < 1) return reply('Digite o link do arquivo que deseja buscar no Mediafire')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido')
reply('*「 ❗ 」 Aguarde um pouco, baixando seu jogo/app...*')
teks = args.join(' ')
const resm = await mediafireDl(teks)
result = `*「  MEDIAFIRE DOWNLOAD  」*

*Nome :* ${resm[0].nama}
*Tamanho :* ${resm[0].size}
*Link :* ${resm[0].link}`
reply(result)
sendFileFromUrl(resm[0].link, document, {mimetype: resm[0].mime, filename: resm[0].nama, quoted: mek})
break
case 'gtav':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/gtav?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'zombie':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'firef':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/fireAnimation?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'vidroqb':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/brokemirror?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'arteft':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/artePhoto?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case '2arma':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/crossgun?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'armast':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/gunscircle?apikey=brizaloka&text=Bandido(a)&text2=da área&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {quoted: mek})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'effect':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://leyscoders-api.herokuapp.com/api/imgmaker/firework?url=${imgtrg}&apikey=dappakntlll`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, video, {quoted: mek, thumbnail:akaky, mimetype: 'video/mp4'})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'paisagem':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/mixGalaxy?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'acess':
if (!isOwner) return reply(mess.only.ownerB)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return client.sendMessage(from, `root@  Albedo_bot:~ ${err}`, text, { quoted: mek })
if (stdout) {
client.sendMessage(from, stdout, text)
}
})
break
case 'cubof':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/cuboFoto1?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'wallimg':
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/phonewallpaper?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'qbcabeca':
case 'qbcabeça':  
if (!isOwner) if (!isPremium) addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/puzzle?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'toxic':
if (!isOwner) if (!isPremium) addFilter(from)  
teks = body.slice(7)
anu = await fetchJson(`https://kratos-rest-api.herokuapp.com/api/textpro/toxic?apikey=kratos&texto=${teks}`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
buffer = await getBuffer(anu.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, thumbnail: null})
break
case 'grafity':
if (!isOwner) if (!isPremium) addFilter(from)  
txt = body.slice(9)
teks1 = txt.split("|")[0];
teks2 = txt.split("|")[1];
anu = await fetchJson(`https://kratos-rest-api.herokuapp.com/api/textpro/graffiti?apikey=kratos&texto1=${teks1}&texto2=${teks2}`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
buffer = await getBuffer(anu.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, thumbnail: null})
break
case 'thunderv2':
vd = body.slice(11)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=${vd}`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
buffer = await getBuffer(anu.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, thumbnail: null})
break
case 'transformer':
tv = body.slice(13)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/transformer?apikey=apiteam&texto=${tv}`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
buffer = await getBuffer(anu.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, thumbnail: null})
break
case 'resposta':
if (isBan) return reply(` vc está banido `)
if (args.length == 0) return reply(`Use assim: ${prefix + command} 558167892920|sou gay|Já sabia\nPode usar qualquer coisa`)
k = body.slice(8)
txt1 = k.split("|")[0];
txt2 = k.split("|")[1];
txt3 = k.split("|")[2];
client.sendMessage(from, `${txt3}`,text,{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
break
case 'thunder':
if (!isOwner) if (!isPremium) addFilter(from)  
teks = body.slice(9)
anu = await fetchJson(`https://kratos-rest-api.herokuapp.com/api/textpro/thunder?apikey=kratos&texto=${teks}`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
buffer = await getBuffer(anu.resultado)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, thumbnail: null})
break
case "ppt":
if (!isOwner) if (!isPremium) addFilter(from)
if (args.length < 1) return reply(jrb.tterro())
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(jrb.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NamaBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break
case 'abracar':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/anime/abracar`, {method: 'get'})
buff = await getBuffer(anu.Resultado)
client.sendMessage(from, buff, sticker, {quoted: mek})
break  
case 'ttm2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (args.length < 1) return reply('Cadê o  txt mano?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${args[0]}&cor=ff0&fonte=7`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek})
break  
case 'ttm':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (args.length < 1) return reply('Cadê o  txt mano?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${args[0]}&cor=f0f&fonte=1`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek})
break  
case 'ttm3':
if (!isOwner) if (!isPremium) addFilter(from)
if (isBan) return reply(` vc está banido `)
if (args.length < 1) return reply('Cadê o  txt mano?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${args[0]}&cor=0ff&fonte=3`, {method: 'get'})
 client.sendMessage(from, anu, image, {quoted: mek})
break  
case 'ttm4':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (args.length < 1) return reply('Cadê o  txt mano?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${args[0]}&cor=0ff&fonte=6`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek})
break  
case 'pinterestvid':
if (!isOwner) if (!isPremium) addFilter(from)  
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length == 0) return reply(`Exemplo: ${prefix + command} loli`)
query = args.join(" ")
ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterestvideo?apikey=${lolhuman}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
client.sendMessage(from, ini_buffer, video, 
{ quoted: mek})
break
case 'wallpaper':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
teks = (`anime`)
client.updatePresence(from, Presence.composing)
reply('Pesquisando Aguarde..')
anu = await fetchJson (`https://api-gdr2.herokuapp.com/api/search/gimage?q=${teks}`)
buffer = await getBuffer(anu.result)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky})
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/walpaperanime`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `wallpaper anime celular hd`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
try {
              
                        axios.get('https://nekos.life/api/v2/img/wallpaper').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        client.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek, thumbnail:akaky, caption: 'b-baka >////<' 
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
break
case 'antiracismo':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('')
if ((args[0]) === '1') {
if (isAntiRacismo) return reply('O modo antiracismo já está ativo')
antiracismo.push(from)
fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === '0') {
antiracismo.splice(from, 1)
fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('On para ativar, Off para desligar')
}
break
case 'modonsfw':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Hmmmm')
if ((args[0]) === 'on') {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
nsfw.splice(from, 1)
fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('On para ativar, Off para desligar')
}
break 
break       
      	case 'desl':      	
         	if (!isOwner) if (!mek.key.fromMe) return reply(`Você não e o wa.me/${isOwner} so ele pode usar esse comando kkkk`)
          	offline = true
          	waktuafk = Date.now()
          	anuu = args[0] ? args[0] : 'ativar'
          	alasanafk = anuu
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${isOwner}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}}
          	client.sendMessage(from, `[❗] AGORA EU ESTOU OFFLINE`,MessageType.text,anu)
          	await limitAdd(sender)
break 

case 'shutdown':
case 'desligar':
  if (!mek.key.fromMe && !isOwner) return enviar(`[❗] somente meu criador pode usar o ${prefix + command}`)
  reply(`desligado 😢`) 
       setTimeout(() => {       
                        client.close()
                    }, 3000)			        					
                    await limitAdd(sender)
break

case 'restart':
         
           if (isBan) return reply(`banido`)
if (!isOwner) return reply(`só dono`)
reply(`_Reiniciando..._`)
exec(`node main`)
setTimeout( () => {
					client.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_Reiniciado com sucesso_', text, {quoted: fgclink}) // ur cods
					},4000) // 1000 = 1s, 
					await limitAdd(sender)
break

case 'dogzin':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
await limitAdd(sender)
break
case 'patrik':
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
sendMediaURL(from,media,mess.success)
}
)
.catch((error) => {
console.log(error); 
}
)
});
await limitAdd(sender)
break
case 'gerarnick': 
teks = body.slice(10)
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teks}`)
teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️
🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Térceiro ${send.random_3} 
🍙Quarto ${send.random_4} 
🍙Quinto ${send.random_5}
 
   👾EXTRAS👾
 👾${send.squares}
 👾${send.inverted_squares}
 👾${send.italic}
 👾${send.bold}
 👾${send.future_alien}
 👾${send.asian_1}
 👾${send.asian_2}
 👾${send.squiggle}
 👾${send.squiggle_2}
 👾${send.squiggle_3}
 👾${send.squiggle_4}
 👾${send.neon}
 
 
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
    
    © ${setting.NamaBot}
 `
client.sendMessage(from, teks, text, {quoted: mek})
break
case 'print':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
send = await getBuffer(`https://nurutomo.herokuapp.com/api/ssweb?url=https://${body.slice(7)}`)
client.sendMessage(from, send, image)
break
case 'reiniciar2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isOwner) return reply(mess.only.ownerB)
const dcd = body.slice(11)
console.log("Bot ON novamente")
reply('Reiniciando o bot em alguns segundos...')    
exec(dcd, (err, stdout) => {
if(err) return client.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break	
case 'gokublack':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `gokublack Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'naruto':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `naruto Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'nagaroto':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `nagaroto Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'shikamaru':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `shikamaru Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break 
case 'vegeta':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `vegeta Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'kakashi':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `kakashi Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'sasuke':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `sasuke Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'minato':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `minato Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'luffy':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `luffy Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'zoro':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `Zoro Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'nami':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `Nami Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'nanami':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `nanami Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'sukuna':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `sukuna Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'sakura':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `sakura Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'enel':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DOS BOT!! ')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `enel Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'antifake':
try {
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply(' 1 Para ativar/ 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break
case 'menuadms':
case 'menuadm':
if (!isOwner) if (!isPremium) addFilter(from)  
msgFilter.isFiltered(from)
if (isBan) return reply(` vc está banido `)
wew = fs.readFileSync('./lib/logo.mp4') 
await client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: selo, caption: adms(prefix, time)})
break 
case 'menulite':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wew = fs.readFileSync('./lib/logo.jpg') 
client.sendMessage(from, wew, image, {quoted: selo, caption: menulite(prefix, time)})
break 
case 'tabela':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
client.sendMessage(from, tabela(prefix), text, {quoted: selo})
break 
case 'allcmd':
case 'todososcomandos':
 
msgFilter.isFiltered(from)
if (isBan) return reply(` vc está banido `)
client.sendMessage(from, all(prefix), text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Albedo_bot", 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}})
break
case 'premiumlist':
if (!isOwner) if (!isPremium) addFilter(from)  
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NamaBot}* 」*────`
client.sendMessage(from, tkks.trim(), extendedText, {quoted: mek, thumbnail:akaky, contextInfo: {"mentionedJid": premium}})
break
case 'qrcode':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const tex = encodeURIComponent(body.slice(8))
if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
client.sendMessage(from, bufferr, image, {quoted: mek})
break
case 'wa.me':
case 'wame':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
client.updatePresence(from, Presence.composing) 
options = {
text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}\n\n`,
contextInfo: { mentionedJid: [sender] }
}
client.sendMessage(from, options, text, 
{ quoted: mek } )
break
case 'playstore':
if (!isOwner) if (!isPremium) addFilter(from)  
if (args.length == 0) return
reply(`Exemplo: ${prefix + command} telegram`)
query = args.join(" ")
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/googleplay?q=${query}`)
get_result = get_result.result
ini_mn1k = 'Play Store Pesquisa : \n'
for (var x of get_result) {
ini_mn1k += `Nome : ${x.title}\n`
ini_mn1k += `ID : ${x.appId}\n`
ini_mn1k += `Desenvolvedor : ${x.developer}\n`
ini_mn1k += `Link : ${x.url}\n`
ini_mn1k += `Preço : ${x.priceText}\n`
ini_mn1k += `Preço : ${x.price}\n\n`
}
reply(ini_mn1k)
break
case 'setdesc':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupUpdateDescription(from, `${body.slice(9)}`)
client.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
break
case 'notif':
if (!isOwner) return reply(mess.only.ownerB)
if (!isGroup) return reply('Só em grupo')
teks = `Notificação de @${sender.split("@")[0]}\n*Mensagem : ${body.slice(7)}*`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: teks,
contextInfo: {
mentionedJid: jids
},
quoted: selo
}
await client.sendMessage(from, options, text)
break
case 'speed':
case 'ping':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const timestamp = speed();
const latensi = speed() - timestamp
client.updatePresence(from, Presence.composing) 
uptime = process.uptime()
client.sendMessage(from, 
`SPEED: *${latensi.toFixed(4)} _SEGUNDO_*
TIPO DO BOT: *TERMUX*
*O BOT ESTEVE ATIVO POR*
*${kyun(uptime)}*`, text, { quoted: mek})
break
case 'delete':
case 'del':
case 'd':  
if (!isPremium) return reply('Só premium')
if (!isGroup)return reply(mess.only.group)
client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'travar':
if (isBan) return reply(` vc está banido `)
if (!isOwner) return reply(mess.only.ownerB)
const pesan = body.slice(5)
if (pesan.length > 300000) return client.sendMessage(from, 'ate 300k de caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
const ytb1 = `${pesan}`
const ytb2 = `${pesan}`
const ytb3 = `${pesan}`
const ytb4 = `${pesan}`
var options = {
text: ytb1,
text: ytb2,
text: ytb3,
text: ytb4,
contextInfo: {mentionedJid: [nomor]},
}
client.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
reply('1 trava enviada')
break
case 'play3':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
 if (!isPremium) return reply (`só usuários Premium`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
reply(` se a música não for enviada em alguns minutos, tente utilizar outros players! (play, play2, play3, play4)\nexemplo: */play2 heathens*`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
query = args.join(" ")
url = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${query}&apikey=apiteam`)
resu = `Titulo: ${url.titulo}\n*Musica encontrada!*`
imagem = await getBuffer (url.thumb)
audioa = await getBuffer (url.url)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky, caption: resu})
client.sendMessage(from, audioa, audio, {quoted:mek, mimetype: 'audio/mp4'})
break 
case 'play':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)

if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
reply(` se a música não for enviada em alguns minutos, tente utilizar outros players! (play, play2, play3, play4)\nexemplo: */play2 heathens*`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
query = args.join(" ")
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${query}`)
get_result = get_result.result
ini_buffer = await getBuffer(get_result.thumb)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: get_result.title })
get_audio = await getBuffer(get_result.url)
client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek})
break
case 'dinheiro':  
case 'dinhero':   
case 'grana':  
case 'meudinhero':
 
const uangkau = checkATMuser(sender)
dindin =`┏⊱【 💲 DÓLAR 💲 】⊰━┓\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dólar* : ${uangkau}$\n┗━━━━━━━━━━`
reply(dindin)
break
case 'dardinhero': 
case 'dardinheiro':  
case 'enviargrana':  
if (!isOwner) return reply(mes.only.ownerB)
const recebidor = args[0].replace('@','')
const quantidade = args[1]
if (quantidade <= 1) return reply(`Precisa dar no minímo 1 dólar`)
if (isNaN(quantidade)) return reply(`[❗] USE ASSIM\n ${prefix + command} @526031555030 5`)
if (!recebidor) return reply(`[❗] USE ASSIM\n ${prefix + command} @526031555030 5`)
const add = recebidor + '@s.whatsapp.net'
addKoinUser(add, 0)
reply(`${quantidade} de dólar foi adicionado na conta de @${recebidor}`)
break            	
case 'jooxplay':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
query = args.join(" ")
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
get_result = await fetchJson(`FALTANDO A API${query}`)
get_result = get_result.result
ini_mn1k = `Titulo : ${get_result.info.song}\n`
ini_mn1k += `Duração : ${get_result.info.duration}\n`
thumbnail = await getBuffer(get_result.image)
client.sendMessage(from, thumbnail, image, { quoted: mek, thumbnail:akaky, caption: ini_mn1k })
get_audio = await getBuffer(get_result.audio[0].link)
client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek})
break
case 'pinterest2':
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
get_result = await fetchJson(`API AQUI, FALTANDO${query}`)
get_result = get_result.result
for (var x = 0; x <= 1; x++) {
var ini_buffer = await getBuffer(get_result[x])
await client.sendMessage(from, ini_buffer, image)
}
break
case 'rankgay':
if (!isOwner) if (!isPremium) addFilter(from)  
if(!isGroup) return reply(mess.only.group)
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgostosas':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(luy, member, true)
break
case  'casal':
if (!isGroup) return reply(mess.only.group)
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.jid)
membr.push(teupai21.jid)
mentions(jet, membr, true)
break
case 'addlevel'://case feita by: Bielzinho
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isGroup) return reply(mess.only.group)
if (args.length < 2) return reply(`Use ${prefix}addlevel @marque 50\nOu a quantidade que desejar dá de level.`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
biel = `Foi adicionado ${args[1]} em level para @${mentioned[0].split('@')[0]}`
mentions(`${biel}`, mentioned, true)
addLevelingLevel((mentioned[0]), Number(args[1]))
break
case 'simi':
data = await fetchJson(`https://simsumi.herokuapp.com/api?text=${args[0]}=br`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break
case 'ytsearch2':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica sad`)
query = args.join(" ")
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/yt/search?q=${query}`)
get_result.url = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Título : ${x.title}\n`
ini_txt += `Duração: ${x.duration}\n`
ini_txt += `thumb : ${x.thumbnail}\n`
ini_txt += `Link : ${x.url}\n`
}
reply(ini_txt)
break
case 'blocklist':
if (isBan) return reply(` vc está banido `)
client.updatePresence(from, Presence.composing) 
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
client.sendMessage(from, jrc.trim(), extendedText, {quoted: mek, thumbnail:akaky, contextInfo: {"mentionedJid": ban}})
break
case 'alquranaudio':
if (args.length == 0) return 
reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=kingsboybot&audio`)
await client.sendMessage(from, ini_buffer, audio, { quoted: mek, thumbnail:akaky, mimetype: Mimetype.mp4Audio })
break
case 'sc':
case 'stcirculo':
case 's3':
case 'sticker3':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
owgi = await client.downloadAndSaveMediaMessage(ger)
fgh = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${fgh.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek
})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
await limitAdd(sender)
break
case 'stickerwa':
if (isBan) return reply(` vc está banido `)
if (!isOwner) return 
reply('Comando so para o meu dono, qm e vc?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=kingsboybot&query=${query}`)
get_result = get_result.result[0].stickers
for (var x of get_result) {
ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=kingsboybot&img=${x}`)
client.sendMessage(from, ini_buffer, sticker)
}
break
case 'alerta':
if (isBan) return reply(` vc está banido `)
data = fs.readFileSync('./src/alerta.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
sendImage(hasil, mek, '*alerta :V*')
break
case 'moddroid':
if (isBan) return reply(` vc está banido `)
data = await fetchJson(`https://serpapi.com/search.json?device=&q=${body.slice(9)}`)
hepi = data.result[0] 
jry = `*Nome*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
buffer = await getBuffer(hepi.image)
client.sendMessage(from, buffer, image, 
{quoted: mek, thumbnail:akaky, caption: `${jry}`})
await limitAdd(sender)
break
case 'conscep':
case `map`:
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `CEP : ${x.cep}
LOGRADOURO: ${x.logradouro}
BAIRRO : ${x.bairro}
LOCALIDADE : ${x.localidade}
UF : ${x.uf}
IBGE : ${x.ibge}
GIA : ${x.gia}
DDD : ${x.ddd}
SIAFI : ${x.siafi}`
reply(k)
break 
case 'kick': 
case 'banir':  

if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Esse ai ja foi kkkk :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
setTimeout(function(){
client.groupRemove(from, mentioned)
},2000);
} else {
	if (!isOwner) reply (`Pode deixar que eu me encarrego de aniliquilar esse verme...`)
if (!isOwner) tujuh = fs.readFileSync('./lib/remove2.webp');
if (!isOwner) client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
setTimeout(function(){
client.groupRemove(from, mentioned)
},2000);
}
setTimeout(function(){
tujuh = fs.readFileSync('./assets/alvoremovido.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
},3000);
break
case 'ban':
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(mess.only.group)
setTimeout(function(){
tujuh = fs.readFileSync('./stickers/remove.webp');
client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},1000);

setTimeout(function(){
tujuh = fs.readFileSync('./stickers/remove2.webp');
client.sendMessage(from, tujuh, sticker, {quoted:mek, thumbnail:akaky})
},5000);

if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja chutar!')
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
setTimeout(function(){
client.groupRemove(from, M_exe)
},2800);
} else {
setTimeout(function(){
client.groupRemove(from, [exe1[0]])
},2800);
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
setTimeout(function(){
client.groupRemove(from, [exe1])
},2800);
}
setTimeout(function(){
tujuh = fs.readFileSync('./assets/alvoremovido.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
},4000); 
break 


case 'bansp':
if (!isGroup) return reply(mess.only.group)
if (!issupre) return 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja chutar!')
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
break
case 'togif':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, thumbnail:akaky, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break
case 'goldplay':
case 'silverplay':
if (isBan) return reply('Maaf kamu sudah terbenned!')
if (args.length == 0) return reply(`Use assim: ${prefix + command} text\nExemplo: ${prefix + command} BOT`)
txt = args.join(" ")
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/${command}?text=${txt}&apikey=404Api`)
client.sendMessage(from, buffer, image, {caption: 'Está ai', quoted: mek})
break 
case 'logogame':
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply(`_O texto cadê_\n*Exemplo ${prefix}logogame bot*`)
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(10)}`)
client.sendMessage(from, game, image, {quoted: mek})
break
case 'wallpaperanime':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isBan) return reply(` vc está banido `)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = `wallpaper anime celular hd`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `${teks}`, thumbnail: fs.readFileSync('./lib/logo.jpg')})
}
}
await limitAdd(sender)
break
case 'lamber':
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `https://www.luc4rio-rest-api.tk/api/anime/lamber`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
client.sendMessage(from, buff, sticker, { quoted: mek})
fs.unlinkSync(rano)
})
break  
case 'onich':
tujuh = fs.readFileSync('./assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
if (!isOwner) if (!isPremium) addFilter(from)  
tujuh = fs.readFileSync('./assets/tchau.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fdp':
if (!isOwner) if (!isPremium) addFilter(from)  
tujuh = fs.readFileSync('./assets/fdp.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'glub':
if (!isOwner) if (!isPremium) addFilter(from)  
tujuh = fs.readFileSync('./assets/glub.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rankgays':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(`Esse comando so pode ser usadoem grupos parsa`)
membr = []
const gay1 = groupMembers
const gay2 = groupMembers
const gay3 = groupMembers
const gay4 = groupMembers
const gay5 = groupMembers
const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
var porcentagemgay = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
const porcentagemd = porcentagemgay[Math.floor(Math.random() * porcentagemgay.length)]
bdc = ` 
Esses são os mais SuperGays do grupo:
${groupName}\n@${gays1.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemd}\n@${gays2.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemd}\n@${gays3.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemd}\n@${gays4.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemd}\n@${gays5.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemd}\n\n⚡ ${setting.NamaBot} ⚡`
membr.push(gays1.jid)
membr.push(gays2.jid)
membr.push(gays3.jid)
membr.push(gays4.jid)
membr.push(gays5.jid)
mentions(bdc, membr, true)
break

case 'pornhub': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})  
txt = body.slice(9)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/phub?text=${jrr}&text2=${jrr1}&apikey=pais`)
client.sendMessage(from, buffer, image, {quoted: mek})
break 

case 'calc':
texto = body.slice(6)
primeiroValor = texto.split(" ")[0];
segundoValor = texto.split(" ")[1];

resultado=(primeiroValor+segundoValor);
reply(resultado)
break


case 'comentariol': 
case 'comentáriol':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})  
txt = body.slice(13)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];
buffer = await getBuffer(`https://api-gdr2.herokuapp.com/api/youtubecomment?user=${jrr}&text=${jrr1}&avatar=https://image.freepik.com/fotos-gratis/homem-serio-olhando-para-a-camera_23-2147799044.jpg`)
client.sendMessage(from, buffer, image, {quoted: mek})
break 
case 'pv':
case 'mechame':
client.sendMessage(sender, 'oi',text)
reply(`Mensagem enviada no PV`)
break
case 'inspect':
 
     linkgp = await client.groupInviteCode(from)
           linkgc = 'https://chat.whatsapp.com/'+linkgp
       let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await client.query({ 
            json: ["query", "invite",linkgp],
            expect200:true }); 
            jids = [];        
              cos = 'https://chat.whatsapp.com/'+linkgp
            par = `*Id* : ${id}
${owner ? `*Dono* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nome Gp* : ${subject}
*Membros Total* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : nao tem'}
*Id desc* : ${descId}`
           for ( let y of participants) {
             par += `\n> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'sim' : 'nao'}`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             client.sendMessage(from,par,text,{quoted:mek, thumbnail:akaky,contextInfo:{mentionedJid:jids}})
             
             
           
             break
case 'comporn': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})  
txt = body.slice(9)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];
buffer = await getBuffer(`https://api-gdr2.herokuapp.com/api/phubtext?user=${jrr}&texto=${jrr1}&img=https://image.freepik.com/fotos-gratis/homem-serio-olhando-para-a-camera_23-2147799044.jpg`)
client.sendMessage(from, buffer, image, {quoted: mek})
break 
case 'stone': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})  
txt = body.slice(7)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/stone-text?text=${jrr}&text2=${jrr1}&apikey=pais`)
client.sendMessage(from, buffer, image, {quoted: mek})
break 
case 'jokerlogo': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
jkr = body.slice(10)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/joker?text=${jkr}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'crossfire': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
jdf = args.join(" ")
jr = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/crossfire?q=${jdf}&apikey=dappakntlll`)
int = await getBuffer(jr.result.url)
client.sendMessage(from, int, image, {quoted: mek})
break
case 'grafity':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
txt = body.slice(9)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/graffiti?text=${jrr}&text2=${jrr1}&apikey=pais`)
client.sendMessage(from, buffer, image, {quoted: mek})
break
case 'love':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pLoveMsg(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break
case 'coffe':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pCoffeCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break
case 'copo':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break
case 'butterfly':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pButterfly(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break 
case 'fire':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pFogo(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break
case 'shadow':
if (isBan) return reply('BANIDO, DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pShadow(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break
case 'grass':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pMsgGrass(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break
case 'narutobanner':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pNaruto(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break
case 'metalgold':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pOuro(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break 
case 'cemiterio':
case 'cemitério':  
if (isBan) return reply('Banido de utilizar os comandos do bot!!')
if (!q) return reply('onde está o texto?')
pSemi(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
		})
await limitAdd(sender)
break 
case 'smoky':
if (isBan) return reply('Banido de utilizar os comandos do bot ')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pSmoky(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break
case 'papel':
if (isBan) return reply('Banido de utilizar os comandos do bot ')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pBurnPapper(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break 
case 'lobometal':
if (isBan) return reply('Banido de utilizar os comandos do bot ')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pAwolfMetal(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break 
case 'harryp':
if (isBan) return reply('Banido de utilizar os comandos do bot ')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pHarryPotter(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
await limitAdd(sender)
break 
case 'glitch':
if (isBan) return reply('Banido de utilizar os comandos do bot ')
if (args.length < 1) return reply('onde está o texto?\nExenplo: sad|demais')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})  
tdt = args.join(" ")
tdp = tdt.split("|")[0];
tdp2 = tdt.split("|")[1];
kdp = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch1?apikey=apiteam&texto1=${tdp}&texto2=${tdp2}`) 
dtd = await getBuffer(kdp.resultado)
await client.sendMessage(from, dtd, image, {quoted: mek})
break
case 'demongreen':
if (isBan) return reply('Banido de utilizar os comandos do bot ')
if (args.length < 1) return reply('onde está o texto?\nExenplo: sad|demais')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})  
tdt = args.join(" ")
hgf = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/demon?apikey=apiteam&texto=${tdt}`) 
dtd = await getBuffer(hgf.resultado)
await client.sendMessage(from, dtd, image, {quoted: mek})
break
case 'neondevil':
if (isBan) return reply('Banido de utilizar os comandos do bot ')
if (args.length < 1) return reply('onde está o texto?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
sd = args.join(" ")
sad = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/neondevil?text=${sd}&apikey=eZmRwQ7L04xF6d9`)
client.sendMessage(from, sad, image)
break 
case 'bracelet':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
lvc = body.slice(10)
lop = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/bracelet?text=${lvc}&apikey=eZmRwQ7L04xF6d9`, {method: 'get'})
client.sendMessage(from, lop, image, {quoted: mek})
break
case 'show':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
txt = body.slice(6)
jro = txt.split("|")[0];
jru = txt.split("|")[1];
jrp = txt.split("|")[2];
tyd = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/retrowave?text1=${jro}&text2=${jru}&text3=${jrp}&apikey=eZmRwQ7L04xF6d9`, {method: 'get'})
client.sendMessage(from, tyd, image, {quoted: mek})
break 
case 'luxury':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
lx = body.slice(8)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/luxury?text=${lx}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'steel': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
txt = body.slice(7)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/steel?text=${jrr}&text2=${jrr1}&apikey=pais`)
client.sendMessage(from, buffer, image, {quoted: mek})
break
case 'lava':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
qui = body.slice(6)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/lava?text=${qui}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'style':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
oip = body.slice(7)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/1917-style?text=${oip}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'neve':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ldw = body.slice(6)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/xmas?text=${ldw}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'natal':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
lkl = body.slice(7)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/christmas?text=${lkl}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'blood':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
dps = body.slice(7)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/blood?text=${dps}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'areia':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
sdp = body.slice(7)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${sdp}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'nuvem':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
sde = body.slice(7)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/sky?text=${sde}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'ossos':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
loi = body.slice(7)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/skeleton?text=${loi}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'colaq':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
dfk = body.slice(7)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glue-text?text=${dfk}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'vingadores': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
txt = body.slice(11)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/avengers-logo?text=${jrr}&text2=${jrr1}&apikey=pais`)
client.sendMessage(from, buffer, image, {quoted: mek})
break
case 'pink':
if (!isOwner) if (!isPremium) addFilter(from) 
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
erl = body.slice(6)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${erl}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break 
case 'kiss':
case 'beijo':
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `https://h4ck3rs404-api.herokuapp.com/api/nsfw/kiss?apikey=404Api`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
client.sendMessage(from, buff, sticker, { quoted: mek, thumbnail:akaky, thumbnail:null})
fs.unlinkSync(rano)
})
break 
case 'metalblue':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
dki = body.slice(10)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${dki}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'carbon': 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
sda = body.slice(8)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${sda}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break
case 'vidro':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
lpr = body.slice(7)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/dropwater?text=${lpr}&apikey=pais`)
client.sendMessage(from, jr, image, {quoted: mek})
break 
case 'happymod':
if (!isOwner) if (!isPremium) addFilter(from)  
if (args.length < 1) return reply('Digite o nome do apk que deseja buscar')
asd = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=AriaGanzTzy&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of asd.result) {
teks += `Nome do apk: ${i.title}
Avaliação: ${i.rating}
link: ${i.url}\n\n
`
}
reply(teks.trim())                   
break
case 'halloween':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
if (args.length == 0) return reply(`Use: ${prefix + command} text\nExemplo: ${prefix + command} Bot`)
txt = args.join(" ")
reply('*「 ❗ 」 Aguarde, criando sua logo maker..*')
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/halloween?text=${txt}&apikey=pais`)
client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break 
case 'neon':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('mess.only.banned')
if (args.length == 0) return reply(`Use: ${prefix + command} text\nExemplo: ${prefix + command} Bot`)
txt = args.join(" ")
reply('*「 ❗ 」 Aguarde, criando sua logo neon.*')
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/neon-light?text=${txt}&apikey=pais`)
client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break 
case 'neonl':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('mess.only.banned')
if (args.length == 0) return reply(`Use: ${prefix + command} text\nExemplo: ${prefix + command} Bot`)
txt = args.join(" ")
reply('*「 ❗ 」 Aguarde, criando sua logo neon.*')
buffer = await getBuffer(`http://docs-jojo.herokuapp.com/api/neon_light?text=${txt}`)
client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break 
case 'break':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('mess.only.banned')
if (args.length == 0) return reply(`Use: ${prefix + command} text\nExemplo: ${prefix + command} Bot`)
txt = args.join(" ")
reply('*「 ❗ 」 Aguarde, criando sua logo break.*')
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/break-wall?text=${txt}&apikey=pais`)
client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break 
case 'horror':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('mess.only.banned')
if (args.length == 0) return reply(`Use: ${prefix + command} text\nExemplo: ${prefix + command} Bot`)
txt = args.join(" ")
reply('*「 ❗ 」 Aguarde, criando sua logo')
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/horror?text=${txt}&apikey=pais`)
client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break 
case 'pubg':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('mess.only.banned')
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(6)
teks = txt.split("|")
teks2 = txt.split("|")
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=${teks}&text2=${teks2}&theme=pubg`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break
case 'flower':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('mess.only.banned')
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(8)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/alam?text=${txt}&theme=flower`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break
case 'madeira':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('mess.only.banned')
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(9)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/woodeffect?text=${txt}`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break
case 'coffe2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(8)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/senja?text=${txt}&theme=coffee-cup2`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break
case 'batle':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(7)
teks = txt.split("|")
teks2 = txt.split("|")
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=${teks}&text2=${teks2}&theme=battlefield`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break
case 'gold':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(6)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker6?text=${txt}&theme=chrome`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break
case 'rainbow':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(9)
teks = txt.split("|")
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker5?text=${teks}&theme=rainbow`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break
case 'romantic':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(10)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker9?text=${txt}&theme=rmc`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break 
case 'neon2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(7)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/metallic?text=${txt}&theme=neon`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break 
case 'wooden':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
 reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(8)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/woodenboards?text=${txt}`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break 
case '8bit':
if (isBan) return reply(mess.only.banned)
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(6)
teks = txt.split("|")
teks2 = txt.split("|")
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker14?text=${teks}&text2=${teks2}&theme=8bit`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image)
break
case 'searchmsg':
case 'srcmensagem':
if (isBan) return reply(` vc está banido `)
if (!q) return reply(mess.wrongFormat)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
xtext = args.join(' ')
cond = xtext.split(" ")
a = await client.searchMessages(xtext, from, 10, 1)// count 10 
fox = '*「 Pesquisa de msg do grupo 」*\n\n'
num = 0
for (j of a.messages){
num += 1
if (j.message.conversation) {
if (j.key.fromMe){ 
fox += num+'. Quem envio: '+client.user.jid+'\n    Msg: '+j.message.conversation+'\n    ID: '+j.key.id+'\n    Tipo: conversation\n\n'
 }else{
 fox += num+'. Quem envio: '+j.key.participant+'\n    Msg: '+j.message.conversation+'\n    ID: '+j.key.id+'\n    Tipo: conversation\n\n'
} 
}
else if (j.message.extendedTextMessage){
if (j.key.fromMe){ 
fox += num+'. Quem envio: '+client.user.jid+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    ID: '+j.key.id+'\n    Tipo: extendedTextMessage\n\n'
}else{
fox += num+'. Quem envio: '+j.key.participant+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    ID: '+j.key.id+'\n    Tipo: extendedTextMessage\n\n'
} 
}
}
reply(fox)
await limitAdd(sender)
break







case 'placaloli':
if (isBan) return reply(` vc está banido `)
if (!q) return reply(mess.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, mess.success)
await limitAdd(sender)
break 
case 'antipvon':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
setting.banChats = banChats
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
await client.sendMessage(from, "*Sucesso alterado para modo antipv, pv não poderá ser utilizado" , text)
break
case'antipvoff':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
setting.banChats = banChats
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
await client.sendMessage(from, "*Sucesso modo antipv desligado, pv liberado.", text)
break
case 'listapv'://case by: Bielzinho-Bot
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ytdtpt = await client.chats.all()
alista = await getpc(ytdtpt)
psdpt = `*L I S T A  D E  B A T E - P A P O S*\n*Total de Chats* : ${alista.length}\n\n`
for(let i=0; i<alista.length; i++){
conts = mek.key.fromMe ? mek.user.jid : client.contacts[alista[i]] || {notify: jid.replace(/@.+/, '')}
nomes = client.contacts[alista[i]] != undefined ? client.contacts[alista[i]].vname || client.contacts[alista[i]].notify : undefined
psdpt += `• *Nome* : ${nomes}\n• *Tag* : @${alista[i].split("@")[0]}\n• *Wame* : wa.me//${alista[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( psdpt, alista, true)
break 
case 'listagp': //case by: Bielzinho-Bot
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
oytdufg = await client.chats.all()
kingfoo = await getGroup(oytdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${kingfoo.length}\n\n`
for (let i = 0; i < kingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${kingfoo[i].subject}\n• *Id do Grupo* : ${kingfoo[i].id}\n• *Criado* : ${moment(`${kingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${kingfoo[i].participants.length}\n\n`
}
reply(teks1)
break
case 'ttp':
if (isBan) return reply(` vc está banido `)
if (args.length < 1) return reply(`cadê o texto mano?\nexemplo ${p + command} sad`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
const cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
const fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
sayo = cor[Math.floor(Math.random() * (cor.length))]	 				 
sayo2 = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sayo = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeUrl(body.slice(5))}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${sayo}&text.0.font.family=${sayo2}&text.0.background.color=ff0000` 
sendStickerFromUrl(from, sayo)
await limitAdd(sender)
break

case 'attp':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (args.length < 0) return reply('Cadê o texto, hum? Use assim:\n\n /attp SEU TEXTO')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
var txt = encodeURI(body.slice(6))
anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${txt}`)
client.sendMessage( from, anu, sticker, {quoted:mek, thumbnail:akaky})
break	  
case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
reply('Aguarde, mas devo lembrar, que não faço figurinha nem de emoji, nem letras modificadas.')
teks = args.join(" ")
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${teks}`)
client.sendMessage(from, url, sticker, {quoted: mek})
break	
case 'meme':
case 'memes':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (args.length < 0) return reply('Cadê o texto, hum?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fdy = await getBuffer(`https://bot-apis.herokuapp.com/fillipe/meme`)
client.sendMessage( from, fdy, image, {quoted:mek, thumbnail:akaky})
break	
case 'folha':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 0) return reply('Cadê o texto, hum?')
var txt = encodeURI(body.slice(7))
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nulis?text=${txt}&apikey=eZmRwQ7L04xF6d9`)
hjj = fs.readFileSync('./lib/logo.jpg');
client.sendMessage(from, anu, image, {quoted:mek, thumbnail:akaky, thumbnail:hjj})
break	
case 'folha2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 0) return reply('Cadê o texto, hum?')
var txt = encodeURI(body.slice(8))
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskanan?text=${txt}&apikey=eZmRwQ7L04xF6d9`)
client.sendMessage(from, anu, image, {quoted:mek, thumbnail:akaky})
break	
case 'folha3':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 0) return reply('Cadê o texto, hum?')
var txt = encodeURI(body.slice(8))
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskiri?text=${txt}&apikey=eZmRwQ7L04xF6d9`)
client.sendMessage(from, anu, image, {quoted:mek, thumbnail:akaky})
break	
case 'folha4':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 0) return reply('Cadê o texto, hum?')
var txt = encodeURI(body.slice(8))
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokanan?text=${txt}&apikey=eZmRwQ7L04xF6d9`)
client.sendMessage(from, anu, image, {quoted:mek, thumbnail:akaky})
break	
case 'folha5':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 0) return reply('Cadê o texto, hum?')
var txt = encodeURI(body.slice(8))
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokiri?text=${txt}&apikey=eZmRwQ7L04xF6d9`)
client.sendMessage(from, anu, image, {quoted:mek, thumbnail:akaky})
break	
case 'serpremium':
case 'serprem':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pru = '.\n'
for (let _ of ownerNumber) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${ownerNumber}`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
susp = `👑@${ownerNumber[0].split('@')[0]} Pronto, você é o dono, tem total direito de ser premium, parabéns 👑`
mentions(`${susp}`, ownerNumber, true)   
break 
case 'sersuprem':
if (!isGroup) return reply(mess.only.group)
pru = '.\n'
for (let _ of suprer.suprem) {
pru += `@${_.split('@')[0]}\n`
}
supre.push(`${suprer.suprem}`)
fs.writeFileSync('./database/bot/supre.json', JSON.stringify(supre))
susp = `👑@${suprer.suprem[0].split('@')[0]} Pronto, você é o dono, tem total direito de ser supremo, parabéns 👑`
mentions(`${susp}`, suprer.suprem, true)   
break
case 'level':
case 'nivel':
case 'nível':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if (!isLevelingOn) return reply(mess.levelnoton)
if (!isGroup) return reply(mess.only.group)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resultu = `     
            ◪ *REGISTRO* ◪                                                                  
            
  ├─ ❏ *NICK* : ${pushname}
  ├─ ❏ *NÚMERO* : ${sender.split("@")[0]}
  ├─ ❏ *PATENTE* : ${patt}               
  ├─ ❏ *XP* : ${userXp}
  └─ ❏ *LEVEL* : ${userLevel}`
client.sendMessage(from, resultu, text, { quoted: mek})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break
case 's':
case 'fig':
case 'figu2':
case 'sticker':
case 's2':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('*「 ❗ 」 Espere só um pouquinho amigo, a sua figurinha está sendo feita...*')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','Bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Bot', 'Ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
case 'reiniciar':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `YT`
require('./lib/fetcher.js').createExif(satu)
require('./lib/fetcher.js').modStick(media, client, mek, from)
rano = getRandom('.webp')
reply('*「 ❗ 」 Espere só um pouquinho migo, está reiniciando...*')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','Bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Bot', 'Ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo`)
}
break
case 'yandex':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
bdc = body.slice(9)
site = await fetchJson (`https://dapuhy-api.herokuapp.com/api/search/yandeximage?query=${bdc}&apikey=eZmRwQ7L04xF6d9`)
imagem = await getBuffer (site.result)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'nekonime':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/neko`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'loli':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://docs-jojo.herokuapp.com/api/randomloli`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'patrick':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/patrick?apikey=genbotkey`)
client.sendMessage(from, site, sticker, {quoted:mek, thumbnail:akaky})
break 
case 'stickersrc':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
nrt = args.join(" ")
site = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/searchsticker?query=${nrt}&apikey=eZmRwQ7L04xF6d9`)
buff = await getBuffer(sticker)
client.sendMessage(from, buff, site, sticker, {quoted:mek, thumbnail:akaky})
break 
case 'amongus':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} ${pushname}`)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=genbotkey&text=${body.slice(9)}`)
client.sendMessage(from, buffer, sticker, { quoted: mek})
break
case 'dadu':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/dadu?apikey=genbotkey`)
client.sendMessage(from, site, sticker, {quoted:mek, thumbnail:akaky})
break 
case 'dogzin':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/anjing?apikey=genbotkey`)
client.sendMessage(from, site, sticker, {quoted:mek, thumbnail:akaky})
break 
case 'megumin':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/megumin`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'menu10': 
let pi = client.prepareMessageFromContent(from, {
"listMessage": {
"title": "⌜ MENU 2 ⌟",
//"description": `${tampilHari} ${pushname}`,
"description": `𝐁𝐈𝐄𝐋𝐙𝐈𝐍𝐇𝐎 𝐁𝐎𝐓`,
"buttonText": "Clique Aqui ⌕",
"listType": "SELECIONE",
"sections": [
{
"title": "Escolha um Irmão",
"rows": [
{
"title": "fast menu",
"rowId": "colong aja kak"
},
{
"title": "maker menu",
"rowId": "colong aja kak"
},
{
"title": "owner menu",
"rowId": "colong aja kak"
},
{
"title": "spesial menu",
"rowId": "colong aja kak"
},
{
"title": "sertifikat",
"rowId": "colong aja kak"
},
{
"title": "stick menu",
"rowId": "colong aja kak"
},
{
"title": "randomtext",
"rowId": "colong aja kak"
},
{
"title": "game menu",
"rowId": "colong aja kak"
},
{
"title": "tag menu",
"rowId": "colong aja kak"
},
{
"title": "cek menu",
"rowId": "colong aja kak"
},
{
"title": "news menu",
"rowId": "colong aja kak"
},
{
"title": "storage menu",
"rowId": "colong aja kak"
},
{
"title": "porn menu",
"rowId": "colong aja kak"
},
{
"title": "sound menu",
"rowId": "colong aja kak"
},
{
"title": "download menu",
"rowId": "colong aja kak"
},
{
"title": "pro menu",
"rowId": "colong aja kak"
},
{
"title": "grup menu",
"rowId": "colong aja kak"
},
{
"title": "asupan menu",
"rowId": "colong aja kak"
},
{
"title": "gacha cecan",
"rowId": "colong aja kak"
},
{
"title": "nsfw menu",
"rowId": "colong aja kak"
}
]
}
]
}}, {})
client.relayWAMessage(pi, {waitForAck: true})
break
case 'shinobu':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/shinobu`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'randomnime':
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
client.sendMessage(from,media,image,{quoted:mek, thumbnail:akaky, caption:'Está ai'})
}
)
.catch((error) => {
console.log(error); 
}
)
});
await limitAdd(sender)
break
case 'waifu':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isBan) return reply(` vc está banido `)
try {
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
client.sendMessage(from, buf, image, {quoted: mek, thumbnail:akaky,caption: "Nih"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('emror')
}
await limitAdd(sender)
break
case 'uwu':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/uwu`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'cachorro':
case 'cachorros':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/cachorros`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'koala':
case 'koalas':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/koalas`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'raposa':
case 'raposas':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/raposas`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'passaros':
case 'pássaros':
case 'passaro':
case 'pássaro':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/passaros`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'lagartos':
case 'lagarto':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/lagartos`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'gansos':
case 'ganso':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/gansos`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'pandared':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/pandas_vermelhos`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'leveling':
if (isBan) return reply(` vc está banido `)
if (!isGroup) return reply('Só em Grupo')
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (args[0] === '1') {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
reply(mess.levelon) 
} else if (args[0] === '0') {
_leveling.splice(from, 1)
fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
reply(mess.leveloff)
} else {
reply('「* Adicionar parâmetro 1 / habilitar ou 0 / desabilitar*」')
}
break
case 'semoji':
if (!isOwner) if (!isPremium) addFilter(from)  
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/emoji2png?text=${emoji}`)
buffer = await getBuffer(anu.result)
client.sendMessage(from, buffer, image, { quoted: mek })
break 
case 'anticatalogo':
case 'catálogo':
case 'catalogo':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiCatalogo) return reply('Já está ativo!')
anticatalogo.push(from)
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
reply('aтινσυ cσм ѕυcєѕѕσ σ яєcυяѕσ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else if (Number(args[0]) === 0) {
let position = false
Object.keys(anticatalogo).forEach((i) => {
if (anticatalogo[i] === from) {
position = i
}
})
if (position !== false) {
anticatalogo.splice(position, 1)}
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
reply('Ɗєѕαтινσυ cσм ѕυcєѕѕσ σ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else {
reply('1🇦​🇹​🇮​🇻​🇦​ 0🇩​🇪​🇸​🇦​🇹​🇮​🇻​🇦​')
}
break
case 'anticontato':
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isBan) return reply('VOCÊ FOI BANIDO DE UTILIZAR OS COMANDOS DO BOT.')
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 PRA ATIVAR, 0 PRA DESATIVAR. ')
if (Number(args[0]) === 1) {
anticontato.push(from)
fs.writeFileSync('./database/json/anticontato.json', JSON.stringify(anticontato))
reply('Ativou com sucesso o recurso de anti contato neste grupo✔️')
} else if (Number(args[0]) === 0) {
anticontato.splice(from, 1)
fs.writeFileSync('./database/json/anticontato.json', JSON.stringify(anticontato))
reply('Desativou com sucesso o recurso de anti contato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break
case 'ausente':      	
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
offline = true
waktuafk = Date.now()
anuu = args[0] ? args[0] : 'ativar'
alasanafk = anuu
anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${setting.ownerNumber}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}}
client.sendMessage(from, `[❗] OFFLINE`,MessageType.text,anu)
await limitAdd(sender)
break 

case 'ativo':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
offline = false
anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${ownerNumber}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpg')}}}}
client.sendMessage(from, `[❗] ONLINE`,MessageType.text,anu)
await limitAdd(sender)
break       
case 'antiloc':
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antiloc.push(from)
fs.writeFileSync('./database/json/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
antiloc.splice(from, 1)
fs.writeFileSync('./database/json/antiloc.json', JSON.stringify(antiloc))
rpely('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break
case 'antidocumento':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./database/json/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./database/json/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'blockdown':
case 'modooff':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
if (Number(args[0]) === 1) {
if (isGroup) if (isOffin) return reply('*ANTIPORN ESTÁ ATIVO*')
offin.push(from)
fs.writeFileSync('./database/json/offin.json', JSON.stringify(offin))
reply('*Modo *Offline* ativado.\n\n*ATENÇÃO:* A partir de agora comandos que necessitam de internet (imagem,videos ou áudios) não funcionarão até esse comando ser desativado.')

} else if (Number(args[0]) === 0) {
if (!isOffin) return reply('*Já está desativado!!*')
offin.splice(from)
fs.writeFileSync('./database/json/offin.json', JSON.stringify(offin))
reply('MODO OFFLINE desativado')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'especial':
if (!isOwner) return reply (`comando apenas para dono`)

if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
if (Number(args[0]) === 1) {
if (isGroup) if (isEspecial) return reply('*ESPECIAL ESTÁ ATIVO*')
especial.push(from)
fs.writeFileSync('./database/json/especial.json', JSON.stringify(especial))
reply('*Especial ativado com sucesso ✓*')
client.sendMessage(from, `ativado`, text)
} else if (Number(args[0]) === 0) {
if (!isEspecial) return reply('*Já está desativado!!*')
especial.splice(from)
fs.writeFileSync('./database/json/especial.json', JSON.stringify(especial))
reply('*Desativado o Especial com sucesso neste grupo ✔️*')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiporn':
if (!isOwner) if (!isGroupAdmins) return reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
if (Number(args[0]) === 1) {
if (isGroup) if (isAntiPorn) return reply('*ANTIPORN ESTÁ ATIVO*')
antiporn.push(from)
fs.writeFileSync('./database/json/antiporn.json', JSON.stringify(antiporn))
reply('*AntiPorn ativado com sucesso ✓*')
client.sendMessage(from, `*Atenção, antiporn esta ativo, você só poderá usar os comandos +18 quando o adm desativar`, text)
} else if (Number(args[0]) === 0) {
if (!isAntiPorn) return reply('*Já está desativado!!*')
antiporn.splice(from)
fs.writeFileSync('./database/json/antiporn.json', JSON.stringify(antiporn))
reply('*Desativado o Anti Porn com sucesso neste grupo ✔️*')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilink':
if (!isGroup) return reply('Só em grupo.')
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply('O bot precisa ser adm')
if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('*RECURSOS ANTILINK ESTÁ ATIVO*')
antilink.push(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('*Antilink ativado com sucesso ✓*')
client.sendMessage(from, `*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('*Já está desativado!!*')
antilink.splice(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('*Desativar grupo anti-link com sucesso neste grupo ✔️*')
} else {
reply('1 para ativar, 0 para desativar')
}
break
case 'antitravatxt':
case 'antitrava':

if (!isOwner) if (!isGroupAdmins) return reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
       if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						antitravatxt.push(from)
						fs.writeFileSync('./database/antitravatxt.json', JSON.stringify(antitravatxt))
						reply('Ativou com sucesso o recurso de anti trava neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						antitravatxt.splice(from, 1)
						fs.writeFileSync('./database/antitravatxt.json', JSON.stringify(antitravatxt))
						reply('Desativou com sucesso o recurso de anti trava neste grupo✔️')
 					} else {
						reply('1 para ativar, 0 para desativar')
 					}
 					} catch {
						reply('Deu erro, tente novamente :/')
 					}
     await limitAdd(sender)
break
case 'setnomebot':
if (args.length < 1) return
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
NamaBot = args[0]
setting.NamaBot = NamaBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do bot foi alterado com sucesso para : ${NamaBot}`)
break
case 'setinsta':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
instagram = args[0]
setting.instagram = instagram
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O insta foi alterado com sucesso para : ${instagram}`)
break
case 'setnomebot':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
NamaOwner = args[0]
setting.NamaOwner = NamaOwner
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do bot foi alterado com sucesso para : ${NamaOwner}`)
break
case 'tomp3':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (!isOwner) if (!isPremium) addFilter(from)  
client.updatePresence(from, Presence.composing) 
if (!isQuotedVideo) return reply('Marque o video pfv')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break 

case 'space':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
msgFilter.isFiltered(from)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
txt = body.slice(6)
ytb = txt.split("|")[0];
ytbs = txt.split("|")[1];
spc = await getBuffer(`https://pencarikode.xyz/api/textpro/space-3d?text=${ytb}&text2=${ytbs}&apikey=pais`)
client.sendMessage(from, spc, image, {quoted: mek})
break
case 'mining':
if (isOwner) {
one = 20
addLevelingXp(sender, one)
addLevelingLevel(sender, 99)
reply(`porque você é nosso proprietário da equipe bot de envio ${one}Xp para voce`)
} else {
const mining = Math.ceil(Math.random() * 10000)
 addLevelingXp(sender, mining)
await reply(`*Parabéns* você pega *${mining}Xp*`)
}
await limitAdd(sender)
break
case 'frases':
case 'frase':
if (!isOwner) if (!isPremium) addFilter(from)  
hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
 
  ‣ Criador: ${hehe.Criador}
 
  ‣ Frase: 
 
  ${hehe.Frase}\n`
client.sendMessage(from, ccg, text, {quoted:mek, thumbnail:akaky})
break
case 'wikipedia':
if (!isOwner) if (!isPremium) addFilter(from)  
teks = args.join(" ")
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/wikipedia1?q=${teks}`).then(async (x) => {
send = `${x.result.result}`
reply(send)
})
break
case 'repeat':
reply(`${budy.slice(8)}`)
break
case 'covidglobal':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('Você foi banido de utilizar os comandos, desculpe!')
get_result = await fetchJson(`http://brizas-api.herokuapp.com/covidmundo?apikey=brizaloka`)
get_result = get_result.resultado
ini_txt = `Países Afetados : ${get_result.paisesAfetados}\n`
ini_txt = `Casos : ${get_result.casos}\n`
ini_txt = `Casos hoje : ${get_result.casos_hoje}\n`
ini_txt = `Mortes : ${get_result.mortes}\n`
ini_txt += `Mortes Hoje : ${get_result.mortes_hojes}\n`
ini_txt += `Recuperados : ${get_result.recuperados}\n`
ini_txt += `Recuperados hoje: ${get_result.recuperados_hoje}\n`
ini_txt += `Recuperados por milhão : ${get_result.recuperadosPorMilhao}\n`
ini_txt += `Ativos : ${get_result.ativos}\n`
ini_txt += `Ativos por milhão : ${get_result.ativosPorMilhao}\n`
ini_txt += `Criticos : ${get_result.criticos}\n`
ini_txt += `Críticos por milhão : ${get_result.criticosPorMilhao}\n`
ini_txt += `Casos por milhão : ${get_result.casosPorMilhao}\n`
ini_txt += `Mortes por milhão : ${get_result.mortesPorMilhao}\n`
ini_txt += `Testes : ${get_result.testes}\n`
ini_txt += `Testes por milhão : ${get_result.testesPorMilhao}\n`
ini_txt += `População : ${get_result.população}\n`
reply(ini_txt)
break
case 'covid19':
if (!isOwner) if (!isPremium) addFilter(from)  
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
send = `𝐋𝐎𝐂𝐀𝐋: ${post.result.local}\n𝐃𝐀𝐃𝐎𝐒: ${post.result.dadosAtualizados}\n𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐂𝐀𝐒𝐎𝐒: ${post.result.totalCasos}\n𝐍𝐎𝐕𝐎𝐒 𝐂𝐀𝐒𝐎𝐒: ${post.result.novosCasos}\n𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐌𝐎𝐑𝐓𝐄𝐒: ${post.result.totalMortes}\n𝐍𝐎𝐕𝐀𝐒 𝐌𝐎𝐑𝐓𝐄𝐒: ${post.result.novasMortes}\n𝐑𝐄𝐂𝐔𝐏𝐄𝐑𝐀𝐃𝐎𝐒: ${post.result.recuperados}\n 
𝐕𝐀𝐂𝐈𝐍𝐀𝐃𝐎𝐒-1: ${post.result.vacinadosPrimeiraDose}\n𝐕𝐀𝐂??𝐍𝐀𝐃𝐎𝐒-2: ${post.result.vacinadosSegundaDose}\n𝐁𝐎𝐋𝐄𝐓𝐈𝐍𝐒: ${post.result.boletinsContabilizados}`
 client.sendMessage(from, send, text, {quoted: selo, caption: mek})
break

case 'pokemon':
case 'pokémon':
random = Math.floor(Math.random() * 30) + 1
console.log(color('[Math.random]','blue'), `>>> ${random} <<<`);
ram = random
if (ram == 1 ) {random = './assets/voz/lalala.mp3'} else if (ram == 2 ) {random = './assets/voz/lalala mais.mp3'} else if (ram == 3 ) {random = './assets/voz/lala2.mp3'}
reply(`
Um pokémon apareceu!\n${random}
`)
break

case 'water':
			if (args.length == 0) return reply('cade o texto')
			try {
				if (args.length >= 17) return reply('Max: 10 letras.')
				wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				const browser = await puppeteer.launch({ headless: true })
				const page = await browser.newPage()
				await page.goto("https://textpro.me/dropwater-text-effect-872.html", { waitUntil: "networkidle2" }).then(async () => {
					await page.type("#text-0", body.slice(7))
					await page.click("#submit")
					await new Promise(resolve => setTimeout(resolve, 10000))
					const divElement = await page.$( 'div[class="thumbnail"] > img' )
					const txLogo = await (await divElement.getProperty("src")).jsonValue()
					const neon = await gdtBuffer(`${txLogo}`)
					await client.sendMessage(from, neon, image)
					browser.close()
				})
			} catch (error) {
				await reply('falhou T-T')
			}
			break
case 'googlelogo':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(mess.only.banned)
reply('*「 ❗ 」 Aguarde, criando sua logo')
txt = body.slice(12)
teks = txt.split("|")[0];
teks2 = txt.split("|")[1];
teks3 = txt.split("|")[2];
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker?text=${teks}&text2=${teks2}&text3=${teks3}&theme=google-suggestion`)
buffer = await getBuffer(post.result.url)
client.sendMessage(from, buffer, image, {caption: 'Está ai', quoted: mek})
break
case 'sticknime':
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
await limitAdd(sender)
break
case 'stickerhide':
if (!isQuotedSticker) return reply('Marque uma figurinha..')
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.stikga)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
break
case 'grupo':  
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
}				 
break 
case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 300000) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[Problema]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
text: teks1,
contextInfo: {
mentionedJid: [sender]
},
}
client.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono, se enviar muitas mensagens repetidas ou zoeira, você sera banido de utilizar os comandos do bot.")
witujuh = fs.readFileSync('./assets/voz/bugada.mp3')
client.sendMessage(from, witujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isOwner) if (!isPremium) addFilter(from)
break
case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return client.sendMessage(from, 'Máximo 400 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
tdptls = `[Avaliação]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
var options = {
text: tdptls,
contextInfo: {
mentionedJid: [sender]
},
}
client.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
if (!isOwner) if (!isPremium) addFilter(from)
break
case 'sugestão':
case 'sugestao':  
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 400) return client.sendMessage(from, 'Máximo 400 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
sug = `[Sugestões]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
var options = {
text: sug,
contextInfo: {
mentionedJid: [sender]
},
}
client.sendMessage(`558198923680@s.whatsapp.net`, options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
if (!isOwner) if (!isPremium) addFilter(from)
break
case 'sad':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const sad1 = fs.readFileSync('lindy/sad.mp3')
client.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sad2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const sad2 = fs.readFileSync('lindy/sad2.mp3')
client.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const sad3 = fs.readFileSync('lindy/sad3.mp3')
client.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const sad4 = fs.readFileSync('lindy/sad4.mp3')
client.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'eletro':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const sound5 = fs.readFileSync('lindy/sound5.mp3')
client.sendMessage(from, sound5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'eletronic':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const eletronic = fs.readFileSync('lindy/eletronic.mp3')
client.sendMessage(from, eletronic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'eletronic4':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const eletronic4 = fs.readFileSync('lindy/eletronic4.mp3')
client.sendMessage(from, eletronic4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'eletronic5':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const eletronic5 = fs.readFileSync('lindy/eletronic5.mp3')
client.sendMessage(from, eletronic5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'eletronic6':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const eletronic6 = fs.readFileSync('lindy/eletronic6.mp3')
client.sendMessage(from, eletronic6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'among':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const among = fs.readFileSync('lindy/among.mp3')
client.sendMessage(from, among, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'eletronic3':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const eletronic3 = fs.readFileSync('lindy/eletronic3.mp3')
client.sendMessage(from, eletronic3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'eletronic2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const eletronic2 = fs.readFileSync('lindy/eletronic2.mp3')
client.sendMessage(from, eletronic2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tenso':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const tenso = fs.readFileSync('lindy/up.mp3')
client.sendMessage(from, tenso, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'dj2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const dj2 = fs.readFileSync('lindy/babi.mp3')
client.sendMessage(from, dj2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'dj':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const dj = fs.readFileSync('lindy/dj1.mp3')
client.sendMessage(from, dj, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gay2':
if (!isOwner) if (!isPremium) addFilter(from)  
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
hasil = `Você é ${random}% gay\n\n${bo}`
reply(hasil)
break
case 'dj4':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
const dj4 = fs.readFileSync('lindy/dj3.mp3')
client.sendMessage(from, dj4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'dj3':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
const dj3 = fs.readFileSync('lindy/dj16.mp3')
client.sendMessage(from, dj3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'dj5':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const dj5 = fs.readFileSync('lindy/sound21.mp3')
client.sendMessage(from, dj5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'music9':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const music10 = fs.readFileSync('lindy/music10.mp3')
client.sendMessage(from, music10, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const sowell = fs.readFileSync('lindy/sowell.mp3')
client.sendMessage(from, sowell, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'suave':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const suave = fs.readFileSync('lindy/suave.mp3')
client.sendMessage(from, suave, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'plutao':
case 'plutão':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const plutão = fs.readFileSync('lindy/plutão.mp3')
client.sendMessage(from, plutão, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'music':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const music = fs.readFileSync('lindy/sound24.mp3')
client.sendMessage(from, music, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'music1':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const music1 = fs.readFileSync('lindy/sound70.mp3')
client.sendMessage(from, music1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'music2':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
const music2 = fs.readFileSync('lindy/sound44.mp3')
client.sendMessage(from, music2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'music3':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
const music3 = fs.readFileSync('lindy/magic.mp3')
client.sendMessage(from, music3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'music4':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
const music4 = fs.readFileSync('lindy/sound25.mp3')
client.sendMessage(from, music4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'music5':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
const music5 = fs.readFileSync('lindy/sound28.mp3')
client.sendMessage(from, music5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'music6':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
const music6 = fs.readFileSync('lindy/sound52.mp3')
client.sendMessage(from, music6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'music7':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
const music7 = fs.readFileSync('lindy/sound68.mp3')
client.sendMessage(from, music7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'music8':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
const music8 = fs.readFileSync('lindy/sound26.mp3')
client.sendMessage(from, music8, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nomegp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupUpdateSubject(from, `${body.slice(9)}`)
client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
break
case 'contato':
if (args.length < 1) return reply(` Marque alguém!\nexemplo: */contato* _@tag_`)

txt = body.slice(10)
jkp = txt.split(" ")[0];

cu1 = `${jkp}|${jkp}|+${jkp}`
cu2 = cu1.split('|')[0]
cu3 = cu1.split('|')[1]
cu4 = cu1.split('|')[2]
card = 'BEGIN:VCARD\n'
 + 'VERSION:3.0\n'
 + `FN:${cu3}\n`
 + `TEL;type=CELL;type=VOICE;waid=${cu2}:${cu4}\n`
+ 'END:VCARD'.trim()
client.sendMessage(from, {displayName: `${cu3}`, vcard: card}, MessageType.contact)
break

case 'contato2':
if (args.length < 1) return reply(` Marque alguém!\nexemplo: */contato* _@tag_`)

txt = body.slice(11)
jkp = txt.split(" ")[0];

cu1 = `${jkp}|${jkp}|+${jkp}`
cu2 = cu1.split('|')[0]
cu3 = cu1.split('|')[1]
cu4 = cu1.split('|')[2]
card = 'BEGIN:VCARD\n'
 + 'VERSION:3.0\n'
 + `FN:${cu3}\n`
 + `TEL;type=CELL;type=VOICE;waid=${cu2}:${cu4}\n`
+ 'END:VCARD'.trim()
client.sendMessage(from, {displayName: `${cu3}`, vcard: card}, MessageType.contact)
break

case 'contatome':
cu1 = `${sender}|${pushname}|+${sender}`
cu2 = cu1.split('|')[0]
cu3 = cu1.split('|')[1]
cu4 = cu1.split('|')[2]
card = 'BEGIN:VCARD\n'
 + 'VERSION:3.0\n'
 + `FN:${cu3}\n`
 + `TEL;type=CELL;type=VOICE;waid=${cu2}:${cu4}\n`
+ 'END:VCARD'.trim()
client.sendMessage(from, {displayName: `${cu3}`, vcard: card}, MessageType.contact)
break
case 'owner':
case 'dono':
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `) 
ku = 'contato: wa.me//554991579631\n\nmeu canal no YT: https://youtube.com/channel/UCUUHXfMsroL472GiIivBFNQ'
client.sendMessage(from, ku, text)
cu1 = `554991579631|Gabriel|554991579631`
cu2 = cu1.split('|')[0]
cu3 = cu1.split('|')[1]
cu4 = cu1.split('|')[2]
card = 'BEGIN:VCARD\n'
 + 'VERSION:3.0\n'
 + `FN:${cu3}\n`
 + `TEL;type=CELL;type=VOICE;waid=${cu2}:${cu4}\n`
+ 'END:VCARD'.trim()
client.sendMessage(from, {displayName: `${cu3}`, vcard: card}, MessageType.contact)
break
case 'bukatime':
case 'opentime':
case 'abrirtime':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.updatePresence(from, Presence.composing) 
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minutos") {var timer = args[0]+"0000"
} else if (args[1]=="horas") {var timer = args[0]+"00000"
} else {return reply("*Selecionar :*\nsegundos\nminuto\nhora\n\n*Exemplo*\n10 segundos")}
setTimeout( () => {
var nomor = mek.participant
const open = {
text: `*Na hora* Grupo aberto pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nAgora *membro* pode enviar mensagens`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply(open)
}, timer)
break
case 'fechartime':
case 'closetime':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.updatePresence(from, Presence.composing) 
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minutos") {var timer = args[0]+"0000"
} else if (args[1]=="horas") {var timer = args[0]+"00000"
} else {return reply("*Selecionar:*\nsegundos\nminutos\nhora\n\n*Exemplo*\n10 segundos")}
setTimeout( () => {
var nomor = mek.participant
const close = {
text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora* apenas admin* pode enviar mensagens`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}, timer)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupUpdateSubject(from, `${body.slice(9)}`)
client.sendMessage(from, 'Sucesso, alterado o nome do grupo', text, {quoted: mek})
break
case 'sf':
case 'figf':
case 'figuf':
case 'stickerf':
 
if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply('Banido!')
await limitAdd(sender)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 10 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break 
case 'colorful':
case 'glowing':  
case 'cold':
case 'bold':  
case 'army': 
if (isBan) return reply(` vc está banido `)
if (args.length < 1) return reply('Cadê o  txt mano?')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
qrt = args.join(" ")
anu = await fetchJson(`http://brizas-api.herokuapp.com/video/${command}?apikey=brizaloka&text=${qrt}`)
buff = await getBuffer(anu.resultado)
client.sendMessage(from, buff, video, {quoted: mek})
break
case 'feio':
if (!isOwner) if (!isPremium) addFilter(from)  
rate = body.slice(6)
reply(' ❰ Pesquisando a sua ficha de feio : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = fs.readFileSync(`./lib/feio.jpg`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 28 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 38 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 48 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 

client.sendMessage(from, wew, image, { quoted: mek, thumbnail:akaky, caption: '  O quanto você é feio? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ feio\n\n '+bo+' ' })
 
}, 8000)
break      
case 'gay':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//addFilter(from)  
rate = body.slice(5)
reply(' ❰ Pesquisando a sua ficha de gay : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = fs.readFileSync(`./lib/gay.jpg`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
const ijry = fs.readFileSync('./gifs/gay.mp4')
client.sendMessage(from, ijry,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: '  O quanto você é gay? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ gay 🏳️‍🌈\n\n '+bo+' ' })
}, 8000)
break







case 'corno':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//addFilter(from)
rate = body.slice(1)
reply(' ❰ Pesquisando a ficha de : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = fs.readFileSync(`./lib/corno.jpg`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
const iujry = fs.readFileSync('./gifs/corno.mp4')
client.sendMessage(from, iujry,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: '  O quanto você é corno? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱  corno 🐃' })
}, 8000)
break
case 'gostoso':
if (!isOwner) if (!isPremium) addFilter(from)  
rate = body.slice(8)
reply(' ❰ Pesquisando a sua ficha de gostoso : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = fs.readFileSync(`./lib/gostoso.jpg`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, wew, image, { quoted: mek, thumbnail:akaky, caption: '  O quanto você é gostoso? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ gostoso 😝', Mimetype: 'video/gif'})
}, 8000)
break 
case 'gostosa':
if (!isOwner) if (!isPremium) addFilter(from)  
rate = body.slice(8)
reply(' ❰ Pesquisando a sua ficha de gostosa : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = fs.readFileSync(`./lib/gostosa.jpg`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, wew, image, { quoted: mek, thumbnail:akaky, caption: 'O quanto você é gostosa? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gostosa 😳'})
}, 8000)
break
case 'retardado':
if (!isOwner) if (!isPremium) addFilter(from)  
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
hasil = `você é: *${random}%* RETARDADO(A)😛`
reply(hasil)
break
case 'chato':
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
hasil = `Nível de chatisse😐\n\nVocê é: *${random}%* CHATO(A)😒😬`
reply(hasil)
break
case 'tmdopau':
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 25)}`
hasil = `Ta poha meno😌\n\nVocê tem  : *${random}* cm de pau😁`
reply(hasil)
break
case 'devo':
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
hasil = `Eu acho que Você tem  : *${random}* % De chance de acertar na sua escolha😳 `
reply(hasil)
break
case 'golpe':
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
hasil = `você é: *${random}* % do golpe 😳\n\nGosta de ferir sentimentos neh 💔`
reply(hasil)
break
case 'engraçado':
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
hasil = `você e : *${random}* % engraçado 😄\n\nGosta de fazer piadinha neh engraçadinho chega pv que te conto a piada que sua mãe me contou onten de noite`
reply(hasil)
break
case 'amretardado':
if (args.length < 1) return client.sendMessage(from, 'coloca um nome idiota', text, {quoted: mek})
ytb = body.slice(13)
client.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
hasil = `*IDIOTA ENCONTRADO😛*\n\n*NOME DO IDIOTA* : *${args[0]}*\n*PORCENTAGEM DE IDIOTICE* : ${random}%😂`
reply(hasil)
break
case 'amgolpe':
if (!isOwner) if (!isPremium) addFilter(from)  
if (args.length < 1) return client.sendMessage(from, 'coloca um nome', text, {quoted: mek})
pkt = body.slice(13)
client.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
hasil = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
reply(hasil)
break
case 'tts':
if (!isOwner) if (!isPremium) addFilter(from)  
msgFilter.isFiltered(from)
if (isBan) return reply(` vc está banido `)
if (args.length < 1) return client.sendMessage(from, `Qual é o código da linguagem, tio?\nExemplo: ${prefix}gtts pt Oi tudo bem?`, text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('A maior parte do texto é merda')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply('falha:(')
client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
break

case 'grave2':
if (!isOwner) if (!isPremium) addFilter(from)  
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break 
case 'tempo-v':
var req = args.join(' ')            
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
break
case 'slowvid':
if (!isQuotedVideo) return fakegroup('Marque um vídeo')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'grave':
if (!isOwner) if (!isPremium) addFilter(from)  
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'adolesc':
if (!isOwner) if (!isPremium) addFilter(from)  
if (!isQuotedAudio) return reply('Marque um áudio')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break  
case 'fastvid':
if (!isQuotedVideo) return reply('Marque um vídeo')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})		
break
case 'bass3':
if (!isOwner) if (!isPremium) addFilter(from)  
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'bass':  
  if (!isQuotedAudio) return reply('Marque um áudio')
  wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isBan) return reply(` vc está banido `)
msgFilter.isFiltered(from)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'bass2': 
  if (!isQuotedAudio) return reply('Marque um áudio')
  wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isBan) return reply(` vc está banido `)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'estourar': 
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'fast':
if (!isQuotedAudio) return reply('Marque um áudio')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'esquilo':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'hentai':
case 'porno':
case 'porn':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
 
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/hentai`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
break
case 'keta':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/keta?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
break
case `albedohot`:
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
					data = fs.readFileSync('./API/Albedo.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buffer = await getBuffer(randKey.result)
				client.sendMessage(from, buffer, image, {caption: ':3', quoted: mek})
				data = fs.readFileSync('./API/Albedo.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buffer = await getBuffer(randKey.result)
				client.sendMessage(from, buffer, image, {caption: ':3', quoted: mek})
                 break
case 'waifuhentai':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/waifus`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'yurihentai':
case 'hentaiyuri':
case 'lesbian':
case 'lesbica':
case 'lésbica':
case 'lésbicas':
case 'lesbicas':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/yuri?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/lesbian?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})

break
case 'hot':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/neko`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
break
case 'spank':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/spank?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'femdom':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from) 
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  ??')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/femdom?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'kuni':
case 'siririca':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/kuni`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/kuni?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'boquete':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/boquete`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/boquete2`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/boquete3`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/bj?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'boobs':
case 'seios':
case 'breasts':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/boobs?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'pussy':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/pussyart?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
ini_buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/girlsolo?apikey=brizaloka`)
client.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:akaky, caption: '｡◕‿◕｡'})
break
case 'anal':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')

if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/anal?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break
case 'feet':
case 'pé':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('тЫФBot s├│ funciona em gruposтЫФ                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  ЁЯФЮ')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/feet?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'cum':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/cumarts?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
break 
case 'futanari':
case 'futunari':
case 'futa':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('тЫФBot s├│ funciona em gruposтЫФ                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  ЁЯФЮ')
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/futanari?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/traveco`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/hentaiarmadilha`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 
case 'muitohentai':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
if (isGroup) if (isAntiPorn) return reply(`Anti Pornografia está ativado! peça ao ADM para desativar`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (!isOwner) if (!isPremium) return reply (`Só Premium`)
//if (!isOwner) if (!isPremium) addFilter(from)  
if (isBan) return reply(` vc está banido `)
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
site = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/tits?apikey=brizaloka`)
client.sendMessage(from, site, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/hentai`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/sexo`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/erotico`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/neko`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/lolis`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/waifus`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/lolis`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/hentai/lolis`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted:mek, thumbnail:akaky})
break 


case 'trash':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ind.wait())
owgi = await client.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
hehe = await getBuffer(`https://api-gdr2.herokuapp.com/api/petpet?url=${anu.url}`)
client.sendMessage(from, hehe, image, {quoted:mek, thumbnail:akaky})
} else {
reply('Só foto')
}
break
case 'termux':
meme = await kagApi.memes()
buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgADDq_64EbTI0NroP7CUoVeWmu1J06NnGHw&usqp=CAU`)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, caption: 'Terminal é um programa muito conhecido no mundo das distribuições Linux. Ele é uma ferramenta que facilita muito nas tarefas relacionadas ao sistema. Agora, já pensou em utilizar o Terminal Linux no seu Android? Esta é a proposta do Termux.\n\n*TERMUX: UTILIZE O TERMINAL NO SEU ANDROID*\n\nA utilização do Terminal aumenta muito a produtividade do usuário que já possui um determinado nível de conhecimento técnico.\nCom o terminal, é possível fazer diversas e diferentes coisas, desde navegar entre os diretórios e instalar programas, até descompactar arquivos e monitorar os processos.'})
break
case 'grupoinfo':
client.updatePresence(from, Presence.composing)
ppUrl = await client.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
break 
case 'setppbot':
client.updatePresence(from, Presence.composing)
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(enmedia)
await client.updateProfilePicture(botNumber, media)
reply('Obrigado pelo novo perfil😗')
break
case 'setprefix':
if (args.length < 1) return
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break
case 'diario':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
qdiario = args.join(" ")
qdiario.qdiario = qdiario
fs.writeFileSync('./data/qdiario.json', JSON.stringify(qdiario, null, '\t'))
reply(`Td Ok`)
break
case 'fundobemvindo':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply(`Marque alguma imagem com o comando ${prefix}imgpralink e copie o link e digite\n${prefix}fundobemvindo o link aqui.\nE ${prefix}fundosaiu o link aqui.`)
fundo1 = args[0]
fundo.fundo1 = fundo1
fs.writeFileSync('./dono/fundobemvindo.json', JSON.stringify(fundo, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
break
case 'fundosaiu':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply(`Marque alguma imagem com o comando ${prefix}imgpralink e copie o link e digite\n${prefix}fundosaiu o link aqui.\nE ${prefix}fundobemvindo o link aqui.`)
fundo2 = args[0]
fundo.fundo2 = fundo2
fs.writeFileSync('./dono/fundobemvindo.json', JSON.stringify(fundo, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
break
case 'add1':
if (args.length < 2) return
if (!isOwner) return reply(mess.only.ownerB)
A = args.join(" ")
list.A = A
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${A} foi adicionado com sucesso na lista `)
break
case 'add2':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
B = args.join(" ")
list.B = B
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${B} foi adicionado com sucesso na lista `)
break
case 'add3':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
C = args.join(" ")
list.C = C
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${C} foi adicionado com sucesso na lista `)
break
case 'add4':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
D = args.join(" ")
list.D = D
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${D} foi adicionado com sucesso na lista `)
break
case 'add5':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
E = args.join(" ")
list.E = E
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${E} foi adicionado com sucesso na lista `)
break
case 'add6':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
F = args.join(" ")
list.F = F
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${F} foi adicionado com sucesso na lista `)
break
case 'add7':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
G = args.join(" ")
list.G = G
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${G} foi adicionado com sucesso na lista `)
break
case 'add8':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
H = args.join(" ")
list.H = H
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${H} foi adicionado com sucesso na lista `)
break
case 'add9':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
I = args.join(" ")
list.I = I
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${I} foi adicionado com sucesso na lista `)
break
case 'add10':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
J = args.join(" ")
list.J = J
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${J} foi adicionado com sucesso na lista `)
break
case 'add11':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
K = args.join(" ")
list.K = K
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${K} foi adicionado com sucesso na lista `)
break
case 'add12':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
L = args.join(" ")
list.L = L
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${L} foi adicionado com sucesso na lista `)
break
case 'add13':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
M = args.join(" ")
list.M = M
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${M} foi adicionado com sucesso na lista `)
break
case 'add14':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
N = args.join(" ")
list.N = N
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${N} foi adicionado com sucesso na lista `)
break
case 'add15':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
O = args.join(" ")
list.O = O
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${O} foi adicionado com sucesso na lista `)
break
case 'add16':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
P = args.join(" ")
list.P = P
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${P} foi adicionado com sucesso na lista `)
break
case 'add17':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
Q = args.join(" ")
list.Q = Q
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${Q} foi adicionado com sucesso na lista `)
break
case 'add18':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
R = args.join(" ")
list.R = R
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${R} foi adicionado com sucesso na lista `)
break
case 'add19':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
S = args.join(" ")
list.S = S
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${S} foi adicionado com sucesso na lista `)
break
case 'add20':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
T = args.join(" ")
list.T = T
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${T} foi adicionado com sucesso na lista `)
break
case 'add21':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
U = args.join(" ")
list.U = U
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${U} foi adicionado com sucesso na lista `)
break
case 'add22':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
V = args.join(" ")
list.V = V
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${V} foi adicionado com sucesso na lista `)
break 
case 'add23':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
W = args.join(" ")
list.W = W
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${W} foi adicionado com sucesso na lista `)
break
case 'add24':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
X = args.join(" ")
list.X = X
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${X} foi adicionado com sucesso na lista `)
break
case 'add25':
if (args.length < 1) return
if (!isOwner) return reply(mess.only.ownerB)
Y = args.join(" ")
list.Y = Y
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${Y} foi adicionado com sucesso na lista `)
break
case 'info':
msgFilter.isFiltered(from)
me = client.user
uptime = process.uptime()
inf =`
◇ Nome do bot: ${setting.NamaBot}
◆ Número do bot:@${me.jid.split('@')[0]}
◇ Dono: wa.me/${setting.ownerNumber}
◆ Prefix: ${prefix}
◇ O bot está ativo há: ${kyun(uptime)}`
bugj = fs.readFileSync('./lib/logo.jpg')
client.sendMessage(from, bugj, image, {caption: `${inf}`})
break        
case 'beijo':
if (isBan) return reply(` vc está banido `)
if (!isGroup) return reply('So em gp man')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = fs.readFileSync('./ft/beijo.mp4')
client.sendMessage(from, wew,  MessageType.video, {mimetype: 'video/gif', quoted: mek, thumbnail:akaky, caption: susp})
break
case 'marcar':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
members_id = []
jrp = (args.length > 1) ? body.slice(8).trim() : ''
jrp += '\n\n'
for (let mem of groupMembers) {
jrp += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(jrp, members_id, true)
break
case 'marcar2':
members_id = []
ytb = (args.length > 1) ? body.slice(8).trim() : ''
ytb += '\n\n'
for (let mem of groupMembers) {
jrp += `╠➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
reply(ytb)
break
case 'marcar1':
members_id = []
ytb = (args.length > 1) ? body.slice(8).trim() : ''
ytb += '\n\n'
for (let mem of groupMembers) {
ytb += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
client.sendMessage(from, ytb, text, {detectLinks: false, quoted: mek})
break
case 'limpar':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
anu = await client.chats.all()
client.setMaxListeners(25)
for (let _ of anu) {
client.deleteChat(_.jid)
}
reply('Excluido todos os chats com sucesso :)')
break
case 'bc':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply('.......')
dfg = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of dfg) {
client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(4)}`})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, `[ TRANSMISSÃO DE AVISO ]\n\n${body.slice(4)}`)
}
reply('Transmissão enviada com sucesso')
}
break
case 'promover':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const dlt = body.slice(10)
if (dlt.length > 14)return reply(`Exemplo : ${prefix}promover @554389220420`) 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Promovido com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break
case 'rebaixar':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const dlp = body.slice(15)
if (dlp.length >= 15)return reply(`Exemplo : ${prefix}rebaixar @554389220420`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Rebaixado com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(ytb, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isOwner) return reply(`Comando temporiamente suspenso`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const dl = body.slice(5)
if (dl.length > 13)return reply(`Exemplo : ${prefix}add 554389220420`) 
if (args[0].startsWith('08')) return reply('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar destino, talvez porque é privado')
}
break
case 'addsp':
if (!isGroup) return reply(mess.only.group) 
if (!issupre) return 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Você quer adicionar um gênio?')
if (args[0].startsWith('08')) return reply('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar destino, talvez porque é privado')
}
break

case 'admins':
case 'hideadms':
case 'marcaradm':
case 'marcaradms':
case 'hideadm':
case 'admhide':
case 'admshide':
if (!isGroup) return reply(mess.only.group)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break
case 'linkgp':
case 'linkgroup':
if (isBan) return reply(` vc está banido `)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await client.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case 'leave':
if (!isGroup) return reply(mess.only.group)
if (isGroupAdmins || isOwner) {
client.groupLeave(from)
} else {
reply(mess.only.admin)
}
break
case 'toimg':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter adesivo em imagem [ tente utilizar */togif* ]❌')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:akaky, caption: '>//<'})
fs.unlinkSync(ran)
})
break
case 'simih':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗️')
} else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break
case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply('1 pra ligar, 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Já esta ativo.')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Desativou com sucesso o recurso de boas-vindas neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdão vc em KAKKKK')
}
break
case 'wetglass':
if (isBan) return reply('Maaf kamu sudah terbenned!')
if (args.length == 0) return reply(`Utilize: ${prefix + command} text\nExemplo: ${prefix + command} BOT`)
txt = args.join(" ")
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=genbotkey&text=${txt}`)
client.sendMessage(from, buffer, image, {caption: 'Está ai', quoted: mek})
break
case 'clonar':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, zid, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await client.getProfilePicture(id)
buffer = await getBuffer(pp)
client.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break
case 'bc2':
if (!isadminbot) return reply('Quem é Você?')
if (args.length < 1) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
}
reply('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
}
reply('Transmissão enviada')
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break
case 'marcartd':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var mrc = body.slice(10)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: mrc,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
reply('Pronto, todos foi marcado.')
break
case 'hidemarcar':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) reply (`comando apenas para admins`)
if (!isGroupAdmins) if (!isOwner) nadm = fs.readFileSync('./assets/voz/nao digno o suficiente.mp3')

if (!isGroupAdmins) if (!isOwner) return client.sendMessage(from, nadm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(12)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break 
case 'hidesp':
if (!isGroup) return reply(mess.only.group)
if (!issupre) return 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(8)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break
case 'bc3':
if (!isOwner) return reply('Só Dono.')
if (args.length < 1) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {caption: `[ Transmissão do administrador do bot ]\n\n${body.slice(4)}`})
}
reply('Transmissão enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *TRANSMISSÃO* ]\n
\n${body.slice(4)}`)
}
reply('Transmissão enviada')
}
break
case 'wait':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await client.downloadMediaMessage(encmedia)
await wait(media).then(res => {
client.sendMessage(from, res.video, video, {quoted: mek, thumbnail:akaky, caption: res.ytb.trim()})
}).catch(err => {
reply(err)
})
} else {
reply('Só uma foto mano')
}
break
case 'img2':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
imgg = body.slice(6)
if (args.length < 1) return reply('Cade o texto mano? tu é burro? use assim: \n\n*/img SEU TEXTO* ')
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT!!')
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
break
case 'img3':
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)
imgg = body.slice(6)
if (args.length < 1) return reply('Cade o texto mano? tu é burro? use assim: \n\n*/img SEU TEXTO* ')
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT!!')
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
break
case 'imgvip':
case 'imgpremium':
if (!isPremium) return reply (`Só Premium`)
if (args.length < 1) return reply('Cade o texto mano? tu é burro? use assim: \n\n*/img SEU TEXTO* ')
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT!!')
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
break

case 'flood':
if (!isOwner) ndono = fs.readFileSync('./assets/voz/eu só aceito ordens de gabriel sama.mp3')
if (!isOwner) ndono2 = fs.readFileSync('./stickers/ndono.webp')
if (!isOwner) client.sendMessage(from, ndono2, sticker)
if (!isOwner) return client.sendMessage(from, ndono, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}


{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}

{
teks = args.join(' ')
res = await googleImage(teks, google)

setTimeout(function(){
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})

}
}
},4000);

}



break


case 'gimage':
case 'googleimage':
case 'img':
if (!isGroup) if (!isOwner) if (!isPremium) return reply('⛔ *[BOT SÓ FUNCIONA EM GRUPOS]* ⛔                            grupo oficial do bot:https://chat.whatsapp.com/EByoVCuHUGz6h1uR89SosR  🤖')
if (isOffin) return reply(`modo offline está ativado,aguarde até que *Gabriel* desative`)

 if (budy.includes("gore") || (budy.includes("estupr") || (budy.includes("sangue") || (budy.includes("trip") || (budy.includes("vômit") || (budy.includes("nojen") ||(budy.includes("vomit")))))))){
return reply(`detectado palavra ofensiva`)
client.groupRemove(from, [sender])
}

if (isGroup) if (isAntiPorn) if (budy.includes("anal") || (budy.includes("sex") || (budy.includes("porn") || (budy.includes("hent") || (budy.includes("xvideos") || (budy.includes("+18") ||(budy.includes("boquete")))))))){
return reply(`Anti Porn está ativado!`)
}

if (isGroup) if (isAntiPorn) if (budy.includes("Anal") || (budy.includes("Sex") || (budy.includes("Porn") || (budy.includes("Hent") || (budy.includes("HENT") || (budy.includes("PORN") ||(budy.includes("blowjob")))))))){
return reply(`Anti Porn está ativado!`)
}

if (isGroup) if (isAntiPorn) if (budy.includes("bang") || (budy.includes("pau") || (budy.includes("Porn") || (budy.includes("pen") || (budy.includes("piroca") || (budy.includes("buce") ||(budy.includes("boce")))))))){
return reply(`Anti Porn está ativado!`)
}
if (isGroup) if (isAntiPorn) if (budy.includes("vagi") || (budy.includes("siririca") || (budy.includes("Porn") || (budy.includes("mast") || (budy.includes("bund") || (budy.includes("cu") ||(budy.includes("cú")))))))){
return reply(`Anti Porn está ativado!`)
}
 
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT!!')
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, thumbnail:akaky, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
break
//_JOGO DA VELHA By: Resen
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
//} else if (tttset.waitingTime == "on") {
//reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)

} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
//tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break
case 'ttthelp':
client.sendMessage(from, ttthelp(prefix), text)
break
case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek, thumbnail:akaky})
break
case 'bangp':
case 'mute':
if (!isGroup) return reply(`somente em grupos`)
if (!isGroupAdmins && !isOwner) return reply(`somente admins`)
if (isBanchat) return reply(`este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Grupo mutado com sucesso.\na partir de agora comandos só funcionam com adms.`)
break
case 'tttrank':
if (!isGroup) return reply('Só grupo')
if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
wtujuh = fs.readFileSync('./assets/voz/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 500) + 505
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 2000) + 5000
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 5000) + 10000
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 9000) + 18000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
ywtujuh = fs.readFileSync('./assets/voz/vitória.mp3')
client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
ywtujuh = fs.readFileSync('./assets/voz/vitória.mp3')
client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 500) + 505)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 2000) + 5000)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 5000) + 10000)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO ${setting. NamaBot} 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
if (!isOwner) ywtujuh = fs.readFileSync('./assets/voz/derrota.mp3')
if (!isOwner) client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isOwner) ywtujuh = fs.readFileSync('./assets/voz/derrota.mp3')
if (isOwner) client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
} else {
client.sendMessage(from, ` *VOCÊ PERDEU! VITÓRIA É DA ${setting. NamaBot} 🎉🎉`, text)
if (!isOwner) ywtujuh = fs.readFileSync('./assets/voz/derrota.mp3')
if (!isOwner) client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isOwner) ywtujuh = fs.readFileSync('./assets/voz/derrota.mp3')
if (isOwner) client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
tujuh = fs.readFileSync('./assets/voz/empate.mp3');
client.sendMessage(from, tujuh, audio, {quoted:mek, thumbnail:akaky})
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
tujuh = fs.readFileSync('./assets/voz/empate.mp3');
client.sendMessage(from, tujuh, audio, {quoted:mek, thumbnail:akaky})
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
case 'setprefix2':
if (args.length < 1) return
if (!issupre) return reply(mess.only.ownerB)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break
case 'email':
if (args.length < 1) return reply(`digite a sua mensagem! exemplo: */email oi, tudo bem?*`)

ku = `${ownerNumber}`
client.sendMessage(ku, `𝑉𝑜𝑐ê 𝑟𝑒𝑐𝑒𝑏𝑒𝑢 𝑢𝑚 𝑒𝑚𝑎𝑖𝑙 𝑑𝑒: *${pushname}*\ngrupo: *${groupName}*\n${sender.split('@')[0]}\n\n" *${budy.slice(7)}* "`,text)
reply(`✓ *a mensagem foi enviada ao meu dono,aguarde uma resposta*`)

break

case 'resp':
if (!isOwner) return reply(`o comando certo é */email*`)
if (args.length < 1) return reply(`digite a sua mensagem! exemplo: */resp* olá*`)

txt = body.slice(6)
jrr = txt.split("|")[0];
jrr1 = txt.split("|")[1];

ku = `${jrr}@s.whatsapp.net`
client.sendMessage(ku, `𝑟𝑒𝑠𝑝𝑜𝑠𝑡𝑎 𝑑𝑒 𝐺𝑎𝑏𝑟𝑖𝑒𝑙:\n\n" *${jrr1}* "\n\n𝑝𝑎𝑟𝑎 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒𝑟 𝑎𝑜 𝑒-𝑚𝑎𝑖𝑙,𝑑𝑖𝑔𝑖𝑡𝑒:\n*email* (sua msg)`,text)
reply(`✓ a resposta foi enviada`)
break


case 'avaliar':
if (args.length < 1) return reply(`*use assim:*\nexemplo:\n*/avaliar* 5 (para dar 5 estrelas)\n*/avaliar* 4 (para dar 4 estrelas)\n*/avaliar* 3 (para dar 3 estrelas)\n\ne assim por diante!`)


ku = `${ownerNumber}`

if (Number(args[0]) === 1) {
reply (`nome: ${pushname}\ngrupo:${groupName}\n\n*nota: ★☆☆☆☆ 1/5*`)

client.sendMessage(ku, `*AVALIAÇÃO:* nome: ${pushname}\ngrupo: *${groupName}*\n${sender.split('@')[0]}\n\n*nota: ★☆☆☆☆ 1/5*`,text)
return reply (`𝑜𝑏𝑟𝑖𝑔𝑎𝑑𝑜 𝑝𝑒𝑙𝑎 𝑎𝑣𝑎𝑙𝑖𝑎çã𝑜!`)
}

if (Number(args[0]) === 2) {
reply (`nome: ${pushname}\ngrupo: *${groupName}*\n\n*nota: ★★☆☆☆ 2/5*`)

client.sendMessage(ku, `*AVALIAÇÃO:* nome: ${pushname}\ngrupo: *${groupName}*\n${sender.split('@')[0]}\n\n*nota: ★★☆☆☆ 2/5*`,text)
return reply (`𝑜𝑏𝑟𝑖𝑔𝑎𝑑𝑜 𝑝𝑒𝑙𝑎 𝑎𝑣𝑎𝑙𝑖𝑎çã𝑜!`)
}

if (Number(args[0]) === 3) {
reply (`nome: ${pushname}\ngrupo:${groupName}\n\n*nota: ★★★☆☆ 3/5*`)

client.sendMessage(ku, `*AVALIAÇÃO:* nome: ${pushname}\ngrupo: *${groupName}*\n${sender.split('@')[0]}\n\n*nota: ★★★☆☆ 3/5*`,text)
return reply (`𝑜𝑏𝑟𝑖𝑔𝑎𝑑𝑜 𝑝𝑒𝑙𝑎 𝑎𝑣𝑎𝑙𝑖𝑎çã𝑜!`)
}

if (Number(args[0]) === 4) {
reply (`nome: ${pushname}\ngrupo:${groupName}\n\n*nota: ★★★★☆ 4/5*`)

client.sendMessage(ku, `*AVALIAÇÃO:* nome: ${pushname}\ngrupo: *${groupName}*\n${sender.split('@')[0]}\n\n*nota: ★★★★☆ 4/5*`,text)
return reply (`𝑜𝑏𝑟𝑖𝑔𝑎𝑑𝑜 𝑝𝑒𝑙𝑎 𝑎𝑣𝑎𝑙𝑖𝑎çã𝑜!`)
}

if (Number(args[0]) === 5) {
reply (`nome: ${pushname}\ngrupo:${groupName}\n\n*nota: ★★★★★ 5/5*`)

client.sendMessage(ku, `*AVALIAÇÃO:* nome: ${pushname}\ngrupo: *${groupName}*\n${sender.split('@')[0]}\n\n*nota: ★★★★★ 5/5*`,text)
return reply (`𝑜𝑏𝑟𝑖𝑔𝑎𝑑𝑜 𝑝𝑒𝑙𝑎 𝑎𝑣𝑎𝑙𝑖𝑎çã𝑜!`)
}
reply(`inválido!\n\nuse assim:\n*${prefix}avaliar* 5`)

break

case 'execut3':
var konsol = budy.slice(8)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'de', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
break
case 'execut2':
  if (!issupre) return 
return eval(`${args.join(' ')}`)
break 

if (!mek.key.fromMe) {
if (isGroup && !isBanned) {
try {
const checkuser = getMsgId(sender)
if (checkuser === undefined) addMsgId(sender)
const name = checkuser
const getmessage = getMsgMessage(sender)
messageContage(sender, 1)      
} catch (err) {
console.error(err)
}
}
}
break
/*-------------[ Tictactoe Handler ]-------------*/
case 'anagrama':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./src/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`,MessageType.text)
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./src/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./src/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break 
case 'casino':
case 'cassino':
if (isBan) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
client.updatePresence(from, Presence.composing) 
      //CASSINO
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
	const cassino = `
┏━━━━❪🎰❫━━━━
┣►${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
reply(cassino)
if (Vitória == "Você ganhou!!!") {
dinherocassino = Math.floor(Math.random() * 20000) + 50000
addLevelingXp(sender, dinherocassino)
addLevelingLevel(sender, 1)
setTimeout( () => {
reply(`Parabéns você ganhou *${dinherocassino}* em xp e +1 nível!💰💎`)
}, 10)
}
if (Vitória == "Você perdeu...") {

addLevelingXp(sender, -270000)
setTimeout( () => {
reply(`Você perdeu -1000 em *xp* apostando no cassino`)
}, 10)
}
await limitAdd(sender)
break
case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
client.sendMessage(from, chatMove, MessageType.text, {quoted: mek, thumbnail:akaky,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
client.sendMessage(from, strChat, MessageType.text, {quoted: mek, thumbnail:akaky,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
await limitAdd(sender)
break
case 'resetavelha':
case 'resetarvelha': 
if (!isGroupAdmins) return reply('Só adm, seu animal')
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break
default:
//Antilink//ANTIS
/*** Anti-Catálogo By JvDarK***/
if (isGroup && isAntiCatalogo && (type == 'productMessage')) {
if (isGroupAdmins) return reply('Isso é um catálogo, mas vc é adm então ta de boa.')
reply('🔰Ƭrανα Ƈαтάℓσgσ ∂єтєcтαdσ\n❌Rємσνєη∂σ❌')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  client.groupRemove(from, [kik])
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
client.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
}
if (contact.includes(type)){
if (!Anticontato) return
if (isGroupAdmins) return reply(`hummmm contato`) 
reply(`contato detectado, somos muito severo em essas situações, então terei que ti remover, se não for trava, entre em contato com algum adm.`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)	
setTimeout(() =>{
client.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)
reply(`${destrava}`)
reply(`${destrava}`)
reply(`${destrava}`)
}

if (location.includes(type)){
if (!Antiloc) return
if (isGroupAdmins) return reply(`hummmm localização `)   
reply(`localização detectada, somos severos nessa questão, então terei que remover você, qualquer dúvida, entre em contato com algum adm.`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
client.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)
reply(`${destrava}`)
reply(`${destrava}`)
reply(`${destrava}`)
}

if (document.includes(type)){
if (!Antidoc) return
if (isGroupAdmins) return reply(`hummmm documento`)     
reply(`Não permitimos envio de documentos no grupo, por questões de segurança de travas e etc..., então por conta disso, terei que ti remover, qualquer dúvida,entre em contato com algum adm.`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
client.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)
reply(`${destrava}`)
reply(`${destrava}`)
reply(`${destrava}`)
}
	
if (budy.includes("//s.kwai.app/") || (budy.includes("//vm.tiktok") || (budy.includes("://youtube") || (budy.includes("instagram.com") || (budy.includes("://t.me/") || (budy.includes("https://"))))))){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
if (isOwner) return reply(`*Eu nunca te puniria mestre! ｡◕‿◕｡*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
reply('tchau👋')
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}	

if (isGroup && isSimi && budy != undefined) {
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
} else {
console.log(color('[ERROR]','red'), 'eita bixo comando não registrado de', color(sender.split('@')[0]))
					
}		if (isOwner) if (isCmd) { tujuh = fs.readFileSync('./assets/voz/cmdnaoexiste.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) }
if (isPremium) if (isCmd) if (!isOwner) { tujuh = fs.readFileSync('./assets/voz/vip cmd n existe.mp3')
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) }
		if (!isPremium) if (!isOwner) if (isCmd) {
if (!isBan) tujuh = fs.readFileSync('./assets/baka.mp3');
if (!isBan) client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (!isOwner) ujuh = fs.readFileSync('./stickers/baka.webp');
if (!isOwner) client.sendMessage(from, ujuh, sticker, {quoted:mek, thumbnail:akaky})
}
}
} catch (err) {
e = String(err)
if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
}
}
})
}
starts()

/* base adquirida (comprada) do Aleatory-bot©
essa base é bem antiga, estou postando em 11/2021
mas fiz ela no mês 09/2021, então muita coisa pode mudar caso eu decida fazer uma "atualização" desse bot, visto que nesses últimos meses eu aprendi bastante coisa.
Existem cases aqui que podem pertencer a outros bots, como Akame por exemplo. Ti0 Momonga não se responsabiliza por isso, visto que quando comprei essa base já estava assim.(com as cases).

deixe os créditos! não custa nada seu cabeça de pirulito

*/