import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
  endpoints: (builder) => ({
    getAnimes: builder.query({
      query: (term) => `/anime?limit=5&q=${term}`,
    }),
  }),
});

export const { useGetAnimesQuery } = animeApi;