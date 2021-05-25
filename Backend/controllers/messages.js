const mysql = require('mysql');

//pour utiliser des variables d'environnement
require('dotenv').config()

//connexion à la BDD mySQL
//========================================
const con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: process.env.MYSQLBDD,
  database: "groupomania"

});

//POST
//======================================================
exports.createPost = (request, response) => {
  const req = request.query
  const query = "INSERT INTO messages SET ?";
  console.log(request.file);
  var datePost = mysql.raw('now()');
  
  if (typeof request.file === "undefined") {
    imageUrl = null;
  } else {
    imageUrl = `${request.protocol}://${request.get('host')}/images/${request.file.filename}`;
  }
  
  //const imageUrl = null
  //const imageUrl = `${request.protocol}://${request.get('host')}/images/${request.file.filename}`;
  const params = { user_mess: req.user_mess, titre: req.titre, contenu: req.contenu, image: imageUrl, date_post: datePost }
  con.query(query, params, (err, result, fields) => {
    if (err) throw err;

    response.json({ message: "Message posté !" })
    
  });
}

//GET
//=================================================================

exports.getAllPost = (request, response) => {

  con.query('SELECT *, DATE_FORMAT(date_post, "%d.%m.%Y %à %Hh%i") AS date_post, DATE_FORMAT(date_comment, "%d.%m.%Y %à %Hh%i") AS date_comment FROM Messages LEFT JOIN Comments ON Messages.id = Comments.message_id ORDER BY Messages.id DESC', (err, rows) => {

    var messages = [];
    rows.forEach(row => {
      const messageId = row.id;
      const messageIndex = messages.findIndex(msg => { return msg.id == messageId})
      if (messageIndex >= 0) {
        messages[messageIndex].comments.push({
          id: row.comment_id,
          username: row.user_name,
          comment: row.comment,
          date: row.date_comment
        })
        // Already created message in list, just push a new comments on
      } else {
        // Create message in list with initial comments
        const message = {
          id: row.id,
          username: row.user_mess,
          title: row.titre,
          content: row.contenu,
          image: row.image,
          date: row.date_post,
          comments: [
            {
              id: row.comment_id,
              username: row.user_name,
              comment: row.comment,
              date: row.date_comment
            }
          ]
        }
        messages.push(message)
      }
    });

    response.json(messages);

  })
};


//PUT update : modifier son message
//=================================================
exports.updatePost = (request, response) => {
  const req = request.query
  const query = "UPDATE messages SET titre=?, contenu=?, image=? where id =?";
  const params = [req.titre, req.contenu, req.image, req.id]
  con.query(query, params, (err, result, fields) => {
    if (err) throw err;

    response.json({ updated: result.affectedRows })

  })
};

//DELETE : supprimer son message
//==============================================
exports.deletePost = (request, response) => {
  const req = request.query
  const query = "DELETE FROM Messages WHERE id = ?";
  const params = [req.id]
  //console.log(req.id);
  con.query(query, params, (err, result, fields) => {
    if (err) throw err;

    response.json({ deleted: result.affectedRows })

  })
};

//GET get one message
//=================================================================

exports.getOnePost = (request, response) => {
  const req = request.query
  con.query('SELECT * FROM messages where id=?', [req.id], (err, rows) => {
    if (err) throw err;

    response.json({ data: rows })

  })//fin de query
};//fin de exports

//test requete sur message
//=================================================================

exports.requetePost = (request, response) => {
  const req = request.query
  con.query('SELECT * FROM messages INNER JOIN comments ON messages.id = comments.message_id where comments.id=?'

    , [req.id], (err, rows) => {
      if (err) throw err;

      response.json({ data: rows })

    })//fin de query
};//fin de exports
