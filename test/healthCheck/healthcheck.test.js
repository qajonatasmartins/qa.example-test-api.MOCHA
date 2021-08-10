import chai from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)
const request = chai.request("http://report.tangerino.com.br")

describe('HealthCheck - Reports', () => {

    it('[API-00001]Verificar o status da API de Reports', (done) => {
        request
            .get('/health')
            .end((err, res) => {
                chai.expect(res.body.status).to.equals("UP")
            })
        done()
    })
})