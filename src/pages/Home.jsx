import React, { useRef, useState } from "react";
import {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from "../redux/api/blog.api";

const Home = () => {
  const { data, isLoading } = useGetBlogsQuery(); // return {}
  const [createBlog, { isLoading: isCreateLoading, isSuccess, isError }] =
    useCreateBlogMutation(); // return [func, {}]
  const [deleteBlog] = useDeleteBlogMutation(); // return [func, {}]
  const [updateBlog, { error }] = useUpdateBlogMutation();
  const [edit, setEdit] = useState(null);

  const title = useRef(null);
  const desc = useRef(null);
  const auther = useRef(null);
  const type = useRef(null);
  const soldCount = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let blog = {
      title: title.current.value,
      desc: desc.current.value,
      auther: auther.current.value,
      type: type.current.value,
      soldCount: soldCount.current.value,
    };
    if (edit) {
      updateBlog({ id: edit.id, body: blog })
        .unwrap()
        .then(() => {
          [title, desc, auther, type, soldCount].forEach((item) => {
            item.current.value = "";
          });
          setEdit(null);
        });
    } else {
      createBlog(blog)
        .unwrap()
        .then(() => {
          title.current.value = "";
          desc.current.value = "";
          auther.current.value = "";
          type.current.value = "";
          soldCount.current.value = "";
        });
    }
  };
  const handleDeleteBlog = (id) => {
    deleteBlog(id);
  };
  const handleEdit = (blog) => {
    setEdit(blog);
    title.current.value = blog.title;
    desc.current.value = blog.desc;
    auther.current.value = blog.auther;
    type.current.value = blog.type;
    soldCount.current.value = blog.soldCount;
  };
  return (
    <div>
      <div className="container mx-auto mb-6 mt-7">
        <form onSubmit={handleSubmit} className="flex gap-3" action="">
          <input
            required
            ref={title}
            className="border pl-2 outline-indigo-900"
            type="text"
            placeholder="Marka"
          />
          <input
            required
            ref={desc}
            className="border pl-2 outline-indigo-900"
            type="text"
            placeholder="Marka nomi"
          />
          <input
            required
            ref={auther}
            className="border pl-2 outline-indigo-900"
            type="text"
            placeholder="Yil"
          />
          <input
            required
            ref={type}
            className="border pl-2 outline-indigo-900"
            type="text"
            placeholder="Bosib otilgan yo'l"
          />
          <input
            required
            ref={soldCount}
            className="border pl-2 outline-indigo-900"
            type="text"
            placeholder="Holati"
          />
          <button
            disabled={isCreateLoading}
            type="submit"
            className="bg-blue-500 px-4 text-white cursor-pointer disabled:cursor-default disabled:opacity-50 p-2 rounded-[3px] active:bg-blue-300"
          >
            {isCreateLoading ? "Loading" : edit ? "Save" : "Create"}
          </button>
        </form>
      </div>
      {isLoading && <div className="text-center text-3xl">Loading...</div>}
      <div className="container mx-auto grid grid-cols-5 gap-4 min-h-screen items-start content-start">
        {data?.map((blog) => (
          <div className="shadow p-4 rounded" key={blog.id}>
            <h3 className="text-xl font-bold pb-3 mb-3 border-b border-gray-200">
              Marka: {blog.title}
            </h3>
            <p className="pb-1 text-gray-600"> Marka nomi: {blog.desc}</p>
            <h2 className="pb-1 text-gray-600"> Yil: {blog.type}</h2>
            <h2 className="pb-1 text-gray-600">
              {" "}
              Bosib o'tilgan yo'l: {blog.auther}
            </h2>
            <h2 className="pb-1 text-gray-600"> Holati: {blog.soldCount}</h2>
            <button
              onClick={() => handleDeleteBlog(blog.id)}
              className="bg-red-500 text-white text-sm px-3 cursor-pointer p-2.5 rounded-2xl mr-1.5 mt-2"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(blog)}
              className="bg-green-400 p-2 rounded-2xl text-stone-100 text-sm px-3 cursor-pointer"
            >
              edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
