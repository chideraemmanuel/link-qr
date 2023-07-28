import { configureStore } from "@reduxjs/toolkit";
import QRGeneratorReducer, {
  QrGeneratorStateTypes,
} from "./slices/QRGeneratorSlice";
import { QRCodeApi } from "./features/QRCodeApi";

export interface StoreTypes {
  qrGenerator: QrGeneratorStateTypes;
}

export const store = configureStore({
  reducer: {
    qrGenerator: QRGeneratorReducer,
    [QRCodeApi.reducerPath]: QRCodeApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(QRCodeApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(QRCodeApi.middleware),
});
