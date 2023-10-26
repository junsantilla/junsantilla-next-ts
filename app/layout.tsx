import "../styles/global.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="black">
			<body>{children}</body>
		</html>
	);
}
