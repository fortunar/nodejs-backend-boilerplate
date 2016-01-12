/**
 * Created by urbanmarovt on 1/12/16.
 */
import {basicAuth, logger} from './../../interceptors';

export const initialize = (App, sequelize) => {
  App.get('/nearestPlace', (req, res) => {
    sequelize.query(`SELECT * FROM places ORDER BY places.location <-> ST_MakePoint(${req.query.lat}, ${req.query.lng}) LIMIT 1`, { type: sequelize.QueryTypes.SELECT})
      .then(function(place) {
        res.send(place);
      })
  });
}