import 'dotenv/config';
import app from './app.js';

app.get('/', (req, res) => {
    res.send("Server active")
})

const port = 3000;

app.listen(port, () => {
    console.log("Server listneing on port " + port)
})
