import { DurableObjectState } from "@cloudflare/workers-types";
import { DurableObject } from "cloudflare:workers";
import { Hotoke } from "../../entity/hotoke";
import { LoadManyHotokes } from "../../reposiotry/hotoke";

export class HotokeDurableObject extends DurableObject {
  constructor(ctx: DurableObjectState, env: unknown) {
    super(ctx, env);
  }

  async get(key: string): Promise<Hotoke | undefined> {
    return await this.ctx.storage.get<Hotoke>(key);
  }

  async put(key: string, value: Hotoke): Promise<void> {
    await this.ctx.storage.put(key, value);
  }

  async delete(key: string): Promise<void> {
    await this.ctx.storage.delete(key);
  }

  async list(input: { limit?: number }): Promise<Hotoke[]> {
    await this.ctx.storage.put("hotoke", {
      id: "hotoke",
      name: "Hotoke 1",
    });

    const result: Hotoke[] = [];
    for (const [_, val] of await this.ctx.storage.list<Hotoke>({
      limit: input.limit,
    })) {
      result.push(val);
    }
    return result;
  }
}

export const newLoadManyHotokes: (
  HOTOKE_DURABLE_OBJECT: DurableObjectNamespace<HotokeDurableObject>
) => LoadManyHotokes = (HOTOKE_DURABLE_OBJECT) => {
  return async (input: { limit?: number }) => {
    const stub = HOTOKE_DURABLE_OBJECT.get(
      HOTOKE_DURABLE_OBJECT.idFromName("hotoke")
    );

    return stub.list(input);
  };
};
