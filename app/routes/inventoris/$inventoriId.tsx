import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { deleteInventori, getInventori} from "~/models/inventori.server";
import { requireUserId } from "~/session.server";

export async function loader({ request, params }: LoaderArgs) {
  const userId = await requireUserId(request);
  invariant(params.inventoriId, "inventoriId not found");

  const inventori = await getInventori({ userId, id: params.inventoriId });
  if (!inventori) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ inventori });
}

export async function action({ request, params }: ActionArgs) {
  const userId = await requireUserId(request);
  invariant(params.inventoriId, "inventoriId not found");
  await deleteInventori({ userId, id: params.inventoriId });

  return redirect("/inventoris");
}

export default function InventoriDetailsPage() {
  const data = useLoaderData<typeof loader>();

  return (
	     <div>
      <h3><strong>{data.inventori.title}</strong></h3>      
      <p>{data.inventori.description}</p>
	  <img src={data.inventori.cover} className="img-fluid rounded" width="100%" height="100%" alt={data.inventori.title}/>
      <p>Link : {data.inventori.link}</p>
      <p>Video Embed : {data.inventori.video}</p>
      <p>{data.inventori.markdown}</p>
      <hr className="my-4" />
      <Form method="post">
        <button type="submit" className="btn btn-dark">
          Delete
        </button>
      </Form>
	  
	  </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Inventori not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
