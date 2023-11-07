"use client";
import React, { useState } from "react";

interface PortfolioItem {
	title: string;
	description: string;
	client: string;
	role: string;
	skills: { name: string; link: string }[]; // Update the skills array type
	image: string;
	link: string;
}

interface PortfolioProps {
	portfolioData: PortfolioItem[];
}

function Portfolio({ portfolioData }: PortfolioProps) {
	const [password, setPassword] = useState("");
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const handlePasswordSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password === process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD) {
			setIsPasswordCorrect(true);
		} else {
			setShowErrorMessage(true);
			setTimeout(() => {
				setShowErrorMessage(false);
			}, 2000);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-236px)]">
			{!isPasswordCorrect ? (
				<div className="p-16 pt-5">
					<h2>Please enter the password to view the portfolio:</h2>
					{showErrorMessage && (
						<p className="text-red-500">
							Wrong password. Try again.
						</p>
					)}
					<form>
						<div className="flex mt-3">
							<input
								type="password"
								className="input input-bordered w-full max-w-xs focus:outline-none"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button
								className="btn btn-primary"
								onClick={handlePasswordSubmit}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			) : (
				<div className="p-10 flex flex-col gap-10">
					<h1 className="flex justify-center text-4xl md:text-7xl font-extrabold mt-10">
						Portfolio
					</h1>
					{portfolioData.map((item, index) => (
						<div
							className="max-w-7xl mx-auto p-16 bg-base-200"
							key={index}
						>
							<div className="card md:flex-row gap-10">
								<div className="w-full md:w-3/6">
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-auto"
									/>
								</div>
								<div className="p-0 w-full md:w-3/6">
									<h2 className="text-xl font-semibold">
										<a
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.title}
										</a>
									</h2>
									<p className="text-base-content/60">
										<strong>{item.client}</strong>
									</p>
									<p className="text-base-content/60">
										{item.description}
									</p>
									<div className="mt-2 gap-2 flex flex-wrap">
										{item.skills.map(
											(skill, skillIndex) => (
												<a
													key={skillIndex}
													href={skill.link}
													target="_blank"
													rel="noopener noreferrer"
													className="btn btn-xs w-fit btn-secondary capitalize cursor-pointer"
												>
													{skill.name}
												</a>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Portfolio;
