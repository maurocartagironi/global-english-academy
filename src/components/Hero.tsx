import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<div className="relative bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<svg
						className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block">
									Aprende inglés con
								</span>{" "}
								<span className="block text-primary">
									métodos innovadores
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Descubre nuestros cursos de inglés diseñados
								para todos los niveles. Profesores nativos,
								metodología práctica y flexible, y materiales
								didácticos exclusivos.
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<Link to="/courses">
										<Button size="lg">Ver Cursos</Button>
									</Link>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<Link to="/login?register=true">
										<Button variant="outline" size="lg">
											Registrarse
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
					alt="Students in classroom"
				/>
			</div>
		</div>
	);
};

export default Hero;
