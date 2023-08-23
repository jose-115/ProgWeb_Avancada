"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
var horaAtual = new Date().toLocaleTimeString();
app.get('/hora', function (req, res) {
    res.send(`agora são ${horaAtual}`);
});
app.listen(PORT, () => { console.log(`servidor rodando na porta = ${PORT}`); });