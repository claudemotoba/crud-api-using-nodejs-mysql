const connexion = require('./db_connect')

exports.listes = async () => {
    try {
      const result = await connexion.query(`select users.id as id, users.prenom as prenom, users.nom as nom, users.email as email, users.tel as tel, users.id_postes as id_postes, users.pays as pays, users.id_statut as id_statut from users`)  
      return result
    } catch (error) {
        throw error
    }
}

exports.ajouter = async (user) => {
    try {
      const result = await connexion.query(`insert into users(prenom, nom, email, pays, tel, id_postes, id_statut) values(?, ?, ?, ?, ?, ?, ?)`, [user.prenom, user.nom, user.email, user.pays, user.tel, parseInt(user.id_postes), parseInt(user.id_statut)]);
      console.log(result);
        
      return result
    } catch (error) {
        throw error
    }
}

exports.unEmploye = async (id) => {
  try {
    const result = await connexion.query(`select users.id as id, users.prenom as prenom, users.nom as nom, users.email as email, users.tel as tel, users.id_postes as id_postes, users.pays as pays, users.id_statut as id_statut from users where users.id = ?`, [parseInt(id)]);
      
    return result
  } catch (error) {
      throw error
  }
}