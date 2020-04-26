var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myShop'

mongoose.connect(url, {useNewUrlParser: true}).
  catch(error => handleError(error));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('database connected!!')
})

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  addressZip: Number,
  phone: Number,
  creditCard: Number,
  expiryDate: Number,
  CVV: Number,
  billingZip: Number
})

var User = mongoose.model('User', userSchema);

var saveNewUser = (userData, callback) => {
  var  user = new User({
    name: userData.name,
    email: userData.email,
    password: userData.password,
    address1: userData.address1,
    address2: userData.address2,
    city: userData.city,
    state: userData.state,
    addressZip: userData.addressZip,
    phone: userData.phone,
    creditCard: userData.creditCard,
    expiryDate: userData.expiryDate,
    CVV: userData.CVV,
    billingZip: userData.billingZip
  })
  user.save((err, user) => {
    if (err) {
      callback(err);
    } else {
      console.log(`${userData.name}'s info saved to db!!`)
    }
  })
}

var updateUser = (userData, callback) => {
  //update query
}

// var ryanData = {
//   name: 'ryan',
//   email: 'ryan@myemail.com',
//   password: 'password',
//   address1: '456 OurPlace',
//   address2: '',
//   city: 'LovelyTown',
//   state: 'Texas',
//   addressZip: 98765,
//   phone: 1234567,
//   creditCard: 88887777,
//   expiryDate: 0923,
//   CVV: 334,
//   billingZip: 98765
// }

// saveNewUser(ryanData, (err) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log('function works!')
//   }
// })







module.exports = db;
module.exports = saveNewUser;