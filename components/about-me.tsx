"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import Image from "next/image";
import { TechnologiesList } from "./technologies-list";

export function AboutMe() {
	return (
		<Accordion defaultValue={"About Me"} type="single" className="w-4/6">
			<AccordionItem value="About Me">
				<AccordionTrigger className="hover:text-red-500 font-bold focus:text-red-500 focus-within:text-red-500">
					About Me
				</AccordionTrigger>
				<AccordionContent>
					<p className="dark:text-gray-300">
						Hi, I&apos;m Radhi Rasho. I&apos;m a full stack software engineer with a passion for building web
						applications. I love to learn new things and I&apos;m always looking for new challenges. I&apos;m always
						looking for new opportunities to learn and grow as a developer.
						<br />
						<br />
						I&apos;m currently working at{" "}
						<Link className="underline dark:text-gray-200 hover:text-red-500" href="https://www.sandhills.com/">
							Sandhills Global
						</Link>{" "}
						as a Full Stack Software Engineer. I have a Associates Degree in Computer Science from{" "}
						<Link className="underline dark:text-gray-200 hover:text-red-500" href="https://www.southeast.edu/">
							Southeast Community College
						</Link>
						.
						<br />
						<br />
						When I&apos;m not coding, I&apos;m usually playing video games, watching anime, listening to music, working
						out, or spending time with friends and family.
						<br />
						<br />
						Feel free to check out my{" "}
						<Link className="underline dark:text-gray-200 hover:text-red-500" href="/projects">
							projects
						</Link>{" "}
						or{" "}
						<Link className="underline dark:text-gray-200 hover:text-red-500" href="/contact">
							contact me
						</Link>{" "}
						if you&apos;d like to get in touch.
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="Professional Experience">
				<AccordionTrigger className="hover:text-red-500 font-bold focus:text-red-500 focus-within:text-red-500">
					Professional Experience
				</AccordionTrigger>
				<AccordionContent className="">
					<div className="flex flex-col gap-2 dark:text-gray-300">
						<Link
							className="text-md dark:text-gray-300 font-bold underline hover:text-red-500"
							href="https://www.sandhills.com/"
						>
							Sandhills Global
						</Link>
						During my time at Sandhills Global, I had the opportunity to work on two significant projects:
						<div className="dark:text-gray-300">
							<Link
								className="text-sm font-bold dark:text-gray-300 underline hover:text-red-500"
								href={"https://www.fr8star.com"}
							>
								FR8Star
							</Link>{" "}
							<span className="text-xs">
								- Javascript, React.JS, MobX, C#, .NET, Ant Design, Node.JS, PostgreSQL, Docker, Redis
							</span>
							<br />
							<Link
								className="text-sm font-bold dark:text-gray-300 underline hover:text-red-500"
								href={"https://www.gocurrency.com/"}
							>
								GoCurrency
							</Link>{" "}
							<span className="text-xs">
								- Typescript, C#, .NET, Next.JS, Node.JS, SASS, Mongo DB, Redis, Express.JS, Azure DevOps, Docker,
								Github Actions
							</span>
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="Technologies">
				<AccordionTrigger className="hover:text-red-500 font-bold focus:text-red-500 focus-within:text-red-500">
					Technologies
				</AccordionTrigger>
				<AccordionContent className="hover:text-white">
					<TechnologiesList />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
