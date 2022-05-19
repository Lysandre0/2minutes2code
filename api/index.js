const express = require('express');
const app = express();

//firebase BEG
var admin = require("firebase-admin");

var serviceAccount = require("../minutes2code-firebase-adminsdk-z51qw-ff782543bf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
//firbase END

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tableau de codeblocks de test
// const codeblocks = [
//   {
//     id: 1,
//     title: "Calcul de Pourçentage",
//     tag: ["Test","Dragon"],
//     code: "Ceci est un code de calcul de pourçentage",
//     createdAt: "19/05/2022",
//     updatedAt: "19/05/2022"
//   },
//   {
//     id: 2,
//     title: "Afficher une image en html",
//     tag : ["Voila", "Image"],
//     code: "Comment insérer une image en html",
//     createdAt: "19/05/2022",
//     updatedAt: "19/05/2022"
//   },
// ];
const codeblocks=[];

//fonction GET
app.get('/codeblocks', (req, res) => {
  const {id} = req.query;

  const result =
    id === undefined || id === "" ? codeblocks : codeblocks.filter((codeblock)=>codeblock.id == id);


  res.status(200).json(result);
});

//fonction POST
app.post("/codeblocks", (req, res)=>{
  const codeBlockToSave = req.body;

  console.log(codeBlockToSave);

  const newCodeBlock =[];

  for (const codeblock of codeBlockToSave) {
    const lastCodeBlock = codeblocks.reduce((max, obj) => (max.id > obj.id ? max : obj));

    codeblock.id = lastCodeBlock.id +1;
    newCodeBlock.push(codeblock);
    codeblocks.push(codeblock);
  };

  res.status(201).json(newCodeBlock);
});

//fonction PUT
app.put("/codeblocks/:id", (req, res)=>{
  const {id} = req.params;
  const modifyCodeBlocks = req.body;
  const codeBlockModified = [];

  for (const modifyCodeBlock of modifyCodeBlocks) {
      const {title, tag, code} = modifyCodeBlock;

    const codeblock = codeblocks.find((codeblock) => codeblock.id === parseInt(id));

    if(codeblock) {
      if(title) { 
        codeblock.title = title;
      };
      if(tag) {
        codeblock.tag = tag;
      };
      if(code) {
        codeblock.code = code;
      };
      codeBlockModified.push(codeblock);
    };
  };



  console.log(codeblocks);

  res.status(200).json(codeBlockModified);
});

//fonction DELETE
app.delete("/codeblocks/:id", (req, res)=>{
  const { id } = req.params;

  const codeblock = codeblocks.find((codeblock) => codeblock.id === parseInt(id));

  if (codeblock) {
    codeblocks.splice(codeblocks.indexOf(codeblock), 1);
  }else{
    res.status(404).json({message : "Code Not Found"});
    return;
  };

  console.log(codeblocks);
  res.status(202).json(codeblocks)
});

//Ce qui permet de démarrer le serveur sur le port x ( ici 3001)
app.listen(3001, ()=>{
  console.log("Coucou les devs!");
});