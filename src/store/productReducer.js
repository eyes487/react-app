const initalState = {
    productList: [],
    cartList: []
};

function productReducer(state = { ...initalState }, action) {

    switch (action.type) {
        case "save":
            return {
                ...state,...action.payload
            };
        default:
            return { ...state };
    }
}

export default productReducer;
