import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Jun Santilla - Portfolio",
	description:
		"Explore Jun Santilla's portfolio of diverse web development projects. Freelance software and WordPress developer with 5+ years of experience, offering creativity and expertise. View my work and contact for customized web solutions.",
};

const portfolioData = [
	{
		title: "VKLLC School Portal",
		description:
			"A web application built with Next.js and Firebase that simplifies school management. Streamline student enrollment, payments, book inventory and more with real-time updates and user-friendly interfaces.",
		client: "VKLLC",
		role: "Web Developer",
		skills: [
			{ name: "React.js", link: "https://reactjs.org/" },
			{ name: "Next.js", link: "https://nextjs.org/" },
			{
				name: "HTML",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{
				name: "CSS",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			},
			{
				name: "JavaScript",
				link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			},
			{ name: "Tailwind", link: "https://tailwindcss.com/" },
			{ name: "Firebase", link: "https://firebase.google.com/" },
		],
		image: "/images/portfolio/screely-1698414532878.png",
		link: "https://vkllc-school-portal.com",
	},
	{
		title: "Powcast Sports",
		description:
			"A dynamic sports website powered by WordPress, showcasing the latest sports news, scores, and commentary. Engage sports enthusiasts with responsive design and integrated multimedia content.",
		client: "Powcast",
		role: "Web Developer",
		skills: [
			{ name: "WordPress", link: "https://wordpress.org/" },
			{
				name: "HTML",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{
				name: "CSS",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			},
		],
		image: "/images/portfolio/screely-1698414315964.png",
		link: "https://powcast-sports.com",
	},
	{
		title: "College of Home Economics",
		description:
			"With WordPress and the Elementor Page Builder, the College of Home Economics website offers a modern, intuitive platform for students and faculty to access resources, schedules, and updates.",
		client: "College of Home Economics",
		role: "Web Developer",
		skills: [
			{ name: "WordPress", link: "https://wordpress.org/" },
			{ name: "Elementor", link: "https://elementor.com/" },
			{
				name: "HTML",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{
				name: "CSS",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			},
		],
		image: "/images/portfolio/screely-1698414401924.png",
		link: "https://college-home-economics.com",
	},
	{
		title: "Living Innovations",
		description:
			"Revamped with WordPress and Elementor Page Builder, Living Innovations' website provides an appealing and informative online presence. Showcase products and services with engaging visuals and content.",
		client: "Living Innovations",
		role: "Web Developer",
		skills: [
			{ name: "WordPress", link: "https://wordpress.org/" },
			{ name: "Elementor", link: "https://elementor.com/" },
			{
				name: "HTML",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{
				name: "CSS",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			},
		],
		image: "/images/portfolio/screely-1698414432226.png",
		link: "https://living-innovations.com",
	},
	{
		title: "Payroll Bureau Services",
		description:
			"Utilizing WordPress and the versatile Divi Theme, Payroll Bureau Services offers a professional website for managing payroll solutions. Present your services with style and simplicity.",
		client: "Payroll Bureau Services",
		role: "Web Developer",
		skills: [
			{ name: "WordPress", link: "https://wordpress.org/" },
			{
				name: "Divi Theme",
				link: "https://www.elegantthemes.com/gallery/divi/",
			},
			{
				name: "HTML",
				link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{
				name: "CSS",
				link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			},
		],
		image: "/images/portfolio/screely-1698414462156.png",
		link: "https://payroll-bureau-services.com",
	},
];

function page() {
	return (
		<div>
			<Header />
			<div className="divider" />
			<Portfolio portfolioData={portfolioData} />
			<div className="divider" />
			<Footer />
		</div>
	);
}

export default page;
