import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
	const { toast } = useToast();
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formState);

		// In a real app, you would send this data to your backend
		toast({
			title: "Mensaje enviado",
			description: "Nos pondremos en contacto contigo pronto.",
		});

		// Reset form
		setFormState({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
	};

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
								Contáctanos
							</h1>
							<p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
								Estamos aquí para responder tus preguntas y
								ayudarte a encontrar el curso perfecto para ti.
							</p>
						</div>
					</div>
				</section>

				{/* Contact Info and Form Section */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{/* Contact Info Cards */}
							<div className="space-y-6">
								<Card>
									<CardContent className="pt-6">
										<div className="flex items-start space-x-4">
											<div className="p-3 bg-primary/10 rounded-full">
												<MapPin className="h-6 w-6 text-primary" />
											</div>
											<div>
												<h3 className="font-medium text-lg">
													Dirección
												</h3>
												<p className="text-gray-600 mt-1">
													Calle Principal 123
													<br />
													Ciudad, Provincia, CP 12345
												</p>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="pt-6">
										<div className="flex items-start space-x-4">
											<div className="p-3 bg-primary/10 rounded-full">
												<Phone className="h-6 w-6 text-primary" />
											</div>
											<div>
												<h3 className="font-medium text-lg">
													Teléfono
												</h3>
												<p className="text-gray-600 mt-1">
													+34 912 345 678
													<br />
													+34 912 345 679
												</p>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="pt-6">
										<div className="flex items-start space-x-4">
											<div className="p-3 bg-primary/10 rounded-full">
												<Mail className="h-6 w-6 text-primary" />
											</div>
											<div>
												<h3 className="font-medium text-lg">
													Email
												</h3>
												<p className="text-gray-600 mt-1">
													info@globalenglishacademy.com
													<br />
													admisiones@globalenglishacademy.com
												</p>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardContent className="pt-6">
										<div className="flex items-start space-x-4">
											<div className="p-3 bg-primary/10 rounded-full">
												<Clock className="h-6 w-6 text-primary" />
											</div>
											<div>
												<h3 className="font-medium text-lg">
													Horario
												</h3>
												<p className="text-gray-600 mt-1">
													Lunes a Viernes: 9:00 -
													20:00
													<br />
													Sábados: 9:00 - 14:00
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>

							{/* Contact Form */}
							<div className="lg:col-span-2">
								<Card>
									<CardHeader>
										<CardTitle>
											Envíanos un mensaje
										</CardTitle>
									</CardHeader>
									<CardContent>
										<form
											onSubmit={handleSubmit}
											className="space-y-6"
										>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<div className="space-y-2">
													<Label htmlFor="name">
														Nombre
													</Label>
													<Input
														id="name"
														name="name"
														value={formState.name}
														onChange={handleChange}
														placeholder="Tu nombre"
														required
													/>
												</div>

												<div className="space-y-2">
													<Label htmlFor="email">
														Email
													</Label>
													<Input
														id="email"
														name="email"
														type="email"
														value={formState.email}
														onChange={handleChange}
														placeholder="tu@email.com"
														required
													/>
												</div>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<div className="space-y-2">
													<Label htmlFor="phone">
														Teléfono
													</Label>
													<Input
														id="phone"
														name="phone"
														value={formState.phone}
														onChange={handleChange}
														placeholder="Tu número de teléfono"
													/>
												</div>

												<div className="space-y-2">
													<Label htmlFor="subject">
														Asunto
													</Label>
													<Input
														id="subject"
														name="subject"
														value={
															formState.subject
														}
														onChange={handleChange}
														placeholder="Asunto de tu mensaje"
														required
													/>
												</div>
											</div>

											<div className="space-y-2">
												<Label htmlFor="message">
													Mensaje
												</Label>
												<textarea
													id="message"
													name="message"
													value={formState.message}
													onChange={handleChange}
													placeholder="¿En qué podemos ayudarte?"
													className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
													required
												/>
											</div>

											<Button
												type="submit"
												className="w-full md:w-auto flex items-center gap-2"
											>
												<Send className="h-4 w-4" />
												<span>Enviar mensaje</span>
											</Button>
										</form>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Map Section */}
				<section className="py-8 bg-gray-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="aspect-w-16 aspect-h-9">
							<div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
								{/* In a real app, you would include an actual map here, e.g. Google Maps embed */}
								<div className="w-full h-full flex items-center justify-center">
									<p className="text-gray-500">
										Mapa de ubicación
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-extrabold text-gray-900">
								Preguntas Frecuentes
							</h2>
							<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
								Respuestas a las preguntas más comunes.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									¿Cómo puedo inscribirme en un curso?
								</h3>
								<p className="text-gray-600">
									Puedes inscribirte online a través de
									nuestra web, por teléfono o presencialmente
									en nuestro centro. Nuestro equipo te guiará
									durante todo el proceso.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									¿Cuál es el tamaño de los grupos?
								</h3>
								<p className="text-gray-600">
									Nuestros grupos tienen un máximo de 8-10
									estudiantes para garantizar una atención
									personalizada y maximizar el tiempo de
									práctica de cada alumno.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									¿Ofrecen clases particulares?
								</h3>
								<p className="text-gray-600">
									Sí, ofrecemos clases particulares adaptadas
									a tus necesidades específicas, con horarios
									flexibles y programas personalizados.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									¿Preparan para exámenes oficiales?
								</h3>
								<p className="text-gray-600">
									Sí, preparamos para todos los exámenes
									oficiales (Cambridge, TOEFL, IELTS) con
									programas específicos y simulacros de
									examen.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Contact;
