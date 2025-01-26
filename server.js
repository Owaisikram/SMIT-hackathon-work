import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000
app.use(cors({origin:"http://localhost:5173",origin:"https://hackathon-work-SMIT.surge.sh"}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

