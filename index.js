import  express  from 'express';
import morgan from 'morgan';
import { PORT } from './src/config';
import paymentRoutes from './src/routes/payments.routes'; 
import path from 'path' ;

const app = express();

app.use(morgan('dev'));

app.use(paymentRoutes);

app.listen(PORT);

app.use(express.static(path.join(__dirname, 'src/public')));

console.log("Server on port", PORT)
