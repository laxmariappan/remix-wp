import { json } from "@remix-run/node";
import { useLoaderData, Link, Form } from "@remix-run/react";
import Sign from "../../components/comments-form";
export let loader = async ({ params }) => {

    const result = await fetch(`https://wordpress.org/news/wp-json/wp/v2/posts?slug=${params.slug}`)
    const posts =  await result.json()
  return posts;
    
  };
  
  // https://remix.run/api/conventions#meta
  export let meta = () => {
    return {
      title: "Remix Starter",
      description: "Welcome to remix!"
    };
  };

export default function PostsIndex() {
    let data = useLoaderData();
    const date = new Date(data[0].date);

  return (
    <>
    <section className="p-6">

    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <h2 className="text-3xl font-bold text-indigo-600">{data[0].title.rendered}</h2>
        <div className="py-4 my-4">
          {date.toLocaleDateString('us')}
        </div>
        <div dangerouslySetInnerHTML={{ __html: data[0].content.rendered }} />
    </div>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <Sign />
    <p className="float-none my-10">
          <Link to="../posts" className="bg-gray-900 text-white p-4 mt-10">Back to posts list</Link>
        </p>
    </div>
        </section>
    </>
  );
}
