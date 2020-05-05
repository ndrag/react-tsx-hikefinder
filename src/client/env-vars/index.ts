if (process.env.local_env !== "production") {
  const dotenv: any = require("dotenv");
  dotenv.config();
}

const api_root = process.env.api_root;
export default api_root;