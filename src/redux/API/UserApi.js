import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UserApi = createApi({
  reducerPath: 'UserApi',
  tagTypes: ['User'],
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
  endpoints: (build) => ({
    getUser: build.query({
      query: () => 'pets',
    }),
    updateUser: build.mutation({
      query: (patch) => ({
        url: `/users/updateUser`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['User'],
    }),
    updateFavorite: build.mutation({
      query: (id) => ({
        url: `/users/favorite/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Notices', 'User'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateFavoriteMutation,
} = UserApi;
