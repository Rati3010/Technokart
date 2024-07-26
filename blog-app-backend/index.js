const express = require('express');
const dotenv =  require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin:'*'
}));
app.use(express.json());

app.get('/',(req,res) =>{
    res.json({'msg':'How are you doing'})
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))