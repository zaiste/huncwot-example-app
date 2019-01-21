import { created } from 'huncwot/response';
import db from 'huncwot/db';
import { register } from 'huncwot/auth';

const create = register({ fields: ['name'] });

module.exports = create;
