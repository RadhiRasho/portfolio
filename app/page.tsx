import Image from "next/image";
import RadhiRasho from "@/public/Radhi-Rasho.jpg";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Image className="rounded-full w-44" loading="lazy" alt="Radhi Rasho" src={RadhiRasho} />
		</main>
	);
}
