import ENDPOINTS from "./endpoints";

const BASE_URS = 'https://5f7998dbe402340016f9321f.mockapi.io/api/v1';

class Api {
    constructor(baseUrl, endpoints) {
        this.baseUrl = baseUrl;
        this.enpoints = endpoints;
    }

    async generateRequest(endpoint, data){
        const {method, uri} = this.enpoints[endpoint]

        return fetch(`${this.baseUrl}${uri}`, {method, body: data})
    }

    async fetch(endpoint, data) {
        const response = await this.generateRequest(endpoint, data);

        return response.json();
    }

}

export default new Api(BASE_URS, ENDPOINTS);