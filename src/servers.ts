import express from "express";

const app = express();

const PORT = 3000;

var horaAtual = new Date().toLocaleTimeString();

app.get('/hora',function(req,res){
    res.send(`agora são ${horaAtual}`);
})

app.listen(PORT, () => {console.log(`servidor rodando na porta = ${PORT}`)})