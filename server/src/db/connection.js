import Sequelize from "sequelize"

const connection = new Sequelize('postgres://postgres:postgres@database/chirama', {
  define: {
    timestamps: false,
  }
})

connection.authenticate()

export default connection;
