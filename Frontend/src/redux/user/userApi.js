import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
  }),
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
      }),
    }),
  }),
});

export const { useGetUserMutation } = userApi;
