import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectsContainer from "./components/ProjectsContainer";
import textLibrary from "./languages/text.json";

function App() {
  const [language,setLanguage]= useState("de")
  const [text,setText]=useState({...textLibrary,
    language:language
  })
  useEffect(() => {
  setText({...textLibrary,
    language:language
  })
  }, [language])
  return (
    <div className="App">
      <Navbar text={text} setLanguage={setLanguage} />
      <h1>{text[text.language].greeting}</h1>
      <AboutMe text={text} />
      <ProjectsContainer text={text} />
      <Footer text={text} />
      {(language !== "en")&&<button onClick={()=>setLanguage("en")}>change to englisch</button>}
      {(language !== "de")&&<button onClick={()=>setLanguage("de")}>zu deutsch wechseln</button>}
    </div>
  );
}

export default App;
