var yelp = require('yelp-fusion');

const YELP =
	'S_pzptiC9c8YwwreBOmcVCFZcurqc9fX_k19gcYTHraxxeL97ZJY-WJjhoHIOWZvEAQAPS8KFW4mFC9NxcFh72CoABOSmH1Cb2LUHthZex4G3uZ5WusK1Yw_IvmBWnYx';

const yelpClient = yelp.client(YELP);

// const { Client, Intents } = require('discord.js');

// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// client.on('ready', async () =>{
//     console.log('Yoink!')
// })

// client.login('')

const { Client, Intents, MessageEmbed } = require('discord.js');

const aras = [
	'./ara-vu.mp3',
	'./ara-grace.mp3',
	'./ara-aki.mp3',
	'./ara-danny.mp3',
	'./ara-cindy.mp3',
	'./ara-bella.mp3',
	'./ara-hoang.mp3',
	'./ara-truman.mp3',
];

function getUserID(arg) {
	var rx = /<@\d+>/;
	var arr = arg.match(rx);

	if (arr == null) {
		return '';
	}
	return arr[0];
}

function makeid(length) {
	var result = '';
	var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once('ready', () => {
	// const channel = client.channels.cache.get('866141022412603434');
	// // const channel = client.channels.cache.get('741847051301683270');
	// channel
	// 	.join()
	// 	.then((connection) => {
	// 		console.log('Yoink!');
	// 	})
	// 	.catch((e) => {
	// 		console.error(e);
	// 	});
	console.log('bot is ready..');
});

// client.on('messageReactionAdd', (reaction, user) => {
// 	const message = reaction.message;

// 	//console.log(message.content);
// 	const extractID = getUserID(message.content);
// 	//return if no embeds or if another user reacted instead of the bot itself
// 	if (!message.toString().includes('is dropping')) {
// 		return;
// 	}
// 	if (user.id === message.author.id || user.toString() === extractID) return;

// 	message.channel.send(`${user} yoinked a card from ${extractID}!`);
// 	console.log('Yoinked!');
// });

client.on('message', (message) => {
	var prefix = '!';
	var msg = message.content.toLowerCase();

	if (message.member.voice === null) {
		return;
	}
	var voiceChannel = message.member.voice.channel;

	if (!voiceChannel) {
		return;
	}
	if (msg === 'yoink!') {
		if (!voiceChannel) {
			console.log('no');
			return;
		}
		voiceChannel.join().then((connection) => {
			connection
				.play('./yoink.mp3')
				.on('end', (end) => {
					voiceChannel.leave();
				})
				.catch((e) => {
					console.log(e);
				});
		});
		//return;
	}

	if (msg === prefix + 'better') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play('./better.mp3');
		});
		return;
	}

	if (msg === prefix + 'wake') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play('./wake.mp3');
		});
		return;
	}

	if (msg === 'sup!') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play('./sup.mp3');
		});
		return;
	}

	if (msg === prefix + 'mikey') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play('./mikey.mp3');
			message.channel.send('Mikeyyyyyy....', { files: ['./ken.jpg'] });
		});
		return;
	}

	if (msg === prefix + 'chupapi') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play('./chupapi.mp3');
		});
		return;
	}

	if (msg === prefix + 'uwu') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play('./uwu.mp3');
		});
		return;
	}

	if (msg === prefix + 'oniichan') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play('./onii_chan.mp3');
		});
		return;
	}

	if (msg === prefix + 'stfu') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play('./stfu.mp3');
		});
		return;
	}

	if (msg === prefix + 'ara') {
		if (!voiceChannel) {
			return;
		}
		voiceChannel.join().then((connection) => {
			const dispatcher = connection.play(
				aras[Math.floor(Math.random() * aras.length)]
			);
		});
		return;
	}

	client.on('guildMemberSpeaking', (member, speakin) => {
		//STFU GRACE
		// if (speakin && member.id.toString() === '208502806049456128') {
		// 	console.log(member.id);
		// 	var voiceChannel = member.voice.channel;
		// 	voiceChannel.join().then((connection) => {
		// 		connection.play('./stfu.mp3');
		// 	});
		// 	return;
		// }
		//Bigkenster
		// if (speakin && member.id.toString() === '132634969699778560') {
		// 	console.log(member.id);
		// 	var voiceChannel = member.voice.channel;
		// 	voiceChannel.join().then((connection) => {
		// 		connection.play('./blah.mp3');
		// 	});
		// 	return;
		// }
		// //Cindy
		// if (speakin && member.id.toString() === '479485327871049729') {
		// 	console.log(member.id);
		// 	var voiceChannel = member.voice.channel;
		// 	voiceChannel.join().then((connection) => {
		// 		connection.play('./uwu.mp3');
		// 	});
		// 	return;
		// }
		//STFU AKI
		// if (speakin && member.id.toString() === '202872300968607745') {
		// 	console.log(`${member.id}: ${member.displayName}`);
		// 	var voiceChannel = member.voice.channel;
		// 	voiceChannel.join().then((connection) => {
		// 		connection.play('./aki.mp3');
		// 	});
		// 	return;
		// }
		//SIMP
		// if (speakin && member.id.toString() === '322136089139871766') {
		// 	console.log(`${member.id}: ${member.displayName}`);
		// 	var voiceChannel = member.voice.channel;
		// 	voiceChannel.join().then((connection) => {
		// 		connection.play('./simp.mp3');
		// 	});
		// 	return;
		// }
	});

	if (msg === prefix + 'truman') {
		message.channel
			.send(`${message.author} is dropping 3 cards!\n\n`, {
				files: ['./drop.png'],
			})
			.then(function (message) {
				message.react('1️⃣');
				message.react('2️⃣');
				message.react('3️⃣');
				message.react('4️⃣');
			});
	}

	if (msg === prefix + 'snot') {
		message.channel.send('Do you like my snot bubble?', {
			files: ['./truman.png'],
		});
	}

	var split = msg.split(' ');

	if (split[0] === prefix + 'whatshouldieat') {
		if (split.length !== 3) {
			message.channel.send(
				`Tell me what you want to eat and the location...**bitch**`
			);
			return;
		}

		yelpClient
			.search({
				term: split[1],
				location: split[2],
			})
			.then(function (resp) {
				var places = resp.jsonBody.businesses;
				var restaurant = places[Math.floor(Math.random() * places.length)];

				const restEmbed = new MessageEmbed()
					.setTitle(restaurant.name)
					.setURL(restaurant.url)
					.setThumbnail(restaurant.image_url);
				console.log(restEmbed);
				result = restaurant;
				message.channel.send({ embed: restEmbed });
			})
			.catch(function (e) {
				message.channel.send(`I couldn't find a place for you...**bitch**`);
			});
		//message.channel.send(result);
		//message.channel.send({ embeds: [restEmbed] });
	}
});

// client.on('speaking', (user, speaking) => {
// 	console.log(user);
// });

function getCardCode(input) {
	var rx = /(?=\*\*`)?[\d\w]+?(?=`\*\*)/g;
	var arr = input.match(rx);

	var retValue = '';
	for (var i = 0; i < arr.length; i++) {
		retValue += arr[i];
		retValue += ', ';
	}

	return retValue;
}
client.on('messageReactionAdd', (reaction, user) => {
	var message = reaction.message;

	if (message.author.id === '646937666251915264') {
		if (reaction.emoji.name === '🔥') {
			console.log('hi');
			var embeds = message.embeds;
			var extrac = getUserID(embeds[0].description);
			if (
				embeds === null ||
				user.toString() !== extrac ||
				embeds[0].title != 'Card Collection'
			)
				return;
			//console.log(embeds);
			message.channel.send(
				`Copy the following command to burn your cards ${user}:\n\n ${getCardCode(
					embeds[0].description
				)}`
			);
		}

		return;
	}

	if (
		user.id === message.author.id ||
		message.author.id !== '873895261737467974'
	)
		return;

	var ID = makeid(6);
	switch (reaction.emoji.name) {
		case '1️⃣':
			reaction.message.channel.send(
				`${user} took the **Gojo** card \`${ID}\`! Wow, it appears to be in **mint** condition!`
			);
			break;
		case '2️⃣':
			reaction.message.channel.send(
				`${user} took the **Gojo** card \`${ID}\`! Wow, it appears to be in **mint** condition!`
			);
			break;
		case '3️⃣':
			reaction.message.channel.send(
				`${user} took the **Nezuko** card \`${ID}\`! Wow, it appears to be in **mint** condition!`
			);
			break;
		case '4️⃣':
			reaction.message.channel.send(
				`${user} took the **Sung Jin-Woo** card \`${ID}\`! Wow, it appears to be in **mint** condition!`
			);
			break;
		default:
			console.log('nothing');
	}
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
	let newUserChannel = newMember.channelID;
	//let oldUserChannel = oldMember.channelID;

	let voiceChannel = newMember.member.voice.channel;

	if (newUserChannel === '866141022412603434') {
		//don't remove ""
		// User Joins a voice channel
		console.log('Joined vc with id ' + newUserChannel);
		if (!voiceChannel) {
			console.log('no');
			return;
		}
		voiceChannel.join().then((connection) => {
			var sound = './welcome.mp3';
			if (newMember.id.toString() === '343175321421479937') {
				sound = './welcome-truman.mp3';
			} else if (newMember.id.toString() === '224677411604660224') {
				sound = './welcome-danny.mp3';
			}
			connection.play(sound).on(
				'finish',
				(end) => {
					voiceChannel.leave();
				},
				(err) => {
					console.log(err);
				}
			);
		});
	} else {
		// User leaves a voice channel
		console.log('Left vc');
	}
});

client.login('ODczODk1MjYxNzM3NDY3OTc0.YQ_EYg.ou9ZvHThGRsNu1WHJ37e6uN_Ux0');
