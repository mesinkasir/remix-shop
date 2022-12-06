import type { LoaderFunction , LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getInventori } from "~/models/inventori.server";
export async function loader({ request, params }: LoaderArgs) {
  invariant(params.inventoriId, "inventoriId not found");

  const inventori = await getInventori({ id: params.inventoriId });
  if (!inventori) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ inventori });
}

export async function action({ request, params }: ActionArgs) {
  invariant(params.inventoriId, "inventoriId not found");

  return redirect("/shops");
}

export const meta: MetaFunction = ({data}) => ({
  title: data.inventori.title,
  description: data.inventori.description,
});

export default function NoteDetailsPage() {
  const data = useLoaderData<typeof loader>();

  return (
  <div className="row">
  <div className="col-md-5 p-3 p-md-5">
<h1><strong><a href={data.inventori.id}>{data.inventori.title}</a></strong></h1>
<img src={data.inventori.cover} className="img-fluid rounded" width="100%" height="100%" alt={data.inventori.title}/>
<h2>{data.inventori.description}</h2>
</div>

  <div className="col-md-7 p-3 p-md-5">
<div className="ratio ratio-16x9">
<iframe src={data.inventori.video} title={data.inventori.title} className="shadow rounded">
</iframe>
</div>

<p className="p-3">{data.inventori.markdown}</p>
<p><a href={data.inventori.link} className="btn btn-dark btn-lg">Deploy Website Now</a></p>
</div>

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
    return <div>Note not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
