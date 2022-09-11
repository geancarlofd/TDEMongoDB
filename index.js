import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect("mongodb+srv://tdemongo:tdemongo@cluster0.qaksd9p.mongodb.net/TDE1MongoDB?retryWrites=true&w=majority");

const article = Blog.create({
    title:"TDE 1",
    slug:"First TDE",
    published: true,
    content: "Aooooba",
    tags:['tde1','tde01']
});
 
console.log(article);