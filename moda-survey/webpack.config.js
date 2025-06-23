const { shareAll } = require("@angular-architects/module-federation/webpack");
module.exports = {
  name: "survey",
  exposes: {
    "./SurveyModule": "./src/app/survey/survey.module.ts",
  },
  shared: shareAll({ singleton: true, strictVersion: true }),
};
