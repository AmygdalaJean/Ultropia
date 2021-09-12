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
    email: req.body.email,
    note: req.body.note
  })

  if (req.body.email === "") {
    res.status(401).json({message: "Nothing Submited"})
  }
  else {
    try {
      const newData = await inData.save()
      res.status(201).json(newData)
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  }
})


router.get('/:id', getHuman, (req, res) => {
  res.send(res.inData.email)
})

router.delete('/:id', getHuman, async (req, res) => {
  if (res.inData == 'ALL'){
    
  }
  try {
    await res.inData.remove()
    res.json({message: 'Email Removed'})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})


async function getHuman(req, res, next) {
  try {
    inData = await UltropiaData.findById(req.params.id)
    if (inData == null) { 
      return res.status(404).json({message: error.message})
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
  res.inData = inData
  next()
}




module.exports = router