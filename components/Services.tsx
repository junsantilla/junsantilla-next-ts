import React from "react";
import { BiLogoWordpress, BiCodeAlt, BiWrench } from "react-icons/bi";

const servicesData = [
	{
		title: "WordPress Development",
		description:
			"Tailored WordPress solutions that meet your specific business needs.",
		icon: <BiLogoWordpress />,
	},
	{
		title: "Modern Web App Development",
		description:
			"Build powerful and scalable web applications using the latest technologies.",
		icon: <BiCodeAlt />,
	},
	{
		title: "Quick Website Help",
		description: "Get fast assistance for website errors and urgent fixes.",
		icon: <BiWrench />,
	},
];

function Services() {
	return (
		<div className="max-w-screen-xl m-auto p-5">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{servicesData.map((service, index) => (
					<div
						className="border rounded-md p-6 text-center"
						key={index}
					>
						<div className="flex justify-center items-center text-primary text-3xl mb-4">
							{service.icon}
						</div>
						<h3 className="text-xl font-semibold mb-2">
							{service.title}
						</h3>
						<p className="text-base-content/60 mb-4">
							{service.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Services;
