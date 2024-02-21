import * as fs from "fs";
import {BYUObject} from "../data/BYUObject";

export function loadObject(filename: string): BYUObject | null {
  let lines = fs
    .readFileSync(`./src/public/objects/${filename}`, "utf-8")
    .split("\n")
    .filter(Boolean);

  const metadata: string[] = lines.shift()!.split(" ");
  const object: BYUObject = new BYUObject(+metadata[0], +metadata[1]);

  const vertices = lines;
  const indexes = lines
    .splice(object.getNumVertices())
    .map((line) => line.split(" ").map(Number));

  object.setVertices(vertices.map((line) => line.split(" ").map(Number)));
  object.setIndexes(indexes);

  return object;
}
