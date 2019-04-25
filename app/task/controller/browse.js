import { ok } from 'huncwot/response';
import db from 'huncwot/db';
import { can } from 'huncwot/auth';
import { validate } from 'huncwot/request';

//const schema = require('~schemas/params/task.js');
//const schema = require('~schemas/task');

const browse = async ({ params }) => {
  //const errors = schema.validate(params);

  try {
    const results = await db`task`.orderBy`id desc`;
    return ok(results);
  } catch (error) {
    return "";
  }


};

module.exports = browse;
