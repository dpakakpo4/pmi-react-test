import { ActionType, StoreActions } from "./store-actions";
import { StoreStateType } from "./store-types";

const StoreReducer = (state: StoreStateType, action: StoreActions): StoreStateType => {
    switch (action.type) {
        case ActionType.SET_PRODUCTS:
            return {
                ...state
            }
        default:
            break;
    }
    return state;
}

export default StoreReducer;