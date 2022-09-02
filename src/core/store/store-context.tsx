import React from 'react';
import { initialStoreState, IProduct, StoreStateType } from './store-types';
import { StoreActions } from './store-actions';

export type StoreContextType = {
    products: IProduct[],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
};


const StoreContext = React.createContext<StoreContextType>({
    products: [],
    setProducts: () => undefined
});




export default StoreContext;