import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const UserApi = createApi({
    reducerPath: 'UserApi',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://65031eeda0f2c1f3faeb7a07.mockapi.io/contacts/user' }),
    endpoints: (build) => ({
        getUser: build.query({
            query: () => '/',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'User', id })),
                        { type: 'User', id: 'LIST' },
                    ]
                    : [{ type: 'User', id: 'LIST' }],
        }),
        updateUser: build.mutation({
            query: ({ id = 50, ...patch }) => ({
                url: `/${id}`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
        }),
    })
})

export const { useGetUserQuery,useUpdateUserMutation } = UserApi