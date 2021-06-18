import { Link, useHistory, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavSearchBar from "./Search";
import useQuery from "../utils";
import { faList, faTable } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const loc = useLocation();
	let query = useQuery();
	const history = useHistory();

	const [mobileOpen, setMobileOpen] = useState(false);
	const [currentPath, setPath] = useState(loc.pathname);

	useEffect(() => {
		if (loc.pathname !== currentPath) {
			setPath(loc.pathname);
			setMobileOpen(false);
		}
	}, [loc, currentPath]);

	return (
		<nav
			className={`z-30 w-full px-2 py-4 bg-white sm:px-4 ${
				mobileOpen ? "border-b-2" : ""
			}`}
		>
			<div className="container md:px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<div className="flex items-center not-selectable">
						{/* <HeaderLogo /> */}
						<img
							src="https://user-images.githubusercontent.com/47064842/122340134-e518d100-cf0f-11eb-8526-3c185f28e119.png"
							alt="logo"
							className="inline w-9 h-9 mr-4"
						/>
						<Link
							className="text-2xl font-extrabold congress text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 inline"
							to="/"
						>
							College Compendium
						</Link>
					</div>
					<div className="flex md:hidden">
						<button
							type="button"
							onClick={() => setMobileOpen(!mobileOpen)}
							className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-500 ease-in-out transform rounded hover:scale-105"
							aria-label="toggle menu"
						>
							<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								></path>
							</svg>
						</button>
					</div>
				</div>

				<div
					className={`items-center mt-4 md:mt-0 ${
						mobileOpen ? "" : "hidden md:flex"
					}`}
				>
					<div className="flex flex-col md:flex-row md:mx-6 items-center">
						<Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to="/"
						>
							Home
							<span
								className={
									loc.pathname === "/"
										? "absolute bottom-0 left-0 w-full h-1 -mb-2 bg-fuchsia-300 rounded-full"
										: "hidden"
								}
							/>
						</Link>

						<Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to={`/explore?${
								query.get("table") === "true" ? `&table=true` : ""
							}`}
						>
							Explore
							<span
								className={
									loc.pathname === "/explore"
										? "absolute bottom-0 left-0 w-full h-1 -mb-2 bg-fuchsia-300 rounded-full"
										: "hidden"
								}
							/>
						</Link>
						<Link
							className="my-1 text-md font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 dark:hover:text-fuchsia-400  md:mx-4 md:my-0 relative"
							to="/contribute"
						>
							Contribute
							<span
								className={
									loc.pathname === "/contribute"
										? "absolute bottom-0 left-0 w-full h-1 -mb-2 bg-fuchsia-300 rounded-full"
										: "hidden"
								}
							/>
						</Link>
						<NavSearchBar
							classN={loc.pathname === "/explore" ? "invisible w-0" : ""}
						/>
						{loc.pathname === "/explore" || loc.pathname === "/search" ? (
							<button
								className="ml-6 focus:outline-none focus:border-0 hover:text-fuchsia-500 hidden sm:flex"
								title="Toggle Table/Grid View"
								onClick={() => {
									if (query.get("table") === "true")
										history.push(`?${query}&table=false`);
									else history.push(`?${query}&table=true`);
								}}
							>
								<FontAwesomeIcon
									icon={query.get("table") === "true" ? faList : faTable}
									className="text-gray-600"
									size="lg"
								/>
							</button>
						) : null}

						{/* <a
							className="my-1 text-lg font-extrabold congress text-fuchsia-400 hover:text-fuchsia-500 md:mx-6 md:my-0 inline sm:hidden lg:inline"
							href="https://twitter.com/DanielBfuchsia-500"
						>
							<FontAwesomeIcon icon={faTwitter} className="mr-1" />
							@YakClasses
						</a> */}
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;

const HeaderLogo = () => {
	return (
		<svg
			version="1.2"
			baseProfile="tiny-ps"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width="512"
			height="512"
			className="inline w-9 h-9 mr-4"
		>
			<title>folders</title>
			<defs>
				<image
					width="512"
					height="462"
					id="img1"
					href="data:image/png;base64,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"
				/>
			</defs>

			<use id="Background" href="#img1" x="0" y="25" />
		</svg>
	);
};
