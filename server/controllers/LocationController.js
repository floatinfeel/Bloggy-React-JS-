const Model = require('../models')
const Location = Model.Location
const Sequelize = require('sequelize')
const { or } = require('sequelize')
const Op = Sequelize.Op

class LocationController{

    static read(req, res){
        
        Location
            .findAll()
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                console.log(err);
            })
    }

    static create(req, res){
        let values ={
            label: req.body.label,
            kota: req.body.kota,
            provinsi: req.body.provinsi,
            lat: req.body.lat,
            lng: req.body.lng
        }
        Location
            .create(values)
            .then(data=>{
                res.status(201).json(data)
            })
            .catch(err=>{
                console.log(err);
            })
    }

    static update (req, res) {

        let values = {
            label: req.body.label,
            kota: req.body.kota,
            provinsi: req.body.provinsi,
            lat: req.body.lat,
            lng: req.body.lng
        }

        let options = {
            where : { 
                id : req.params.id,
            },
            returning : true
        }

        Location
            .update(values, options)
            .then(data => {
                res.status(200).json(data[1][0])
            })            
            .catch(err => {
                console.log(err);
            })
    }

    static delete(req, res){
        let options = {
            where:{
                id: req.params.id
            }
        }

        let choosed = null

        Location
            .findOne(options)
            .then(data=>{
                choosed = data
                return Location.destroy(options)
            })
            .then(data=>{
                res.status(200).json(choosed)
            })
            .catch(err=>{
                console.log(err);
            })
    }

    static search(req, res){
        let termKota = req.query.kota
        let termLabel = req.query.label
        let termProvinsi = req.query.provinsi

        const options = {
            where: { 
                [Op.or]: [
                    {label: {[Op.like]:`%${termLabel}%`}},
                    {kota: {[Op.like]:`%${termKota}%`}},
                    {provinsi: {[Op.like]:`%${termProvinsi}%`}}
                ]
            }          
        }


        Location
            .findAll(options)
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                console.log(err);
            })
    }


}

module.exports = LocationController