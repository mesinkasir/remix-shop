import { Link } from "@remix-run/react";

export default function InventoriIndexPage() {
  return (
    <div className="p-3 p-md-5 text-center">
	<p>
      No product selected. Select a note on the left, or{" "}
      <Link to="new" className="btn btn-dark">
        create a new product
      </Link>
    </p>
	</div>
  );
}
