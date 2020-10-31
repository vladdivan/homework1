function removeOrderItem(orderInfo, position){
    if(!Array.isArray(orderInfo.items)) {
        throw Error('Items should be an array');
    }

    let checkItems
    for(let i =0; i < orderInfo.items.length; i++){
        checkItems = true;

        if(orderInfo.items[i].price == undefined){
            checkItems = false;
        }

        if(orderInfo.items[i].quantity == undefined){
            checkItems = false;
        }

        if(!checkItems)
        {
            throw Error('Malformed item');
        }
    }

    if( position < 0 || position > orderInfo.items.length - 1){
        throw Error('Invalid position');
    }

    
    orderInfo.total = orderInfo.total - (orderInfo.items[position].price * orderInfo.items[position].quantity);

    orderInfo.items.splice(position, 1);

    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;