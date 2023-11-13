import React from "react";
import { BiCalendar } from "react-icons/bi";

const experienceData = [
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
		<>
			{experienceData.map((experience, index) => (
				<div className="max-w-7xl m-auto p-5" key={index}>
					<div className="card card-side bg-base-100 md:bg-base-200 md:hover:bg-base-100 flex flex-col md:flex-row">
						<div className="p-8 md:p-8  pr-0 pb-0 w-full md:w-2/6">
							<p className="flex text-sm md:text-xl font-semibold text-primary">
								<div className="mr-2 mt-1">
									<BiCalendar />
								</div>
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
									<a
										key={skillIndex}
										href={skill.link}
										target="_blank"
										className="btn btn-xs w-fit btn-secondary capitalize"
									>
										{skill.name}
									</a>
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
