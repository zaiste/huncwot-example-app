const Schema = require('validate')

const task = new Schema({
  name: {
    type: 'string',
    required: true,
    length: { min: 3, max: 256 }
  }
})

module.exports = task;
