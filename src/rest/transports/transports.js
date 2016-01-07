import {basicAuth, logger} from './../../interceptors';

export const initialize = (epilogue, models) => {

    console.log(models.isInitialized);

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
