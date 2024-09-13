import { D1Database } from "@cloudflare/workers-types";
import { Hotoke } from "../../../entity/hotoke";
import { LoadManyHotokes } from "../../../reposiotry/hotoke";

export interface Env {
  DB: D1Database;
}

export const newLoadManyHotokes: (env: Env) => LoadManyHotokes = (env: Env) => {
  const { DB } = env;
  return async ({ limit = 10 }) => {
    const result = await DB.prepare("SELECT * FROM hotokes LIMIT ?1")
      .bind(limit)
      .all<Hotoke>();
    return result.results.map((row) => ({
      type: "hotoke",
      name: row.name,
    }));
  };
};
