
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export interface DownloadItemProps {
  id: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  level: string;
  restricted: boolean;
  downloadUrl?: string;
}

const DownloadableItem = ({ item }: { item: DownloadItemProps }) => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be replaced by actual auth state

  const handleDownload = () => {
    if (item.restricted && !isLoggedIn) {
      toast({
        title: "Acceso restringido",
        description: "Debes iniciar sesión para descargar este contenido.",
        variant: "destructive",
      });
    } else if (item.downloadUrl) {
      // In a real app, we'd use the actual URL
      toast({
        title: "Descarga iniciada",
        description: `Descargando ${item.title}...`,
      });
      
      // Simulate download action
      setTimeout(() => {
        toast({
          title: "Descarga completada",
          description: `${item.title} se ha descargado correctamente.`,
        });
      }, 2000);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "A1":
        return "bg-green-100 text-green-800";
      case "A2":
        return "bg-emerald-100 text-emerald-800";
      case "B1":
        return "bg-blue-100 text-blue-800";
      case "B2":
        return "bg-indigo-100 text-indigo-800";
      case "C1":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-3">
            <FileText className="h-8 w-8 text-primary mt-1" />
            <div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline">{item.fileType}</Badge>
                <Badge className={getLevelColor(item.level)}>Nivel {item.level}</Badge>
              </div>
            </div>
          </div>
          {item.restricted && (
            <Lock className="h-5 w-5 text-amber-500" />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        <p className="text-xs text-gray-400 mt-2">Tamaño: {item.fileSize}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleDownload} 
          className="w-full flex items-center justify-center gap-2"
          variant={item.restricted && !isLoggedIn ? "outline" : "default"}
        >
          <Download className="h-4 w-4" />
          <span>{item.restricted && !isLoggedIn ? "Requiere inicio de sesión" : "Descargar"}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DownloadableItem;
