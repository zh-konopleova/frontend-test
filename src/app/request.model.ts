export class Request {
  id?: string;
  query: string;
  createdAt: number;

  constructor(query?: string) {
    this.query = query;
    this.createdAt = +new Date();
  }

  serialize(): any {
    return {
      query: this.query,
      createdAt: this.createdAt
    };
  }

  deserialize({ id, query, createdAt }: any): this {
    this.id = id;
    this.query = query;
    this.createdAt = createdAt;

    return this;
  }

  static compare(a: Request, b: Request) {
    return b.createdAt - a.createdAt;
  }
}
