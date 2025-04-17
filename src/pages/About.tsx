import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserCheck, Award, Clock, School } from "lucide-react";

const About = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="sticky top-0 z-10 bg-white shadow-sm">
				<Navbar />
			</header>

			<main className="flex-grow pt-16">
				{/* Hero Section */}
				<section className="bg-gray-100 py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
								Quiénes Somos
							</h1>
							<p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
								Una academia con más de 20 años de experiencia
								enseñando inglés a estudiantes de todas las
								edades.
							</p>
						</div>
					</div>
				</section>

				{/* Our Story Section */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
							<div>
								<h2 className="text-3xl font-extrabold text-gray-900">
									Nuestra Historia
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									Global English Academy nació en 2003 con un
									sueño: hacer que el aprendizaje del inglés
									sea accesible, efectivo y divertido para
									todos. Lo que comenzó como una pequeña
									academia en el centro de la ciudad se ha
									convertido en un referente en la enseñanza
									de idiomas.
								</p>
								<p className="mt-4 text-lg text-gray-500">
									Nuestro enfoque se basa en la enseñanza
									práctica, con grupos reducidos y atención
									personalizada. Creemos firmemente que cada
									estudiante tiene su propio ritmo y estilo de
									aprendizaje, y adaptamos nuestra metodología
									a esas necesidades individuales.
								</p>
							</div>
							<div className="mt-10 lg:mt-0">
								<img
									src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
									alt="Nuestro equipo"
									className="rounded-lg shadow-lg"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="bg-gray-100 py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-3xl font-extrabold text-gray-900">
								Nuestros Valores
							</h2>
							<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
								Los pilares que guían nuestra labor educativa.
							</p>
						</div>

						<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							<Card className="bg-white">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center">
										<div className="p-3 bg-primary/10 rounded-full">
											<UserCheck className="h-8 w-8 text-primary" />
										</div>
										<h3 className="mt-4 text-xl font-medium text-gray-900">
											Compromiso
										</h3>
										<p className="mt-2 text-center text-gray-600">
											Nos comprometemos con el progreso de
											cada estudiante, adaptándonos a sus
											necesidades.
										</p>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center">
										<div className="p-3 bg-primary/10 rounded-full">
											<Award className="h-8 w-8 text-primary" />
										</div>
										<h3 className="mt-4 text-xl font-medium text-gray-900">
											Excelencia
										</h3>
										<p className="mt-2 text-center text-gray-600">
											Buscamos la excelencia en cada
											aspecto de nuestra enseñanza y
											servicios.
										</p>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center">
										<div className="p-3 bg-primary/10 rounded-full">
											<Clock className="h-8 w-8 text-primary" />
										</div>
										<h3 className="mt-4 text-xl font-medium text-gray-900">
											Innovación
										</h3>
										<p className="mt-2 text-center text-gray-600">
											Incorporamos nuevas metodologías y
											tecnologías para mejorar
											constantemente.
										</p>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white">
								<CardContent className="pt-6">
									<div className="flex flex-col items-center">
										<div className="p-3 bg-primary/10 rounded-full">
											<School className="h-8 w-8 text-primary" />
										</div>
										<h3 className="mt-4 text-xl font-medium text-gray-900">
											Comunidad
										</h3>
										<p className="mt-2 text-center text-gray-600">
											Creamos un ambiente acogedor donde
											todos se sienten parte de nuestra
											comunidad.
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-3xl font-extrabold text-gray-900">
								Nuestro Equipo
							</h2>
							<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
								Profesionales dedicados a la enseñanza de
								calidad.
							</p>
						</div>

						<div className="mt-12 grid gap-8 md:grid-cols-3">
							<div className="bg-white rounded-lg overflow-hidden shadow-md">
								<img
									src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
									alt="Director académico"
									className="w-full h-48 object-cover object-center"
								/>
								<div className="p-6">
									<h3 className="text-lg font-medium text-gray-900">
										María González
									</h3>
									<p className="text-sm text-primary font-medium">
										Directora Académica
									</p>
									<p className="mt-2 text-gray-600">
										Con más de 15 años de experiencia en la
										enseñanza del inglés y certificación
										CELTA.
									</p>
								</div>
							</div>

							<div className="bg-white rounded-lg overflow-hidden shadow-md">
								<img
									src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
									alt="Coordinador de cursos"
									className="w-full h-48 object-cover object-center"
								/>
								<div className="p-6">
									<h3 className="text-lg font-medium text-gray-900">
										David Smith
									</h3>
									<p className="text-sm text-primary font-medium">
										Profesor Nativo
									</p>
									<p className="mt-2 text-gray-600">
										Originario de Londres con experiencia
										enseñando inglés en múltiples países.
									</p>
								</div>
							</div>

							<div className="bg-white rounded-lg overflow-hidden shadow-md">
								<img
									src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
									alt="Responsable de cursos para niños"
									className="w-full h-48 object-cover object-center"
								/>
								<div className="p-6">
									<h3 className="text-lg font-medium text-gray-900">
										Ana Martínez
									</h3>
									<p className="text-sm text-primary font-medium">
										Especialista en Niños
									</p>
									<p className="mt-2 text-gray-600">
										Experta en metodologías dinámicas para
										la enseñanza a niños y adolescentes.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="bg-primary py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-3xl font-extrabold text-white">
							¿Quieres formar parte de nuestra comunidad?
						</h2>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-white/80">
							Únete a Global English Academy y comienza tu
							aventura con el inglés hoy mismo.
						</p>
						<div className="mt-8 flex justify-center">
							<Button
								size="lg"
								variant="secondary"
								className="mr-4"
								asChild
							>
								<Link to="/courses">Ver Cursos</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="bg-transparent text-white border-white hover:bg-white/10"
								asChild
							>
								<Link to="/contact">Contáctanos</Link>
							</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default About;
