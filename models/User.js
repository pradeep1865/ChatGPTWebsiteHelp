const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  displayName: String,
  email: String,
  googleId: String,
  facebookId: String,
  wishlist: [String],
  orderHistory: [String],
  activities: [String],
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
