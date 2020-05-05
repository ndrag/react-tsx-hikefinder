if (process.env.local_env !== "production") {
  const dotenv: any = require("dotenv");
  dotenv.config();
}

const api_root = "ndragunow.nz"; // TODO: Hard-coded as a temporary measure - current host doesn't allow env var setting. Swapping to a new one.
const NODE_ENV = "production"; // TODO: As above. Suppresses node-dom console messages.

export default {
  api_root,
  NODE_ENV
}