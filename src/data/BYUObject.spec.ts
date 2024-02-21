import { BYUObject } from "./BYUObject";

describe("BYUObject", () => {
  let object: BYUObject;

  beforeEach(() => {
    object = new BYUObject(3, 1);
  });

  describe("getNumVertices", () => {
    it("returns 3 when the object has 3 vertices", () => {
      const object = new BYUObject(3, 1);

      const result = object.getNumVertices();
      expect(result).toEqual(3);
    });
  });

  describe("getNumTriangles", () => {
    it("returns 3 when the object has 3 triangles", () => {
      const object = new BYUObject(3, 1);

      const result = object.getNumTriangles();
      expect(result).toEqual(1);
    });
  });

  describe("getVertices", () => {
    it("returns [[1, 2, 3], [4, 5, 6], [7, 8, 9]] when the object has 3 vertices", () => {
      const object = new BYUObject(3, 1);
      object.addVertex([1, 2, 3]);
      object.addVertex([4, 5, 6]);
      object.addVertex([7, 8, 9]);

      const result = object.getVertices();
      expect(result).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
    });
  });

  describe("addVertex", () => {
    it("adds a vertex to the object", () => {
      object.addVertex([1, 2, 3]);
      expect(object.getVertices()).toEqual([[1, 2, 3]]);
    });
  });

  describe("setVertices", () => {
    it("sets the vertices of the object", () => {
      object.setVertices([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(object.getVertices()).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
    });
  });

  describe("getMinX", () => {
    it("returns 1 when the object has vertices [[1, 2, 3], [4, 5, 6], [7, 8, 9]]", () => {
      object.setVertices([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(object.getMinX()).toEqual(1);
    });
  });

  describe("getMaxX", () => {
    it("returns 7 when the object has vertices [[1, 2, 3], [4, 5, 6], [7, 8, 9]]", () => {
      object.setVertices([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(object.getMaxX()).toEqual(7);
    });
  });

  describe("getMinY", () => {
    it("returns 2 when the object has vertices [[1, 2, 3], [4, 5, 6], [7, 8, 9]]", () => {
      object.setVertices([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(object.getMinY()).toEqual(2);
    });
  });

  describe("getMaxY", () => {
    it("returns 8 when the object has vertices [[1, 2, 3], [4, 5, 6], [7, 8, 9]]", () => {
      object.setVertices([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(object.getMaxY()).toEqual(8);
    });
  });

  describe("getMinZ", () => {
    it("returns 3 when the object has vertices [[1, 2, 3], [4, 5, 6], [7, 8, 9]]", () => {
      object.setVertices([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(object.getMinZ()).toEqual(3);
    });
  });

  describe("addIndex", () => {
    it("adds an index to the object", () => {
      object.addIndex([1, 2, 3]);
      expect(object.getIndexes()).toEqual([[1, 2, 3]]);
    });
  });

  describe("getIndexes", () => {
    it("returns [[1, 2, 3], [4, 5, 6], [7, 8, 9]] when the object has 3 indexes", () => {
      object.addIndex([1, 2, 3]);
      object.addIndex([4, 5, 6]);
      object.addIndex([7, 8, 9]);

      const result = object.getIndexes();
      expect(result).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
    });
  });

  describe("setIndexes", () => {
    it("sets the indexes of the object", () => {
      object.setIndexes([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(object.getIndexes()).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
    });
  });
});
