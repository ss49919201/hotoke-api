import { Hotoke } from "../entity/hotoke";

export type LoadManyHotokes = (input: { limit?: number }) => Promise<Hotoke[]>;

export const loadManyHotokes: LoadManyHotokes = async ({ limit = 10 }) => {
  return Array.from({ length: limit }, (_, i) => ({
    type: "hotoke",
    name: `Hotoke ${i + 1}`,
  }));
};

export type SaveHotoke = (hotoke: Hotoke) => Promise<void>;
