import { z } from "zod";

const Post = z.object({
  title: z.string().min(5).max(30),
  postText: z.string().min(30).max(500),
});

const NewPost = () => {
  const formData = {};

  return (
    <div className="my-auto flex justify-center">
      <form
        className="flex flex-col gap-8 w-[90%] md:w-[65%]"
        onSubmit={() => {}}
      >
        <div>
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="How to make Honey - a practical guide."
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="block">
            Your post lives here
          </label>
          <textarea
            name="postText"
            id="postText"
            cols={30}
            rows={10}
            className="w-full"
          ></textarea>
        </div>
        <button>Post</button>
      </form>
    </div>
  );
};
export default NewPost;
