export type ExpeditionKey =
  | "desert"
  | "mountain"
  | "sea"
  | "rainforest"
  | "volcano"
  | "planet";

export type ExpeditionRoute = {
  id: ExpeditionKey;
  displayName: string;
  rgbCardColor: [number, number, number];
};

export const expeditions: ExpeditionRoute[] = [
  {
    id: "desert",
    displayName: "Egyptian Desert",
    rgbCardColor: [230, 200, 70],
  },
  {
    id: "mountain",
    displayName: "Himalayas",
    rgbCardColor: [150, 200, 200],
  },
  {
    id: "sea",
    displayName: "Atlantis",
    rgbCardColor: [110, 180, 220],
  },
  {
    id: "rainforest",
    displayName: "Amazonia",
    rgbCardColor: [160, 190, 80],
  },
  {
    id: "volcano",
    displayName: "Ancient Volcanoes",
    rgbCardColor: [225, 80, 50],
  },
  {
    id: "planet",
    displayName: "Uncharted world",
    rgbCardColor: [200, 50, 230],
  },
];
