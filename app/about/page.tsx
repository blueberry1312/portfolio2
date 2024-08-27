"use client";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						ABOUT ME
					</h2>
					<p className="text-left mt-4 text-zinc-400 text-lg">
						My name is Nestor, A highly skilled full-stack developer graduated from Microverse with
						strong passions about technology and proficient in multiple programming languages, frameworks, softwares and
						technologies such as JavaScript, React, Ruby on Rails and TailwindCSS. Skilled mentor with the proven ability
						to motivate, educate, and manage a team of 4+ developers to build software programs and effectively track changes.
						Confident communicator, strategic thinker, and innovative creator to develop customized apps to meet organizational
						needs, highlight their core competencies, and further success. I have developed real-world projects such as the
						page to organize the inventory of a bookstore, a web app for check to do list, a web application that provides
						countries data of all countries in the world, or a full stack app to reserve a glamping.
					</p>
					<div className="mt-4 bottom-4 md:bottom-8">
						<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
							<a href="https://drive.google.com/file/d/1Mbk-Mhx63-eYnWgcQ4NFpqLaj6j9mmNr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
								<button className='buttons'>GET MY RESUME</button>
							</a>
						</p>
						<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
							SOME OF MY EXPERTISES:
						</p>
                  	</div>
				</div>
				<div className="w-full h-px bg-zinc-800" />
			</div>
		</div>
	);
}

