const createCustomer = require('./customer.module');

const postCustomer = async (req, res) => {    
    const result = await createCustomer.postCustomer(req.body);
    return res.status(result.code).send(result);
}

module.exports = {
    postCustomer
}