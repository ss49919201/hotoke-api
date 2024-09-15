import { Hono } from "hono";
import { Env, newLoadManyHotokes } from "./infrastructure/d1/repository/hotoke";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const loadManyHotokes = newLoadManyHotokes(c.env);
  const hotokes = await loadManyHotokes({});
  return c.json(hotokes);
});

export default app;
