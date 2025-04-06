import picture from "../assets/picture.jpg";
import InterestCard from "../components/interestCard";
import ScrollContainer from "react-indiana-drag-scroll";

interface HtmlProps {
	setPage: (page: string) => void;
}

const interests = [
	{
		title: "Web Development",
		image: picture,
	},
	{
		title: "Gaming",
		image: picture,
	},
	{
		title: "Photography",
		image: picture,
	},
	{
		title: "Reading Books",
		image: picture,
	},
	{
		title: "Music",
		image: picture,
	},
	{
		title: "Music",
		image: picture,
	},
	{
		title: "Music",
		image: picture,
	},
];

export default function CssPage({ setPage }: HtmlProps) {
	return (
		<div className="bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center items-center h-screen ">
			<div className="bg-white shadow-lg rounded-xl p-8 w-[85%] h-[85%] overflow-auto ">
				<div id="profile" className="flex flex-col items-center mb-8">
					{/* Profile Section */}
					<h1 className="text-4xl font-extrabold text-black mb-4">
						Aya Cariño
					</h1>
					<img
						src={picture}
						alt="Profile Picture"
						className="w-75 aspect-square object-cover rounded-xl border-4 border-purple-500 shadow-md mb-2"
					/>

					<p className="text-lg text-gray-500">
						Aspiring Web Developer | <em>Tech Enthusiast</em>
					</p>
				</div>
				<div id="bio" className="flex flex-col items-center text-center mb-8">
					{/* Biography */}
					<h2 className="text-2xl font-extrabold text-black mb-4">About Me</h2>
					<p className="text-base text-gray-700">
						Hello! My name is <strong>John Doe</strong>. <br />I am passionate
						about web development and love learning new technologies.
					</p>
				</div>
				<div id="interests" className="flex flex-col items-center ">
					{/* Interests */}
					<h2 className="text-2xl font-extrabold text-black mb-4">
						My Interests
					</h2>
					<div className="w-full overflow-x-auto">
						<ScrollContainer>
							<div className="flex w-max justify-center gap-10 text-base text-gray-700">
								{interests.map((interest) => (
									<InterestCard
										key={interest.title}
										title={interest.title}
										image={interest.image}
									/>
								))}
							</div>
						</ScrollContainer>
					</div>
				</div>
				<div id="facts" className="flex flex-col items-center mb-8">
					{/* Facts about me */}
					<h2 className="text-2xl font-extrabold text-black mb-4">Facts</h2>
					<ol className="w-full flex justify-center gap-10 text-base text-gray-700">
						<li>Web Development</li>
						<li>Gaming</li>
						<li>Reading Tech Blogs</li>
						<li>Photography</li>
					</ol>
				</div>
				<div id="Video" className="flex flex-col items-center mb-8">
					{/* Embedded Video */}
					<h2 className="text-2xl font-extrabold text-black mb-4">
						A Video About Me{" "}
					</h2>
					<video className="w-[50%] mt-3 rounded-lg shadow-md" controls>
						<source src="video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="flex flex-col items-center">
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
						onClick={() => setPage("html")}
					>
						Go to HTML
					</button>
				</div>
			</div>
		</div>
	);
}
