import { KVNamespace } from "@cloudflare/workers-types";
import { Hotoke } from "../../../entity/hotoke";
import { LoadManyHotokes } from "../../../reposiotry/hotoke";

export interface Env {
  hotoke: KVNamespace;
}

// FIXME: This is a stub implementation
export const newLoadManyHotokes: (env: Env) => LoadManyHotokes = (env: Env) => {
  const { hotoke } = env;
  return async ({ limit = 10 }) => {
    const result = await hotoke.get<Hotoke>(
      "01GREFXCN9519NRVXWTPG0V0BF",
      "json"
    );

    if (result == null) {
      return [];
    }

    return [result];
  };
};
