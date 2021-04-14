async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "lootsplitter",
  });
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

async function selectUsers() {
  const conn = await connect();
  const [row] = await conn.query("SELECT * FROM `tblusers`");

  return row;
}

async function insertUser(user) {
  const conn = await connect();
  const sql =
    "INSERT INTO `tblusers`( `email`, `username`, `password`, `name`, `address`) VALUES  (?,?,?,?,?);";
  const values = [
    user.email,
    user.username,
    user.password,
    user.name,
    user.address,
  ];
  return await conn.query(sql, values);
}

async function updateUser(id, user) {
  const conn = await connect();
  const sql =
    "UPDATE `tblusers` SET `email`= ?,`username`= ? ,`password`= ? ,`name`= ? ,`address`= ?  WHERE `id`= ?";
  const values = [
    user.email,
    user.username,
    user.password,
    user.name,
    user.address,
    id,
  ];
  return await conn.query(sql, values);
}

async function deleteUser(id) {
  const conn = await connect();
  const sql = "DELETE FROM `tblusers`  where id=?;";
  return await conn.query(sql, [id]);
}

module.exports = { selectUsers, insertUser, updateUser, deleteUser };
