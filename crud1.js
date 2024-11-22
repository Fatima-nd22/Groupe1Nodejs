const db = require ('./db1');

function addEtudiant(matricule,prenom, nom, filiere, niveau){
    const sql = 'insert into Etudiant (matricule,prenom, nom, filiere, niveau) values (?,?,?,?,?)';
    db.query(sql,[matricule,prenom, nom, filiere, niveau],(err,result)=>{

    if (err) {
        console.error('Erreur requete :', err.message);
        return;
      }
      console.log('Insertion réussie à MySQL !');
});}

// function delPersonne(ID){
// const sql = 'delete from Personne where ID=?';
// db.query(sql,[ID],(err,result)=>{
//   if (err){
//     console.error('Erreur sur la requete suppression:',err.message);
//     return;
//   }
//   console.log('Suppression effectuee ');
// });
// }

// function UpdatePersonne(ID, nom, login) {
//   const sql = 'UPDATE Personne SET nom = ?, login = ? WHERE ID = ?';
//   db.query(sql, [nom, login,ID], (err, result) => {
//     if (err) {
//       console.error('Erreur sur la requête de modification:', err.message);
//       return;
//     }
//     console.log('Modification effectuée avec succès');
//   });
// }

// function ListePersonne (){
// const sql = 'SELECT * FROM Personne';
// db.query(sql,(err,results) =>{
//   if(err) {
//     console.error('Erreur sur la requete select',err.message);
//     return;
//   }
//   console.log('Personne: ',err,results);
// })
// }

//<<<<<<< HEAD
module.exports = {addEtudiant};
//=======

// module.exports = {addPersonne,delPersonne,UpdatePersonne};
// >>>>>>> 99e880203db45fef5c2680e6d52022fbccd3c82c
