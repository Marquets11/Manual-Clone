"use client";
import hamburgerIcon from "@/assets/Hamburger_icon.png";
import closeIcon from "@/assets/Close_icon.png";
import manualIcon from "@/assets/manual_icon.png";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
	const sidebarAnimation = {
		open: {
			x: 0,
		},
		closed: {
			x: -900,
		},
	};

	const [isOpen, setIsOpen] = useState(false);
	const sidebarControls = useAnimationControls();

	const handleOpenSidebar = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	useEffect(() => {
		if (isOpen) sidebarControls.start("open");
		else sidebarControls.start("closed");
	}, [isOpen]);

	return (
		<>
			<div className="fixed z-10 top-0 left-0 w-full bg-white flex items-center gap-4 px-3 sm:px-7 py-4 shadow-lg">
				<Image
					src={hamburgerIcon}
					alt="hamburguer-icon"
					className="w-10 h-10 sm:hidden btn-open-close-sidebar"
					onClick={handleOpenSidebar}
				/>

				<button
					className="sm:flex gap-1 items-center header-btn"
					onClick={handleOpenSidebar}
				>
					Tratamentos <FaAngleDown />
				</button>
				<button className="header-btn">Blog</button>

				<Image
					src={manualIcon}
					alt="manual-icon"
					priority
					className="w-36 object-cover h-10 mx-auto"
				/>
				<button className="header-btn">Quem somos</button>
				<button className="header-btn">Entrar</button>

				{isOpen && (
					<div
						className="fixed top-0 w-full h-screen"
						onClick={handleOpenSidebar}
					></div>
				)}

				<motion.div
					variants={sidebarAnimation}
					initial={"closed"}
					animate={sidebarControls}
					transition={{ duration: 1 }}
					className="fixed z-10 top-0 left-0 w-full sm:w-96 h-full bg-green-100 bg-opacity-60 backdrop-blur-md"
				>
					<Image
						src={closeIcon}
						alt="close-icon"
						className={`w-8 h-8 z-20 ml-3 mt-5 mb-2 btn-open-close-sidebar`}
						onClick={handleOpenSidebar}
					/>
					<SidebarMenu />
				</motion.div>
			</div>
			<div className="w-full h-[72px]"></div>
		</>
	);
}
