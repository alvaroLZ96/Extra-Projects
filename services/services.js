import { secrets } from "../secrets";
const ACCESS_KEY = secrets.accessKey;
export const getData = async () => {
  try {
    const data = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=100&quantity=100`
    );
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log("Error:", error);
  }
};
