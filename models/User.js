const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    set(val) {
      return bcrypt.hashSync(val, 10)
    },
    select: false,
  },
})
module.exports = mongoose.model('User', schema)
