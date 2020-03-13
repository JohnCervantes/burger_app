import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-b5a49.firebaseio.com/"
});

export default instance;
