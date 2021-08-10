import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
//import app from '../app'
//const request = chai.request(app)
const request = chai.request("http://report.tangerino.com.br") // baseUrl de api externas

describe('suite', () => {
    it('meu primeiro test', () => {
        chai.assert.isTrue(true)
    })

    it('deve retornar mensagem olá', (done) => {
        request
            .get('/days-missing')
            .end((err, res) => {
                chai.expect(res.body.status).to.equals("UP")
            })
        done()
    })
})