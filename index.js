const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.post('/login',(req,res) => {
  console.log(req.body)

  let result = login(req.body.username,req.body.password)
  let token=generatetoken(result)
  res.send(token)
})

app.post('/register', (req, res) => {
  console.log(res.body)
  //res.send('Account Created!')
  let result = register(req.body.username,
    req.body.password,req.body.name,req.body.email)
    generatetoken(result)
    req.send(token)
})

let Users = [
  {
      username: "knk",
      password:"kamarul17",
      name: "nizam",
      email: "kamarul@yahoo.com",
  },

  {
      username: "hajim",
      password: "696969",
      name:"fazim",
      email: "hazimfahmi69@gmail.com",
  }

]

function login(username,password)
{
 let matchUser = Users.find(user => user.username == username)
 if(!matchUser)return "User does not exist!"
 if(matchUser.password == password)
 {
  return matchUser
 }
 else{
  return "Invalid password!"
 }

 console.log(matchUser)

}

function register(reqUsername,reqPassword,reqName,reqEmail)
{
  Users.push({
      username: reqUsername,
      password: reqPassword,
      name: reqName,
      email: reqEmail,
  })

}
const jwt=require('jsonwebtoken');
function generatetoken(userData)
{
  const token=jwt.sign(
    userData,
    'inipassword'
  );
  return token
}
function verifytoken()
{
  let header = req.headers.authorization
  console.log(header)

  let token = header.split('')[1]

  jwt.verify(token, 'inipassword',function(err,decoded){
  if(err){
    res.send("invalid token")
  }
  req.user=decoded
  next()
});
}
//try to login
console.log(login("hajim","696969"))
console.log(login("knk","password"))


register("syahmi","password","syahmi amir","syahmi@utem.edu.my")
console.log(login("syahmi","password"))


//app.get('/help', (req, res) => {
   // res.send('Help me')
  //})

 // app.get('/oops', (req, res) => {
  //  res.send('uh ohhhh')
  //})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})