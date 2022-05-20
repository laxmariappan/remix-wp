import { useActionData } from "@remix-run/react";

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  return { data };
};

export default function Comments() {
  const actionData = useActionData();
  const comment = actionData?.data;
  return (
    <>
      <section className="p-6 min-h-screen">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <h2>Submitted Comment</h2>
          <ul>
            <li>{comment?.name}</li>
            <li>{comment?.email}</li>
            <li>{comment?.content}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
