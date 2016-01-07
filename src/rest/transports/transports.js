import {basicAuth, logger} from './../../interceptors';

export const initialize = (epilogue, models) => {

    console.log(models.isInitialized);

    var transports = epilogue.resource({
        model: models.Transport,
        include: [{model: models.Currency, as:'RelatedIdCurrency', attributes: ['symbol']},
                  {model: models.User, as: 'RelatedIdUser', attributes: ['email', 'name', 'surname', 'mobile']}],
        endpoints: ['/transports', '/transports/:idTransport']

    });

    transports.use(basicAuth);
    transports.use(logger);
}
