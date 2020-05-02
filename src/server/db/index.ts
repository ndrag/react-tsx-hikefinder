import * as mysql from 'mysql';
import config from '../config';

import Tramps from './tramps';

export const Connection = mysql.createConnection(config.mysql);
Connection.connect(err => {
  if (err) console.log(err);
});

export default {
  Tramps
}
// Index defines a connection to the MySQL database (name, login details, port, etc. set in config/index.ts). In that sense it's a singular entry point for all nested table pages.
// It also includes every other file in the db folder as a dependency, and exports them. This makes it a singular entry point for anything using files in this folder.
// Note that routes.ts imports this with 'import DB from 'DB'. In Node & Webpack an import pointed at a directory rather than a file will default to that directory's index.ts file.