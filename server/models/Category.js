const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    // name: String
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
})

//实例这个category并导出
module.exports = mongoose.model('Category', schema)