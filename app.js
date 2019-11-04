const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '951369278:AAHA2tPwROBLbFYQ7uHxDmI3KjWvI8drCSw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
	// 'msg' is the received Message from Telegram
	// 'match' is the result of executing the regexp above on the text content
	// of the message

	const chatId = msg.chat.id;
	const resp = match[1]; // the captured "whatever"

	// send back the matched "whatever" to the chat
	bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

bot.onText(/\/start/, (msg) => {
	let title = (msg.from.first_name == "xXx_V4CCUM^KL33N3R_xXx") ? "Maître" : "humble manant"
	bot.sendMessage(msg.chat.id, "Comment je peux vous être utile, " + title + ' ?', {
		"reply_markup": {
			"keyboard": [["Montre moi une image"],   ["Raconte moi une blague"], ["En fait ça va trkl cimer"]]
		}
	});
			
});

let insultes = [
	"suce ma bite",
	"sale petite ordure",
	"résidus de chibre",
	"tu as le sida",
	"je crache sur ton visage"
]

let jokes = [
	"Ma femme a dit que si cette blague obtenait 1000 votes positifs, elle renoncerait à sa virginité anale ce soir !\nS’il vous plaît ne votez pas. Elle est en voyage d’affaires jusqu’à mardi.",
	"C’est une fille qui dit à sa mère :\n– Maman, je suis enceinte\n– Mais ma fille, où avais-tu la tête ?\n– Dans le pare brise !",
	"Deux curés sous la douche se disent :\n– Dis donc tu n’as pas grossi de la bite ?\n– Bah non, je rentre encore dans du 12 ans",
	"Un matin, un couple vient de baiser toute la nuit et la femme demande :\n– Chéri, tu vas me chercher des croissants ?\nLe mec répond :\n– OK, combien tu en veux ?\n– Autant de fois qu’on a fait l’amour cette nuit !\nLe gars va à la boulangerie, et demande :\n– Je voudrais 10 croissants, SVP\nIl prend les croissants, réfléchit puis rentre dans la boulangerie et dit :\n– Euh, finalement, 9 croissants et un pain au chocolat !"
]

bot.on('message', (msg) => {
	const chatId = msg.chat.id;

	switch(msg.text){
		case "Montre moi une image": 
			rand = Math.floor(Math.random() * Math.floor( insultes.length ));
			bot.sendPhoto(chatId, "http://lorempixel.com/400/200/animals/"+insultes[rand]);
			break;
		case "Raconte moi une blague":
			rand = Math.floor(Math.random() * Math.floor( jokes.length ));
			bot.sendMessage(chatId, jokes[rand]);
			break;
		case "En fait ça va trkl cimer":
			bot.sendMessage(chatId, "Ok me dérange plus pour rien sale pute.");
			if (msg.from.first_name == "xXx_V4CCUM^KL33N3R_xXx")
				bot.sendMessage(chatId, "Oh désolé maître, je n'avais pas vu que c'était vous, je vous supplie d'accepter mes plus sincères excuses..");
			break;
	}
});
