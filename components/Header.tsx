import Link from "next/link";
import React from "react";
import SwitchTheme from "./SwitchTheme";

function Header() {
	return (
		<header className="navbar bg-base-200">
			<div className="flex-1">
				<Link
					href="/"
					className="mx-3 font-bold capitalize cursor-pointer"
				>
					Jun Santilla
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/" className="font-semibold">
							Home
						</Link>
					</li>
					<li>
						<Link href="/portfolio" className="font-semibold">
							Portfolio
						</Link>
					</li>
					<li>
						<a
							href="/eduardoSantillaJr.pdf"
							className="font-semibold"
							download
						>
							Download Resume
						</a>
					</li>
				</ul>
				<SwitchTheme />
			</div>
		</header>
	);
}

export default Header;
