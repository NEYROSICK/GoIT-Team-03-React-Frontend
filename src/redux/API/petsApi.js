import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-team-03-node.onrender.com/api/pets',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMeAndPets: builder.query({
      query: () => '/',
      providesTags: ['Pets'],
    }),
    addPet: builder.mutation({
      query: (body) => ({
        url: `/add`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Pets'],
    }),
    deletePet: builder.mutation({
      query: (PetId) => ({
        url: `/delete/${PetId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pets'],
    }),
  }),
});
export const {
  useGetMeAndPetsQuery,
  useAddPetMutation,
  useDeletePetMutation,
} = petsApi;
