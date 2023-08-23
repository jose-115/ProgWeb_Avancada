import express from "express";
const app = express();
const PORT = 3000;

var horaAtual = new Date().toLocaleTimeString();
//GET para ver no navegador
app.get('/hora',function(req,res){
    res.json(`agora são ${horaAtual}`);
})

//POST
app.post('/soma', (req,res)=>{
    //const {val1,val2} = req.params
    //const {q1,q2} = req.query
    const {v1,v2} = req.body
    const soma = v1+v2
    //res.json({soma})
});
//PUT
app.put("")
//DELETE
app.delete("")

app.listen(PORT, () => {console.log(`servidor rodando na porta = ${PORT}`)})