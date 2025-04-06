interface HtmlProps {
	setPage: (page: string) => void;
}

export default function Html({ setPage }: HtmlProps) {
	return (
		<div>
			<div id="profile">
				{/* Profile Section */}
				<h1>Your Name</h1>
				<img src="profile.jpg" alt="Profile Picture" width="150" />
				<p>
					Aspiring Web Developer | <em>Tech Enthusiast</em>
				</p>
			</div>
			<div id="bio">
				{/* Biography */}
				<h2>About Me</h2>
				<p>
					Hello! My name is <strong>John Doe</strong>. <br />I am passionate
					about web development and love learning new technologies.
				</p>
			</div>
			<div id="interests">
				{/* Interests */}
				<h2>My Interests</h2>
				<ul>
					<li>Web Development</li>
					<li>Gaming</li>
					<li>Reading Tech Blogs</li>
					<li>Photography</li>
				</ul>
			</div>
			<div id="facts">
				{/* Facts about me */}
				<h2>Facts</h2>
				<ol>
					<li>Web Development</li>
					<li>Gaming</li>
					<li>Reading Tech Blogs</li>
					<li>Photography</li>
				</ol>
			</div>
			<div>
				{/* Embedded Video */}
				<h2>A Video About Me</h2>
				<video width="320" height="240" controls>
					<source src="video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<button onClick={() => setPage("css")}>Go to CSS HTML</button>
		</div>
	);
}
