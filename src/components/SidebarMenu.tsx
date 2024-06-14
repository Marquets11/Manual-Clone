import { FaAngleRight } from "react-icons/fa";

export default function SidebarMenu() {
	return (
		<main className="flex flex-col gap-10 pt-12 pb-20 px-6 h-screen overflow-auto scrollbar-none">
			<nav>
				<h2 className="nav-title-sidebar">Tratamentos</h2>
				<hr />
				<ul>
					<li className="group li-sidebar">
						<span className="li-span-sidebar">Queda Capilar</span>
						<FaAngleRight className="li-icon-arrow-sidebar" />
					</li>
					<hr />
					<li className="group li-sidebar">
						<span className="li-span-sidebar">Emagrecimento</span>
						<FaAngleRight className="li-icon-arrow-sidebar" />
					</li>
					<hr />
					<li className="group li-sidebar">
						<span className="li-span-sidebar">Disfunção erétil</span>
						<FaAngleRight className="li-icon-arrow-sidebar" />
					</li>
					<hr />
					<li className="group li-sidebar">
						<span className="li-span-sidebar">Sono</span>
						<FaAngleRight className="li-icon-arrow-sidebar" />
					</li>
					<hr />
				</ul>
			</nav>
			<nav>
				<h2 className="nav-title-sidebar">Conta</h2>
				<hr />
				<ul>
					<li className="group li-sidebar">
						<span className="li-span-sidebar">Entrar</span>
						<FaAngleRight className="li-icon-arrow-sidebar" />
					</li>
					<hr />
				</ul>
			</nav>
			<nav>
				<h2 className="nav-title-sidebar">Suporte</h2>
				<hr />
				<ul>
					<li className="group li-sidebar">
						<span className="li-span-sidebar">Central de Ajuda</span>
						<FaAngleRight className="li-icon-arrow-sidebar" />
					</li>
					<hr />
				</ul>
			</nav>
			<nav>
				<h2 className="nav-title-sidebar">Aprenda</h2>
				<hr />
				<ul>
					<li className="group li-sidebar">
						<span className="li-span-sidebar">Meu Manual</span>
						<FaAngleRight className="li-icon-arrow-sidebar" />
					</li>
					<hr />
				</ul>
			</nav>
		</main>
	);
}
