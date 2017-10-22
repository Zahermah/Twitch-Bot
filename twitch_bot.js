var tmi = require('tmi.js');

var secToWait = 2500;

var options = {
    options: {
        debug: true
    },
        connection: {
            cluster: "aws",
            reconnect: true
        },
        identity: {
            username: "My_Bot",
            password: "Your Twtich token here",
        },
        channels: ["Name of channel you want to connect"]
};

var date = new Date(); 

var client = new tmi.client(options);
client.connect();
client.on('chat',function(channel,user,message,self) {
    switch(message){
        case "!twitter":
        client.action("NameofChannel", "Please follow here: https://twitter.com/" );
        break;
        case "!game":
        client.action("NameofChannel", "Enter Name of game");
        break;
        case "!time":
        client.action("NameofChannel", "The Time is "+ date +" ");
        break;
        case "!options":
        client.action("NameofChannel","!time,!game,!twitter,!song");
        break;
        case "!about":
        client.action("NameofChannel","Enter some message");
        break;
        case  "!friend":
        client.action("NameofChannel", "Enter some message");
        break;
        case "!song":
        client.action("NameofChannel","Link: to spotifylist");
        break;
        case "Hey":
        client.action("nameofchannel",user['display-name']);
        setTimeout(function() {  
            client.action("name of channel", "Hey and Welcome to the channel");  
        }, secToWait);
        break;
        default:
        client.action("name of channel", "Hey");
        break;
    }
});

client.on('connected', function(address,port){
    client.action("Name of channel", "Welcome message");
});
client.on('disconnected',function(reason){
    client.action("Name of channel","User has been disconnected");
});