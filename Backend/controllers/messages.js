const mysql = require('mysql');

//connexion à la BDD mySQL
//========================================
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Onetipi4821!",
    database : "groupomania"
    
  });


//POST
//======================================================
exports.createPost = (request, response) => {
    const req=request.query
    const query="INSERT INTO messages SET ?";

    var datePost = mysql.raw('now()');
    if (typeof req.image === "undefined") {
      imageUrl = null;
    } else {
      imageUrl = `${request.protocol}://${request.get('host')}/images/${request.file.filename}`;
    }
    
    //const imageUrl = `${request.protocol}://${request.get('host')}/images/${request.file.filename}`;
    const params={user_mess:req.user_mess, titre:req.titre, contenu:req.contenu, image:imageUrl, date_post:datePost }
    con.query(query,params,(err,result,fields) => {
      if(err) throw err;
    
      response.json({message:"Message posté !"})
    
    });
}

//GET
//=================================================================

exports.getAllPost = (request, response) => {

    con.query('SELECT * FROM messages ORDER BY id DESC', (err,rows) => {
      if(err) throw err;
    
      response.json({data:rows});
      
    })
  };

//PUT update : modifier son message
//=================================================
exports.updatePost = (request, response) => {
  const req=request.query
  const query="UPDATE messages SET titre=?, contenu=?, image=? where id =?";
  const params=[req.titre, req.contenu, req.image, req.id]
  con.query(query,params,(err,result,fields) => {
    if(err) throw err;
  
    response.json({updated:result.affectedRows})
  
  })
};

//DELETE : supprimer son message
//==============================================
exports.deletePost = (request, response) => {
  const req=request.query
  const query="DELETE FROM messages where id = ? ";
  const params=[req.id]
  con.query(query,params,(err,result,fields) => {
    if(err) throw err;
  
    response.json({deleted:result.affectedRows}) 
  
  })
};

//GET get one message
//=================================================================

exports.getOnePost = (request, response) => {
  const req=request.query
  con.query('SELECT * FROM messages where id=?',[req.id], (err,rows) => {
    if(err) throw err;
  
    response.json({data:rows})
  
  })//fin de query
};//fin de exports



//test requete sur message
//=================================================================

exports.requetePost = (request, response) => {
  const req=request.query
  con.query('SELECT * FROM messages INNER JOIN comments ON messages.id = comments.message_id where comments.id=?'
  
  ,[req.id], (err,rows) => {
    if(err) throw err;
  
    response.json({data:rows})
  
  })//fin de query
};//fin de exports