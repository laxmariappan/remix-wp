import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export let loader = async () => {

  
  
    const result = await fetch('https://wordpress.org/news/wp-json/wp/v2/posts')
    const posts =  await result.json()
  
  return posts;
    
  };
  
  // https://remix.run/api/conventions#meta
  export let meta = () => {
    return {title: "Remix Starter",description: "Welcome to remix!"
    };
  };

export default function PostsIndex() {
    let data = useLoaderData();
  return (
    <>
 
<section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
 <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">        
  {data.map(function(item,index){
  return(
  <div key={index} className="p-6 bg-indigo-500">  
    <div className="  mb-5 text-white ">
      <h3 className="text-xl mb-3 font-bold"><Link to={item.slug}>{item.title.rendered}</Link></h3>
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: data[0].excerpt.rendered }} />
      <br/>
      <Link to={item.slug} className="bg-gray-900 text-white p-4 my-5">Read more</Link>
    </div>
  </div>)
    }
    )}
    </div> 
    </div>   
    </section> 
    </>
  );
}
