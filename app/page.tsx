import Experience from "@/components/Experience";
import SwitchTheme from "@/components/SwitchTheme";

const experienceData = [
	{
		date: "February 2023 - Present",
		position: "Software Engineer (Freelance)",
		employer: "Victorious Korean Language Learning Center",
		description: "Create school portal web app with Next.js and Firebase.",
		skills: [
			"React.js",
			"Next.js",
			"HTML",
			"CSS",
			"Javascript",
			"Tailwind",
			"Firebase",
		],
	},
	{
		date: "November 2022 - February 2023",
		position: "Wordpress Developer (Freelance)",
		employer: "College of Home Economics, UP Diliman",
		description:
			"Developed responsive WordPress websites with Elementor page builder.",
		skills: ["WordPress", "Elementor", "HTML", "CSS"],
	},
	{
		date: "September 2020 - August 2022",
		position: "Web Developer",
		employer: "Lokal",
		description:
			"Developed responsive WordPress websites with Elementor page builder and Shopify websites using PageFly. Integrated various plugins for security, performance, and client needs. Ensured regular website maintenance and backups.",
		skills: [
			"WordPress",
			"Elementor",
			"Shopify",
			"HTML",
			"CSS",
			"Javascript",
			"jQuery",
		],
	},
	{
		date: "September 2017 - July 2020",
		position: "Web Developer",
		employer: "Anderoson BPO Inc.",
		description:
			"Conducted client meetings to discuss website design and function. Developed responsive and cross- browser compatible WordPress themes from scratch or using page builders like Divi and Elementor. Integrated a wide-range of WordPress plugins to enhance security, performance, and meet client requirements. Ensured regular maintenance and monitoring of live website performance, with a focus on creating regular backups.",
		skills: [
			"WordPress",
			"Divi",
			"Elementor",
			"HTML",
			"CSS",
			"Javascript",
			"jQuery",
			"Bootstrap",
		],
	},
];

function page() {
	return (
		<div>
			{/* Header */}
			<header className="navbar bg-base-200">
				<div className="flex-1">
					<a className="mx-3 font-bold capitalize cursor-pointer">
						👨 Jun Santilla
					</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a
								href="/eduardoSantillaJr.pdf"
								className="font-semibold"
								download
							>
								⭐ Download Resume
							</a>
						</li>
					</ul>
					<SwitchTheme />
				</div>
			</header>

			<div className="divider" />

			{/* Hero */}
			<section className="flex items-center bg-base-100 h-auto md:min-h-[calc(100vh-165px)] m-auto p-10">
				<div>
					<p className="text-4xl md:text-7xl text-secondary font-extrabold">
						Hi, I am
					</p>
					<h1 className="text-4xl md:text-7xl font-extrabold">
						Jun Santilla
					</h1>
					<p className="text-base-content/60 font-title py-4 font-light md:text-lg xl:text-2xl">
						I have been engaged in web development for{" "}
						<span className="border-base-content/20 border-b-2">
							more than 5 years
						</span>
						, working on a variety of projects. Presently, I am
						working as a{" "}
						<span className="border-base-content/20 border-b-2">
							freelance software developer
						</span>{" "}
						and also pursuing personal projects to enhance my
						front-end skills.
					</p>
					<a
						href="https://github.com/junsantilla"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-secondary capitalize mt-3"
					>
						🚀 Github
					</a>
				</div>
			</section>

			<div className="divider" />

			{/* Experience */}
			<section className="md:py-40 bg-base-200">
				<Experience experienceData={experienceData} />
			</section>

			<div className="divider" />

			{/* Contact Me */}
			<section className="flex items-center text-center bg-base-100 h-auto md:min-h-[calc(100vh-170px)] m-auto p-10">
				<div className="max-w-screen-lg m-auto">
					<h1 className="text-4xl md:text-7xl font-bold">
						Web Solutions Await
					</h1>
					<div className="text-base-content/60 font-title py-4 font-light md:text-lg xl:text-2xl">
						<p>
							Got a web problem that's as stubborn as a 404 error?{" "}
							<span className="border-base-content/20 border-b-2">
								Let's troubleshoot it together!
							</span>
						</p>
						<p>
							Or just want to say "Hi"?{" "}
							<span className="border-base-content/20 border-b-2">
								Feel free to drop me a message.
							</span>
						</p>
					</div>
					<div>
						<a
							href="mailto:junsantilla@live.com"
							className="btn btn-primary capitalize mt-3"
						>
							📮 Email Me
						</a>
						<a
							href="https://www.linkedin.com/in/junsantilla/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-secondary capitalize mt-3 ml-3"
						>
							👉 LinkedIn
						</a>
					</div>
				</div>
			</section>

			<div className="divider" />

			{/* Footer */}
			<footer className="flex justify-center md:justify-between flex-col md:flex-row items-center p-6 gap-2 bg-base-200 ">
				<div className="font-bold">
					<p>Copyright © 2023 - All rights reserved.</p>
				</div>
				<div>
					<p>
						Built with{" "}
						<a
							href="https://nextjs.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline font-bold"
						>
							Next.js
						</a>
						{" and "}
						<a
							href="https://daisyui.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline font-bold"
						>
							Daisy UI
						</a>
						, deployed with{" "}
						<a
							href="https://vercel.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline font-bold"
						>
							Vercel
						</a>
						.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default page;
