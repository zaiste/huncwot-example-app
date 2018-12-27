import { ok } from 'huncwot/response';
import db from 'huncwot/db';

const update = async ({ params }) => {
  const { id, name } = params;

  await db`task`({ id }).set({ name });

  return ok({ status: `success: ${id} changed to ${name}` });
}

module.exports = update;
