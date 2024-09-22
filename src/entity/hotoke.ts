export type Hotoke = {
  type: "hotoke";
  name: string;
};

export function newHotoke(name: string): Hotoke {
  if (name.length <= 0) {
    throw new DomainError("name length must be greater than 0");
  }

  return { type: "hotoke", name };
}
