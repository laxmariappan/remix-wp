import { Form, useActionData } from "@remix-run/react";

export default function Sign() {
  const actionData = useActionData();
  return (
    <Form
      method="post"
    action="/posts/comments">
        <div className="grid grid-cols-1 gap-6 w-1/2">
         <label className="block">
          Name: <input name="name" type="text" required className="form-input px-4 py-3 mt-1 block w-full"/>
        </label>
 
         <label className="block">
          Email: <input name="email" type="email" required className="form-input px-4 py-3 mt-1 block w-full"/>
        </label>
         <label className="block">
          Comment: <textarea name="content" className="form-textarea px-4 py-3 mt-1 block w-full"/>
        </label>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-3 mt-1 block w-full">Add Comment</button>

      </div>

      

    </Form>
  );
}