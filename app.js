//app center

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

//load models
const { Post } = require('./db/models');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

//get the posts
app.get('/posts', (req, res) => {
    //return an array of all the posts
    Post.find({}).then((posts) => {
         res.send(posts);
    }).catch((error) => {
        res.send(error);
    });
});

//sends the posts
app.post('/posts', (req, res) => {
    //send post 
    let title = req.body.title;
    let content = req.body.content;

    let newPost = new Post({
        title, content
    });
    newPost.save().then((postDoc) => {
        res.send(postDoc);
    });
});

//update posts
app.patch('/posts/:id', (req, res) => {
    //update
    Post.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
});

//delete posts
app.delete('/posts/:id', (req, res) => {
    //delete post
    Post.findOneAndRemove({
        _id: req.params.id
  }).then((removedPostDoc) => {
      res.send(removedPostDoc);
  })
});

//listen to server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

