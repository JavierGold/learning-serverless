"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hola chavos",
        input: event,
      },
      null,
      2
    ),
  };
};
