const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

  con.connect(function(err) {
    if (err) throw err
    console.log('Connecté à la BDD mySQL !')
  })

//signup + bcrypt
//===========================================

exports.signup = async function (request, response) {
  const req=request.body
  const query="INSERT INTO users ( username, email, password) VALUE (?, ?, ?)";
  
  const saltRounds = 10;
  const encryptedPassword = await bcrypt.hash(req.password, saltRounds)
  
  const params=[req.username, req.email, encryptedPassword]
  
  con.query(query,params,(error,result,fields) => {
    if (error) {        
      response.send({          
      "code":400,          
      "failed":"error occurred",          
      "error" : error})      
      } else {        
      response.send({          
      "code":200,          
      "success":"user registered sucessfully"            
      });        
      }    
  
  })//fin de con.query
};//fin de exports

//login ( GET one user ) avec body
//=================================================================

exports.login = (request, response) => {
    
  const req=request.body
  
  con.query("SELECT * FROM users WHERE email =? && username =?", [req.email, req.username], function(error, rows ) {
  if(error) throw error;
  else { 
    if(rows.length > 0) { 
      bcrypt.compare(req.password, rows[0].password, function(err, row) {
       if(row) {
        response.status(200).json({
          data:rows,
          token: jwt.sign(
            { id:  req.id },
            process.env.TOKEN,
            { expiresIn: '24h'},
          ),
          message: "Login Successful"
        })//fin de reponse.status

       }
       else {
         return response.status(400).send({ message: "Invalid Password" });
       }
      });
  } else {
      return response.status(400).send({ message: "Invalid Pseudo or Email" });
  } 
  }
});
};


//DELETE : supprimer son compte avec body
//========================================================
exports.deleteUser = (request, response) => {
  
  console.log(request.body)

  con.query("DELETE FROM users WHERE username =?", [request.body.username], function (error, rows) {
    if(error) throw error;
    else { 
      if(rows.length > 0) { 
        bcrypt.compare(request.body.password, rows[0].password, function(error, row) {
         if(row) {
          response.status(200).json({message:"user deleted"})
          response.json({deleted:row.affectedRows}) 
      } else {
        return response.status(400).send({ message: "Invalid Password" });
      }});
    } else {
      return response.status(400).send({ message: "Invalid Pseudo" });
    } 
  }
  
  })
};


//GET : tous les users
//==================================================

exports.getAllUsers = (request, response) => {

  con.query('SELECT * FROM users', (err,rows) => {
    if(err) throw err;
  
    response.json({data:rows});  
  })
};

//PUT update : modifier son compte utilisateur ( supprimer mais garder messages et comments )
//============================================================================================
exports.updateUser= (request, response) => {

con.query("UPDATE users SET username='userdeleted' where username =?", [request.body.username], function (error, rows) {
    if(error) throw error;
    else { 
      if(rows.length > 0) { 
        bcrypt.compare(request.body.password, rows[0].password, function(error, row) {
         if(row) {
          response.status(200).json({message:"user updated"})
          response.json({updated:result.affectedRows})
      } else {
        return response.status(400).send({ message: "Invalid Password" });
      }});
    } else {
      return response.status(400).send({ message: "Invalid Pseudo" });
    } 
  }
  
  })
};


//test requete tous les messages d'un user
//=================================================================

exports.requeteUser = (request, response) => {
  const req=request.query
  con.query('SELECT * FROM users INNER JOIN messages ON users.id = messages.user_id where users.id=?'
  
  ,[req.id], (err,rows) => {
    if(err) throw err;
  
    response.json({data:rows})
  
  })//fin de query
};//fin de exports

/*
//PUT update : modifier son compte utilisateur
//=================================================
exports.updateUser= (request, response) => {
  const req=request.query
  const query="UPDATE users SET email=?, username=?, password=? where id =?";
  const params=[req.email, req.username, req.password, req.id]
  con.query(query,params,(err,result,fields) => {
    if(err) throw err;
  
    response.json({updated:result.affectedRows})
  
  })
  };
  */