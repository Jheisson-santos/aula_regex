const Livro = require('../models/livro.js')

const store = async (req,res)=>{
    try{
    const content = new Livro(req.body)
    await Livro.save()
    res.json()
}catch{
    res.status(400).json({message: 'Erro'})
}
}

const index = async (req,res)=>{
    try{
     const content = Livro.find()
     res.json(content)
    }catch{
        res.status(400).json({message: 'Erro'})
    }
}