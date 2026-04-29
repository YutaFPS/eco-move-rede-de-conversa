const express = require('express');
const cors = require('cors');
const {pool} = require('./config/db');
const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

// login
app.post('/login', async (req, res) => {
    res.send('ok');
});

// curtidas
app.get('/curtidas', async (req, res) => {
    res.send('ok');
});

app.post('/curtidas', async (req, res) => {
    res.send('ok');
});

// comentários
app.get('/comentarios', async (req, res) => {
    res.send('ok');
});

app.post('/comentarios', async (req, res) => {
    res.send('ok');
});


// atividades
app.get('/atividades', async (req, res) => {
    let [atividades] = await pool.query('select * from tb_atividades');
    res.json(atividades);
})

app.post('/atividades', async (req, res) => {
    res.send('ok');
});

//servidor 
app.listen(port, () => {
    console.log('servidor rodando na porta ' + port);
});