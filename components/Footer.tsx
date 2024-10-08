import React from "react";

function Footer() {
	return (
		<footer className="bg-neutral-200 dark:bg-neutral-900 flex justify-start md:justify-between flex-col md:flex-row md:items-center p-6 gap-2 bg-base-200 text-xs  md:text-base">
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
