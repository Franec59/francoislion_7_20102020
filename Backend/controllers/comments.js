const mysql = require('mysql');

//connexion à la BDD mySQL
//========================================
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Onetipi4821!",
    database : "groupomania"
  
  });


//POST commenter un message
//======================================================
exports.createComments = (request, response) => {
    const req=request.body
    var datePost = mysql.raw('now()');

    con.query("INSERT INTO Comments ( user_name, message_id, comment, date_comment ) VALUE (?, ?, ?, ?)", [req.user_name, req.message_id, req.comment, date_comment=datePost], (err,result,fields) => {
      if(err) throw err;
    
      response.json({message:"Commentaires ajoutés !"})
    
    });
}

//GET tous les commentaires
//=================================================================

exports.getAllComments = (request, response) => {

    con.query('SELECT * FROM comments', (err,rows) => {
      if(err) throw err;
    
      response.json({data:rows});
      
    })
  };

//PUT update : modifier un commentaire
//=================================================
exports.updateComments = (request, response) => {
  const req=request.query
  const query="UPDATE comments SET comments=? where id =?";
  const params=[req.comments, req.id]
  con.query(query,params,(err,result,fields) => {
    if(err) throw err;
  
    response.json({updated:result.affectedRows})
  
  })
};

//DELETE : supprimer son commentaire
//==============================================
exports.deleteComments = (request, response) => {
  const req=request.query
  const query="DELETE FROM comments where id = ? ";
  const params=[req.id]
  con.query(query,params,(err,result,fields) => {
    if(err) throw err;
  
    response.json({deleted:result.affectedRows}) 
  
  })
};

//GET get one message
//=================================================================

exports.getOneComments = (request, response) => {
  const req=request.query
  con.query('SELECT * FROM comments where message_id=?',[req.message_id], (err,rows) => {
    if(err) throw err;
  
    response.json({data:rows})
  
  })//fin de query
};//fin de exports


/*
//GET get one message sauvegarde
//=================================================================

exports.getOneComments = (request, response) => {
  const req=request.query
  con.query('SELECT * FROM comments where id=?',[req.id], (err,rows) => {
    if(err) throw err;
  
    response.json({data:rows})
  
  })//fin de query
};//fin de exports
*/