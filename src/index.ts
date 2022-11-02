import { Request, Response } from "express";
import app from "./app";
import axios from "axios";
import { config } from "dotenv";
import { BASE_URL } from "./constants/urls";

config();

app.get("/news", async (req: Request, res: Response) => {
  try {
    const { limit, page } = req.query;

    const { data } = await axios.get(
      `${BASE_URL}&pageSize=${limit}&page=${page}&apiKey=${process.env.API_KEY}`
    );

    const newNews = data.articles.map((news: any) => {
      return {
        author: news.author,
        title: news.title,
        description: news.description,
      };
    });

    res.status(200).send(newNews);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});
