import { api } from "./api";
// import type { Follows } from "../types";

export const followApi = api.injectEndpoints({
  endpoints: (builder) => ({
    followUser: builder.mutation<void, { followingId: string }>({
      query: (body) => ({
        url: '/follow',
        method: 'POST',
        body
      })
    }),
    // unfollowUser: builder.mutation<void, string>({
    unfollowUser: builder.mutation<void, { followingId: string }>({
      query: (body) => ({
        // url: '/unfollow/${userId}',
        url: '/unfollow',
        method: 'DELETE',
        body // на бекенді тут приходить в body а не через req.params
      })
    }),
  })
});

export const {
  useFollowUserMutation,
  useUnfollowUserMutation
} = followApi;

export const {
  endpoints: { followUser, unfollowUser }
} = followApi;