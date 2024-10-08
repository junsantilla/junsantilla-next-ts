import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import ogImage from "@/public/images/og-image.jpeg";
import Services from "@/components/Services";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MoreExperience from "@/components/MoreExperience";

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

			<Image
				src={ogImage}
				alt="Jun Santilla, a skilled freelance Software and WordPress development."
				width={1200}
				height={630}
				className="hidden"
			/>

			{/* Hero */}
			<div className="relative flex h-screen items-center justify-center overflow-hidden">
				<div className="max-w-screen-xl m-auto p-5">
					<p className="text-4xl md:text-7xl font-bold">Hi, I am</p>
					<h1 className="text-4xl md:text-7xl font-bold">
						Jun Santilla
					</h1>
					<p className="text-primary/70 py-4 text-2xl">
						I have been engaged in web development for{" "}
						<span className="border-base-content/20 border-b-2">
							more than 6 years
						</span>
						, working on a variety of projects. Presently, I am
						working as a{" "}
						<span className="border-base-content/20 border-b-2">
							freelance software developer
						</span>{" "}
						and also pursuing open source and personal projects to
						enhance my skills.
					</p>
					<div className="flex gap-3 mt-2">
						<Link
							href="https://github.com/junsantilla"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button>🚀 Github</Button>
						</Link>
						<Link
							href="https://www.buymeacoffee.com/junsantilla"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="outline">
								☕ Buy me a coffee
							</Button>
						</Link>
					</div>
				</div>
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
			</div>

			{/* Services */}
			{/* <section className="md:py-24 py-10 bg-base-100">
				<h2 className="flex justify-center text-2xl md:text-5xl font-extrabold mb-7">
					Services
				</h2>
				<Services />
			</section> */}

			{/* Experience */}
			<section className="md:py-24 py-10 bg-base-200">
				<h2 className="flex justify-center text-2xl md:text-5xl font-extrabold mb-7">
					Work Experience
				</h2>
				<Experience />
			</section>

			{/* More Experience */}
			<section className="md:py-24 py-10 bg-base-200">
				<h2 className="flex justify-center text-2xl md:text-5xl font-extrabold mb-7">
					More Work Experience
				</h2>
				<MoreExperience />
			</section>

			{/* Contact Me */}
			<section className="flex items-center justify-center text-center bg-base-100 h-auto md:min-h-[calc(100vh-170px)] py-10 px-5">
				<div className="max-w-screen-xl mx-auto space-y-6">
					<h2 className="text-3xl md:text-5xl font-bold">
						Web Solutions Await
					</h2>
					<div className="text-base-content/60 font-light md:text-lg xl:text-2xl">
						<p>
							Got a web problem that's as stubborn as a 404 error?{" "}
							<span className="border-b-2 border-base-content/20">
								Let's troubleshoot it together!
							</span>
						</p>
						<p>
							Or just want to say "Hi"?{" "}
							<span className="border-b-2 border-base-content/20">
								Feel free to drop me a message.
							</span>
						</p>
					</div>
					<div className="flex justify-center gap-4">
						<Button asChild>
							<Link href="mailto:junsantilla@live.com">
								📮 Email Me
							</Link>
						</Button>
						<Button asChild variant="secondary">
							<Link
								href="https://www.linkedin.com/in/junsantilla/"
								target="_blank"
								rel="noopener noreferrer"
							>
								👉 LinkedIn
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default page;
