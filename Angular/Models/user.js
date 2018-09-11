        /*Having problems with mongoose ? or Dont understand jack ?

http://mongoosejs.com/docs/index.html

Read the above link carefully ^
*/




//create new model
var mongoose = require('mongoose'); //refering mongoose for creating user friendly class type model.
//defining schema for user model

var userSchema = new mongoose.Schema({      //Schema for User Registration
    //Should schematize this properly
    username: String,
    password: String,
    email: String,
    aadhaarID: String,
    created_at: { type: Date, default: Date.now }

});

var citizen = new mongoose.Schema({
    aadhaarID: String,
    gender: String,
    DOB: String,
    fname: String,
    lname: String,
    date: String,
    primary_email: String,
    DOD: String,
})


mongoose.model('User', userSchema);         //Create new model/class 'User' with UserSchema
var User = mongoose.model('User');          //obtain the 'User' Class

mongoose.model('citizen',citizen);



//Using callbacks to execute asynch function calls !!

//The name speaks for the function !



//exports is used to export the javascript function to be used by other files
exports.findByUsername = function (userName, callback) {            //we are defining find by u
    User.findOne({ user_name: userName }, function (err, user) {
        /*Dont mind this function, this is standard Mongoose Protocol.

        In case there was an error retrieving data
        
        TODO:Read about this function

        */
        if (err) {
            return callback(err);
        }
        return callback(null, user);
    });
}

exports.findById = function (id, callback) {
    User.findById(id, function (err, user) {
        if (err) {
            return callback(err);
        }
        return callback(null, user);
    });
}




// var mongoose = require('mongoose');

// var userSchema = new mongoose.Schema({
// 	username: String,
// 	password: String,
// 	email: String,
// 	role: String,
// 	created_at: {type: Date, default: Date.now}
	
// });

// mongoose.model('User', userSchema);
// var User = mongoose.model('User');
// exports.findByUsername = function(userName, callback){

// 	User.findOne({ user_name: userName}, function(err, user){
// 		if(err){
// 			return callback(err);
// 		}
// 		//success
// 		return callback(null, user);
// 	});
// }

// exports.findById = function(id, callback){
// 	User.findById(id, function(err, user){
// 		if(err){
// 			return callback(err);
// 		}
// 		return callback(null, user);
// 	});
// }

