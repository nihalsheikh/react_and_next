import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRoundPlus } from "lucide-react";
import { useState } from "react";

const categories = ["Select a category", "Consultation", "Payment", "Support"];

const Form = ({ onAdd }) => {
	const [name, setName] = useState("");
	const [category, setCategory] = useState();

	const handleSumbit = (event) => {
		event.preventDefault();

		if (!name.trim() || !category.trim()) return;

		onAdd({ name, category });

		// after value is submitted, make form empty
		setName("");
		setCategory("");
	};

	return (
		<div className="p-8 bg-zinc-800 rounded-xl">
			<form onSubmit={handleSumbit} className="flex flex-col">
				<h1 className="mb-10 text-4xl font-bold text-sky-500">
					Add to Queue
				</h1>
				{/* Customer Name */}
				<label htmlFor="customer" className="text-zinc-100 mb-2">
					Customer Name
				</label>
				<input
					id="customer"
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Enter Customer Name"
					className="bg-zinc-700 border-2 border-zinc-500 text-xl text-zinc-50 font-semibold rounded-md p-2 mb-8"
				/>

				{/* Select Category */}
				<label htmlFor="category" className="text-zinc-100 mb-2">
					Category
				</label>
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className="bg-zinc-700 border-2 border-zinc-500 text-xl text-zinc-400 font-semibold rounded-md p-2 mb-2"
				>
					{categories.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>

				<button
					type="submit"
					className="justify-center items-center mt-10 p-4 bg-sky-950 border-2 border-sky-700 w-full text-xl text-zinc-50 cursor-pointer rounded-xl  hover:bg-sky-500 hover:border-sky-800 font-bold flex gap-4"
				>
					<UserRoundPlus /> Add Customer
				</button>
			</form>
		</div>
	);
};

export default Form;
