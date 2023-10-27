import React from "react";

function Footer() {
	return (
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
	);
}

export default Footer;
