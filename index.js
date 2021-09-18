const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<usernam>:<passwor>@cluster0.2fhpk.mongodb.net/<database>?retryWrites=true&w=majority');

const schema = new mongoose.Schema({ fname: String,lname: String,email: String, number: String, subject: String });
const Form = mongoose.model('Form', schema);
const port = process.env.PORT || 3000;

app.post('/contact', (req, res) => {
  const form = new Form(req.body);
  form.save()
    .then(() =>{
      console.log("saved");
    })
    .catch((err)=>{
      console.log(err);
    });
    res.redirect("https://jaygoyal96.github.io/");
})

app.listen(port,() => {})