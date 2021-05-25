const mysql = require('mysql');

//pour utiliser des variables d'environnement
require('dotenv').config()

//connexion à la BDD mySQL
//========================================
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: process.env.MYSQLBDD,
    database : "groupomania"
  
  });


//POST liked or disliked
//======================================================
exports.createLikes = (request, response) => {
    const req=request.query
    const query="INSERT INTO likes SET ?";

    const params={user_id:req.user_id, message_id:req.message_id, likes:req.likes, dislikes:req.dislikes }
    con.query(query,params,(err,result,fields) => {
      if(err) throw err;
    
      response.json({message:"Votre avis a été ajouté !"})
    
    });
}

//GET tous les likes
//=================================================================

exports.getAllLikes = (request, response) => {

    con.query('SELECT * FROM likes', (err,rows) => {
      if(err) throw err;
    
      response.json({data:rows});
      
    })
  };

//PUT update : modifier un like/dislike
//=================================================
exports.updateLikes = (request, response) => {
  const req=request.query
  const query="UPDATE likes SET likes=?, dislikes=? where id =?";
  const params=[req.likes, req.dislikes, req.id]
  con.query(query,params,(err,result,fields) => {
    if(err) throw err;
  
    response.json({updated:result.affectedRows})
  
  })
};

//DELETE : supprimer like/dislike
//==============================================
exports.deleteLikes = (request, response) => {
  const req=request.query
  const query="DELETE FROM likes where id = ? ";
  const params=[req.id]
  con.query(query,params,(err,result,fields) => {
    if(err) throw err;
  
    response.json({deleted:result.affectedRows}) 
  
  })
};

//GET get one likes
//=================================================================

exports.getOneLikes = (request, response) => {
  const req=request.query
  con.query('SELECT * FROM likes where id=?',[req.id], (err,rows) => {
    if(err) throw err;
  
    response.json({data:rows})
  
  })//fin de query
};//fin de exports