import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import { v4 as uuidv4} from "uuid"
import db from "./src/db/connection.js"
import User from "./src/models/user.js"

const app = express()
app.use(cors())
// can parse json bodies
app.use(express.json())

// salt rounds for hashing passwords
const saltRounds = 6

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

app.post("/users/create", async (req, res) => {
  console.log(req.body.username)
  const id = uuidv4()
  const username = req.body.username
  var password = req.body.password
  await User.create({ id: id, username: username, password: password})

  bcrypt.hash(password, saltRounds, function(err, hash) {
    
  })

  res.json({"status": "ok"})
})

app.listen(9876, () => {
  console.log("Server started. (localhost:9876)")
})
