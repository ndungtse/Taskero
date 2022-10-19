import React from "react";
import { BiEnvelopeOpen, BiGlobe } from "react-icons/bi";
import {
	FaLinkedin,
	FaGithubSquare,
	FaFacebookSquare,
	FaInstagramSquare,
} from "react-icons/fa";
import CopyRights from "./CopyRights";

const Footer = () => {
	return (
		<div className="w-full flex flex-col items-center bg-[#dae2eb]">
			<div className="flex w-full justify-between px-20 py-10">
				<div className="flex flex-col">
					<img className="w-[150px]" src="logoq.png" alt="" />
					<p className="mt-4">
						Simplify your work with us. Need to know more about us? contact us.
					</p>
					<div className="flex items-center tablet:ml-4">
						<a
							className="flex items-center px-2"
							href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/"
							target="_blank"
						>
							<FaLinkedin className="text-xl" />
						</a>
						<a
							className="flex items-center px-2"
							href="https://github.com/NdungutseCharles103"
							target="_blank"
							rel="no-referrer"
						>
							<FaGithubSquare className="text-xl" />
						</a>
						<a
							className="flex items-center px-2"
							href="https://www.facebook.com/ishimwendungutsecharles"
							target="_blank"
							rel="no-referrer"
						>
							<FaFacebookSquare className="text-xl" />
						</a>
						<a
							className="flex items-center px-2"
							href="https://www.instagram.com/ndungutse_charles/"
							target="_blank"
							rel="no-referrer"
						>
							<FaInstagramSquare className="text-xl" />
						</a>
						<a
							className="flex items-center px-2"
							href="mailto:ndungutsecharles103@gmail.com"
							target="_blank"
							rel="no-referrer"
						>
							<BiEnvelopeOpen className="text-xl" />
						</a>
						<a
							className="flex items-center px-2"
							href="https://www.ndungutsecharles.me"
							target="_blank"
							rel="no-referrer"
						>
							<BiGlobe className="text-xl" />
						</a>
					</div>
				</div>
				<div className="flex flex-col">
					<h1 className="text-xl font-semibold">Company</h1>
					<a className="mt-4" href="#">
						About
					</a>
					<a className="mt-4" href="#">
						Contact
					</a>
					<a className="mt-4" href="#">
						Blog
					</a>
					<a className="mt-4" href="#">
						Blog
					</a>
				</div>
				<div className="flex flex-col">
					<h1 className="text-xl font-semibold">Information</h1>
					<a className="mt-4" href="#">
						About
					</a>
					<a className="mt-4" href="#">
						Contact
					</a>
					<a className="mt-4" href="#">
						Blog
					</a>
					<a className="mt-4" href="#">
						Blog
					</a>
				</div>
				<div className="flex flex-col">
					<h1 className="text-xl font-semibold">Join our Mailing list</h1>
					<p className="mt-4">Get the latest news and updates</p>
					<div className="flex mt-4 rounded-[3.5em] bg-white px-3 py-1 text-sm">
						<input
							className="w-full border-none outline-none "
							type="email"
							placeholder="Enter your email"
						/>
						<button className="rounded-3xl bg-blue-600 text-white ml-3 font-semibold px-4 py-2">
							Subscribe
						</button>
					</div>
				</div>
			</div>
            <CopyRights />
		</div>
	);
};

export default Footer;
