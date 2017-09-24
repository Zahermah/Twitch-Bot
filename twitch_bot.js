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
    if(message === "!twitter"){
    client.action("NameofChannel", "Please follow here: https://twitter.com/" );
    }
    if(message === "!game"){
        client.action("NameofChannel", "I really dont know this game, This guy changes game all the time.");
    }
    if(message === "!time"){
        client.action("NameofChannel", "The Time is "+ date +" ");
    }
    if(message === "!options"){
        client.action("NameofChannel","!time,!game,!twitter,!song");
    }
    if(message === "!about"){
        client.action("NameofChannel","Enter some message");
    }
    if(message === "!friend"){
        client.action("NameofChannel", "Enter some message");
    }
    if(message ==="!song"){
        client.action("NameofChannel","Link: to spotifylist");
    }


});


client.on('chat',function(channel,user, message,self){
    if(message === "Hey" ){
    client.action("nameofchannel",user['display-name']);
    setTimeout(function() {  
        client.action("name of channel", "Hey and Welcome to the channel");  
    }, secToWait);
    
    }
});

client.on('connected', function(address,port){
    client.action("Name of channel", "Welcome message");
});