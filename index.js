const request = require("request-promise");
const EGClient = require('epicgames-client').Client;
const Fortnite = require('epicgames-fortnite-client');
const { ESubGame } = Fortnite;
const { EPlatform } = require('epicgames-client');
const { EInputType } = require('epicgames-client');
const { EPartyPrivacy } = require('epicgames-client');
const config = require("./config.json");

var IStatus = config.status

  let eg = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email, // Remember to add your bot account email in here or it won't work!
    password: config.password,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
      privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
    }
  });

  let eg2 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email2, // Remember to add your bot account email in here or it won't work!
    password: config.password2,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
       privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

  let eg3 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email3, // Remember to add your bot account email in here or it won't work!
    password: config.password3,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
       privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

  let eg4 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email4, // Remember to add your bot account email in here or it won't work!
    password: config.password4,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
    }
      });

  let eg5 = new EGClient({ // For this make a new account that has nothing and put the details in here.
  email: config.email5, // Remember to add your bot account email in here or it won't work!
  password: config.password5,  // Remember to add your bot account password in here or it won't work!
  //debug: console.log,
  platform: {
    full: 'Nintendo Switch',
  short: EPlatform.SWT,
  os: 'Nintendo Switch/69.69.69.420',
  },
  defaultPartyConfig: {
      privacy: EPartyPrivacy.PUBLIC,
    joinConfirmation: false,
    joinability: 'OPEN', // Opens the party and allows it to be joined
    maxSize: 16,
    subType: 'default',
    type: 'default',
    inviteTTL: 14400,
    chatEnabled: true,
}
  });

  let eg6 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email6, // Remember to add your bot account email in here or it won't work!
    password: config.password6,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

  let eg7 = new EGClient({ // For this make a new account that has nothing and put the details in here.
      email: config.email7, // Remember to add your bot account email in here or it won't work!
      password: config.password7,  // Remember to add your bot account password in here or it won't work!
      //debug: console.log,
      platform: {
        full: 'Nintendo Switch',
      short: EPlatform.SWT,
      os: 'Nintendo Switch/69.69.69.420',
      },
      defaultPartyConfig: {
          privacy: EPartyPrivacy.PUBLIC,
        joinConfirmation: false,
        joinability: 'OPEN', // Opens the party and allows it to be joined
        maxSize: 16,
        subType: 'default',
        type: 'default',
        inviteTTL: 14400,
        chatEnabled: true,
    }
      });

  let eg8 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email8, // Remember to add your bot account email in here or it won't work!
    password: config.password8,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

  let eg9 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email9, // Remember to add your bot account email in here or it won't work!
    password: config.password9,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

    let eg10 = new EGClient({ // For this make a new account that has nothing and put the details in here.
      email: config.email10, // Remember to add your bot account email in here or it won't work!
      password: config.password10,  // Remember to add your bot account password in here or it won't work!
      //debug: console.log,
      platform: {
        full: 'Nintendo Switch',
      short: EPlatform.SWT,
      os: 'Nintendo Switch/69.69.69.420',
      },
      defaultPartyConfig: {
          privacy: EPartyPrivacy.PUBLIC,
        joinConfirmation: false,
        joinability: 'OPEN', // Opens the party and allows it to be joined
        maxSize: 16,
        subType: 'default',
        type: 'default',
        inviteTTL: 14400,
        chatEnabled: true,
    }
      });

  let eg11 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email11, // Remember to add your bot account email in here or it won't work!
    password: config.password11,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

  let eg12 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email12, // Remember to add your bot account email in here or it won't work!
    password: config.password12,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

  let eg13 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email13, // Remember to add your bot account email in here or it won't work!
    password: config.password13,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

  let eg14 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email14, // Remember to add your bot account email in here or it won't work!
    password: config.password14,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });

  let eg15 = new EGClient({ // For this make a new account that has nothing and put the details in here.
    email: config.email15, // Remember to add your bot account email in here or it won't work!
    password: config.password15,  // Remember to add your bot account password in here or it won't work!
    //debug: console.log,
    platform: {
      full: 'Nintendo Switch',
    short: EPlatform.SWT,
    os: 'Nintendo Switch/69.69.69.420',
    },
    defaultPartyConfig: {
        privacy: EPartyPrivacy.PUBLIC,
      joinConfirmation: false,
      joinability: 'OPEN', // Opens the party and allows it to be joined
      maxSize: 16,
      subType: 'default',
      type: 'default',
      inviteTTL: 14400,
      chatEnabled: true,
  }
    });
        

  function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds){
    break;
  }
}
}

    eg.init().then(async (success) => {

      var current_party;

      if(!success)
        throw new Error('Cannot initialize EpicGames launcher.');

      if(!await eg.login())
        throw new Error('Cannot login on EpicGames account.');

        const fortnite = await eg.runGame(Fortnite, {
	netCL: config.netcl,
  partyBuildId: '1:1:' + config.netcl,
	});
      const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


      fortnite.communicator.on('party:member:joined', async (member) => {

          fortnite.party.me.setBanner(100, config.banner, "Black");

          fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

          fortnite.communicator.updateStatus(IStatus);
      });

      fortnite.communicator.on('party:invitation', async (invitation) => {
          current_party = invitation.party;
          await invitation.accept()
      });
      fortnite.communicator.on('friend:request', async (friendops) => {
        sleep(200);
        if(config.acceptfriend == "true") {
        eg.acceptFriendRequest(friendops.friend.id)
        } else {
        eg.declineFriendRequest(friendops.friend.id)
        }
      });

      fortnite.communicator.on('friend:message', async (data) => {

        console.log(data.friend.id + " " + data.message)

        var args = data.message.split(" ");
        var skinargs = data.message.replace(/skin /g, "").replace(/ /g, "+");
        var skinargs2 = data.message.replace(/cid /g, "").replace(/ /g, "+");
        var bidargs = data.message.replace(/bag /g, "").replace(/ /g, "+");
        var bidargs2 = data.message.replace(/bid /g, "").replace(/ /g, "+");
        var emoteargs = data.message.replace(/emote /g, "").replace(/ /g, "+");
        var emoteargs2 = data.message.replace(/eid /g, "").replace(/ /g, "+");
        var pickargs = data.message.replace(/pick /g, "").replace(/ /g, "+");
        var pickargs2 = data.message.replace(/pid /g, "").replace(/ /g, "+");

        var botmes = data.message.replace("m ", "");

        var args = data.message.split(" ");

        if(args[0].toLowerCase() === "skin") {
          request({
            url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName=' + skinargs,
            json: true
        }).then(query => {
            try {
              Object.keys(query).forEach(function(key) {
                if(query[key].type == "Outfit") {
                  eg.communicator.sendMessage(config.id1, query[key].id);
                  eg.communicator.sendMessage(config.id2, query[key].id);
                  eg.communicator.sendMessage(config.id3, query[key].id);
                  eg.communicator.sendMessage(config.id4, query[key].id);
                  eg.communicator.sendMessage(config.id5, query[key].id);
                  eg.communicator.sendMessage(config.id6, query[key].id);
                  eg.communicator.sendMessage(config.id7, query[key].id);
                  eg.communicator.sendMessage(config.id8, query[key].id);
                  eg.communicator.sendMessage(config.id9, query[key].id);
                  eg.communicator.sendMessage(config.id10, query[key].id);
                  eg.communicator.sendMessage(config.id11, query[key].id);
                  eg.communicator.sendMessage(config.id12, query[key].id);
                  eg.communicator.sendMessage(config.id13, query[key].id);
                  eg.communicator.sendMessage(config.id14, query[key].id);
                  eg.communicator.sendMessage(config.id15, query[key].id);
                //fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + query[key].id + "." + query[key].id);
                //fortnite.communicator.sendMessage(data.friend.id, "スキンを " + query[key].id + " に設定!")
                //throw new Error("正常に発見")
                }
              });
            }
            catch(err) {
              console.log(err);
            }
          });
        };

        if(args[0] == "cid") {
          request({
            url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?id=' + skinargs2,
            json: true
        }).then(query => {
            try {
              Object.keys(query).forEach(function(key) {
                if(query[key].type == "Outfit") {
                  eg.communicator.sendMessage(config.id1, query[key].id);
                  eg.communicator.sendMessage(config.id2, query[key].id);
                  eg.communicator.sendMessage(config.id3, query[key].id);
                  eg.communicator.sendMessage(config.id4, query[key].id);
                  eg.communicator.sendMessage(config.id5, query[key].id);
                  eg.communicator.sendMessage(config.id6, query[key].id);
                  eg.communicator.sendMessage(config.id7, query[key].id);
                  eg.communicator.sendMessage(config.id8, query[key].id);
                  eg.communicator.sendMessage(config.id9, query[key].id);
                  eg.communicator.sendMessage(config.id10, query[key].id);
                  eg.communicator.sendMessage(config.id11, query[key].id);
                  eg.communicator.sendMessage(config.id12, query[key].id);
                  eg.communicator.sendMessage(config.id13, query[key].id);
                  eg.communicator.sendMessage(config.id14, query[key].id);
                  eg.communicator.sendMessage(config.id15, query[key].id);
                //fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + query[key].id + "." + query[key].id);
                //fortnite.communicator.sendMessage(data.friend.id, "スキンを " + query[key].id + " に設定!")
                //throw new Error("正常に発見")
                }
              });
            }
            catch(err) {
              console.log(err);
            }
          });
        };

      if(args[0].toLowerCase() === "bag") {
        request({
          url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName=' + bidargs,
          json: true
      }).then(query => {
        try {
          Object.keys(query).forEach(function(key) {
            if(query[key].type == "Back Bling") {
              eg.communicator.sendMessage(config.id1, query[key].id);
                  eg.communicator.sendMessage(config.id2, query[key].id);
                  eg.communicator.sendMessage(config.id3, query[key].id);
                  eg.communicator.sendMessage(config.id4, query[key].id);
                  eg.communicator.sendMessage(config.id5, query[key].id);
                  eg.communicator.sendMessage(config.id6, query[key].id);
                  eg.communicator.sendMessage(config.id7, query[key].id);
                  eg.communicator.sendMessage(config.id8, query[key].id);
                  eg.communicator.sendMessage(config.id9, query[key].id);
                  eg.communicator.sendMessage(config.id10, query[key].id);
                  eg.communicator.sendMessage(config.id11, query[key].id);
                  eg.communicator.sendMessage(config.id12, query[key].id);
                  eg.communicator.sendMessage(config.id13, query[key].id);
                  eg.communicator.sendMessage(config.id14, query[key].id);
                  eg.communicator.sendMessage(config.id15, query[key].id);
            //fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + query[key].id + "." + query[key].id);
            //fortnite.communicator.sendMessage(data.friend.id, "バッグを " + query[key].id + " に設定!")
            //throw new Error("正常に発見")
            }
          });
        }
        catch(err) {
          console.log(err);
        }
      });
    }

    if(args[0].toLowerCase() === "bid") {
      request({
        url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?id=' + bidargs2,
        json: true
    }).then(query => {
      try {
        Object.keys(query).forEach(function(key) {
          if(query[key].type == "Back Bling") {
            eg.communicator.sendMessage(config.id1, query[key].id);
                eg.communicator.sendMessage(config.id2, query[key].id);
                eg.communicator.sendMessage(config.id3, query[key].id);
                eg.communicator.sendMessage(config.id4, query[key].id);
                eg.communicator.sendMessage(config.id5, query[key].id);
                eg.communicator.sendMessage(config.id6, query[key].id);
                eg.communicator.sendMessage(config.id7, query[key].id);
                eg.communicator.sendMessage(config.id8, query[key].id);
                eg.communicator.sendMessage(config.id9, query[key].id);
                eg.communicator.sendMessage(config.id10, query[key].id);
                eg.communicator.sendMessage(config.id11, query[key].id);
                eg.communicator.sendMessage(config.id12, query[key].id);
                eg.communicator.sendMessage(config.id13, query[key].id);
                eg.communicator.sendMessage(config.id14, query[key].id);
                eg.communicator.sendMessage(config.id15, query[key].id);
          //fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + query[key].id + "." + query[key].id);
          //fortnite.communicator.sendMessage(data.friend.id, "バッグを " + query[key].id + " に設定!")
          //throw new Error("正常に発見")
          }
        });
      }
      catch(err) {
        console.log(err);
      }
    });
  }

    if(args[0].toLowerCase() === "emote") {
      request({
        url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName=' + emoteargs,
        json: true
    }).then(query => {
      Object.keys(query).forEach(function(key) {
        if(query[key].type == "Emote") {
          eg.communicator.sendMessage(config.id1, query[key].id);
          eg.communicator.sendMessage(config.id2, query[key].id);
          eg.communicator.sendMessage(config.id3, query[key].id);
          eg.communicator.sendMessage(config.id4, query[key].id);
          eg.communicator.sendMessage(config.id5, query[key].id);
          eg.communicator.sendMessage(config.id6, query[key].id);
          eg.communicator.sendMessage(config.id7, query[key].id);
          eg.communicator.sendMessage(config.id8, query[key].id);
          eg.communicator.sendMessage(config.id9, query[key].id);
          eg.communicator.sendMessage(config.id10, query[key].id);
          eg.communicator.sendMessage(config.id11, query[key].id);
          eg.communicator.sendMessage(config.id12, query[key].id);
          eg.communicator.sendMessage(config.id13, query[key].id);
          eg.communicator.sendMessage(config.id14, query[key].id);
          eg.communicator.sendMessage(config.id15, query[key].id);
        //fortnite.party.me.clearEmote();
        //fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + query[key].id + "." + query[key].id);
        //fortnite.communicator.sendMessage(data.friend.id, "エモートを " + query[key].id + " に設定!")
        //throw new Error("正常に発見")
        }
      });
    });
  }

  if(args[0] == "eid") {
    request({
      url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?id=' + emoteargs2,
      json: true
  }).then(query => {
    Object.keys(query).forEach(function(key) {
      if(query[key].type == "Emote") {
        eg.communicator.sendMessage(config.id1, query[key].id);
        eg.communicator.sendMessage(config.id2, query[key].id);
        eg.communicator.sendMessage(config.id3, query[key].id);
        eg.communicator.sendMessage(config.id4, query[key].id);
        eg.communicator.sendMessage(config.id5, query[key].id);
        eg.communicator.sendMessage(config.id6, query[key].id);
        eg.communicator.sendMessage(config.id7, query[key].id);
        eg.communicator.sendMessage(config.id8, query[key].id);
        eg.communicator.sendMessage(config.id9, query[key].id);
        eg.communicator.sendMessage(config.id10, query[key].id);
        eg.communicator.sendMessage(config.id11, query[key].id);
        eg.communicator.sendMessage(config.id12, query[key].id);
        eg.communicator.sendMessage(config.id13, query[key].id);
        eg.communicator.sendMessage(config.id14, query[key].id);
        eg.communicator.sendMessage(config.id15, query[key].id);
      //fortnite.party.me.clearEmote();
      //fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + query[key].id + "." + query[key].id);
      //fortnite.communicator.sendMessage(data.friend.id, "エモートを " + query[key].id + " に設定!")
      //throw new Error("正常に発見")
      }
    });
  });
}

if(args[0] == "pick") {
  request({
    url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?displayName=' + pickargs,
    json: true
}).then(query => {
  Object.keys(query).forEach(function(key) {
    if(query[key].type == "Harvesting Tool") {
      eg.communicator.sendMessage(config.id1, query[key].id);
      eg.communicator.sendMessage(config.id2, query[key].id);
      eg.communicator.sendMessage(config.id3, query[key].id);
      eg.communicator.sendMessage(config.id4, query[key].id);
      eg.communicator.sendMessage(config.id5, query[key].id);
      eg.communicator.sendMessage(config.id6, query[key].id);
      eg.communicator.sendMessage(config.id7, query[key].id);
      eg.communicator.sendMessage(config.id8, query[key].id);
      eg.communicator.sendMessage(config.id9, query[key].id);
      eg.communicator.sendMessage(config.id10, query[key].id);
      eg.communicator.sendMessage(config.id11, query[key].id);
      eg.communicator.sendMessage(config.id12, query[key].id);
      eg.communicator.sendMessage(config.id13, query[key].id);
      eg.communicator.sendMessage(config.id14, query[key].id);
      eg.communicator.sendMessage(config.id15, query[key].id);
    }
  });
});
}

if(args[0] == "pid") {
  request({
    url: 'http://benbotfn.tk:8080/api/cosmetics/search/multiple?id=' + pickargs2,
    json: true
}).then(query => {
  Object.keys(query).forEach(function(key) {
    if(query[key].type == "Harvesting Tool") {
      eg.communicator.sendMessage(config.id1, query[key].id);
      eg.communicator.sendMessage(config.id2, query[key].id);
      eg.communicator.sendMessage(config.id3, query[key].id);
      eg.communicator.sendMessage(config.id4, query[key].id);
      eg.communicator.sendMessage(config.id5, query[key].id);
      eg.communicator.sendMessage(config.id6, query[key].id);
      eg.communicator.sendMessage(config.id7, query[key].id);
      eg.communicator.sendMessage(config.id8, query[key].id);
      eg.communicator.sendMessage(config.id9, query[key].id);
      eg.communicator.sendMessage(config.id10, query[key].id);
      eg.communicator.sendMessage(config.id11, query[key].id);
      eg.communicator.sendMessage(config.id12, query[key].id);
      eg.communicator.sendMessage(config.id13, query[key].id);
      eg.communicator.sendMessage(config.id14, query[key].id);
      eg.communicator.sendMessage(config.id15, query[key].id);
    }
  });
});
}

  if(args[0] == "m"){
    eg.communicator.sendMessage(config.id1, botmes);
    eg.communicator.sendMessage(config.id2, botmes);
    eg.communicator.sendMessage(config.id3, botmes);
    eg.communicator.sendMessage(config.id4, botmes);
    eg.communicator.sendMessage(config.id5, botmes);
    eg.communicator.sendMessage(config.id6, botmes);
    eg.communicator.sendMessage(config.id7, botmes);
    eg.communicator.sendMessage(config.id8, botmes);
    eg.communicator.sendMessage(config.id9, botmes);
    eg.communicator.sendMessage(config.id10, botmes);
    eg.communicator.sendMessage(config.id11, botmes);
    eg.communicator.sendMessage(config.id12, botmes);
    eg.communicator.sendMessage(config.id13, botmes);
    eg.communicator.sendMessage(config.id14, botmes);
    eg.communicator.sendMessage(config.id15, botmes);
  }

  if(args[0].toLowerCase() == "ready"){
    try {
      fortnite.party.me.setReady(true);
    } catch {
      //eg.communicator.sendMessage(data.friend.id, "エラー!");
    }
  }

  if(args[0].toLowerCase() == "unready"){
    try {
      fortnite.party.me.setReady(false);
    } catch {
      //eg.communicator.sendMessage(data.friend.id, "エラー!");
    }
  }

        if(args[0].includes('CID_')){
          CID = args[0];
          try {
            fortnite.party.me.clearEmote();
            fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
            //eg.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
          } catch {
            //eg.communicator.sendMessage(data.friend.id, "エラー! CID");
          }
        }

        if(args[0].includes('EID_')){
          EID = args[0];
          try {
            fortnite.party.me.clearEmote();
            fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
            //eg.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
          } catch {
            //eg.communicator.sendMessage(data.friend.id, "エラー! EID");
          }
        }

        if(args[0].includes('Pickaxe_ID_')){
          PICKAXE_ID = args[0];
          try {
            fortnite.party.me.clearEmote();
            fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
            fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
            //eg.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
          } catch {
            //eg.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
          }
        }

        if(args[0].includes('BID_')){
          BID = args[0];
          try {
            fortnite.party.me.clearEmote();
            fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
            //eg.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
          } catch {
            //eg.communicator.sendMessage(data.friend.id, "エラー! BID");
          }
        }

        if (args[0].toLowerCase() == "status"){
          var mess = data.message.replace("status", "");
          if (mess == ""){
            fortnite.communicator.updateStatus(IStatus);
            //eg.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
          }else{
            fortnite.communicator.updateStatus(mess);
            //eg.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
          }
    }

        if(args[0].toLowerCase() == "bp"){
          try {
            fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
            //eg.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
          } catch {
            //eg.communicator.sendMessage(data.friend.id, "エラー!");
          }
        }

        if(args[0].toLowerCase() == "stop"){
          try {
            fortnite.party.me.clearEmote();
            //eg.communicator.sendMessage(data.friend.id, "エモート停止!");
          } catch {
            //eg.communicator.sendMessage(data.friend.id, "エラー!");
          }
        }

        if(args[0] == "message"){
          try {
            var messageargs = data.message.replace("message " + args[1], "")
            eg.communicator.sendMessage(args[1], messageargs);
            //eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
            //console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
          }catch {
            eg.communicator.sendMessage(data.friend.id, "エラー!");
          }
        }

        if(args[0] == "leave" |　args[0] == "離脱"){
          fortnite.party.leave();
          eg.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
        }
  });
})

//===================================================================================================================

eg2.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg2.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg2.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
    sleep(200);
    if(config.acceptfriend == "true") {
    eg2.acceptFriendRequest(friendops.friend.id)
    } else {
    eg2.declineFriendRequest(friendops.friend.id)
    }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");

        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg2.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg2.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg2.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg2.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg2.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg2.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg2.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg2.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg2.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg2.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg2.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg2.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg2.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg2.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg2.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg3.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg3.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg3.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
    sleep(200);
    if(config.acceptfriend == "true") {
    eg3.acceptFriendRequest(friendops.friend.id)
    } else {
    eg3.declineFriendRequest(friendops.friend.id)
    }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");

        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg3.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg3.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg3.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg3.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg3.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg3.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg3.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg3.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg3.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg3.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg3.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg3.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg3.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg3.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg3.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg4.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg4.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg4.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg4.acceptFriendRequest(friendops.friend.id)
      } else {
      eg4.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg4.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg4.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg4.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg4.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg4.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg4.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg4.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg4.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg4.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg4.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg4.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg4.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg4.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg4.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg4.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg5.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg5.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg5.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg5.acceptFriendRequest(friendops.friend.id)
      } else {
      eg5.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg5.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg5.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg5.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg5.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg5.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg5.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg5.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg5.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg5.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg5.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg5.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg5.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg5.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg5.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg5.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg6.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg6.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg6.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg6.acceptFriendRequest(friendops.friend.id)
      } else {
      eg6.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg6.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg6.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg6.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg6.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg6.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg6.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg6.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg6.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg6.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg6.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg6.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg6.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg6.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg6.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg6.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg7.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg7.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg7.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg7.acceptFriendRequest(friendops.friend.id)
      } else {
      eg7.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg7.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg7.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg7.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg7.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg7.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg7.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg7.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg7.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg7.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg7.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg7.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg7.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg7.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg7.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg7.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg8.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg8.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg8.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg8.acceptFriendRequest(friendops.friend.id)
      } else {
      eg8.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg8.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg8.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg8.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg8.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg8.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg8.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg8.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg8.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg8.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg8.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg8.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg8.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg8.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg8.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg8.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg9.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg9.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg9.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg9.acceptFriendRequest(friendops.friend.id)
      } else {
      eg9.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg9.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg9.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg9.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg9.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg9.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg9.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg9.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg9.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg9.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg9.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg9.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg9.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg9.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg9.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg9.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg10.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg10.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg10.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg10.acceptFriendRequest(friendops.friend.id)
      } else {
      eg10.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg10.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg10.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg10.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg10.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg10.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg10.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg10.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg10.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg10.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg10.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg10.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg10.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg10.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg10.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg10.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg11.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg11.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg11.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg11.acceptFriendRequest(friendops.friend.id)
      } else {
      eg11.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg11.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg11.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg11.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg11.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg11.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg11.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg11.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg11.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg11.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg11.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg11.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg11.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg11.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg11.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg11.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg12.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg12.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg12.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg12.acceptFriendRequest(friendops.friend.id)
      } else {
      eg12.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg12.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg12.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg12.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg12.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg12.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg12.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg12.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg12.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg12.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg12.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg12.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg12.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg12.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg12.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg12.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg13.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg13.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg13.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg13.acceptFriendRequest(friendops.friend.id)
      } else {
      eg13.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg13.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg13.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg13.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg13.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg13.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg13.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg13.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg13.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg13.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg13.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg13.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg13.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg13.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg13.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg13.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg14.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg14.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg14.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg14.acceptFriendRequest(friendops.friend.id)
      } else {
      eg14.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg14.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg14.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg14.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg14.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg14.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg14.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg14.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg14.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg14.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg14.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg14.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg14.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg14.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg14.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg14.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})

//=================================================================================================

eg15.init().then(async (success) => {

  var current_party;

  if(!success)
    throw new Error('Cannot initialize EpicGames launcher.');

  if(!await eg15.login())
    throw new Error('Cannot login on EpicGames account.');

    const fortnite = await eg15.runGame(Fortnite, {
netCL: config.netcl,
partyBuildId: '1:1:' + config.netcl,
});
  const br = await fortnite.runSubGame(ESubGame.BattleRoyale);


  fortnite.communicator.on('party:member:joined', async (member) => {

      fortnite.party.me.setBanner(100, config.banner, "Black");

      fortnite.party.me.setBattlePass(true, config.bptier, config.bpfriend, config.bpfriend);

      fortnite.communicator.updateStatus(IStatus);
  });

  fortnite.communicator.on('party:invitation', async (invitation) => {
      current_party = invitation.party;
      await invitation.accept()
    
  });
  fortnite.communicator.on('friend:request', async (friendops) => {
      sleep(200);
      if(config.acceptfriend == "true") {
      eg15.acceptFriendRequest(friendops.friend.id)
      } else {
      eg15.declineFriendRequest(friendops.friend.id)
      }
  });



  fortnite.communicator.on('friend:message', async (data) => {

    console.log(data.friend.id + " " + data.message)

    var args = data.message.split(" ");
        var botmes = data.message.replace("mes ", "");

        var args = data.message.split(" ");

if(args[0].toLowerCase() == "ready"){
  try {
    fortnite.party.me.setReady(true);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

if(args[0].toLowerCase() == "unready"){
  try {
    fortnite.party.me.setReady(false);
  } catch {
    eg.communicator.sendMessage(data.friend.id, "エラー!");
  }
}

    if(args[0].includes('CID_')){
      CID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + args[0] + "." + args[0]);
        eg15.communicator.sendMessage(data.friend.id, "スキンを " + args[0] + " に設定!");
      } catch {
        eg15.communicator.sendMessage(data.friend.id, "エラー! CID");
      }
    }

    if(args[0].includes('EID_')){
      EID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
        eg15.communicator.sendMessage(data.friend.id, "エモートを " + args[0] + " に設定!");
      } catch {
        eg15.communicator.sendMessage(data.friend.id, "エラー! EID");
      }
    }

    if(args[0].includes('Pickaxe_ID_')){
      PICKAXE_ID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
        fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/EID_IceKing.EID_IceKing")
        eg15.communicator.sendMessage(data.friend.id, "ピッケルを " + args[0] + " に設定!");
      } catch {
        eg15.communicator.sendMessage(data.friend.id, "エラー! Pickaxe");
      }
    }

    if(args[0].includes('BID_')){
      BID = args[0];
      try {
        fortnite.party.me.clearEmote();
        fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + args[0] + "." + args[0]);
        eg15.communicator.sendMessage(data.friend.id, "バッグを " + args[0] + " に設定!");
      } catch {
        eg15.communicator.sendMessage(data.friend.id, "エラー! BID");
      }
    }

    if (args[0].toLowerCase() == "status"){
      var mess = data.message.replace("status", "");
      if (mess == ""){
        fortnite.communicator.updateStatus(IStatus);
        eg15.communicator.sendMessage(data.friend.id, "ステータスを IStatus に設定!");
      }else{
        fortnite.communicator.updateStatus(mess);
        eg15.communicator.sendMessage(data.friend.id, "ステータスを " + mess + "に設定!");
      }
}

    if(args[0].toLowerCase() == "bp"){
      try {
        fortnite.party.me.setBattlePass(true, args[1], args[2], args[3]);
        eg15.communicator.sendMessage(data.friend.id, "バトルパスを設定 " + args[1] + " " + args[2] + " " + args[3] + "!");
      } catch {
        eg15.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0].toLowerCase() == "stop"){
      try {
        fortnite.party.me.clearEmote();
        eg15.communicator.sendMessage(data.friend.id, "エモート停止!");
      } catch {
        eg15.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "message"){
      try {
        var messageargs = data.message.replace("message " + args[1], "")
        eg.communicator.sendMessage(args[1], messageargs);
        eg.communicator.sendMessage(data.friend.id, args[1] + " に " + messageargs + " のメッセージを送信!");
        console.log(args[1] + ` にメッセージ、 ` + messageargs + "を送信");
      }catch {
        eg.communicator.sendMessage(data.friend.id, "エラー!");
      }
    }

    if(args[0] == "leave" |　args[0] == "離脱"){
      fortnite.party.leave();
      eg15.communicator.sendMessage(data.friend.id, "パーティーを離脱!");
    }
});
})