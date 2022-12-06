import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { createInventori } from "~/models/inventori.server";
import { requireUserId } from "~/session.server";

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const cover = formData.get("cover");
  const link = formData.get("link");
  const video = formData.get("video");
  const markdown = formData.get("markdown");

  if (typeof title !== "string" || title.length === 0) {
    return json(
      { errors: { title: "Title is required", markdown: null } },
      { status: 400 }
    );
  }

  if (typeof markdown !== "string" || markdown.length === 0) {
    return json(
      { errors: { title: null, markdown: "Content Text is required" } },
      { status: 400 }
    );
  }

  const inventori = await createInventori({ title, description, cover , link, video, markdown, userId });

  return redirect(`/inventoris/${inventori.id}`);
}

export default function NewInventoriPage() {
  const actionData = useActionData<typeof action>();
  const titleRef = React.useRef<HTMLInputElement>(null);
  const markdownRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.markdown) {
      markdownRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form method="post" className="row">
	  
	  
        <label className="mt-3 mb-1">
		<span>
		<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-h-square-fill bg-dark p-1 rounded text-white" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm9 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z"/>
</svg>  Title</span>
          <input
            ref={titleRef}
            name="title"
            className="form-control mb-1 mt-1"
            aria-invalid={actionData?.errors?.title ? true : undefined}
            aria-errormessage={
              actionData?.errors?.title ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.title && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.title}
          </div>
        )}
	  
        <label className="mt-3">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-link-45deg bg-dark p-1 rounded text-white" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg> Link </span>
          <input
            type="text"
            name="link"
            className="form-control mb-1 mt-1"
          />
        </label>
		
        <label className="mt-3">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-camera-fill bg-dark p-1 rounded text-white" viewBox="0 0 16 16">
  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
</svg> Cover </span>
          <input
            type="text"
            name="cover"
            className="form-control mb-1 mt-1"
          />
        </label>
		
        <label className="mt-3">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-fonts bg-dark p-1 rounded text-white" viewBox="0 0 16 16">
  <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"/>
</svg> Description </span>
          <input
            name="description"
            type="text"
            className="form-control mb-1 mt-1"
          />
        </label>
	  
        <label className="mt-3">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-video2 bg-dark p-1 rounded text-white" viewBox="0 0 16 16">
  <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
  <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z"/>
</svg> Video </span>
          <input
            name="video"
            type="text"
            className="form-control mb-1 mt-1"
          />
        </label>
	  
	  

        <label className="mt-3">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-chat-left-text-fill bg-dark p-1 rounded text-white" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
</svg> Content </span>
          <textarea
            ref={markdownRef}
            name="markdown"
            rows={5}
            className="form-control mb-1 mt-1"
           />
        </label>
       

      <div className="text-right">
        <button
          type="submit"
          className="btn btn-dark btn-lg mt-3"
        >
          Save Product
        </button>
      </div>
    </Form>
  );
}
