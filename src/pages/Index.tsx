import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Hero from "@/components/Hero";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, GraduationCap, Globe, Users } from "lucide-react";

const featuredCourses: CourseProps[] = [
	{
		id: "1",
		title: "Inglés para Niños",
		description: "Curso diseñado especialmente para niños de 6 a 12 años",
		level: "A1-A2",
		duration: "Curso Anual",
		lessons: null,
		students: null,
		image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
	},
	{
		id: "2",
		title: "Inglés para Adolescentes",
		description: "Programa adaptado para estudiantes de 13 a 17 años",
		level: "A1-C1",
		duration: "Curso Anual",
		lessons: null,
		students: null,
		image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
	},
	{
		id: "3",
		title: "Inglés para Adultos",
		description: "Cursos flexibles para adultos de todas las edades",
		level: "A1-C1",
		duration: "Curso Anual",
		lessons: null,
		students: null,
		image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
	},
];

const Index = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	return (
		<div className="min-h-screen flex flex-col">
			<header
				className={`top-0 transition-shadow duration-300 ${
					scrolled ? "shadow-md" : ""
				}`}
			>
				<Navbar />
			</header>

			<main className="flex-grow">
				{/* Hero Section */}
				<section className="pt-16">
					<Hero />
				</section>

				{/* Features Section */}
				<section className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-3xl font-extrabold text-gray-900">
								Por qué elegirnos
							</h2>
							<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
								Nuestro instituto ofrece una experiencia de
								aprendizaje completa y adaptada a tus
								necesidades.
							</p>
						</div>

						<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							<Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
								<CardHeader className="text-center pb-2">
									<div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
										<GraduationCap className="h-8 w-8 text-primary" />
									</div>
									<CardTitle className="text-xl">
										Profesores nativos
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-center">
										Aprende con profesores calificados y
										nativos que entienden las sutilezas del
										idioma.
									</p>
								</CardContent>
							</Card>

							<Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
								<CardHeader className="text-center pb-2">
									<div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
										<BookOpen className="h-8 w-8 text-primary" />
									</div>
									<CardTitle className="text-xl">
										Material didáctico
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-center">
										Recursos exclusivos desarrollados
										específicamente para nuestros
										estudiantes.
									</p>
								</CardContent>
							</Card>

							<Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
								<CardHeader className="text-center pb-2">
									<div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
										<Globe className="h-8 w-8 text-primary" />
									</div>
									<CardTitle className="text-xl">
										Certificaciones
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-center">
										Preparación para exámenes oficiales y
										certificaciones internacionales.
									</p>
								</CardContent>
							</Card>

							<Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
								<CardHeader className="text-center pb-2">
									<div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
										<Users className="h-8 w-8 text-primary" />
									</div>
									<CardTitle className="text-xl">
										Grupos reducidos
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-center">
										Atención personalizada en grupos
										pequeños para optimizar tu aprendizaje.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Featured Courses Section */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-3xl font-extrabold text-gray-900">
								Cursos destacados
							</h2>
							<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
								Diseñados para todos los niveles y necesidades.
							</p>
						</div>

						<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{featuredCourses.map((course) => (
								<CourseCard key={course.id} course={course} />
							))}
						</div>

						<div className="mt-12 text-center">
							<Button size="lg" asChild>
								<Link to="/courses">Ver todos los cursos</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="bg-primary py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-3xl font-extrabold text-white">
							¿Listo para mejorar tu inglés?
						</h2>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-white/80">
							Inscríbete hoy y comienza tu viaje hacia la fluidez
							en inglés.
						</p>
						<div className="mt-8 flex justify-center">
							<Button
								size="lg"
								variant="secondary"
								className="mr-4"
								asChild
							>
								<Link to="/login?register=true">
									Registrarse
								</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="bg-transparent text-white border-white hover:bg-white/10"
								asChild
							>
								<Link to="/courses">Ver Cursos</Link>
							</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Index;
