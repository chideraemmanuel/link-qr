import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const QRCodeApi = createApi({
  reducerPath: "QRCodeApi",
  tagTypes: ["create-qr"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.qrserver.com/v1",
  }),
  endpoints: (builder) => ({
    createQrCode: builder.query({
      query: ({ url, size }) => ({
        url: `/create-qr-code/?data=${url}&size=${size}x${size}`,
        method: "GET",
      }),
    }),
  }),
});

// console.log(QRCodeApi);

// export const { useCreateQrCodeQuery } = QRCodeApi;
