import { ok, notFound } from 'huncwot/response';
import db from 'huncwot/db';

const fetch = async ({ params }) => {
  const { id } = params;

  const result = await db`task`({ id }).one();
  return result ? ok(result) : notFound();
}

module.exports = fetch;
