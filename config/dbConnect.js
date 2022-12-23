const mongoose = require('mongoose')

/* Com a importação do módulo externo do mongoose, podemos chamar a 
partir da variável mongoose, o método connect() que recebe como 
parâmetro a string de conexão do banco, neste caso, o Mongo Atlas */
//mongoose.connect('mongodb+srv://dev:326691@aulasdigitalcollege.yvtblox.mongodb.net/svl');
mongoose.connect('mongodb+srv://fs01:fs01@svl-db.2ksrpyw.mongodb.net/svl');

// A variável db recebe a conexão do banco e vamos exportá-la
let db = mongoose.connection;

// exporta a conexão com o Mongo (Atlas ou local, dependendo da string de conexão)
module.exports = db

