import {basicAuth, logger} from './../../interceptors';

export const initialize = (epilogue, models) => {

    console.log(models.isInitialized);

    var transports = epilogue.resource({
        model: models.Transport,
        include: [models.Currency],
        endpoints: ['/transports', '/transports/:idTransport']
    });

    transports.use(basicAuth);
    transports.use(logger);
}
