module.exports = {
  createResponseObject: function (data, message, code) {
    let responseObj = {
      responseData: data,
      message: message,
      code: code,
    };

    return responseObj;
  },
  url:
    "mongodb+srv://admin:admin@cluster0-gar5o.mongodb.net/test?retryWrites=true&w=majority",
};
