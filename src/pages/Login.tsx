import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Lock, User, AlertCircle, Github, Globe } from "lucide-react";

const Login = () => {
	const [searchParams] = useSearchParams();
	const [activeTab, setActiveTab] = useState<"login" | "register">("login");
	const { toast } = useToast();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	useEffect(() => {
		const registerParam = searchParams.get("register");
		if (registerParam === "true") {
			setActiveTab("register");
		}
	}, [searchParams]);

	const validateEmail = (email: string) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) {
			setEmailError("El correo electrónico es obligatorio");
			return false;
		} else if (!regex.test(email)) {
			setEmailError("Introduce un correo electrónico válido");
			return false;
		}
		setEmailError("");
		return true;
	};

	const validatePassword = (password: string) => {
		if (!password) {
			setPasswordError("La contraseña es obligatoria");
			return false;
		} else if (password.length < 6) {
			setPasswordError("La contraseña debe tener al menos 6 caracteres");
			return false;
		}
		setPasswordError("");
		return true;
	};

	const validateConfirmPassword = (
		password: string,
		confirmPassword: string
	) => {
		if (password !== confirmPassword) {
			setConfirmPasswordError("Las contraseñas no coinciden");
			return false;
		}
		setConfirmPasswordError("");
		return true;
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		const isEmailValid = validateEmail(email);
		const isPasswordValid = validatePassword(password);

		if (!isEmailValid || !isPasswordValid) {
			return;
		}

		setIsLoading(true);

		setTimeout(() => {
			toast({
				title: "Inicio de sesión exitoso",
				description: "Bienvenido de nuevo a Global English Academy",
			});
			navigate("/");
			setIsLoading(false);
		}, 1500);
	};

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();

		const isEmailValid = validateEmail(email);
		const isPasswordValid = validatePassword(password);
		const isConfirmPasswordValid = validateConfirmPassword(
			password,
			confirmPassword
		);

		if (
			!isEmailValid ||
			!isPasswordValid ||
			!isConfirmPasswordValid ||
			!name
		) {
			if (!name) {
				toast({
					title: "Error en el formulario",
					description: "Por favor, introduce tu nombre",
					variant: "destructive",
				});
			}
			return;
		}

		setIsLoading(true);

		setTimeout(() => {
			toast({
				title: "Registro exitoso",
				description: "¡Bienvenido a Global English Academy!",
			});
			navigate("/");
			setIsLoading(false);
		}, 1500);
	};

	const handleSocialLogin = (provider: string) => {
		toast({
			title: `Inicio de sesión con ${provider}`,
			description: `Esta funcionalidad estará disponible próximamente.`,
		});
	};

	return (
		<div className="min-h-screen flex flex-col">
			<header className="sticky top-0 shadow-sm">
				<Navbar />
			</header>

			<main className="flex-grow flex items-center justify-center py-16 px-4">
				<Card className="w-full max-w-md shadow-lg">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">
							Accede a tu cuenta
						</CardTitle>
						<CardDescription>
							Inicia sesión o regístrate para acceder a todo el
							contenido
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs
							value={activeTab}
							onValueChange={(value) =>
								setActiveTab(value as "login" | "register")
							}
							className="w-full"
						>
							<TabsList className="grid grid-cols-2 mb-8">
								<TabsTrigger value="login">
									Iniciar Sesión
								</TabsTrigger>
								<TabsTrigger value="register">
									Registrarse
								</TabsTrigger>
							</TabsList>

							<TabsContent value="login">
								<form
									onSubmit={handleLogin}
									className="space-y-4"
								>
									<div className="space-y-2">
										<Label htmlFor="email">
											Correo electrónico
										</Label>
										<div className="relative">
											<Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
											<Input
												id="email"
												type="email"
												placeholder="correo@ejemplo.com"
												className={`pl-10 ${
													emailError
														? "border-red-500"
														: ""
												}`}
												value={email}
												onChange={(e) =>
													setEmail(e.target.value)
												}
												onBlur={(e) =>
													validateEmail(
														e.target.value
													)
												}
											/>
										</div>
										{emailError && (
											<div className="text-red-500 text-sm flex items-center">
												<AlertCircle className="h-4 w-4 mr-1" />
												{emailError}
											</div>
										)}
									</div>

									<div className="space-y-2">
										<div className="flex justify-between">
											<Label htmlFor="password">
												Contraseña
											</Label>
											<Link
												to="/forgot-password"
												className="text-sm text-primary hover:underline"
											>
												¿Olvidaste tu contraseña?
											</Link>
										</div>
										<div className="relative">
											<Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
											<Input
												id="password"
												type="password"
												placeholder="••••••"
												className={`pl-10 ${
													passwordError
														? "border-red-500"
														: ""
												}`}
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
												onBlur={(e) =>
													validatePassword(
														e.target.value
													)
												}
											/>
										</div>
										{passwordError && (
											<div className="text-red-500 text-sm flex items-center">
												<AlertCircle className="h-4 w-4 mr-1" />
												{passwordError}
											</div>
										)}
									</div>

									<Button
										type="submit"
										className="w-full"
										disabled={isLoading}
									>
										{isLoading
											? "Iniciando sesión..."
											: "Iniciar Sesión"}
									</Button>
								</form>

								<div className="mt-6">
									<div className="relative">
										<div className="absolute inset-0 flex items-center">
											<Separator />
										</div>
										<div className="relative flex justify-center text-xs uppercase">
											<span className="bg-white px-2 text-gray-500">
												O continuar con
											</span>
										</div>
									</div>

									<div className="mt-4 grid grid-cols-2 gap-3">
										<Button
											variant="outline"
											type="button"
											onClick={() =>
												handleSocialLogin("Google")
											}
											className="flex items-center justify-center gap-2"
										>
											<Globe className="h-4 w-4" />
											Google
										</Button>
										<Button
											variant="outline"
											type="button"
											onClick={() =>
												handleSocialLogin("GitHub")
											}
											className="flex items-center justify-center gap-2"
										>
											<Github className="h-4 w-4" />
											GitHub
										</Button>
									</div>
								</div>
							</TabsContent>

							<TabsContent value="register">
								<form
									onSubmit={handleRegister}
									className="space-y-4"
								>
									<div className="space-y-2">
										<Label htmlFor="register-name">
											Nombre
										</Label>
										<div className="relative">
											<User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
											<Input
												id="register-name"
												type="text"
												placeholder="Tu nombre"
												className="pl-10"
												value={name}
												onChange={(e) =>
													setName(e.target.value)
												}
												required
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="register-email">
											Correo electrónico
										</Label>
										<div className="relative">
											<Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
											<Input
												id="register-email"
												type="email"
												placeholder="correo@ejemplo.com"
												className={`pl-10 ${
													emailError
														? "border-red-500"
														: ""
												}`}
												value={email}
												onChange={(e) =>
													setEmail(e.target.value)
												}
												onBlur={(e) =>
													validateEmail(
														e.target.value
													)
												}
											/>
										</div>
										{emailError && (
											<div className="text-red-500 text-sm flex items-center">
												<AlertCircle className="h-4 w-4 mr-1" />
												{emailError}
											</div>
										)}
									</div>

									<div className="space-y-2">
										<Label htmlFor="register-password">
											Contraseña
										</Label>
										<div className="relative">
											<Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
											<Input
												id="register-password"
												type="password"
												placeholder="••••••"
												className={`pl-10 ${
													passwordError
														? "border-red-500"
														: ""
												}`}
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
												onBlur={(e) =>
													validatePassword(
														e.target.value
													)
												}
											/>
										</div>
										{passwordError && (
											<div className="text-red-500 text-sm flex items-center">
												<AlertCircle className="h-4 w-4 mr-1" />
												{passwordError}
											</div>
										)}
									</div>

									<div className="space-y-2">
										<Label htmlFor="confirm-password">
											Confirmar contraseña
										</Label>
										<div className="relative">
											<Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
											<Input
												id="confirm-password"
												type="password"
												placeholder="••••••"
												className={`pl-10 ${
													confirmPasswordError
														? "border-red-500"
														: ""
												}`}
												value={confirmPassword}
												onChange={(e) =>
													setConfirmPassword(
														e.target.value
													)
												}
												onBlur={() =>
													validateConfirmPassword(
														password,
														confirmPassword
													)
												}
											/>
										</div>
										{confirmPasswordError && (
											<div className="text-red-500 text-sm flex items-center">
												<AlertCircle className="h-4 w-4 mr-1" />
												{confirmPasswordError}
											</div>
										)}
									</div>

									<Button
										type="submit"
										className="w-full"
										disabled={isLoading}
									>
										{isLoading
											? "Creando cuenta..."
											: "Crear Cuenta"}
									</Button>
								</form>

								<div className="mt-6">
									<div className="relative">
										<div className="absolute inset-0 flex items-center">
											<Separator />
										</div>
										<div className="relative flex justify-center text-xs uppercase">
											<span className="bg-white px-2 text-gray-500">
												O continuar con
											</span>
										</div>
									</div>

									<div className="mt-4 grid grid-cols-2 gap-3">
										<Button
											variant="outline"
											type="button"
											onClick={() =>
												handleSocialLogin("Google")
											}
											className="flex items-center justify-center gap-2"
										>
											<Globe className="h-4 w-4" />
											Google
										</Button>
										<Button
											variant="outline"
											type="button"
											onClick={() =>
												handleSocialLogin("GitHub")
											}
											className="flex items-center justify-center gap-2"
										>
											<Github className="h-4 w-4" />
											GitHub
										</Button>
									</div>
								</div>
							</TabsContent>
						</Tabs>
					</CardContent>
					<CardFooter className="flex justify-center">
						<p className="text-sm text-gray-600">
							Al continuar, aceptas nuestros{" "}
							<Link
								to="/terms"
								className="text-primary hover:underline"
							>
								Términos de servicio
							</Link>{" "}
							y{" "}
							<Link
								to="/privacy"
								className="text-primary hover:underline"
							>
								Política de privacidad
							</Link>
						</p>
					</CardFooter>
				</Card>
			</main>

			<Footer />
		</div>
	);
};

export default Login;
