class OutputMessage {

    constructor(code, message, payload = {}) {
        this.code = code;
        this.message = message;
        this.payload = payload;
    }

    success(payload) {
        return new OutputMessage(200, "Success", payload);
    }

    noContent() {
        return new OutputMessage(204, "No Content", undefined);
    }

    internalServerError() {
        return new OutputMessage(500, "Internal Error", undefined);
    }

    badRequest(){
        return new OutputMessage(400, "Bad request", undefined);
    }
}

module.exports = {
    OutputMessage
};
