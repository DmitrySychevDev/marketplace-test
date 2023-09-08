import { rejects } from "assert";
import axios from "axios";

function request<T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  path: string
): Promise<T> {
  return new Promise<T>((resolve, rejects) => {
    axios({ method, url: `${process.env.API_URL}${path}` })
      .then((res) => {
        resolve(res.data as T);
      })
      .catch((err) => {
        console.error(err);
        rejects(err);
      });
  });
}

export default request;
