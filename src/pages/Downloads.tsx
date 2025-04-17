import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import DownloadableItem, { DownloadItemProps } from "@/components/DownloadableItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, Search, Filter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

// Mock downloadable content data
const downloadableItems: DownloadItemProps[] = [
  {
    id: "1",
    title: "Guía de Gramática Básica",
    description: "Aprende las reglas fundamentales de la gramática inglesa con ejercicios prácticos.",
    fileType: "PDF",
    fileSize: "2.4 MB",
    level: "A1",
    restricted: false,
    downloadUrl: "/downloads/grammar_guide.pdf"
  },
  {
    id: "2",
    title: "Vocabulario para Principiantes",
    description: "Lista completa de palabras esenciales para estudiantes de nivel básico.",
    fileType: "PDF",
    fileSize: "1.8 MB",
    level: "A1",
    restricted: false,
    downloadUrl: "/downloads/beginner_vocabulary.pdf"
  },
  {
    id: "3",
    title: "Ejercicios de Gramática - Nivel Elemental",
    description: "Practica los tiempos verbales básicos y la estructura de oraciones.",
    fileType: "PDF",
    fileSize: "3.2 MB",
    level: "A2",
    restricted: false,
    downloadUrl: "/downloads/elementary_exercises.pdf"
  },
  {
    id: "4",
    title: "Listening Practice - Conversaciones Cotidianas",
    description: "Archivos de audio con conversaciones sencillas para mejorar la comprensión auditiva.",
    fileType: "MP3",
    fileSize: "18.5 MB",
    level: "A2",
    restricted: true,
    downloadUrl: "/downloads/listening_practice.zip"
  },
  {
    id: "5",
    title: "Guía de Expresiones Intermedias",
    description: "Frases y expresiones comunes para conversaciones de nivel intermedio.",
    fileType: "PDF",
    fileSize: "2.9 MB",
    level: "B1",
    restricted: true,
    downloadUrl: "/downloads/intermediate_expressions.pdf"
  },
  {
    id: "6",
    title: "Business English Vocabulary",
    description: "Vocabulario especializado para entornos profesionales y de negocios.",
    fileType: "PDF",
    fileSize: "4.1 MB",
    level: "B2",
    restricted: true,
    downloadUrl: "/downloads/business_vocabulary.pdf"
  },
  {
    id: "7",
    title: "Advanced Grammar Exercises",
    description: "Ejercicios avanzados de gramática con explicaciones detalladas.",
    fileType: "PDF",
    fileSize: "5.3 MB",
    level: "C1",
    restricted: true,
    downloadUrl: "/downloads/advanced_grammar.pdf"
  },
  {
    id: "8",
    title: "Preparación para Exámenes Oficiales",
    description: "Materiales de práctica para exámenes TOEFL, IELTS, Cambridge y otros.",
    fileType: "ZIP",
    fileSize: "32.7 MB",
    level: "C1",
    restricted: true,
    downloadUrl: "/downloads/exam_preparation.zip"
  },
  {
    id: "9",
    title: "Pronunciation Guide",
    description: "Guía completa de pronunciación con ejemplos de audio.",
    fileType: "ZIP",
    fileSize: "24.2 MB",
    level: "B1",
    restricted: true,
    downloadUrl: "/downloads/pronunciation_guide.zip"
  }
];

const Downloads = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<DownloadItemProps[]>(downloadableItems);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be replaced by actual auth state

  const filterItems = (level: string, search: string) => {
    let filtered = downloadableItems;
    
    // Apply level filter
    if (level && level !== "all") {
      filtered = filtered.filter(item => item.level.toLowerCase() === level.toLowerCase());
    }
    
    // Apply search filter
    if (search) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase()) || 
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    setFilteredItems(filtered);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    filterItems(value, searchTerm);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterItems(activeTab, searchTerm);
  };

  const restrictedCount = filteredItems.filter(item => item.restricted).length;
  const nonRestrictedCount = filteredItems.filter(item => !item.restricted).length;

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
              Material Didáctico
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Descarga recursos y material complementario para mejorar tu aprendizaje.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Buscar material..."
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
          <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
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
              {!isLoggedIn && restrictedCount > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <Lock className="h-5 w-5 text-amber-500 mr-3" />
                    <div>
                      <h3 className="font-medium text-amber-800">Contenido restringido</h3>
                      <p className="text-amber-700 text-sm">
                        {restrictedCount} {restrictedCount === 1 ? "recurso requiere" : "recursos requieren"} iniciar sesión para su descarga.
                      </p>
                    </div>
                  </div>
                  <Link to="/login">
                    <Button variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-100">
                      Iniciar Sesión
                    </Button>
                  </Link>
                </div>
              )}

              {filteredItems.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <DownloadableItem key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No se encontraron materiales con los criterios especificados.</p>
                </div>
              )}
            </TabsContent>

            {/* Other tabs will use the same content from the "all" tab since we're filtering everything at once */}
            <TabsContent value="a1" className="mt-0">
              {filteredItems.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <DownloadableItem key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No se encontraron materiales con los criterios especificados.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="a2" className="mt-0">
              {filteredItems.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <DownloadableItem key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No se encontraron materiales con los criterios especificados.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="b1" className="mt-0">
              {filteredItems.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <DownloadableItem key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No se encontraron materiales con los criterios especificados.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="b2" className="mt-0">
              {filteredItems.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <DownloadableItem key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No se encontraron materiales con los criterios especificados.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="c1" className="mt-0">
              {filteredItems.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <DownloadableItem key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No se encontraron materiales con los criterios especificados.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Display number of results */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Mostrando {filteredItems.length} {filteredItems.length === 1 ? "recurso" : "recursos"}
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

export default Downloads;
