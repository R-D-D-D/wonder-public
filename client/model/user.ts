import db from '../db/index'

export function getUsers(all?: boolean, id?: string) {
  return db.one("select * from test")
    .then((data) => data)
}
