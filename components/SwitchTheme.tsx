"use client";
import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const SwitchTheme = () => {
	const [isDarkMode, setDarkMode] = useState<boolean>(true);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
	};

	const tooltipMessage = isDarkMode
		? "Toggle Light Mode"
		: "Toggle Dark Mode";

	useEffect(() => {
		const body = document.body;
		body.setAttribute("data-theme", isDarkMode ? "black" : "lofi");
	}, [isDarkMode]);

	return (
		<div className="px-3 pt-1">
			<div className="tooltip tooltip-left" data-tip={tooltipMessage}>
				<DarkModeSwitch
					checked={isDarkMode}
					onChange={toggleDarkMode}
					size={20}
				/>
			</div>
		</div>
	);
};

export default SwitchTheme;
