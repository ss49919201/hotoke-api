import { Hono } from "hono";
import { Env, newLoadManyHotokes } from "./infrastructure/d1/repository/hotoke";

import {
  Env as EnvWithKv,
  newLoadManyHotokes as newLoadManyHotokesWithKv,
} from "./infrastructure//kv/reposiotry/hotoke";

const app = new Hono<{ Bindings: Env & EnvWithKv }>();

app.get("/", async (c) => {
  const loadManyHotokes = newLoadManyHotokes(c.env);
  const hotokes = await loadManyHotokes({});
  return c.json(hotokes);
});

app.get("/kv", async (c) => {
  const loadManyHotokes = newLoadManyHotokesWithKv(c.env);
  const hotokes = await loadManyHotokes({});
  return c.json(hotokes);
});

export default app;
