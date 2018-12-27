import { created } from 'huncwot/response';
import db from 'huncwot/db';

const create = async ({ params }) => {
  const { name } = params;

  await db`task`.insert({ name });

  return created({ status: `success: ${name} created` });
}

module.exports = create;
