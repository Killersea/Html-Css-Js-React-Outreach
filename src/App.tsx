import HtmlPage from "./pages/HtmlPage";
import CssPage from "./pages/CssPage";
import { useState } from "react";

export default function App() {
	const [page, setPage] = useState("html");

	return page === "html" ? (
		<HtmlPage setPage={setPage} />
	) : page === "css" ? (
		<CssPage setPage={setPage} />
	) : (
		<p>Page not found</p>
	);
}
