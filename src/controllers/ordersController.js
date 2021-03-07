const Services = require('./servicesController.js');

function OrdersController() {

    function calculateMinOrder(services) {
        let servicesByMinOrder = services.sort(compareMinOrder);
        return servicesByMinOrder[servicesByMinOrder.length - 1]['min_order'];
    }

    async function processAsgardianTopUp(orderObject) {
        // Validate URL
        try {
            if (!validatePostUrl(orderObject.url)) throw 'Invalid URL';

            let asgardianLikesOrder = orderObject.likes;
            let asgardianViewsOrder = orderObject.views;
            let asgardianSavesOrder = orderObject.saves;
            let asgardianImpressionsOrder = orderObject.impressions;

            if (asgardianLikesOrder > 0) {
                console.log('Likes order detected');
                let asgardianLikesServices = await Services.getAsgardianActiveLikes();
                console.log(asgardianLikesServices);
                console.log(calculateMinOrder(asgardianLikesServices));

                let minimumLikesOrder = calculateMinOrder(asgardianLikesServices);

                let noOfDrips = asgardianLikesOrder / minimumLikesOrder;
                let excess = asgardianLikesOrder % minimumLikesOrder;

                console.log('noOfDrips: ' + noOfDrips);
                console.log('excess: ' + excess);
            }
            if (asgardianViewsOrder > 0) {
                console.log('Views order detected');
                let asgardianViewsServices = await Services.getAsgardianActiveViews();
                console.log(asgardianViewsServices);
                console.log(calculateMinOrder(asgardianViewsServices));
            }
            if (asgardianSavesOrder > 0) {
                console.log('Saves order detected');
                let asgardianSavesServices = await Services.getAsgardianActiveSaves();
                console.log(asgardianSavesServices);
                console.log(calculateMinOrder(asgardianSavesServices));
            }
            if (asgardianImpressionsOrder > 0) {
                console.log('Impressions order detected');
                let asgardianImpressionsServices = await Services.getAsgardianActiveImpressions();
                console.log(asgardianImpressionsServices);
                console.log(calculateMinOrder(asgardianImpressionsServices));
            }

            // Check at least one service has a quantity higher than 0 entered

            // 
        } catch (e) {
            console.log('Fuck');
        }

    }

    function validatePostUrl(postUrl) {
        return postUrl.includes("instagram.com") ? true : false;
    }


    return { calculateMinOrder, processAsgardianTopUp };
}

function compareMinOrder(a, b) {
    if (a.min_order < b.min_order) {
        return -1;
    }
    if (a.min_order > b.min_order) {
        return 1;
    }
    return 0;
}

module.exports = OrdersController();
