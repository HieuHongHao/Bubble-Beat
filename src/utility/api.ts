import { URL } from "@/url";
import axios from "axios";
export const API = axios.create({
  baseURL: URL + "/api",
});
