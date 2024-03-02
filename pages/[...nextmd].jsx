import NextMarkdown from "next-markdown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/global.css";

const nextmd = NextMarkdown({ pathToContent: "./pages-markdown" });

export const getStaticPaths = nextmd.getStaticPaths;
export const getStaticProps = nextmd.getStaticProps;

export default function MarkdownPage({ frontMatter, html, subPaths }) {
	return (
		<div>
			<Header />
			<div className="divider" />
			<div className="p-10 blog">
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
			<div className="divider" />
			<Footer />
		</div>
	);
}
