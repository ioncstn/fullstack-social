import express from "express"
import cors from "cors"
import Sequelize from "sequelize"

const app = express()
app.use(cors())

const db = new Sequelize('postgres://postgres:root@database/chirama')

try {
  await db.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

//  idk why it does not work with node-client:5173,
// it works with http://localhost:5173

// const corsOptions = {
//   origin: true,
//   // origin: ["http://localhost:5173"],
// }
// app.use(cors(corsOptions))

app.get("/hello", (_, res) => {
  res.json({"fruits": ["apricot", "pear", "cherry", "pineapple"]})
})

app.post("/users/create", (req, res) => {
  res.json({"status": "ok"})
})

app.listen(9876, () => {
  console.log("Server started. (localhost:9876)")
})
