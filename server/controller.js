const houses = require('./db.json');

let globalId = 4;

module.exports = {
    getAllHouses: (req,res) => {
        console.log('hit')
        res.status(200).send(houses);
    },
    deleteHouse: (req,res) => {
        let index = houses.findIndex((elem) => elem.id === +req.params.id)
        houses.splice(index, 1);
        console.log(houses);
        res.status(200).send(houses);
    },
    createHouse: (req,res) => {
        console.log(req.params,req.query,req.body)
        let { address, price, imageURL } = req.body

        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL,
        }

        houses.push(newHouse)
        globalId++
        res.status(200).send(houses)

    },
    updateHouse: (req,res) => {
        let id = req.params.id;
        let type = req.body.type;
        let index = houses.findIndex((elem) => +elem.id === +id);

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400).send(houses)
        }
    }
}
