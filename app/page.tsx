import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Jun Santilla - WordPress and Freelance Software Developer",
	description:
		"Jun Santilla, a skilled freelance Software and WordPress development. With over 5 years of experience, I create robust web solutions tailored to your needs. Explore my portfolio and contact me for custom WordPress development services.",
};

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
				<Experience />
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
