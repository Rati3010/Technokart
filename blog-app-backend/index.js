const express = require('express');
const dotenv =  require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth.route.js');
const postRoutes = require('./routes/post.routes.js');
const commentRoutes = require('./routes/comment.route.js');
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
});
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))