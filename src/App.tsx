import Html from "./pages/html";
import Css from "./pages/css";
import { useState } from "react";

export default function App() {
	const [page, setPage] = useState("html");

	return page === "html" ? (
		<Html setPage={setPage} />
	) : page === "css" ? (
		<Css setPage={setPage} />
	) : (
		<p>Page not found</p>
	);
}
