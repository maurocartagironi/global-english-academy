import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseProps } from "@/components/CourseCard";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

// Mock courses data
const coursesData: CourseProps[] = [
	{
		id: "1",
		title: "Inglés para Principiantes",
		description: "Curso básico para quienes se inician en el idioma inglés",
		level: "A1",
		duration: "12 semanas",
		lessons: 24,
		students: 156,
		image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
	},
	{
		id: "2",
		title: "Inglés Elemental",
		description: "Consolida las bases del idioma y amplía tu vocabulario",
		level: "A2",
		duration: "14 semanas",
		lessons: 28,
		students: 132,
		image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
	},
	{
		id: "3",
		title: "Inglés Intermedio",
		description: "Perfecto para quienes ya tienen base en el idioma",
		level: "B1",
		duration: "16 semanas",
		lessons: 32,
		students: 94,
		image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
	},
	{
		id: "4",
		title: "Inglés Intermedio Alto",
		description: "Avanza hacia un nivel profesional del idioma",
		level: "B2",
		duration: "18 semanas",
		lessons: 36,
		students: 83,
		image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
	{
		id: "5",
		title: "Inglés Avanzado",
		description: "Para estudiantes que buscan perfeccionar su nivel",
		level: "C1",
		duration: "20 semanas",
		lessons: 40,
		students: 67,
		image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
	{
		id: "6",
		title: "Preparación TOEFL",
		description: "Curso específico para superar el examen TOEFL",
		level: "B2",
		duration: "10 semanas",
		lessons: 20,
		students: 45,
		image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
	{
		id: "7",
		title: "Preparación IELTS",
		description:
			"Curso diseñado para obtener buenos resultados en el IELTS",
		level: "C2",
		duration: "12 semanas",
		lessons: 24,
		students: 38,
		image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
	},
	{
		id: "8",
		title: "Inglés para Negocios",
		description:
			"Vocabulario y habilidades específicas para el entorno laboral",
		level: "B2",
		duration: "8 semanas",
		lessons: 16,
		students: 72,
		image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
	{
		id: "9",
		title: "Conversación en Inglés",
		description: "Enfocado en mejorar la fluidez y confianza al hablar",
		level: "B1",
		duration: "10 semanas",
		lessons: 20,
		students: 84,
		image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
	},
];

const Courses = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [activeTab, setActiveTab] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredCourses, setFilteredCourses] =
		useState<CourseProps[]>(coursesData);

	// Handle level filter from URL parameters
	useEffect(() => {
		const levelParam = searchParams.get("level");
		if (levelParam) {
			setActiveTab(levelParam.toLowerCase());
		} else {
			setActiveTab("all");
		}

		filterCourses(levelParam || "all", searchTerm);
	}, [searchParams]);

	const filterCourses = (level: string, search: string) => {
		let filtered = coursesData;

		// Apply level filter
		if (level && level !== "all") {
			filtered = filtered.filter(
				(course) => course.level.toLowerCase() === level.toLowerCase()
			);
		}

		// Apply search filter
		if (search) {
			filtered = filtered.filter(
				(course) =>
					course.title.toLowerCase().includes(search.toLowerCase()) ||
					course.description
						.toLowerCase()
						.includes(search.toLowerCase())
			);
		}

		setFilteredCourses(filtered);
	};

	const handleTabChange = (value: string) => {
		setActiveTab(value);

		// Update URL parameters
		if (value === "all") {
			searchParams.delete("level");
		} else {
			searchParams.set("level", value.toUpperCase());
		}
		setSearchParams(searchParams);

		// Filter courses
		filterCourses(value, searchTerm);
	};

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		filterCourses(activeTab, searchTerm);
	};

	return (
		<div className="min-h-screen flex flex-col">
			<header className="sticky top-0 shadow-sm">
				<Navbar />
			</header>

			<main className="flex-grow pt-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="text-center mb-10">
						<h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
							Nuestros Cursos de Inglés
						</h1>
						<p className="mt-4 text-xl text-gray-500">
							Explora nuestra amplia selección de cursos diseñados
							para todos los niveles y necesidades.
						</p>
					</div>

					{/* Search Bar */}
					<div className="max-w-3xl mx-auto mb-8">
						<form onSubmit={handleSearch} className="flex gap-2">
							<Input
								type="text"
								placeholder="Buscar cursos..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="flex-1"
							/>
							<Button type="submit">
								<Search className="h-4 w-4 mr-2" />
								Buscar
							</Button>
						</form>
					</div>

					{/* Level Filter Tabs */}
					<Tabs
						value={activeTab}
						onValueChange={handleTabChange}
						className="mb-8"
					>
						<div className="flex justify-center">
							<TabsList className="mb-4">
								<TabsTrigger value="all">Todos</TabsTrigger>
								<TabsTrigger value="a1">A1</TabsTrigger>
								<TabsTrigger value="a2">A2</TabsTrigger>
								<TabsTrigger value="b1">B1</TabsTrigger>
								<TabsTrigger value="b2">B2</TabsTrigger>
								<TabsTrigger value="c1">C1</TabsTrigger>
							</TabsList>
						</div>

						<TabsContent value="all" className="mt-0">
							{filteredCourses.length > 0 ? (
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{filteredCourses.map((course) => (
										<CourseCard
											key={course.id}
											course={course}
										/>
									))}
								</div>
							) : (
								<div className="text-center py-12">
									<p className="text-lg text-gray-600">
										No se encontraron cursos con los
										criterios especificados.
									</p>
								</div>
							)}
						</TabsContent>

						{/* Other tabs will use the same content from the "all" tab since we're filtering everything at once */}
						<TabsContent value="a1" className="mt-0">
							{filteredCourses.length > 0 ? (
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{filteredCourses.map((course) => (
										<CourseCard
											key={course.id}
											course={course}
										/>
									))}
								</div>
							) : (
								<div className="text-center py-12">
									<p className="text-lg text-gray-600">
										No se encontraron cursos de nivel A1.
									</p>
								</div>
							)}
						</TabsContent>

						{/* Similar TabsContent for other levels */}
						<TabsContent value="a2" className="mt-0">
							{filteredCourses.length > 0 ? (
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{filteredCourses.map((course) => (
										<CourseCard
											key={course.id}
											course={course}
										/>
									))}
								</div>
							) : (
								<div className="text-center py-12">
									<p className="text-lg text-gray-600">
										No se encontraron cursos de nivel A2.
									</p>
								</div>
							)}
						</TabsContent>
						<TabsContent value="b1" className="mt-0">
							{filteredCourses.length > 0 ? (
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{filteredCourses.map((course) => (
										<CourseCard
											key={course.id}
											course={course}
										/>
									))}
								</div>
							) : (
								<div className="text-center py-12">
									<p className="text-lg text-gray-600">
										No se encontraron cursos de nivel B1.
									</p>
								</div>
							)}
						</TabsContent>
						<TabsContent value="b2" className="mt-0">
							{filteredCourses.length > 0 ? (
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{filteredCourses.map((course) => (
										<CourseCard
											key={course.id}
											course={course}
										/>
									))}
								</div>
							) : (
								<div className="text-center py-12">
									<p className="text-lg text-gray-600">
										No se encontraron cursos de nivel B2.
									</p>
								</div>
							)}
						</TabsContent>
						<TabsContent value="c1" className="mt-0">
							{filteredCourses.length > 0 ? (
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{filteredCourses.map((course) => (
										<CourseCard
											key={course.id}
											course={course}
										/>
									))}
								</div>
							) : (
								<div className="text-center py-12">
									<p className="text-lg text-gray-600">
										No se encontraron cursos de nivel C1.
									</p>
								</div>
							)}
						</TabsContent>
					</Tabs>

					{/* Display number of results */}
					<div className="flex justify-between items-center mb-6">
						<p className="text-gray-600">
							Mostrando {filteredCourses.length}{" "}
							{filteredCourses.length === 1 ? "curso" : "cursos"}
						</p>
						<div className="flex gap-2">
							{activeTab !== "all" && (
								<Badge className="bg-blue-100 text-blue-800">
									Nivel: {activeTab.toUpperCase()}
								</Badge>
							)}
							{searchTerm && (
								<Badge className="bg-purple-100 text-purple-800">
									Búsqueda: {searchTerm}
								</Badge>
							)}
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Courses;
