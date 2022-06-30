const express =require("express")
const app = express()
const router =require("./routes/routes")
const port =  5000
app.use(express.json())
app.use("/",router)

app.listen(port , console.log("Sevidor escuchando en puerto"+ port))

