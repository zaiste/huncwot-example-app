import { ok } from 'huncwot/response';
import db from 'huncwot/db';

//const schema = require('~schemas/params/task.js');
//const schema = require('~schemas/task');

const browse = async ({ params }) => {
  //const errors = schema.validate(params);

  const results = await db`task`.orderBy`id desc`;

  return ok(results);
};

module.exports = browse;
