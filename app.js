const app = require('./config/server');
const routes = require('./app/route/allRoutes')

app.listen(3000, () => console.log(`RUN SERVER IN 127.0.0.1: 3000`));