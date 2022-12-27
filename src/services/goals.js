import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'goalsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:5000/api/goalTracker',
  }),
  endpoints: builder => ({
    getGoals: builder.query({
      query: id => `goalTracker/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
