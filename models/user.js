const bcrypt = require('bcryptjs');

const db = require('../db/setup');

// const User = {};

function create (user) {
  const password = bcrypt.hashSync(user.password, 10);

  return db.oneOrNone(`
    INSERT INTO users
    (email, password_digest)
    VALUES
    ($1, $2)
    RETURNING *;`,
    [ user.email, password]
  );
};

function findByEmail (email) {
  return db.oneOrNone(`
    SELECT *
    FROM users
    WHERE email = $1;`,
    [email]
  );
};
// function findById (id) {
//   return db.oneOrNone(`
//     SELECT *
//     FROM users
//     WHERE id = $1;`,
//     [id]
//   );
// };

function showFavorite(id) {
 return db.query("SELECT * FROM sports_bars WHERE user_id = $1", [id])
}

function destroy(id) {
    return db.oneOrNone('DELETE FROM sports_bars WHERE id = $1', [id])
}

module.exports = {create, findByEmail, showFavorite, destroy};
