import { api } from "./api";
import type { Post } from "../types";

export const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<Post, { content: string }>({
      query: (postData) => ({
        url: '/posts',
        method: 'POST',
        body: postData
      })
    }),
    getAllPosts: builder.query<Post[], void>({
      query: () => ({
        url: '/posts',
        method: 'GET'
      })
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'GET'
      })
    }),
    deletePostById: builder.mutation<void, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE'
      })
    }),
  })
});

export const {
  useCreatePostMutation,
  useGetAllPostsQuery,
  useLazyGetAllPostsQuery,
  useGetPostByIdQuery,
  useLazyGetPostByIdQuery,
  useDeletePostByIdMutation
} = postApi;

export const {
  endpoints: { createPost, getAllPosts, getPostById, deletePostById }
} = postApi;