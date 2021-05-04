const customerModule = require('./create-customer.module');

const postCustomer = async (req, res) => {    
    const result = await customerModule.postCustomer(req.body);
    return res.status(result.code).send(result);
}

module.exports = {
    postCustomer
}