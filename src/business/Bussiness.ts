import axios from "axios";
import { config } from "dotenv";
import { BASE_URL } from "../constants/urls";
import { newsType } from "../types/newType";

config();

class Business {
  public news = async ({ topic, language }: any, { limit, page }: any) => {
    const { data } = await axios.get(
      `${BASE_URL}?q=${topic}&pageSize=${limit}&page=${page}&language=${language}&apiKey=${process.env.API_KEY}`
    );

    const newNews: newsType = data.articles.map(
      ({ author, title, description }: any) => {
        return {
          author,
          title,
          description,
        };
      }
    );

    return newNews;
  };
}
export default Business;
