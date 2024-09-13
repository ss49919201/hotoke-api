import { Hono } from "hono";
import { loadManyHotokes } from "./reposiotry/hotoke";

const app = new Hono();

app.get("/", async (c) => {
  const hotokes = await loadManyHotokes({});
  return c.json(hotokes);
});

export default app;
