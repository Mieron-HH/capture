import React from "react";
//Page Components
import AboutSection from "../component/AboutSection";
import ServicesSection from "../component/ServicesSection";
import FaqSection from "../component/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
		</motion.div>
	);
};

export default AboutUs;
