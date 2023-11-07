import React from "react";

interface ExperienceData {
	date: string;
	position: string;
	employer: string;
	description: string;
	skills: string[];
}

interface ExperienceProps {
	experienceData: ExperienceData[];
}

function Experience({ experienceData }: ExperienceProps) {
	return (
		<>
			{experienceData.map((experience, index) => (
				<div className="max-w-7xl m-auto">
					<div
						key={index}
						className="card card-side hover:bg-base-100 flex flex-col md:flex-row"
					>
						<div className="p-8 pr-0 pb-0 w-full md:w-2/6">
							<p className="text-xl font-semibold text-primary">
								{experience.date}
							</p>
						</div>
						<div className="card-body w-full md:w-4/6">
							<h2 className="text-xl font-semibold">
								{experience.position}
							</h2>
							<p className="text-base-content/60">
								<strong className="text-lg border-base-content/20 border-b-2">
									{experience.employer}
								</strong>
							</p>
							<p className="text-base-content/60">
								{experience.description}
							</p>
							<div className="mt-2 gap-2 flex flex-wrap">
								{experience.skills.map((skill, skillIndex) => (
									<button
										key={skillIndex}
										className="btn btn-xs w-fit btn-secondary capitalize cursor-default"
									>
										{skill}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default Experience;
