import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData , Meta} from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getInventoriListItems } from "~/models/inventori.server";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const inventoriListItems = await getInventoriListItems({ userId });
  return json({ inventoriListItems });
}

export default function InventorisPage() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  return (
    <div className="container">
    <div className="row">
	
      <header className="col-md-12 p-3 p-md-5 text-center">
        <h1><strong>
          <Link to=".">Shop Inventori</Link>
        </strong></h1>
        <p>Welcome {user.email}</p>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="btn btn-outline-dark float-end"
          >
            Logout
          </button>
		  
	  <Link to="new" className="btn btn-dark float-start">
            + New Product
          </Link>
        </Form>
      </header>

      <main className="col-md-12 p-3">
		  
        <div className="row">
		
		<div className="col-md-4 p-3 p-md-5 text-start">
		<h3><strong>Product List</strong></h3>
          {data.inventoriListItems.length === 0 ? (
            <p className="p-3 p-md-5">No inventoris yet</p>
          ) : (
            <ol>
              {data.inventoriListItems.map((inventori) => (
                <li key={inventori.id}>
                  <NavLink to={inventori.id} >
                    {inventori.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="col-md-8 p-3">
          <Outlet />
        </div>
		
        </div>
      </main>
    </div>
    </div>
  );
}
