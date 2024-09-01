require('dotenv').config();
const  express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const connectdb = require('./config/db');

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use('/api',router);


PORT = 8080 || process.env.PORT;

app.get('/',(req,res) => {
    res.send('Server is ready');
})

connectdb().then(() => {
    console.log('Connected to database');
    app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
} )

})