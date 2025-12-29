import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

import { Box, Baby, Link, Puzzle, Palette } from "lucide-react";

function Navigation() {
	const sections = [
		{ id: "basic", label: "Basic Props", icon: <Box /> },
		{ id: "ref", label: "Ref Props", icon: <Link /> },
		{ id: "children", label: "Children Props", icon: <Baby /> },
		{ id: "complex", label: "Complex Props", icon: <Puzzle /> },
		{ id: "themeToggler", label: "Theme Toggler", icon: <Palette /> },
	];

	return (
		<nav className={`sticky top-0 z-50 shadow-md transition-colors`}>
			<div className="container mx-auto px-4 py-4">
				<div className="flex flex-wrap gap-2 justify-center">
					{sections.map(({ id, label, icon }) => (
						<button
							key={id}
							className="flex px-4 py-2 rounded-lg font-medium transition-all bg-blue-950 text-zinc-300 cursor-pointer hover:bg-blue-900 border-2 hover:border-blue-700 border-blue-800 hover:text-white mt-2 mr-2"
						>
							<span className="mr-2">{icon}</span>&nbsp;
							{label}
						</button>
					))}
				</div>
			</div>
		</nav>
	);
}

function AppContent() {
	const isDark = true;
	return (
		<div className={`min-h-screen bg-gray-900`}>
			<Navigation />

			<div className="container mx-auto px-4 py-8">
				<header
					className={`text-center mb-12 transition-colors ${
						isDark ? "text-zinc-100" : "text-gray-900"
					}`}
				>
					<h1 className="text-5xl font-bold mb-4">
						React Props Explained
					</h1>
					<p
						className={`text-xl ${
							isDark ? "text-gray-300" : "text-gray-600"
						}`}
					>
						A comprehensive guide to understanding props in React
					</p>

					<div
						className={`mt-4 inline-block px-6 py-2 rounded-full`}
					>
						<p className="font-bold">Built with Bun + Vite + React + Tailwind CSS</p>
					</div>
				</header>
			</div>
		</div>
	);
}

function App() {
	return <AppContent />;
}

export default App;
