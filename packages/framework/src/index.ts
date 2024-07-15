import {App} from '@tinyhttp/app'
import {logger} from '@tinyhttp/logger'

const app = new App({
    noMatchHandler: (req, res) => res.send('No idea broski')
})

export const run = () => {
    app
        .use(logger())
        .get('/', (_, res) => res.send('<h1>Hello World</h1>'))
        .get('/page/:page/', (req, res) => {
            res.status(200).send(req.params)
        })
        .listen(1234)
}