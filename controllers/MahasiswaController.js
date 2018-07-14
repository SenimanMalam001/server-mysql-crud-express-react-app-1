const models = require('../models');
const Op = require('sequelize').Op

module.exports = {
    all: (req,res) => {
        models.mahasiswas.all().then(mahasiswaAll => {
          res.status(200).json({
            message: 'Success Read mahasiswa All',
            data: mahasiswaAll
          })
        }).catch((err) => {
          res.status(500).json({
            message: 'Something Went Wrong'
          })
        })    
      },
      find: (req, res)  => {
        const { id } = req.params
        models.mahasiswas.findOne({
          where: { id: id}
        }).then(mahasiswas => {             
          res.status(200).json({
              message: 'Success Read Data mahasiswa',
              data: mahasiswas
            })          
        }).catch((err) => {
          res.status(500).json({
            message: 'Something went wrong'
          })
        })
      },
      create: (req, res) => {
        const { npm, nama, no_telp  } = req.body        
        models.mahasiswas.create({
          npm,
          nama,
          no_telp
        }).then((mahasiswas) => {
          res.status(201).json({
            message: 'Success Create Data Mahasiswa',
            data: mahasiswas
          })
        }).catch((err) => {
          if (err.errors[0].message) {
            const message = err.errors[0].message
            res.status(403).json({
              message: message,
            })
          } else {
            res.status(500).json({
              message: 'Something Went Wrong',
            })
          }
        })
      },
      update: (req, res) => {
        const { id } = req.params
        const { npm, nama, no_telp } = req.body
        models.mahasiswas.findOne({
          where: { id: id}
        }).then((mahasiswas) => { 
            mahasiswas.update({
                npm,
                nama,
                no_telp
            }).then((mahasiswas) => {
                res.status(201).json({
                    message: 'Success Update Data Mahasiswa',
                    data: mahasiswas
                  })
            }).catch((err) => {
              if (err.errors[0].message) {
                const message = err.errors[0].message
                res.status(403).json({
                  message: message,
                })
              } else {
                res.status(500).json({
                  message: 'Something Went Wrong',
                })
              }
            }) 
        }).catch((err) => {
          res.status(500).json({
            message: 'Something Went Wrong',
          })
        })
      },
      destroy: (req, res) => {
        const { id } = req.params
        models.mahasiswas.findOne({
          where: {
            id: id
          }
        }).then((mahasiswas) => {
          mahasiswas.destroy().then(() => {
            res.status(200).json({
              message: 'Success Delete Data Mahasiswa',
              data: mahasiswas
            })
          }).catch((err) => {
            res.status(500).json({
              message: 'Something Went Wrong',
            })
          })
        }).catch((err) => {
          res.status(500).json({
            message: 'Something Went Wrong',
          })
        })
      },
};

