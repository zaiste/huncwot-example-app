import { ok } from 'huncwot/response';
import db from 'huncwot/db';

const destroy = async ({ params }) => {
  const { id } = params;

  await db`task`({ id }).delete;

  return ok({ status: `success: ${id} destroyed` });
}

module.exports = destroy;
