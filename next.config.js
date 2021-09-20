const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "pashootan",
        mongodb_password: "<password>",
        mongodb_clustername: "cluster0",
        mongodb_database: "myFirstDatabase",
      },
    };
  }
  return {
    env: {
      mongodb_username: "pashootan",
      mongodb_password: "<password>",
      mongodb_clustername: "cluster0",
      mongodb_database: "myFirstDatabase",
    },
  };
};
