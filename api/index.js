const express = require('express');
const { Timestamp } = require('firebase-admin/firestore');
const app = express();
const firestore = require("./config-firebase.js");

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
// const codeblocks=[];

//fonction GET
app.get('/codeblocks', async (req, res) => {
  const {id} = req.query;

  const result = await firestore.collection('codeblocks').get();
  const codeblocks=[];

  for (const dataCodeBlock of result.docs) {
    const codeblock = {};
    codeblock.id = dataCodeBlock.id;
    codeblock.title = dataCodeBlock.data().title;
    codeblock.code = dataCodeBlock.data().code;
    codeblock.tag = dataCodeBlock.data().tag;

    codeblock.createdat = dataCodeBlock.data().createdat.toDate();
    codeblock.updatedat = dataCodeBlock.data().updatedat.toDate();

    codeblocks.push(codeblock);
  };

  // res.status(200).json(result);
  res.status(200).json(codeblocks);
});

//fonction POST
app.post("/codeblocks", async (req, res)=>{
  const codeBlockToSave = req.body;
  // console.log(codeBlockToSave);
  const newCodeBlock =[];


  for (const codeblock of codeBlockToSave) {

    const newCodeId = await firestore.collection("codeblocks").add({
      title: codeblock.title,
      code: codeblock.code,
      tag: codeblock.tag,
      createdat: new Date(),
      updatedat: new Date()
    });
    codeblock.id = newCodeId.id;
    newCodeBlock.push(codeblock);
  };

  res.status(201).json(newCodeBlock);
});

//fonction PUT
app.put("/codeblocks", async (req, res)=>{
  const modifyCodeBlocks = req.body;
  const codeBlockModified = [];

  for (const modifyCodeBlock of modifyCodeBlocks) {
    const {id, title, tag, code} = modifyCodeBlock;
    const codeblock = firestore.collection("codeblocks").doc(id);

    if (codeblock) {
      await codeblock.update({
        title: title,
        tag: tag,
        code: code,
        updatedat: new Date()
      });
      codeBlockModified.push(modifyCodeBlock);
    }else{
      res.status(404).json({message : "Code Not Found"});
    };
  };
    
  res.status(200).json(codeBlockModified);
});

//fonction DELETE
app.delete("/codeblocks", async (req, res)=>{
  const codeBlocksToDelete = req.body;
  for (const codeBlockToDelete of codeBlocksToDelete) {
    const {id} = codeBlockToDelete;
    const codeblock = firestore.collection("codeblocks").doc(id);

    if(codeblock) {
      await codeblock.delete();
    }else{
      res.status(404).json({message : "Code Not Found"});
    };
  }
  res.status(202).json([]);
});

//Ce qui permet de démarrer le serveur sur le port x ( ici 3001)
app.listen(3001, ()=>{
  console.log("Coucou les devs!");
});