const axios = require('axios');
require('dotenv').config();

const config = {
    headers: {
        'x-api-key': process.env.API_TOKEN,
        'Content-Type': 'application/json'
    }
}

class Images {
    constructor() {
        this.client = axios.create({baseURL: process.env.BASE_URL, config});
    }

    //Getting all Images
    async searchImages() {
        return await this.client.get(`v1/images/search`);
    }
    
    //Upload  Image
    async uploadImage(imageURL) {
        const data = `file@"${imageURL}"`;
        return await this.client.post(`v1/images/upload`, FormData=data);
    }

    //Getting One Image by ID
    async getImageAnalysis(imageID) {
        return await this.client.get(`v1/images/${imageID}/analysis`);
    }

    //Delete Image
    async deleteImage(imageID) {
        return await this.client.delete(`v1/images/${imageID}`);
    }
}

module.exports = Images;