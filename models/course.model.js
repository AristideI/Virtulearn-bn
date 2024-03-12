import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  coverImage: {
    type: String,
    required: true,
  },
  content: {
    type:Schema.Types.Array,
    ref: 'Content'
  },
  students:{
    type:Schema.Types.Array,
    ref: 'User'
  },
  
},{
    timestamps:true
});

export const Course = model('Course',courseSchema)