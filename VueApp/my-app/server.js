const jsonserver = require('json-server');
const auth = require('json-server-auth');
const server = jsonserver.create();
const router = jsonserver.router('db.json');
const middlewares = jsonserver.defaults()

server.user(auth);
server.use(router);
server.use(middlewares);
server.listen(3000, () => console.log('Server is listening on PORT 3000'))