const express = require('express');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//  middleware
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

// custom middleware
const verify = async (req, res, next)=>{
  const token = req.cookies?.token;
  // console.log("token from middleware",token);
  if(!token){
    return res.status(401).send({status: "unauthorized"})
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decode)=>{
    if(err){
      return res.status(401).send({status: "unauthorized"})
    }
    req.user = decode
    next();
  })
} 

const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.iuscecj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const database = client.db("carDoctorDB");
    const serviceCollection = database.collection('services');

app.get('/services', async (req, res)=>{
const query = serviceCollection.find()
const result = await query.toArray()
res.send(result)
})

app.get('/services/:id',async(req, res)=>{
    const id = req.params.id;
    const find = {_id:new ObjectId(id)}
    const result = await serviceCollection.findOne(find)
    res.send(result)
})
// checkout post data
const checkoutCollection = database.collection('checkout');

app.get('/checkouts/:email',verify, async(req, res)=>{
  const email = req.params.email;
  // console.log("token from checkout",req.cookies.token);
if(email !== req.user.email){
  return res.status(402).send({status: "Forbidden"})
}
  const filter = {email:email}
  const result = await checkoutCollection.find(filter).toArray();
  res.send(result)
})

app.post('/checkout',async(req,res)=>{
const checkout = req.body;
// console.log(checkout);
const result = await checkoutCollection.insertOne(checkout)
res.send(result)
})
app.delete('/checkout/:id', async(req, res)=>{
const id = req.params.id;
const filter = {_id: new ObjectId(id)}
const result = await checkoutCollection.deleteOne(filter);
res.send(result)
})

app.patch('/checkout/:id', async(req, res)=>{
  const id = req.params.id;
  // console.log(id);
  const filter = {_id: new ObjectId(id)};
  const update = {
    $set: {
      status: "confirm"
    }
  }
  
  const result = await checkoutCollection.updateOne(filter, update)
  res.send(result)
})
// token
app.post('/jwt',async(req, res)=>{
  const user = req.body;
  const token = jwt.sign(user, process.env.SECRET_KEY ,{expiresIn: "1h"})
  res
  .cookie("token", token,{
    secure: false,
    httpOnly: true,
    // sameSite: "none"    
  })
  
  .send({Status: true})
})
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send("Car doctor server running...")
})

app.listen(port,(req,res)=>{
    console.log(`Server run on: ${port}`);
})