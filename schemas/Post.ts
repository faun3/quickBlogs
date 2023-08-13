import { Post } from "@/app/posts/new/page";
import mongoose, { model, mongo, Schema } from "mongoose";

const postSchema = new Schema<Post>({
  title: {
    type: String,
    required: true,
  },
  postText: {
    type: String,
    required: true,
  },
});

const postModel = () => {
  // this ternary ensures that we don't re-create the post model if it already exists
  //
  // if we have some models, and one of the is the user -> use that user
  // if we don't have the user model yet, create it using the model method
  return mongoose.models && mongoose.models.User
    ? mongoose.models.User
    : model<Post>("Post", postSchema);
};

export default postModel;
