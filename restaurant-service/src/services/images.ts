import axios from "axios";

class imagesService {
  getImages() {
    return axios
      .get("http://image-service:3010/images")
      .then((response) => {
        const number = Math.floor(Math.random() * 3);
        console.log([response.data.images[number].url]);
        return [response.data.images[number].url];
      })
      .catch((err: object) => console.log(err));
  }
}

export default new imagesService();
