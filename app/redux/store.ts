import { configureStore } from "@reduxjs/toolkit";
import QRGeneratorReducer, {
  QrGeneratorStateTypes,
} from "./slices/QRGeneratorSlice";

export interface StoreTypes {
  qrGenerator: QrGeneratorStateTypes;
}

export const store = configureStore({
  reducer: {
    qrGenerator: QRGeneratorReducer,
  },
});
