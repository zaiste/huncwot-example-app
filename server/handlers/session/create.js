import { created, unauthorized } from 'huncwot/response';
import db from 'huncwot/db';
import { login } from 'huncwot/auth';

const create = login();

module.exports = create;
