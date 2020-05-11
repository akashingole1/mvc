module.exports = {
  createResponseObject: function (data, message, code) {
    let responseObj = {
      responseData: data,
      message: message,
      code: code,
    };

    return responseObj;
  },
  url: "your mongo db atlas url",
};
