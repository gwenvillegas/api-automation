const Images  = require("../../models/ImagesAPI")

describe('Test CAT API endpoints', () => {
    const images = new Images();

    test('Verify search all cat images endpoint return 200', async() => {
        const response = await images.searchImages();
        expect(response.status).toEqual(200);       
    })
    test('Verify search a cat image endpoint return 200', async() => {
        const response = await images.searchImages();
        const imageID = response.data[0].id;    
        const responseGetImageAnalysis = await images.getImageAnalysis(imageID);
        expect(responseGetImageAnalysis.status).toEqual(200);
    })
})
