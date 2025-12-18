import { Check, X, CheckCheck } from "lucide-react";

const QueueList = ({ queue, onUpdateStatus, onRemove }) => {
	return (
		<div className="flex flex-col bg-zinc-600 rounded-sm border-2 border-zinc-400 w-200">
			<h1 className="text-sky-500 text-4xl text-center font-bold mt-4">
				Current Queue
			</h1>
			{queue.length === 0 ? (
				<p className="mt-16 mx-auto font-semibold text-2xl text-zinc-200">
					No Data in the queue
				</p>
			) : (
				<>
					{queue.map((customer) => (
						<div
							key={customer.id}
							className="flex justify-between gap-8 ml-2 m-2 text-zinc-300 bg-zinc-800 border-2 border-gray-500 p-4 rounded-sm"
						>
							<div>
								<div className="flex gap-6">
									<h1 className="bg-zinc-700 border-2 border-zinc-500 rounded-sm p-4 w-50 items-center justify-center">
										Name:&nbsp;
										<span className="text-zinc-50 font-semibold text-xl uppercase">
											{customer.name}
										</span>
									</h1>
									<h1 className="bg-zinc-700 border-2 border-zinc-500 rounded-sm p-4 w-50 items-center justify-center">
										Status:&nbsp;
										<span
											className={`${
												customer.status === "waiting"
													? "text-amber-400"
													: "text-cyan-400"
											} text-xl uppercase font-semibold`}
										>
											{customer.status}
										</span>
									</h1>
								</div>
								<h1 className="bg-zinc-700 border-2 border-zinc-500 rounded-sm p-4 mt-6 items-center justify-center">
									Service:&nbsp;
									<span
										className={`${
											customer.status === "waiting"
												? "text-emerald-500"
												: "text-cyan-500"
										} text-xl uppercase font-semibold`}
									>
										{customer.service}
									</span>
								</h1>
							</div>
							<div className="flex flex-col left-0 justify-between font-bold">
								{customer.status === "waiting" && (
									<button
										onClick={() =>
											onUpdateStatus(
												customer.id,
												"serving"
											)
										}
										className="bg-amber-500 hover:bg-amber-500 border-2 border-amber-800 p-4 flex gap-2 items-center justify-center hover:border-amber-700 cursor-pointer hover:text-zinc-950 text-zinc-700"
									>
										<Check />
										Serve
									</button>
								)}

								{customer.status === "serving" && (
									<button
										onClick={() =>
											onUpdateStatus(
												customer.id,
												"completed"
											)
										}
										className="bg-sky-900 hover:bg-sky-950 border-2 border-sky-700 p-4 flex gap-2 items-center justify-center hover:border-sky-500 cursor-pointer hover:text-zinc-50"
									>
										<CheckCheck />
										Complete
									</button>
								)}

								<button
									onClick={() => onRemove(customer.id)}
									className="bg-red-900 hover:bg-red-950 border-2 border-red-700 p-4 flex gap-2 items-center justify-center hover:border-red-500 cursor-pointer hover:text-zinc-50"
								>
									<X />
									Remove
								</button>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default QueueList;
