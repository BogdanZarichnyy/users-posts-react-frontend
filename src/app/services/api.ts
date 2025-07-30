// import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"; // додаємо '.../react' щоб ts показав згенеровані хуки в userApi
import { BASE_URL } from "../../constans";
import type { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth.token || localStorage.getItem("token"); // достаємо токен з хедера

  //   if (token) {
  //     headers.set('authorization', `Bearer ${token}`);
  //   }

  //   return headers;
  // }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 }); // якщо буде 0, то повторний запит не буде здійснено

export const api = createApi({
  reducerPath: 'splitApi', // всі інші АРІ будуть в різних файлах і папках
  baseQuery: baseQueryWithRetry, // наш запит буде здійснюватися декілька разів у разі якщо перший запит відвалиться з 500 помилкою сервера
  refetchOnMountOrArgChange: true, // відключаємо кешування щоб запит був здійснений на сервер, а не витягувався з кешу, по замовчуванню кешування завжди увімкнено
  endpoints: () => ({})
});