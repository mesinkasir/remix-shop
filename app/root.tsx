import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import tailwindStylesheetUrl from "./styles/bs.css";
import sharedStyles from '~/styles/css/bs.css';
import { getUser } from "./session.server";

import Header from '~/widget/Header';
import Contact from '~/widget/Contact';
import Footer from '~/widget/Footer';


export function links() {
  return [{ rel: 'stylesheet', href: sharedStyles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Modern Website Development",
  description: "Website development service for company profile, online shop, restaurant cafe, coffee shop, school , art work, art gallery , movie,limousine car, dj , podcast , and others",
  robots: "index,follow",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>	  
         <Header/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Contact/>
        <Footer/>
      </body>
    </html>
  );
}
