## TodoApp

### npm install -g @vue/cli

### vue create my-app
 ## Select option: Edit configuration ->include vue v2, vuex v3, vuerouter

### cd my-app

### vue add vuetify

### yarn add vuex-persist

### or NPM

### npm install vuex-persist --save

### Create fake api to simulate fake endpoints

### yarn add json-server

### Create db.json file inside root directory

### Run json server : npx json-server --watch db.json

### Create server.js file in the root directory with the following content

const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('db.json');
const middlewares = jsonserver.defaults()

server.use(router);
server.use(middlewares);
server.listen(3000, () => console.log('Server is listening on PORT 3000'))

### include json-server scripts inside package.json
"scripts" : {
"nodemon-server": "nodemon server.js",
"json-server": "npx json-server --watch db.json",
"node": "node server.js"
}

### Add json-server authentication service
### yarn add json-server-auth

### yarn start

### adding vuelidate for form validation 
### npm install vuelidate --save
 
### add animations 
### yarn add animate.css

### Add testing library
### yarn add --dev jest

### Test App
### https://vue-test-utils.vuejs.org/installation/#using-vue-test-utils-with-jest-recommended

### vue add unit-jest
### npm install --save-dev @vue/test-utils
### in package.json add scripts:{"test":"jest"}
### Run test
### sudo yarn test
