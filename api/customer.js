const express = require('express')
const custs = require('../model/customer')
const uuid = require('uuid')
const router = express.Router()

var customers = custs

//get all customer


router.post('/create', (req,res) => {
    // res.send(req.body);
    const createx = {
        id: uuid.v4(),
        name: req.body.name,
        email:req.body.email,
        ic: req.body.ic
    }

    if (!createx.name || !createx.email || !createx.ic) {
        return res.status(400).json({msg:'Error on create'})
    }

    customers.push(createx);
    return res.json({msg:'Success on create', status:true})
})



router.delete('/delete/:id', (req,res) => {
    let exist = customers.some(customer =>customer.id == req.params.id)
    // res.send(req.params.id)
    if (exist) {
        let x = customers.filter(customer => customer.id != req.params.id)
        customers = x;
        res.json({msg:'Data deleted',customers:x})
        
    }else{
        res.status(400).json({msg:'Error on delete'})
    }
})

//update customer on id
router.put('/update/:id', (req,res) => {
    let exist = customers.some(customer =>customer.id == req.params.id)
    // res.send(req.params.id)
    if (exist) {
        customers.forEach(customer => {
            if (customer.id == req.params.id) {
                customer.name = req.body.name ? req.body.name : customer.name
                customer.email = req.body.email ? req.body.email : customer.email
                customer.ic = req.body.ic ? req.body.ic : customer.ic

                res.json({msg:'Customer Updated', customer})
            }
        })
        
    }else{
        res.status(400).json({msg:'Error on update'})
    }
})

router.get('/all', (req,res)=> res.json(customers) )


//get customer on id
router.get('/:id', (req,res) => {
    let exist = customers.some(customer =>customer.id == req.params.id)
    if (exist) {
        res.json(customers.filter(customer =>customer.id == req.params.id))
        
    }else{
        res.status(400).json({msg:'Customer not registered'})
    }
})





module.exports = router