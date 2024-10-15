const Breeds = require('../../models/BreedsAPI');

describe('Test cat Breed API', () => {
    const breeds = new Breeds();

    test('Get all cat breeds endpoint return 200', async() => {
        const response = await breeds.getBreeds(3, 0);
        expect(response.status).toEqual(200);
    })

    test('Get a cat breed endpoint return 200', async() => {
        const response = await breeds.getBreeds(3, 0);
        const breedID = response.data[0].id;
        const getCatBreedResponse = await breeds.getBreed(breedID);
        expect(getCatBreedResponse.status).toEqual(200);
    })
})
