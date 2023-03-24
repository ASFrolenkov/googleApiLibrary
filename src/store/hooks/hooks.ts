import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { StoreDispatch, TRootReducer } from "../store";

export const useStoreDispatch = () => useDispatch<StoreDispatch>();

export const useStoreSelector: TypedUseSelectorHook<TRootReducer> = useSelector;