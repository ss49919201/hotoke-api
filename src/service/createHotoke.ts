import { Hotoke, newHotoke } from "../entity/hotoke";
import { SaveHotoke } from "../reposiotry/hotoke";

export type CreateHotokeInput = {
  name: string;

  saveHotoke: SaveHotoke;
};

export function createHotoke(input: CreateHotokeInput) {
  let hotoke: Hotoke;
  try {
    hotoke = newHotoke(input.name);
  } catch (e) {
    if (e instanceof Error) {
      throw new InvalidParameterError("failed to create hotoke: " + e.message);
    }
    throw new InvalidParameterError("failed to create hotoke");
  }

  input.saveHotoke(hotoke);
}
