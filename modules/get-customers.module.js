const Users = require('../models/user-bank');
const { OutputMessage } = require("../utils/output-message.model");
const message = new OutputMessage();

const getCustomer = async () => {
    try {
        const customers = await Users.find();
        return message.success(customers);

    } catch (error) {
        return message.internalServerError();
    }
}

module.exports = {
    getCustomer
}