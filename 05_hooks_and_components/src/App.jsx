import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

import { Box, Baby, Link, Puzzle, Palette } from "lucide-react";

function Navigation() {
	const isDark = true;

	const sections = [
		{ id: "basic", label: "Basic Props", icon: <Box /> },
		{ id: "ref", label: "Ref Props", icon: <Link /> },
		{ id: "children", label: "Children Props", icon: <Baby /> },
		{ id: "complex", label: "Complex Props", icon: <Puzzle /> },
		{ id: "themeToggler", label: "Theme Toggler", icon: <Palette /> },
	];

	return (
		<nav className={`sticky top-0 z-50 shadow-md`}>
			<div className="container mx-auto px-4 py-4">
				<div className="flex flex-wrap gap-2 justify-center">
					{sections.map(({ id, label, icon }) => (
						<button
							key={id}
							className="flex px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mt-2 mr-2"
						>
							<span>{icon}</span>&nbsp;
							{label}
						</button>
					))}
				</div>
			</div>
		</nav>
	);
}

function AppContent() {
	return (
		<div className={`min-h-screen bg-gray-800`}>
			<Navigation />
			<h1 className="text-3xl text-white font-bold underline">
				Hello World
			</h1>
		</div>
	);
}

function App() {
	return <AppContent />;
}

export default App;
