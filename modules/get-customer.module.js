const Transfer = require('../models/wire-transfer');
const { OutputMessage } = require("../utils/output-message.model");
const message = new OutputMessage();

const getCustomer = async () => {
    try {
        const customers = await Transfer.find();
        console.log(customers);
        return message.success(customers);

    } catch (error) {
        return message.internalServerError();
    }
}

module.exports = {
    getCustomer
}