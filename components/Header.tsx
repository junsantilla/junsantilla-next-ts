import Link from "next/link";
import React from "react";
import SwitchTheme from "./SwitchTheme";

function Header() {
	return (
		<header className="navbar bg-base-200">
			<div className="flex-1">
				<a className="mx-3 font-bold capitalize cursor-pointer">
					<Link href="/">👨 Jun Santilla</Link>
				</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/portfolio">📁 Portfolio</Link>
					</li>
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
	);
}

export default Header;
