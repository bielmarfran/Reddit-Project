"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Comment }) {
      // define association here
      this.hasMany(Post, { foreignKey: "userId", as: "posts" });
      this.hasMany(Comment, { foreignKey: "userId", as: "comments" });
    }

    toJSON() {
      return {
        ...this.get(),
        id: undefined,
        password: undefined,
        uuid: undefined,
        updatedAt: undefined,
      };
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "Usuario deve possuir um apelido!" },
          notEmpty: { msg: "Apelido nao pode estar vazio!" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "Usuario deve possuir um email!" },
          notEmpty: { msg: "O email nao pode estar vazio!" },
          isEmail: { msg: "O email deve ser valido" },
          //isUnique: connection.validateIsUnique(
          // 'email',
          //'Esta dirección de correo electrónico ya existe.'
          //)
        },
      },
      password: DataTypes.STRING,
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      coverPicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  User.beforeCreate((user, options) => {
    return bcrypt
      .hash(user.password, 10)
      .then((hash) => {
        user.password = hash;
      })
      .catch((err) => {
        throw new Error();
      });
  });

  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};
