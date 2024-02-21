enum Coordinate {
  X = 0,
  Y = 1,
  Z = 2,
}

export class BYUObject {
  private numVertices: number;
  private numTriangles: number;
  private vertices: number[][];
  private indexes: number[][];
  private minX: number;
  private maxX: number;
  private minY: number;
  private maxY: number;
  private minZ: number;
  private maxZ: number;

  constructor(
    numVertices: number,
    numTriangles: number,
    vertices: number[][] = [],
    indexes: number[][] = [],
  ) {
    this.numVertices = numVertices;
    this.numTriangles = numTriangles;
    this.vertices = vertices;
    this.indexes = indexes;
    this.minX = vertices ? this.getMin(Coordinate.X, vertices) : 0;
    this.maxX = vertices
      ? this.getMax(Coordinate.X, vertices)
      : Number.MAX_SAFE_INTEGER;
    this.minY = vertices ? this.getMin(Coordinate.Y, vertices) : 0;
    this.maxY = vertices
      ? this.getMax(Coordinate.Y, vertices)
      : Number.MAX_SAFE_INTEGER;
    this.minZ = vertices ? this.getMin(Coordinate.Z, vertices) : 0;
    this.maxZ = vertices
      ? this.getMax(Coordinate.Z, vertices)
      : Number.MAX_SAFE_INTEGER;
  }

  private getMin(coordinate: Coordinate, vertices: number[][]): number {
    return Math.min(...vertices.map((vertex) => vertex[coordinate]));
  }

  private getMax(coordinate: Coordinate, vertices: number[][]): number {
    return Math.max(...vertices.map((vertex) => vertex[coordinate]));
  }

  public getNumVertices(): number {
    return this.numVertices;
  }

  public getNumTriangles(): number {
    return this.numTriangles;
  }

  public getVertices(): number[][] {
    return this.vertices;
  }

  public addVertex(vertex: number[]): void {
    this.vertices.push(vertex);

    if (vertex[0] < this.minX) {
      this.minX = vertex[0];
    }
    if (vertex[0] > this.maxX) {
      this.maxX = vertex[0];
    }
    if (vertex[1] < this.minY) {
      this.minY = vertex[1];
    }
    if (vertex[1] > this.maxY) {
      this.maxY = vertex[1];
    }
    if (vertex[2] < this.minZ) {
      this.minZ = vertex[2];
    }
    if (vertex[2] > this.maxZ) {
      this.maxZ = vertex[2];
    }
  }

  public setVertices(vertices: number[][]): void {
    this.vertices = vertices;

    this.minX = this.getMin(Coordinate.X, vertices);
    this.maxX = this.getMax(Coordinate.X, vertices);
    this.minY = this.getMin(Coordinate.Y, vertices);
    this.maxY = this.getMax(Coordinate.Y, vertices);
    this.minZ = this.getMin(Coordinate.Z, vertices);
    this.maxZ = this.getMax(Coordinate.Z, vertices);
  }

  public addIndex(index: number[]): void {
    this.indexes.push(index);
  }

  public getIndexes(): number[][] {
    return this.indexes;
  }

  public setIndexes(indexes: number[][]): void {
    this.indexes = indexes;
  }

  public getMinX(): number {
    return this.minX;
  }

  public getMaxX(): number {
    return this.maxX;
  }

  public getMinY(): number {
    return this.minY;
  }

  public getMaxY(): number {
    return this.maxY;
  }

  public getMinZ(): number {
    return this.minZ;
  }

  public getMaxZ(): number {
    return this.maxZ;
  }
}
