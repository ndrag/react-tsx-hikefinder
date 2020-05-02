import { Connection } from './index';

export const getTramps = async () => {
  return new Promise((resolve, reject) => {
    Connection.query('SELECT * from tramps', (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}

export const deleteTramps = async () => {
  return new Promise((resolve, reject) => {
    Connection.query('SELECT * from tramps', (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}

export default {
  getTramps,
  deleteTramps
}