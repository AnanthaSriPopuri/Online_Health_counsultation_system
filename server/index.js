const express=require('express'); 
const app=express(); 
const PORT = process.env.PORT ||5000 
const path = require('path'); 
const db =require('./config/db'); 
// Import the routes here 
//const studentRoutes = require('./routes/studentRoutes'); 
//const counsellorRoutes = require('./routes/counsellorRoutes'); 
 
// Use the routes 
//app.use('/students', studentRoutes); 
//app.use('/counselors', counselorRoutes); 
app.use(express.json()); 
 
 
// Serve static files from the 'public' directory 
app.use(express.static(path.join(__dirname, 'public'))); 
 
// Catch-all route for handling  404 errors 
app.use((req, res) => { 
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html')); 
  }); 
//Connection with DB 
db.once('open', () => { 
    console.log('Database connection is open.'); 
  }); 
//Connection with DB Errors are verified 
  db.on('error', (err) => { 
    console.error('Connection error:', err); 
  }); 
    
//Server listening port 
app.listen(PORT,()=>{ 
    console.log(`Server listening on port ${PORT}`) 
});

app.get('/',(req,res)=>
{
  res.send("Form page")
})
app.post('/form',(req,res)=>{
  console.log(req.body);
  col.insertOne(req.body);
  res.send("Data received")
})
app.post('/register',(req,res)=>{
  console.log(req.body);
  col.insertOne(req.body);
  res.send("Data received")
})
/*const db = require('./config/db.js'); 
 
//Connection with DB  
db.once('open', () => {  
   console.log('Database connection is open.');  
    });*/