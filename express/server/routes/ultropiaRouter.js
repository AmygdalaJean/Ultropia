const express = require('express')
const router = express.Router()
const UltropiaData = require('../models/ultropiaSchema')

router.get("/", async(req, res) => {
    try{
      const data = await UltropiaData.find()
      res.json(data)
    } catch(error){
      res.status(500).json({ message: err.message })
    }
  });

router.post("/", async(req,res) => {
  const inData = new UltropiaData({
    email: req.body.email
  })

  try {
    const newData = await inData.save()
    res.status(201).json(newData)
  } catch (error) {
    res.status(400).json({message: error.message})
  }

})

module.exports = router