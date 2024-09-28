import { DataTypes } from "sequelize";
import db from "../db/connection.js"

const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName:'users',
})

await User.sync()

export default User;
