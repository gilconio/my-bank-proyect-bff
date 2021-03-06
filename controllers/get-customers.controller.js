const getCustomerModule = require('../modules/get-customers.module');

const getCustomer = async (req, res) => {    
    const result = await getCustomerModule.getCustomer();
    return res.status(result.code).send(result);
}

module.exports = {
    getCustomer
}