interface InterestCardProps {
	title: string;
	image: string;
}

export default function InterestCard({ title, image }: InterestCardProps) {
	return (
		<div className="bg-white shadow-lg rounded-xl p-8 w-64 mt-4 mb-4">
			<img src={image} alt={title} className="w-full h-40 object-cover" />
			<div className="text-center">
				<h2 className="text-2xl font-extrabold text-black">{title}</h2>
			</div>
		</div>
	);
}
