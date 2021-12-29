import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <Link to="/my-test-route">
      Reproduce bug
    </Link>
  );
}
