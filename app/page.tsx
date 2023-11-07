import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const experienceData = [
	{
		date: "February 2023 - September 2023",
		position: "Software Engineer (Freelance)",
		employer: "Victorious Korean Language Learning Center",
		description:
			"Built a school portal web app for Victorious Korean Language Learning Center. This app, created with Next.js and Firebase, helps the school manage its operations more efficiently. I use technologies like React.js, Next.js, HTML, CSS, JavaScript, Tailwind, and Firebase to develop the platform.",
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
			"Worked with the College of Home Economics, UP Diliman to develop responsive WordPress websites using the Elementor page builder. These websites make it easier for students and faculty to access information and updates.",
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
			<Header />

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
				<h2 className="flex justify-center text-4xl md:text-5xl font-extrabold mb-7">
					Work Experience
				</h2>
				<Experience experienceData={experienceData} />
			</section>

			<div className="divider" />

			{/* Contact Me */}
			<section className="flex items-center text-center bg-base-100 h-auto md:min-h-[calc(100vh-170px)] m-auto p-10">
				<div className="max-w-screen-xl m-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold">
						Web Solutions Await
					</h2>
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
			<Footer />
		</div>
	);
}

export default page;
