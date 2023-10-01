const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Dbmodel = require('./schema');
const cors = require('cors');

app.use(cors(
    {
        origin: ["https://portfolio-website-api.vercel.app/"],
        methods: ["Get", "Post"],
        credentials: true
      }
));
app.use(express.json());

dotenv.config({ path: './config.env' });
const port = process.env.PORT;
require('./Connection');

app.get('/', (req,res) => {
    res.send("API Is working");
})

app.post('/register', async (req, res) => {
    const { F_name, L_name, Email, Message } = req.body;
    try{
    if( !F_name || !L_name || !Email || !Message ){
        return res.status(404).send("All fields are required")
    }
    else{
        const add = new Dbmodel(req.body);
        const insert = await add.save();
        return res.status(200).send(insert);
    }
    }catch(e){
        console.log(e);
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
