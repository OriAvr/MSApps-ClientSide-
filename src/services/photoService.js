import { createAxiosInstance } from "../utilities/axiosInstance";
import axios from "axios";

const axiosInstance = createAxiosInstance("http://localhost:8181", "photos");
console.log(axiosInstance);

export const getPhotos = (id, category) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${axiosInstance}/page/${id}`, { params: { category } })
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err));
  });
};
