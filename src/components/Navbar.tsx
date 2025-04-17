import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/img/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n";

const Navbar = () => {
	const { language } = useLanguage();
	const t = translations[language];

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-white border-b border-gray-200 fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link
							to="/"
							className="flex-shrink-0 flex items-center"
						>
							<img
								src={logo}
								alt="Logo"
								className="h-auto w-9 mr-2 object-fill px-1"
							/>
							<span className="text-l font-bold text-gray-800 leading-tight">
								<span className="block">Global English</span>
								<span className="block">Academy</span>
							</span>
						</Link>
						<div className="hidden md:block ml-10">
							<div className="flex items-center space-x-4">
								<Link to="/" className="nav-link">
									{t.home}
								</Link>
								<Link to="/about" className="nav-link">
									{t.about}
								</Link>
								<Link to="/courses" className="nav-link">
									{t.courses}
								</Link>
								<div className="relative group">
									<button className="nav-link group flex items-center">
										<span>{t.levels}</span>
										<ChevronDown className="ml-1 h-4 w-4" />
									</button>
									<div className="absolute hidden group-hover:block left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
										<Link
											to="/courses?level=A1"
											className="dropdown-link"
										>
											{t.levelA1}
										</Link>
										<Link
											to="/courses?level=A2"
											className="dropdown-link"
										>
											{t.levelA2}
										</Link>
										<Link
											to="/courses?level=B1"
											className="dropdown-link"
										>
											{t.levelB1}
										</Link>
										<Link
											to="/courses?level=B2"
											className="dropdown-link"
										>
											{t.levelB2}
										</Link>
										<Link
											to="/courses?level=C1"
											className="dropdown-link"
										>
											{t.levelC1}
										</Link>
									</div>
								</div>
								<Link to="/contact" className="nav-link">
									{t.contact}
								</Link>
								<Link to="/downloads" className="nav-link">
									{t.downloads}
								</Link>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex items-center space-x-4">
							<LanguageSwitcher />
							<Link to="/login">
								<Button
									variant="outline"
									className="text-sm/[1]"
								>
									{t.login}
								</Button>
							</Link>
							<Link to="/login?register=true">
								<Button className="text-sm/[1]">
									{t.register}
								</Button>
							</Link>
						</div>
					</div>
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden bg-white pt-2 pb-3 space-y-1 border-t border-gray-200">
					<Link
						to="/"
						className="mobile-link"
						onClick={() => setIsMenuOpen(false)}
					>
						{t.home}
					</Link>
					<Link
						to="/about"
						className="mobile-link"
						onClick={() => setIsMenuOpen(false)}
					>
						{t.about}
					</Link>
					<Link
						to="/courses"
						className="mobile-link"
						onClick={() => setIsMenuOpen(false)}
					>
						{t.courses}
					</Link>
					<div className="bg-gray-50 pl-8">
						<Link
							to="/courses?level=A1"
							className="dropdown-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.levelA1}
						</Link>
						<Link
							to="/courses?level=A2"
							className="dropdown-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.levelA2}
						</Link>
						<Link
							to="/courses?level=B1"
							className="dropdown-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.levelB1}
						</Link>
						<Link
							to="/courses?level=B2"
							className="dropdown-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.levelB2}
						</Link>
						<Link
							to="/courses?level=C1"
							className="dropdown-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{t.levelC1}
						</Link>
					</div>
					<Link
						to="/contact"
						className="mobile-link"
						onClick={() => setIsMenuOpen(false)}
					>
						{t.contact}
					</Link>
					<Link
						to="/downloads"
						className="mobile-link"
						onClick={() => setIsMenuOpen(false)}
					>
						{t.downloads}
					</Link>
					<div className="pt-4 pb-3 border-t border-gray-200 px-4">
						<div className="mb-4">
							<LanguageSwitcher />
						</div>
						<Link to="/login" onClick={() => setIsMenuOpen(false)}>
							<Button variant="outline" className="w-full mb-2">
								{t.login}
							</Button>
						</Link>
						<Link
							to="/login?register=true"
							onClick={() => setIsMenuOpen(false)}
						>
							<Button className="w-full">{t.register}</Button>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
