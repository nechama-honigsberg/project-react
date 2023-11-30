
const initialStore = {
    counter: 0,
    users: [{ id: 1, name: "Avi" }, { id: 2, name: "Beni" }],
    products: []
};
// action is an object with the following properties:
// 1. (mandatory): type (string) 
// 2. (payload): (optional)

function appReducer(store = initialStore, action) {
    switch (action.type) {
        case "PLUS":
            return { ...store, counter: store.counter + action.payload }
        case "MINUS":
            return { ...store, counter: store.counter - action.payload }
        case "RESET":
            return { ...store, counter: 0 }
        default:
            return store
    }
}

export default appReducer;




