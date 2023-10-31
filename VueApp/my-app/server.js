const jsonserver = require('json-server');
const auth = require('json-server-auth');
const server = jsonserver.create();
const router = jsonserver.router('db.json');
const middlewares = jsonserver.defaults();

const cors = require('cors');

server.db = router.db;

const corsConfiguration = {
    origin: '*'
} 

const rules = auth.rewriter({
    users: 640,
    events: 640,
    messages: 640,
    logout: 640
});

server.use(rules);
server.use(cors(corsConfiguration));
server.use(auth);
server.use(router);
server.use(middlewares);
server.listen(process.env.PORT || 3000, () => console.log('Server is listening on PORT 3000'))