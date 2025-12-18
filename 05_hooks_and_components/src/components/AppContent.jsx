import Navbar from "./Navbar";
import BasicProps from "./BasicProps";
import RefProps from "./RefProps";
import ChildrenProps from "./ChildrenProps";
import ComplexProps from "./ComplexProps";
import ThemeToggler from "./ThemeToggler";
import Footer from "./Footer";

const AppContent = () => {
	const isDark = true;

	return (
		<div className={`min-h-screen bg-zinc-900`}>
			<Navbar />
			<div className="container mx-auto px-4 py-8">
				<header
					className={`text-center mb-12 transition-colors ${
						isDark ? "text-zinc-50" : "text-zinc-900"
					}`}
				>
					<h1 className="text-5xl font-bold mb-4">
						React Props explained
					</h1>
					<p
						className={`text-xl ${
							isDark ? "text-zinc-300" : "text-zinc-700"
						}`}
					>
						A comprehensive guide to understanding props in React
					</p>
				</header>

				<div className="space-y-8 text-zinc-50">
					<div id="basic" className="scroll-mt-200">
						<BasicProps />
					</div>
					<div id="basic" className="scroll-mt-200">
						<RefProps />
					</div>
					<div id="basic" className="scroll-mt-200">
						<ChildrenProps />
					</div>
					<div id="basic" className="scroll-mt-200">
						<ComplexProps />
					</div>
					<div id="basic" className="scroll-mt-200">
						<ThemeToggler />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AppContent;
