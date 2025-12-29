import { createClient as createHafas } from 'hafas-client'
import { profile as oebbProfile } from 'hafas-client/p/oebb/index.js'
import { createHafasRestApi as createApi } from 'hafas-rest-api'

const config = {
	hostname: process.env.APP_HOSTNAME || 'v6.oebb.transport.rest',
	name: process.env.APP_NAME || 'OEBB Transport Rest API',
	homepage: 'https://github.com/nocontent06/oebb.transport.rest',
	version: '1.0.1',
	cors: process.env.APP_ENABLE_CORS === 'true',
	aboutPage: false,
	openapiSpec: true,
	description: 'OEBB Transport Rest API',
	docsLink: '/api/openapi.json'
}

const hafas = createHafas(oebbProfile, process.env.APP_EMAIL || 'admin@macistry.com')
const api = await createApi(hafas, config)

export default api
