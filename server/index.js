import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import employeeRoutes from './routes/employees.js';
import entrepriseRoutes from './routes/entreprises.js';


const app = express();

app.use('/employees', employeeRoutes);
app.use('/entreprises',entrepriseRoutes);


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://anouer_aouainia_test:anouer_aouainia_test123@cluster0.rkjf8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('Server Running on Port: http://localhost:'+PORT)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);