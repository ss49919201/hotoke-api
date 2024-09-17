import { Hono } from "hono";
import { Env, newLoadManyHotokes } from "./infrastructure/d1/repository/hotoke";

const hotokeApp = new Hono<{ Bindings: Env }>().get("/", async (c) => {
  const loadManyHotokes = newLoadManyHotokes(c.env);
  const hotokes = await loadManyHotokes({});
  return c.json(hotokes);
});

const app = new Hono().route("/hotokes", hotokeApp);

export default app;
