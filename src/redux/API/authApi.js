import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-team-03-node.onrender.com/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    login: builder.mutation({
      query: dependencies => ({
        url: '/auth/login',
        method: 'POST',
        body: dependencies,
      }),
    }),
    register: builder.mutation({
      query: dependencies => ({
        url: '/auth/register',
        method: 'POST',
        body: dependencies,
      }),
    }),
    getUser: builder.query({
      query: () => '/users/current',
    }),
  }),
});

export const { useGetUserQuery, useLoginMutation, useRegisterMutation } =
  authApi;