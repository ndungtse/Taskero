import React from "react";

const About = () => {
	return (
		<div id="about" className="w-full flex flex-col mt-11">
			<h1 className="text-center font-bold ltab:text-3xl text-2xl">
				What our clients say about us
			</h1>
			<div className="flex w-full mt-11 ltab:flex-row flex-col ltab:items-start items-center">
				<div className="ltab:w-1/2 flex flex-col">
					<img
						className="object-cover aspect-video w-9/12 rounded-tr-[3em] ltab:mx-0 mx-auto"
						src="https://avatars.githubusercontent.com/u/499550?v=4"
						alt=""
					/>
				</div>
				<div className="ltab:w-1/2 flex flex-col ">
					<h1 className="font-bold ltab:text-2xl text-xl mt-[5vh] ltab:text-start text-center">
						Superb! My task has never done as fast as after using taskero{" "}
					</h1>
					<p className=" mt-[5vh]">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
						culpa sequi vero, expedita modi fugiat, illum optio soluta tempore
						quia ullam eum labore. Error consectetur fuga in asperiores sed
						nesciunt!
					</p>
					<p className=" mt-3 font-semibold">Evan You - Founder of vuejs framework</p>
				</div>
			</div>
		</div>
	);
};

export default About;
