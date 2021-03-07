const servicesController = require('../controllers/servicesController.js');
const apiCalls = require('../http/apiCalls.js');

describe("Services Controller", () => {
    test("getAsgardianLikes returns an array of objects", async () => {
        let getAsgardianLikes = await servicesController.getAsgardianActiveLikes();
        expect(getAsgardianLikes).toEqual(
        expect.arrayContaining([
            expect.any(Object)
        ])
    );
    });

test('getAsgardianActiveViews returns array of objects', async () => {
    let asgardianActiveViews = await servicesController.getAsgardianActiveViews();
    expect(asgardianActiveViews).toEqual(
        expect.arrayContaining([
            expect.any(Object)
        ])
    );
});

test('getAsgardianActiveSaves returns array of objects', async () => {
    let asgardianActiveSaves = await servicesController.getAsgardianActiveSaves();
    expect(asgardianActiveSaves).toEqual(
        expect.arrayContaining([
            expect.any(Object)
        ])
    );
});

test('getAsgardianActiveImpressions returns array of objects', async () => {
    let asgardianActiveImpressions = await servicesController.getAsgardianActiveImpressions();
    expect(asgardianActiveImpressions).toEqual(
        expect.arrayContaining([
            expect.any(Object)
        ])
    );
});
});