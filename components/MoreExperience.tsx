import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

const moreExperienceData = [
	{
		title: "Kravatar",
		description:
			"A web application that can generate unique avatars in seconds with our AI avatar generator. Perfect for gamers, streamers, and professionals looking to stand out online.",
		client: "Personal Project",
		role: "Web Developer",
		skills: [
			{ name: "React.js", link: "https://reactjs.org/" },
			{ name: "Next.js", link: "https://nextjs.org/" },
			{
				name: "HTML",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{
				name: "CSS",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			},
			{
				name: "JavaScript",
				link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			},
			{ name: "Tailwind", link: "https://tailwindcss.com/" },
			{ name: "Firebase", link: "https://firebase.google.com/" },
			{
				name: "API",
				link: "https://developer.mozilla.org/en-US/docs/Web/API",
			},
			{ name: "REST API", link: "https://restfulapi.net/" },
			{ name: "OpenAI", link: "https://openai.com/" },
		],
		image: "/images/portfolio/screely-1698414532878.png",
		link: "https://kravatar.com/",
	},
];

function MoreExperience() {
	return (
		<div className="max-w-screen-lg mx-auto p-5">
			<div className="grid gap-6">
				{moreExperienceData.map((experience, index) => (
					<Card key={index} className="w-full border rounded-md">
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
								<strong>{experience.client}</strong> –{" "}
								{experience.role}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p>{experience.description}</p>
						</CardContent>
						<CardFooter className="gap-2">
							{experience.skills.map((skill, skillIndex) => (
								<Link href={skill.link} target="_blank">
									<Button
										key={skillIndex}
										className="btn-secondary capitalize"
										size="sm"
									>
										{skill.name}
									</Button>
								</Link>
							))}
						</CardFooter>
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
	);
}

export default MoreExperience;
