const axios = require('axios');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

const config = {
    headers: {
        'x-api-key': API_TOKEN,
        'Content-Type': 'application/json'
    }
}

class Breeds {
    constructor() {
        this.client = axios.create({baseURL: process.env.BASE_URL, config});
    }

    //Getting One Breed by ID
    async getBreed(breedID) {
        return await this.client.get(`v1/breeds/${breedID}`);
    }

    //Getting all Breeds
    async getBreeds(limit = 5, page = 0) {
        return await this.client.get(`v1/breeds?limit=${limit}&page=${page}`);
    }
}

module.exports = Breeds;