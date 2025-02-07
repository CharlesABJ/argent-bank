import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
    prepareHeaders: (headers, { getState }) => {
      // prepareHeader
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.mutation({
      // mutation is necessary because we use POST and not GET, and swagger works with POST here
      query: () => ({
        url: `/user/profile`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetUserMutation } = userApi;
