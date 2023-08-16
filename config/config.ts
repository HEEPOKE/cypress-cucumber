import * as dotenv from "dotenv";

dotenv.config();

const { URL } = process.env;

const config = {
    URL,
}

export default config;