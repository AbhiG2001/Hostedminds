import React from "react";
import ContactForm from "./Components/ContactForm.jsx";
import FAQ from "./Components/Faq.jsx";
import BlogPage from "./Components/BlogPage.jsx"
import BlogPages from "./Components/BlogPages.jsx"
import Animation from "./Components/Animation.jsx";

const App = () => {
  return (
    <div>
      <ContactForm />
      <FAQ />
      <BlogPage/>
      <BlogPages/>
      <Animation />
    </div>
  );
};

export default App;
