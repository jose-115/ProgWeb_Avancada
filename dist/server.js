"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
var horaAtual = new Date().toLocaleTimeString();
//VISUALIZAR NO NAVEGADOR É O METODO GET
app.get('/hora', function (req, res) {
    res.json(`agora são ${horaAtual}`);
});
//POST
app.post('/soma', (req, res) => {
    //const {val1,val2} = req.params
    //const {q1,q2} = req.query
    const { v1, v2 } = req.body;
    const soma = v1 + v2;
    //res.json({soma})
});
//PUT
app.put("");
//DELETE
app.delete("");
app.listen(PORT, () => { console.log(`servidor rodando na porta = ${PORT}`); });