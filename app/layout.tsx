import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="black">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
