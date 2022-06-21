import axios from "axios";

const version = 1

export const http = axios.create({
  baseURL: `https://marketplace-dev1.azurewebsites.net/api/v${version}/` as string,
});
