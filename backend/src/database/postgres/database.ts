import { Pool, PoolClient, QueryConfig, QueryResult, types } from 'pg';

// For when query results parse postgres types to typescript types
const INT = 23;
const DOUBLE_PRECISION = 701;
types.setTypeParser(INT, parseInt);
types.setTypeParser(DOUBLE_PRECISION, parseFloat);

export class PostgresDatabase {
  static readonly pool = new Pool();

  /**
   * Performs one time query w/o a pooled client
   * Useful when you just need to perform one query in the transaction
   * @param q Query config
   */
  static query<R>(q: QueryConfig): Promise<QueryResult<R>> {
    return PostgresDatabase.pool.query<R>(q);
  }

  /**
   * Gets a client if you need to perform several operations at once
   */
  static getClient(): Promise<PoolClient> {
    return PostgresDatabase.pool.connect();
  }
}
