import "./shared/infrastructure/load-env-vars";

import bodyParser from "body-parser";
import express from "express";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
}

boostrap();
