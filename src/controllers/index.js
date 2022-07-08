const vehicle = require('../models/vehicleModel')

const createVehicles = (request, response) => {
    //adicionar veiculo
    vehicle.create(request.body).then(function (v) {
        response.send(v);
    })
}

const updateVehicles = (request, response) => {
    //editar veiculo
    vehicle.findByIdAndUpdate({ _id: request.params.id },
        request.body).then(function () {
            vehicle.findOne({ _id: request.params.id }).then(function (v) {
                response.send(v);
            });
        })
}

const deleteVehicles = (request, response) => {
    //deletar veiculo
    vehicle.findByIdAndRemove({ _id: request.params.id }).then(function (v) {
        response.send(v);
    })
}

const getVehicles = (request, response) => {
    //retornar todos os veiculos
    vehicle.find({}).then(function (v) {
        response.send(v);
    });
}

module.exports = {createVehicles, updateVehicles, deleteVehicles, getVehicles}