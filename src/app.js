import express from "express";
import { palindrome } from "./helpers/palindrome.js";
import morgan from "morgan";
import cors from "cors"
var server = express();
server.use(morgan("dev"));

const corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
};
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.get("/iecho", function (req, res) {
  let { text } = req.query;
  try {
    var regex = new RegExp("^[a-zA-Z ]+$");
    if (text && regex.test(text)) {
      text = [...text].reverse().join("");
      res.status(200).send({ text: text, palindrome: palindrome(text) });
    } else {
      res.status(400).send({ error: "no text" });
    }
  } catch (error) {
    console.error(error);
  }
});

export default server;
