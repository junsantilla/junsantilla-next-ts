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

const experienceData = [
	{
		date: "February 2025 - May 2025",
		position: "Frontend Developer (Freelance)",
		employer: "IPS Cambodia (Independent Property Services)",
		description:
			"Rebuilt the frontend of their website with Next.js, while continuing to use headless WordPress as the content management system.",
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
			{
				name: "API",
				link: "https://developer.mozilla.org/en-US/docs/Web/API",
			},
			{ name: "WordPress", link: "https://wordpress.org/" },
		],
	},
	{
		date: "February 2023 - September 2023",
		position: "Software Engineer (Freelance)",
		employer: "Victorious Korean Language Learning Center",
		description:
			"Built a school portal web app for Victorious Korean Language Learning Center. This app, created with Next.js and Firebase, helps the school manage its operations more efficiently. I use technologies like React.js, Next.js, HTML, CSS, JavaScript, Tailwind, and Firebase to develop the platform.",
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
		],
	},
	{
		date: "November 2022 - February 2023",
		position: "Wordpress Developer (Freelance)",
		employer: "College of Home Economics, UP Diliman",
		description:
			"Worked with the College of Home Economics, UP Diliman to develop responsive WordPress websites using the Elementor page builder. These websites make it easier for students and faculty to access information and updates.",
		skills: [
			{ name: "WordPress", link: "https://wordpress.org/" },
			{ name: "Elementor", link: "https://elementor.com/" },
			{
				name: "HTML",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{
				name: "CSS",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			},
		],
	},
	{
		date: "September 2020 - August 2022",
		position: "Web Developer",
		employer: "Lokal",
		description:
			"Developed responsive WordPress websites with Elementor page builder and Shopify websites using PageFly. Integrated various plugins for security, performance, and client needs. Ensured regular website maintenance and backups.",
		skills: [
			{ name: "WordPress", link: "https://wordpress.org/" },
			{ name: "Elementor", link: "https://elementor.com/" },
			{ name: "Shopify", link: "https://www.shopify.com/" },
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
			{ name: "jQuery", link: "https://jquery.com/" },
		],
	},
	{
		date: "September 2017 - July 2020",
		position: "Web Developer",
		employer: "Anderoson BPO Inc.",
		description:
			"Conducted client meetings to discuss website design and function. Developed responsive and cross-browser compatible WordPress themes from scratch or using page builders like Divi and Elementor. Integrated a wide range of WordPress plugins to enhance security, performance, and meet client requirements. Ensured regular maintenance and monitoring of live website performance, with a focus on creating regular backups.",
		skills: [
			{ name: "WordPress", link: "https://wordpress.org/" },
			{
				name: "Divi",
				link: "https://www.elegantthemes.com/gallery/divi/",
			},
			{ name: "Elementor", link: "https://elementor.com/" },
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
			{ name: "jQuery", link: "https://jquery.com/" },
			{ name: "Bootstrap", link: "https://getbootstrap.com/" },
		],
	},
];

function Experience() {
	return (
		<div className="max-w-screen-lg mx-auto p-5">
			<div className="flex flex-col w-full gap-6">
				{experienceData.map((experience, index) => (
					<Card key={index} className="w-full border rounded-md">
						<CardHeader>
							<CardTitle>{experience.position}</CardTitle>
							<CardDescription>
								<strong>{experience.employer}</strong> –{" "}
								{experience.date}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p>{experience.description}</p>
						</CardContent>
						<div className="p-6 pt-0">
							{experience.skills.map((skill, skillIndex) => (
								<Link href={skill.link} target="_blank">
									<Button
										key={skillIndex}
										className="btn-secondary capitalize mr-1 mb-1"
										size="sm"
									>
										{skill.name}
									</Button>
								</Link>
							))}
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default Experience;
