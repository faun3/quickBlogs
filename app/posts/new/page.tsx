"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Post = z.object({
  title: z.string().min(5).max(30),
  postText: z.string().min(30).max(500),
});

type Post = z.infer<typeof Post>;

const NewPost = () => {
  const formData = {};

  const { register, handleSubmit } = useForm<Post>({
    resolver: zodResolver(Post),
  });

  const submitData = (data: Post) => {
    console.log("valid", data);
  };

  return (
    <div className="my-auto flex justify-center">
      <form
        className="flex flex-col gap-8 w-[90%] md:w-[65%]"
        onSubmit={handleSubmit(submitData)}
      >
        <div>
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="How to make Honey - a practical guide."
            className="w-full"
            {...register("title")}
          />
        </div>
        <div>
          <label htmlFor="" className="block">
            Your post lives here
          </label>
          <textarea
            id="postText"
            cols={30}
            rows={10}
            className="w-full"
            {...register("postText")}
          ></textarea>
        </div>
        <button>Post</button>
      </form>
    </div>
  );
};
export default NewPost;
