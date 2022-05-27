const Rec = require("../models/rec");

module.exports = {
    create,
    deleteLike
}

async function create(req, res){
    try {
        const rec = await Rec.findById(req.params.id)
        rec.likes.push({username: req.user.username, userId: req.user._id});
        await rec.save()
        res.status(201).json({data: 'like added'})
    } catch(err) {
        res.status(400).json({err})
    }
}

async function deleteLike(req, res){
    try {
        const rec = await Rec.findOne({'likes._id': req.params.id, 'likes.username': req.user.username})
        rec.likes.remove(req.params.id)
        console.log(rec, '<-rec from delete like')
        await rec.save()
        res.json({data: 'like removed'})
    } catch(err) {
        res.status(400).json({err})
    }
}