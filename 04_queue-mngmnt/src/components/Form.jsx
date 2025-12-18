import { UserRoundPlus } from "lucide-react";
import { useState } from "react";

const services = ["Select a Service", "Consultation", "Payment", "Support"];

const Form = ({ onAdd }) => {
	const [name, setName] = useState("");
	const [service, setService] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// do some validations
		if (!name || !service || service === "Select a Service") return;

		onAdd({ name, service });

		// reset the form
		setName("");
		setService("");
	};

	return (
		<div className="flex flex-col left-0 bg-zinc-600 p-4 border-2 border-zinc-400 rounded-sm">
			<h1 className="text-sky-500 text-4xl text-center font-bold">
				Queue Form
			</h1>
			<form className="flex flex-col text-xl text-zinc-50">
				{/* Name */}
				<label htmlFor="name" className="mt-8 mb-2">
					Customer Name
				</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter name..."
					className="p-4 border-2 border-zinc-700 bg-zinc-800 mb-4"
				/>

				{/* Select Category of Service */}
				<label htmlFor="service" className="mt-2 mb-2">
					Select Category
				</label>
				<select
					name="service"
					value={service}
					onChange={(e) => setService(e.target.value)}
					id=""
					className="p-4 border-2 border-zinc-700 bg-zinc-800"
				>
					{services.map((service) => (
						<option key={service} value={service}>
							{service}
						</option>
					))}
				</select>

				<button
					type="submit"
					onClick={handleSubmit}
					className="flex p-4 w-full bg-sky-950 border-2 border-sky-700 mt-10 gap-5 items-center justify-center hover:border-sky-500 hover:text-zinc-50 text-zinc-300 hover:font-semibold cursor-pointer"
				>
					<UserRoundPlus />
					Add to Queue
				</button>
			</form>
		</div>
	);
};

export default Form;
