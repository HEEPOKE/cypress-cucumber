import * as dotenv from "dotenv";

dotenv.config();

const { URL } = process.env;

const Config = {
    URL,
}

export default Config;