import {App} from '@tinyhttp/app'
import {logger} from "@tinyhttp/logger";


export class Ripe {
    protected app: App;

    constructor() {
        this.app = new App({
            noMatchHandler: (req, res) => res.send('No idea broski')
        })
    }

    listen(port: number) {
        this.app
            .use(logger())
            .get('/', (_, res) => res.send('<h1>Hello World</h1>'))
            .get('/page/:page/', (req, res) => {
                res.status(200).send(req.params)
            })
            .listen(port)
    }

}