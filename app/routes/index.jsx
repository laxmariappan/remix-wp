import { json } from "@remix-run/node";
import Header from "../components/header";
import { useLoaderData, Link } from "@remix-run/react";


export let loader = async () => {

  
  
  const result = await fetch('https://wordpress.org/news/wp-json/wp/v2/posts')
  const posts =  await result.json()

return posts;
  
};

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "Remix Starter - WordPress Demo",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();

  return (
    <div className="remix__page ">
        
       
       
       
    </div>
  );
}
