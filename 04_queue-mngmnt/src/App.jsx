import { useState } from "react";
import Form from "./components/Form";
import QueueList from "./components/QueueList";

const App = () => {
	const [queue, setQueue] = useState([]);

	// Take data from the Form and it to the array queue
	const addToQueueList = (customer) => {
		setQueue([
			...queue,
			{
				...customer,
				id: Date.now(),
				status: "waiting",
			},
		]);
	};

	const updateStatus = (id, newStatus) => {
		setQueue(
			queue.map((customer) =>
				customer.id === id
					? { ...customer, status: newStatus }
					: customer
			)
		);
	};

	const removeFromQueueList = (id) => {
		setQueue(queue.filter((customer) => customer.id !== id));
	};

	return (
		<div className="flex flex-col items-center justify-center max-w-7xl mx-auto bg-zinc-900 pb-4 h-screen">
			<header>
				<h1 className="text-4xl font-bold text-sky-500">
					Project: Queue Management Application
				</h1>
				<p className="text-xl text-zinc-500 text-center mt-4">
					Manage your customers efficiently
				</p>
			</header>

			<main className="mt-24 flex justify-between gap-10">
				<Form onAdd={addToQueueList} />
				<QueueList
					queue={queue}
					onUpdateStatus={updateStatus}
					onRemove={removeFromQueueList}
				/>
			</main>
		</div>
	);
};

export default App;
