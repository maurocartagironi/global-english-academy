import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center">
							<span className="text-xl font-bold">
								Global English Academy
							</span>
						</div>
						<p className="mt-4 text-gray-300 text-sm">
							Centro de formación en idiomas con más de 20 años de
							experiencia. Ofrecemos cursos de inglés para todos
							los niveles, certificaciones oficiales y materiales
							didácticos personalizados.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">
							Enlaces rápidos
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/"
									className="text-gray-300 hover:text-white transition"
								>
									Inicio
								</Link>
							</li>
							<li>
								<Link
									to="/courses"
									className="text-gray-300 hover:text-white transition"
								>
									Cursos
								</Link>
							</li>
							<li>
								<Link
									to="/downloads"
									className="text-gray-300 hover:text-white transition"
								>
									Material Didáctico
								</Link>
							</li>
							<li>
								<Link
									to="/login"
									className="text-gray-300 hover:text-white transition"
								>
									Iniciar Sesión
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">
							Nuestros Cursos
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/courses?level=A1"
									className="text-gray-300 hover:text-white transition"
								>
									Principiante (A1)
								</Link>
							</li>
							<li>
								<Link
									to="/courses?level=A2"
									className="text-gray-300 hover:text-white transition"
								>
									Elemental (A2)
								</Link>
							</li>
							<li>
								<Link
									to="/courses?level=B1"
									className="text-gray-300 hover:text-white transition"
								>
									Intermedio (B1)
								</Link>
							</li>
							<li>
								<Link
									to="/courses?level=B2"
									className="text-gray-300 hover:text-white transition"
								>
									Intermedio alto (B2)
								</Link>
							</li>
							<li>
								<Link
									to="/courses?level=C1"
									className="text-gray-300 hover:text-white transition"
								>
									Avanzado (C1)
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Contacto</h3>
						<ul className="space-y-3">
							<li className="flex items-start">
								<MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span className="text-gray-300">
									Calle Principal 123, Ciudad
								</span>
							</li>
							<li className="flex items-center">
								<Phone className="h-5 w-5 text-primary mr-2" />
								<span className="text-gray-300">
									+34 912 345 678
								</span>
							</li>
							<li className="flex items-center">
								<Mail className="h-5 w-5 text-primary mr-2" />
								<a
									href="mailto:info@globalenglishacademy.com"
									className="text-gray-300 hover:text-white transition"
								>
									info@globalenglishacademy.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
					<p>
						&copy; {new Date().getFullYear()} Global English
						Academy. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
