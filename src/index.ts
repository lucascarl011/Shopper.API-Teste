import express from 'express';
import bodyParser from 'body-parser';
import uploadRoutes from './routes/uploadRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/api', uploadRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});