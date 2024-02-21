import { loadObject } from "./LoadObject";

describe("LoadObject", () => {
  describe("Load", () => {
    it("returns the correct object ", async () => {
      const result = loadObject("example.byu");

      expect(result).toEqual({
        numTriangles: 4,
        numVertices: 4,
        vertices: [
          [1, 1, 1],
          [1, 30, 1],
          [30, 30, 1],
          [1, 1, 30],
        ],
        indexes: [
          [1, 2, 3],
          [1, 2, 4],
          [2, 3, 4],
          [1, 3, 4],
        ],
        maxX: 30,
        maxY: 30,
        maxZ: 30,
        minX: 1,
        minY: 1,
        minZ: 1,
      });
    });
  });
});
