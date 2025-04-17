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
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Users } from "lucide-react";

export interface CourseProps {
	id: string;
	title: string;
	description: string;
	level: string;
	duration: string;
	lessons: number;
	students: number;
	image: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
	const getLevelColor = (level: string) => {
		switch (level) {
			case "A1":
				return "bg-green-200 text-green-800";
			case "A2":
				return "bg-emerald-200 text-emerald-800";
			case "B1":
				return "bg-blue-200 text-blue-800";
			case "B2":
				return "bg-indigo-200 text-indigo-800";
			case "C1":
				return "bg-purple-200 text-purple-800";
			default:
				return "bg-gray-200 text-gray-800";
		}
	};

	return (
		<Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
			<div className="h-48 overflow-hidden grid">
				<img
					src={course.image}
					alt={course.title}
					className="col-start-1 row-start-1 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
			<CardHeader className="pb-2">
				<div className="flex items-center justify-between pb-2">
					<CardTitle className="text-xl">{course.title}</CardTitle>
					<div className="col-start-1 row-start-1">
						<Badge className={`${getLevelColor(course.level)}`}>
							Nivel {course.level}
						</Badge>
					</div>
				</div>
				<CardDescription>{course.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex-grow">
				<div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2">
					<div className="flex items-center">
						<Clock className="h-4 w-4 mr-1 text-gray-400" />
						<span>{course.duration}</span>
					</div>
					<div className="flex items-center">
						<BookOpen className="h-4 w-4 mr-1 text-gray-400" />
						<span>{course.lessons} lecciones</span>
					</div>
					<div className="flex items-center col-span-2">
						<Users className="h-4 w-4 mr-1 text-gray-400" />
						<span>{course.students} estudiantes</span>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">
					<Link to={`/courses/${course.id}`} className="w-full">
						Más Información
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default CourseCard;
