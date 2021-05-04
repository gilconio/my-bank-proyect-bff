const Transfer = require('../../models/wire-transfer');
const { OutputMessage } = require("../../models/output-message.model");
const message = new OutputMessage();

const setAmount = async (amount) => {
    try {
        const transfer = new Transfer(amount);

        await transfer.save();

        return message.success(transfer);

    } catch (error) {
        return message.internalServerError();
    }
}

module.exports = {
    setAmount
}