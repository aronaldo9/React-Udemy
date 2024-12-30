/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// En caso de necesitar la implementación del FetchAPI
import "whatwg-fetch"; // <-- yarn add whatwg-fetch
import "setimmediate"; // <-- yarn add setimmediate
import { getEnvironments } from "./src/helpers/getEnvironments";

require("dotenv").config({
  path: ".env.test",
});

jest.mock("./src/helpers/getEnvironments", () => ({
  getEnvironments: () => ({ ...process.env }),
}));
