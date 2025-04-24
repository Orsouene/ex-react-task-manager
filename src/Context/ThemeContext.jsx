import { createContext, useContext, useState, useEffect } from "react";
//creazione del il context
const ThemeContext = createContext();
// uso dell context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Inizializzo con il light mode (false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Controllo se c'è un tema salvato nel localStorage
    const savedTheme = localStorage.getItem("theme");

    // Se nel localStorage c'è "dark", imposto il tema su dark
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? "dark" : "light"; // Cambia tema
      document.body.classList.toggle("dark", !prev); 
      // Applico o rimuovo la classe dark
      localStorage.setItem("theme", newTheme); // Salvo il tema nel localStorage
      return !prev; // Cambio lo stato
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
