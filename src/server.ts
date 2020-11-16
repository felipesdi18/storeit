import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);
console.log('server startou');
app.listen(3333);