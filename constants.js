import AllureReport from 'mocha-allure-reporter'
import JsonSchema from 'chai-json-schema'
import chai from 'chai'
import ChaiHttp from 'chai-http'

export const allure = AllureReport
export const jsonSchema = JsonSchema
export const chaiHttp = ChaiHttp
export const chaiJs = chai
export const expect = chai.expect