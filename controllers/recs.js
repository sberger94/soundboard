const Rec = require('../models/rec');
const S3 = require('aws-sdk/clients/s3')
const { v4: uuidv4 } = require('uuid')

const s3 = new S3();

module.exports = {
    create,
    index
}

function create(req, res){
    console.log(req.body, req.file, req.user)
    const filePath = `${uuidv4()}/${req.file.originalname}`;
    const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer };
    s3.upload(params, async function(err, data){
        console.log(err, '<- error from aws in rec create');

        try {
            const rec = await Rec.create({
               title: req.body.title,
               description: req.body.description,
               audioUrl: data.Location,
               user: req.user  
            });

            res.status(201).json({ rec: rec });
        } catch (err) {
            res.status(400).json({ err });
        }
    });
}

async function index(req, res){
    try {
        const recs = await Rec.find({}).populate('user').exec()
        res.status(200).json({ recs })
    } catch(err) {
        console.log(err)
    }
}