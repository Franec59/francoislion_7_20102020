const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//connexion à la BDD mySQL
//========================================
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Onetipi4821!",
    database : "groupomania"
  
  });


//signup + bcrypt
//===========================================

exports.signup = async function (request, response) {
  const req=request.query
  const query="INSERT INTO users SET ?";
  
  const saltRounds = 10;
  const encryptedPassword = await bcrypt.hash(req.password, saltRounds)
  
  const params={username:req.username, email:req.email, password:encryptedPassword}
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


//login ( GET one user ) => identification by TOKEN !!!
//=================================================================

exports.login = (request, response) => {
    
    const req=request.query
    
    con.query("SELECT * FROM users WHERE email =? && username =?", [req.email, req.username], function(error, results, fields) {
    if(error) throw error;
    else { 
        if(results.length > 0) { 
        bcrypt.compare(req.password, results[0].password, function(err, result) {
         if(result) {
          response.status(200).json({
            id: req.id,
            token: jwt.sign(
              { id: req.id },
              'RANDOM_TOKEN_SECRET',
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

//GET : tous les users
//==================================================

exports.getAllUsers = (request, response) => {

    con.query('SELECT * FROM users', (err,rows) => {
      if(err) throw err;
    
      response.json({data:rows});
      
    })
  };


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


//DELETE : supprimer son compte
//========================================================
exports.deleteUser = (request, response) => {
  const req=request.query
  const query="DELETE FROM users where id = ? ";
  const params=[req.id]
  con.query(query,params,(err,result,fields) => {
    if(err) throw err;
  
    response.json({deleted:result.affectedRows}) 
  
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
//login sauvegarde du code
//=================================================================

exports.login = (request, response) => {
    
  const req=request.query
  
  con.query("SELECT * FROM users WHERE email =? && username =?", [req.email, req.username], function(error, results, fields) {
  if(error) throw error;
  else { 
      if(results.length > 0) { 
      bcrypt.compare(req.password, results[0].password, function(err, result) {
       if(result) {
         return response.send({ message: "Login Successful" });
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
*/
