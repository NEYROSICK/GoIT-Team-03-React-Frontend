import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-team-03-node.onrender.com/api/notices',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNotices: builder.query({
      query: (params) => ({
        url: '/',
        params,
      }),
      providesTags: ['Notices'],
    }),
    getOneNotice: builder.query({
      query: (id, params) => ({
        url: `/getOne/${id}`,
        params,
      }),
    }),
    getMyNotices: builder.query({
      query: () => '/myNotices',
      providesTags: ['Notices'],
    }),
    addNotice: builder.mutation({
      query: (body) => ({
        url: `/addNotice`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notices'],
    }),
    deleteNotice: builder.mutation({
      query: (id) => ({
        url: `/deleteNotice/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});
export const {
  useGetNoticesQuery,
  useGetOneNoticeQuery,
  useGetMyNoticesQuery,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApi;
