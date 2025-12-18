import { Baby, Box, Link, Palette, Puzzle } from "lucide-react";

const Navbar = () => {
	const isDark = true;

	const sections = [
		{ id: "basic", label: "Basic Props", icon: <Box /> },
		{ id: "ref", label: "Ref Props", icon: <Link /> },
		{ id: "children", label: "Children Props", icon: <Baby /> },
		{ id: "complex", label: "Complex Props", icon: <Puzzle /> },
		{ id: "theme", label: "Theme Props", icon: <Palette /> },
	];

	return (
		<nav
			className={`sticky top-0 z-50 shadow-md transition-colors ${
				isDark ? "bg-zinc-900" : "bg-white"
			}`}
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex flex-wrap gap-2 justify-center">
					{sections.map(({ id, label, icon }) => (
						<button
							key={id}
							className={`flex mt-2 px-4 py-2 rounded-lg font-medium bg-blue-950 border-2 border-blue-700 text-zinc-400 gap-1 items-center justify-center hover:border-sky-500 hover:text-zinc-50 hover:bg-sky-800 cursor-pointer`}
						>
							{icon} {label}
						</button>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
