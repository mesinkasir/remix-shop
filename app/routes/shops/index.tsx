import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
} from "@remix-run/react";

import { getPosts } from "~/models/post.server";

type LoaderData = {
  inventoris: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async () => {
  return json({ inventoris: await getPosts() });
};

export default function ShopIndex() {
  const { inventoris } = useLoaderData() as LoaderData;
  return (
    <div className="row">
      <div className="col-md-12 p-3">
          <div className="row">
            {inventoris.map((inventori) => (
			<div className="col-md-4 p-3 p-md-5"  key={inventori.id}>
              <div className="p-3">
                <Link
                  to={inventori.id}
                  className="text-dark"
                >
				<img className="img-fluid rounded" loading="lazy" width="100%" height="100%" alt={inventori.title} src={inventori.cover}/>
				<div className="p-3">
                  <h3><strong>{inventori.title}</strong></h3>
				  <p>{inventori.description}</p>
				</div>
                </Link>
				</div>
              </div>
            ))}
       </div>
      </div>
	   <main>
          <Outlet />
        </main>
    </div>
  );
}