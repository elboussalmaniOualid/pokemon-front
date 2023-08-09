export interface Pokemon {
  id: number;
  name: string;
  description: string,
  types: { type: { name: string } }[];
  sprites: { front_default: string };
  // ... other properties
}
