const getCustomerTransferModule = require('../modules/get-customer-transfer.module');

const getCustomerTransfer = async (req, res) => {    
    const result = await getCustomerTransferModule.getCustomerTransfer();
    return res.status(result.code).send(result);
}

module.exports = {
    getCustomerTransfer
}