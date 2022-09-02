
export enum ActionType {
    SET_PRODUCTS
}

export type SET_PRODUCTS = {
    type: ActionType.SET_PRODUCTS,
    payload: []
}

export type StoreActions = SET_PRODUCTS