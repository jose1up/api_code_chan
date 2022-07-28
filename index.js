import server from "./src/app.js";
import "dotenv/config";
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log("server is runing ", PORT);
});
