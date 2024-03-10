const SMTPServer = require("smtp-server").SMTPServer;

options = {
    allowInsecureAuth: true,
    authOptional: true,
    onConnect(session, cb){
        console.log(`onConnect`, session.id)
        cb() //Accept the connection
    },
    onMailFrom(address, session, cb){
        console.log(`onMailFrom`,address.address, session.id)
        cb()
    },
    onRcptTo(address, session, cb){
        console.log(`onRcptTo`,address.address, session.id)
        cb()
    },
    onData(stream, session, cb){
        stream.on('data', ()=> console.log(`onData ${data.toString()}`))
        stream.on('end', cb)
    }
};
//create an SMTPServer instance
const server = new SMTPServer(options);

server.listen(25, ()=> console.log("Server running on 25"));
