const Transfer = require('../models/wire-transfer');
const { OutputMessage } = require("../utils/output-message.model");
const message = new OutputMessage();

const getCustomerTransfer = async () => {
    try {
        const customers = await Transfer.find();
        return message.success(customers);

    } catch (error) {
        return message.internalServerError();
    }
}

module.exports = {
    getCustomerTransfer
}