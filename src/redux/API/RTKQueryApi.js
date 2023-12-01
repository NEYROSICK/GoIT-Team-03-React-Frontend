import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const RTKQueryApi = createApi({
  reducerPath: 'RTKQueryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://goit-team-03-node.onrender.com/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Notices', 'Pets', 'User', 'News'],
  endpoints: (builder) => ({
    //! NOTICES
    getNotices: builder.query({
      query: ({ category, params }) => ({
        url: `/notices/${category}`,
        params,
      }),
      providesTags: ['Notices'],
    }),
    getMyFavorite: builder.query({
      query: ({ params }) => ({
        url: `/notices/myFavorite`,
        params,
      }),
      providesTags: ['Notices'],
    }),
    getMyNotices: builder.query({
      query: ({ params }) => ({
        url: `/notices/myNotices`,
        params,
      }),
      providesTags: ['Notices'],
    }),
    getOneNotice: builder.query({
      query: (id) => ({
        url: `/notices/getOne/${id}`,
      }),
    }),
    updateFavorite: builder.mutation({
      query: (id) => ({
        url: `/notices/favorite/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Notices', 'User'],
    }),
    addNotice: builder.mutation({
      query: (body) => ({
        url: `/notices/addNotice`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notices'],
    }),
    deleteNotice: builder.mutation({
      query: (id) => ({
        url: `/notices/deleteNotice/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
    //! NOTICES
    //! PETS
    getMeAndPets: builder.query({
      query: () => '/pets',
      providesTags: ['Pets', 'User'],
    }),
    addPet: builder.mutation({
      query: (body) => ({
        url: `/pets/add`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Pets'],
    }),
    deletePet: builder.mutation({
      query: (PetId) => ({
        url: `/pets/delete/${PetId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pets'],
    }),
    //! PETS
    //! USER
    updateUser: builder.mutation({
      query: (patch) => ({
        url: `/users/updateUser`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Pets', 'User'],
    }),
    //! USER
    //! NEWS
    getNews: builder.query({
      query: ({ params }) => ({
        url: `/news`,
        params,
      }),
      providesTags: ['News'],
    }),
    //! NEWS
    //!FRIENDS
    getFriends: builder.query({
      query: () => ({
        url: `/friends`,
      }),
    }),
    //!LogOut
    LogOut: builder.mutation({
      query: (body) => ({
        url: `/auth/logout`,
        method: 'POST',
        body,
      }),
    }),
    //!
  }),
});
export const {
  useGetNoticesQuery,
  useGetMyFavoriteQuery,
  useGetOneNoticeQuery,
  useGetMyNoticesQuery,
  useGetMeAndPetsQuery,
  useGetNewsQuery,
  useGetFriendsQuery,
  useAddNoticeMutation,
  useAddPetMutation,
  useDeleteNoticeMutation,
  useDeletePetMutation,
  useUpdateFavoriteMutation,
  useUpdateUserMutation,
  useLogOutMutation,
} = RTKQueryApi;
