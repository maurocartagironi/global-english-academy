
import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-16 flex items-center gap-1"
      onClick={toggleLanguage}
    >
      <Globe className="h-4 w-4" />
      {language.toUpperCase()}
    </Button>
  );
}
