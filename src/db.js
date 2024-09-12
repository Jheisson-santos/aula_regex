const mongoose = require('mongoose')
const db = 'mongodb+srv://Jheisson_Santos:JSON_EU@lionscurso.6svtk.mongodb.net/Regex'

 main = async()=>{
    await mongoose.connect(db)
    console.log('MongoDB connected')
}

main().then(()=>{console.log("Banco de dados conectado");}).catch((err)=>{console.log(err);})

module.exports = mongoose


