var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose');
var users = require('./models/users.js');
var adminstory =require('./models/admin.js');
const app = express();



app.use(cors())
mongoose.connect('mongodb://localhost:27017/users');

mongoose.connection.once('open', function () {
console.log('MongoDB connection open');
});

app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())



var http=require('http');

app.set('view engine', 'ejs');

app.get('/stories',(req, res)=>{

	res.render('adminstories');

});

app.get('/admin',(req, res)=>{

	res.render('index');

});



app.post('/adminLogin', (req, res)=>{



	users.findOne({username:req.body.username}, function(err, data){

		if(data != null){

			users.findOne({username:req.body.username, password:req.body.password}, function(err, user){

				if(user){

					res.render('dashboard');
				}else{

					res.send("you are not an admin");
				}



			})

		}else{

			res.send("admin not found");

		}

	});

})

app.post('/logout', (req, res)=>{

	res.render('index');

})



app.post('/adminstories', (req,res)=>{


	new adminstory({
		story_title:req.body.story_title,
		category:req.body.category,
		description:req.body.description,
		story:req.body.story
	}).save(function(err, user){

	 if(!err) { 
	 		res.send("Story is successfully posted")
	 	}else{
	 		res.send('Failed');
	 	}
	})

	})

app.post('/',(req,res)=>{

	adminstory.find({}, function(err, data){

		if(err){

			res.send('no stories')

		}else{

			console.log(data);
			res.json({
				status:"success",
				story:data
			});
			
		}

	})
})


app.listen(5000, function () {
console.log('app listening on port 5000')
})