import { sql } from 'pg-sql'
import { WHERE } from 'pg-sql-helpers'
import QUERY from './query'

/**
 * User SQL by uuid
 *
 * @param {any} uuid
 */

const userByUuidSQL = uuid => sql`
  SELECT *
  FROM users
  ${WHERE({ uuid })}
`

/**
 * Find User by uuid
 *
 * @param {any} uuid
 * @returns {Object}
 */

export const findUserByUuid = async uuid => {
  const rows = await QUERY(userByUuidSQL(uuid))
  return rows[0]
}
