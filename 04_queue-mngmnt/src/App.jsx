import { useState } from "react";
import Form from "./components/Form";
import QueueList from "./components/QueueList";

const App = () => {
	const [queueList, setQueueList] = useState([]);

	// Take data from the Form and it to the array queue
	const addToQueueList = (customerData) => {
		setQueueList([...queueList], {
			...customerData,
			customerId: Date.now(),
			status: "waiting",
		});
	};

	const updateStatus = (customerId, newStatus) => {
		setQueueList(
			queueList.map((customerData) => {
				customerData.customerId === customerId
					? { ...customerData, status: newStatus }
					: customerData;
			})
		);
	};

	const removeFromQueueList = (customerId) => {
		setQueueList(
			queueList.filter(
				(customerData) => customerData.customerId !== customerId
			)
		);
	};

	return (
		<>
			<div className="flex flex-col bg-zinc-900 w-full min-h-screen">
				<header className="flex justify-center flex-col items-center">
					<h1 className="mt-8 font-bold text-4xl text-sky-400">
						Project: Queue Management System
					</h1>
					<p className="mt-2 text-xl text-zinc-400">
						Manage your clients efficiently
					</p>
				</header>

				<main className="mt-32 flex flex-row gap-8 items-stretch justify-center">
					{/* Form */}
					<Form onAdd={addToQueueList} />

					{/* Queue List */}
					<QueueList
						list={queueList}
						onAdd={addToQueueList}
						onUpdate={updateStatus}
						onRemove={removeFromQueueList}
					/>
				</main>
			</div>
		</>
	);
};

export default App;
