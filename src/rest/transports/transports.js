import models from './../../../models';
import {basicAuth, logger} from './../../interceptors';

export const initialize = (epilogue) => {
    var transports = epilogue.resource({
        model: models.transports,
        endpoints: ['/transports', '/transports/:id_transport']
    });

    transports.use(basicAuth);
    transports.use(logger);
}
