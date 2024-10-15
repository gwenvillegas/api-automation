const Images  = require("../../models/ImagesAPI")

describe('Test CAT API endpoints', () => {
    const images = new Images();

    test('Search cat images', async() => {
        const response = await images.searchImages();
        expect(response.status).toEqual(200);       
    })
    test('Get a cat image', async() => {
        const response = await images.searchImages();
        const imageID = response.data[0].id;    
        const responseGetImageAnalysis = await images.getImageAnalysis(imageID);
        expect(responseGetImageAnalysis.status).toEqual(200);
    })
})
