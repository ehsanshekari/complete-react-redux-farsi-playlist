import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000',
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      const token = state.auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAnimes: builder.query({
      query: () => '/animes',
      providesTags: ['anime']
    }),
    getAnime: builder.query({
      query: (id) => `/animes/${id}`,
      providesTags: ['anime']
    }),
    createAnime: builder.mutation({
      query: (newAnime) => ({
        url: '/animes',
        method: 'POST',
        body: newAnime,
      }),
      invalidatesTags: ['anime']
    }),
    updateAnime: builder.mutation({
      query: ({ id, ...updatedAnime }) => ({
        url: `/animes/${id}`,
        method: 'PUT',
        body: updatedAnime,
      }),
      invalidatesTags: ['anime']
    }),
    deleteAnime: builder.mutation({
      query: (id) => ({
        url: `/animes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['anime']
    }),
  }),
});

export const {
  useGetAnimesQuery,
  useGetAnimeQuery,
  useCreateAnimeMutation,
  useUpdateAnimeMutation,
  useDeleteAnimeMutation,
} = animeApi;
export default animeApi;
