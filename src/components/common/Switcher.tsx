import { Moon, Sun } from "lucide-react";
import { useDarkSide } from "@/hooks";
import { Button } from "../ui/button";

export const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const isDark = colorTheme === "light";

  const toggleTheme = () => {
    setTheme(colorTheme);
  };
  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
