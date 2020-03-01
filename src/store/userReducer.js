const initalState = {
    isLogin: false,
    userInfo: {}
};

function userReducer(state = { ...initalState }, action) {
    switch (action.type) {
        case "loginSuccess":
            return {
                isLogin: true,
                userInfo: action.payload
            };

        default:
            return { ...state };
    }
}

export default userReducer;
