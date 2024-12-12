import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  sk: {
    home: "Domov",
    education: "Vzdelanie",
    skills: "Znalosti",
    work: "Práca",
    projects: "Projekty",
    languages: "Jazyky",
    leng: "SK",
    hometext: "Medzi moje záujmy patrí turistika, cestovanie, rád spoznávam iné krajiny a kultúry. Od detstva hrávam futbal, v minulosti súťažne, v súčasnosti už iba rekreačne a veľmi rád si ho pozriem v televízii. Rád počúvam hudbu a takisto si rád pozriem dobrý film",
    gymza: "Štúdium ukončené s maturitou z predmetov matematika a informatika",
    vut: "Bakalárska práca úspešne obhájená na tému program pre automatické hranie hier Solitaire a Hľadanie Mín, obidva programy písané v programovacom jazyky Python, ale neuspešné štátne skúšky",
    bp: "Bakalárska práca:",
    jobOneN: "Asistent manažéra - pomocný kuchár (USA)",
    jobTwoN: "Predajca vodných atrakcií (brigáda)",
    jobOneT: "Práca v Amerika v meste Greenport, pomoc pri prevádzkovaní reštaurácie, pomocné práce v kuchyni, nákupy tovaru, spracovanie surovín, práca v tíme kuchárov a čašníkov",
    jobTwoT: "Práca s luďmi, predaj lístkov na vodné atrakcie, riešenie problémov a pomoc pri prevádzkovaní areálu",  
    skOne: "Gymnánzium Hlinská Žilina",
    skTwo: "Vysoké Učenie Technické v Brne",  
  },
  en: {
    home: "Home",
    education: "Education",
    skills: "Skills",
    work: "Work",
    projects: "Projects",
    languages: "Languages",
    leng: "ENG",
    hometext: "My interests include hiking, traveling, and exploring other countries and cultures. Since childhood, I have been playing football, previously competitively, but now only recreationally, and I also enjoy watching it on television. I like listening to music and also enjoy watching a good movie",
    gymza: "Studied completed with a high school diploma in the subjects of mathematics and computer science",
    vut: "The bachelor's thesis was successfully defended on the topic 'Program for automatic playing of Solitaire and Minesweeper games', both programs written in the Python programming language, but the state exams were unsuccessful",
    bp: "Bachelor's thesis:",
    jobOneN: "Assistant Manager - Assistant Cook (USA)",
    jobTwoN: "Salesperson of water attractions (part-time job)",
    jobOneT: "Work in the USA in the city of Greenport, assisting with restaurant operations, kitchen help, inventory purchases, ingredient preparation, working as part of a team of chefs and waiters",
    jobTwoT: "Working with people, selling tickets for water attractions, problem-solving, and assisting in the operation of the facility",
    skOne: "Gymnasium Hlinská Žilina",
    skTwo: "Brno University of Technology",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("sk"); 

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "sk" ? "en" : "sk"));
  };

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
