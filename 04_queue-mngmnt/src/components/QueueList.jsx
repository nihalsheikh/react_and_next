import { Check, X } from "lucide-react";
import React from "react";

const QueueList = ({ list, onAdd, onUpdate, onRemove }) => {
	const getStatusColor = (status) => {
		switch (status) {
			case "waiting":
				return "text-amber-500";
			case "serving":
				return "text-sky-500";
			case "completed":
				return "text-green-500";
			default:
				return "text-zinc-500";
		}
	};

	return (
		<div className="bg-zinc-800 p-8 rounded-xl flex flex-col w-300">
			<div>
				<h1 className="text-sky-500 font-bold text-3xl p-4 text-center">
					Current Queue
				</h1>
			</div>

			<div>
				{list.length === 0 ? (
					<p className="bg-indigo-400 p-6 mt-4 text-3xl text-zinc-950 font-semibold text-center items-center justify-center rounded-2xl">
						No Customer Data found
					</p>
				) : (
					<div className="flex flex-row justify-between bg-zinc-900 border-2 border-zinc-600 rounded-sm p-4">
						<div className="flex-col">
							<div className="flex flex-row justify-between gap-8">
								<div className="bg-zinc-700 p-2 rounded-xl border border-zinc-400 text-zinc-100 font-semibold text-xl">
									Name:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
									<span className="text-zinc-50">Nihal Sharif Sheikh</span>
								</div>
								<div className="bg-zinc-700 p-2 rounded-xl border border-zinc-400 text-zinc-100 font-semibold text-xl">
									Category:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
									<span className="text-amber-500">
										Category
									</span>
								</div>
							</div>
							<div className="mt-8 bg-zinc-700 p-2 rounded-xl border border-zinc-400 text-zinc-100 font-semibold text-xl">
								Status:&nbsp;&nbsp;&nbsp;&nbsp;
								<span
									className={`${
										status === "waiting"
											? status
											: status === "serving"
											? status
											: status === "completed"
											? status
											: "text-indigo-500 text-xl uppercase text-left mr-3 font-bold"
									}`}
								>
									{"status"}
								</span>
							</div>
						</div>

						<div className="flex flex-row gap-10 items-center justify-center ml-8">
							<button className="bg-sky-950 p-8 text-xl items-center justify-center cursor-pointer border-2 border-sky-700 hover:bg-sky-700 hover:border-sky-800 text-zinc-50 font-bold flex flex-row gap-2">
								<Check />
								Complete Status
							</button>
							<button className="bg-red-950 p-8 text-xl items-center justify-center cursor-pointer border-2 border-red-700 hover:bg-red-700 hover:border-red-800 text-zinc-50 font-bold flex flex-row gap-2">
								<X />
								Remove Button
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default QueueList;
