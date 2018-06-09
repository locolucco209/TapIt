const Orm = require('../orm.js')

const BreweryModel = {
    getBreweries() {
        return Orm.getBreweries()
    }
}
module.exports = BreweryModel;