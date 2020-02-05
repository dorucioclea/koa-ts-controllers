import request from 'supertest';
import Koa from 'koa';
import { bootstrapControllers } from '../index';
import { setSomethingStateFlow } from './util/flow/flow';

let app: Koa;
let nativeServer;
let testServer: request.SuperTest<request.Test>;
beforeAll(async () => {
    app = new Koa();

    await bootstrapControllers(app, {
        basePath: '/api',
        controllers: [__dirname + '/util/controllers/**/*.ts'],
        boomifyErrors: true,
        initBodyParser: true,
        versions: ['1', '2']
    });

    nativeServer = app.listen();
    testServer = request(nativeServer);
});

afterAll((done) => {
    if (nativeServer.listening) {
        nativeServer.close(done);
    } else {
        done();
    }
});

describe('Controller class', () => {
    it('Flow can be inherited from class', async () => {
        const response = await testServer
            .get('/api/v2/protected')
            .expect(401);

    });
});
