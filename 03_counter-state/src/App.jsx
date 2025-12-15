import { useState } from "react";
import "./App.css";

const App = () => {
	const [count, setCount] = useState(0);
	const [countVal, setCountVal] = useState(0);

	const addCount = () => {
		setCount((prev) => prev + 1);
	};

	const subtractCount = () => {
		setCount((prev) => Math.max(prev - 1, 0));
	};

	const resetCount = () => {
		setCount((prev) => 0);
	};

	const handleChange = (e) => {
		setCount(e.target.value);
	};

	const setCountValue = (e) => {
		e.preventDefault();
	};

	return (
		<div className="flex flex-col">
			<div>
				<h1 className="font-bold text-6xl">
					First Project: Number Counter
				</h1>
			</div>

			<div className="flex justify-center">
				<h3 className="bg-blue-950 border-2 border-blue-800 hover:bg-blue-900 p-4 rounded-xl font-bold text-xl m-8">
					Count is {count}
				</h3>
			</div>

			<div>
				<button
					onClick={() => addCount()}
					className="bg-green-950 border-2 border-green-800 text-sm font-bold p-4 rounded-xl hover:bg-green-800 hover:border-green-950 cursor-pointer m-2"
				>
					Increase {"+"}
				</button>
				<button
					onClick={() => subtractCount()}
					className="bg-red-950 border-2 border-red-800 text-sm font-bold p-4 rounded-xl hover:bg-red-800 hover:border-red-950 cursor-pointer m-2"
				>
					Decrease {"-"}
				</button>
				<button
					onClick={() => resetCount()}
					className="bg-amber-500 border-2 border-amber-600 text-sm font-bold p-4 rounded-xl hover:bg-amber-300 hover:border-amber-400 hover:text-black cursor-pointer m-2"
				>
					Reset
				</button>
			</div>

			<div>
				<input
					id="count"
					value={countVal}
					type="text"
					placeholder="Enter a number..."
					onChange={(e) => setCountVal(Number(e.target.value))}
					className="border-2 border-gray-600 p-4 m-6 bg-zinc-700 rounded-xl"
				/>
				<button
					onClick={() => {
						setCount(Number(countVal));
						setCountVal(0);
					}}
					className="cursor-pointer p-4 border-2 bg-sky-950 border-sky-700 hover:bg-sky-800 hover:border-sky-600 rounded-xl"
				>
					Set Count to {countVal}
				</button>
			</div>
		</div>
	);
};

export default App;
