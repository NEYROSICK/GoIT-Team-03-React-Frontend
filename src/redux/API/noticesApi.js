import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://goit-team-03-node.onrender.com/api/notices`,
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
      query: ({ category, params }) => {
        const { page = 1, limit = 12, ...otherParams } = params;
        return {
          url: `/${category}`,
          params: {
            page,
            limit,
            ...otherParams,
          },
        };
      },
      providesTags: ['Notices'],
      refetchOnMountOrArgChange: true,
    }),
    getMyFavorite: builder.query({
      query: ({ params }) => {
        const { page = 1, limit = 12, ...otherParams } = params;
        return {
          url: `/myFavorite`,
          params: {
            page,
            limit,
            ...otherParams,
          },
        };
      },
      providesTags: ['Notices'],
      refetchOnMountOrArgChange: true,
    }),
    getOneNotice: builder.query({
      query: (id) => ({
        url: `/getOne/${id}`,
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
  useGetMyFavoriteQuery,
  useGetOneNoticeQuery,
  useGetMyNoticesQuery,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApi;
