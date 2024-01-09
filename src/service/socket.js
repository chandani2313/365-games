import { io } from "socket.io-client";
import { baseURL } from "../config";

export default io(baseURL);