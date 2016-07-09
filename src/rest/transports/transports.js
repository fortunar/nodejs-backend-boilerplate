import {basicAuth, logger} from './../../interceptors';
import models from './../../../models';
export const initialize = (epilogue) => {


    var transports = epilogue.resource({
        model: models.Transport,
        include: [{model: models.Currency, as:'currency', attributes: ['symbol']},
                  {model: models.User, as: 'user', attributes: ['email', 'name', 'surname', 'mobile']},
                  {model: models.Place, as: 'arrivalPlace'},
                  {model: models.Place, as: 'departurePlace'}],
        endpoints: ['/transports', '/transports/:idTransport']

    });

    transports.use(basicAuth);
    transports.use(logger);
}
