import * as Server from './server'

if ('development' === process.env.NODE_ENV) {
    require('dotenv').config()
}

console.log(`Running enviroment ${process.env.NODE_ENV || "dev"}`);

const server = Server.init()

server.start(err => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: localhost:${server.info.port}`);
});
