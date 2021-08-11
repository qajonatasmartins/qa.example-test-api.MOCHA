import { chaiHttp, chaiJs, expect, jsonSchema } from '../../constants.js'
import { baseUrl, healthCheck } from '../../environment.js'
chaiJs.use(chaiHttp)
let request = chaiJs.request(baseUrl)

var goodApple = {
    skin: 'thin',
    colors: ['red', 'green', 'yellow'],
    taste: 10
};
var badApple = {
    colors: ['brown'],
    taste: 0,
    worms: 2
};
var fruitSchema = {
    title: 'fresh fruit schema v1',
    type: 'object',
    required: ['skin', 'colors', 'taste'],
    properties: {
        colors: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
        skin: {
            type: 'string'
        },
        taste: {
            type: 'number',
            minimum: 5
        }
    }
};

describe('HealthCheck - Reports', () => {

    before((done) => {
        console.log(`Pré-condição: ${goodApple}`)
        done()
    })

    it('[API-00001]Verificar o status da API de Reports', (done) => {
        request
            .get(healthCheck)
            .end((err, res) => {
                expect(res.body.status).to.equals("UP") // valida se o status é igual a 'UP'
                expect(res.body).to.not.an('array') // valida se não é um array
                expect(res).to.status(200) // valida o status code
                console.log(res.body)
                done(err)
            })

    })

})