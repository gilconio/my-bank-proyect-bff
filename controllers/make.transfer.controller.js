const makeTransferModule = require('../modules/make-transfer.module');

const makeTransfer = async (req, res) => {    
    const result = await makeTransferModule.setAmount(req.body);
    return res.status(result.code).send(result);
}

module.exports = {
    makeTransfer
}