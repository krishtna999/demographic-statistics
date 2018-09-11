//TODO :SHOULD LEARN 


var express = require('express');       //create express app


var router = express.Router();
module.exports = function (passport) {
    //sends successful login state back to view(angular)


    //.get() method handles GET requests
    router.get('/success', function (req, res) {
        res.send({ state: 'success', user: req.user ? req.user : null });
    });
    //send failure login state back to view(angular)
    router.get('/failure', function (req, res) {
        res.send({ state: 'failure', user: null, message: "Invalid username or password" });
    });
    //login request

    //.post() to handle POST requests
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));
    //signup request
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));
    //logout request
    router.get('/signout', function (req, res) {
        req.session.user = null;
        req.logout();
        res.redirect('/');
    });
    return router;
}


// var express = require('express');
// var router = express.Router();

// module.exports = function(passport){
// 	//sends successful login state back to view(angular)
// 	router.get('/success',function(req,res){
// 		res.send({state: 'success', user: req.user ? req.user: null});	
// 	});
// 	//send failure login state back to view(angular)
// 	router.get('/failure',function(req,res){
// 		res.send({state: 'failure',user:null,message:"Invalid username or password"});
// 	});
// 	//login requeset
// 	router.post('/login',passport.authenticate('login',{
// 		successRedirect: '/auth/success',
// 		failureRedirect: '/auth/failure'
// 	}));

// 	//signup request
// 	router.post('/signup', passport.authenticate('signup', {
//         successRedirect: '/auth/success',
//         failureRedirect: '/auth/failure'
//     }));
	
// 	//logout request
// 	router.get('/signout', function(req, res) {
// 		req.session.user = null;
//         req.logout();
//         res.redirect('/');
//     });
	
// 	return router;
// }