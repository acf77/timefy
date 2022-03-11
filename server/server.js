import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import QueryString from "qs";

// import connectDB from "./db/db.js";

const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const port = process.env.PORT || 8080;

dotenv.config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

// const spotify = new SpotifyWebApi({
//   clientId: process.env.SPOTIFY_CLIENT_ID,
//   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
// });

const auth_token = Buffer.from(`${clientId}:${clientSecret}`, "utf-8").toString(
  "base64"
);

const credentials = QueryString.stringify({ grant_type: "client_credentials" });

// connectDB();

app.use(cors({ origin: "http://localhost:3000" }));

app.post("/api/artist/album", urlEncodedParser, (req, res) => {
  const search = Object.keys(req.body);

  const getArtistAlbums = async (token) => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${search}/albums`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      res.status(200).json(data);
      console.log(data);
    } catch (error) {
      res.status(400).json(error);
      console.error(error);
    }
  };

  const createToken = async () => {
    try {
      const { data } = await axios.post(
        "https://accounts.spotify.com/api/token",
        credentials,
        {
          headers: {
            Authorization: `Basic ${auth_token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const token = data.access_token;
      getArtistAlbums(token);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  createToken();
});

app.post("/api/artist/search", urlEncodedParser, (req, res) => {
  const search = Object.keys(req.body);

  const getArtistSearch = async (token) => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?query=${search}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  const createToken = async () => {
    try {
      const { data } = await axios.post(
        "https://accounts.spotify.com/api/token",
        credentials,
        {
          headers: {
            Authorization: `Basic ${auth_token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const token = data.access_token;
      getArtistSearch(token);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  createToken();
});

app.use("/", (req, res) => res.send("API is running..."));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
