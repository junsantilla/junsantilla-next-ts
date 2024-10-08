"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

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
		<div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto min-h-[calc(100vh-130px)]">
			<DotPattern
				width={20}
				height={20}
				cx={1}
				cy={1}
				cr={1}
				className={cn(
					"[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
				)}
			/>
			{!isPasswordCorrect ? (
				<div className="p-16 pt-5">
					<h2>Please enter the password to view the portfolio:</h2>
					{showErrorMessage && (
						<p className="text-red-500">
							Wrong password. Try again.
						</p>
					)}
					<form>
						<div className="flex mt-3 gap-3">
							<Input
								type="password"
								className="input input-bordered w-full max-w-xs focus:outline-none"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button
								className="btn btn-primary"
								onClick={handlePasswordSubmit}
							>
								Submit
							</Button>
						</div>
					</form>
				</div>
			) : (
				<div className="flex flex-col mb-20">
					<h1 className="flex justify-center text-2xl md:text-5xl font-extrabold mt-14 mb-7">
						Portfolio
					</h1>
					<div className="max-w-screen-lg mx-auto p-5">
						<div className="flex flex-col w-full gap-6">
							{portfolioData.map((experience, index) => (
								<Card
									key={index}
									className="w-full border rounded-md"
								>
									<CardHeader>
										<CardTitle className="flex items-center">
											{experience.title}
											{experience.link && (
												<Link
													href={experience.link}
													target="_blank"
													className="ml-2"
												>
													<FiLink />
												</Link>
											)}
										</CardTitle>
										<CardDescription>
											<strong>{experience.client}</strong>{" "}
											– {experience.role}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p>{experience.description}</p>
									</CardContent>
									<div className="p-6 pt-0">
										{experience.skills.map(
											(skill, skillIndex) => (
												<Link
													href={skill.link}
													target="_blank"
												>
													<Button
														key={skillIndex}
														className="btn-secondary capitalize mr-1 mb-1"
														size="sm"
													>
														{skill.name}
													</Button>
												</Link>
											)
										)}
									</div>
								</Card>
							))}
							<div className="flex justify-center gap-4 mt-4">
								<Button asChild variant="ghost">
									<Link
										href="https://github.com/junsantilla"
										target="_blank"
										rel="noopener noreferrer"
									>
										✨ More on Github
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Portfolio;
