import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Helmet } from "react-helmet-async";

const article = {
  title: "React Count Seo App",
  desc: "Create a React Count Seo App with Vite and React Helmet Async",
  desc2:
    "Simple way to create a React Count Seo App with Vite and React Helmet Async",
  img: "https://vitejs.dev/logo.svg",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{article.title}</title>
        <meta content={article.desc} name="description" />
        <meta content={article.title} property="og:title" />
        <meta content={article.desc} property="og:description" />
        <meta content={article.desc2} property="og:description" />
        <meta content={article.img} property="og:image" />
        <meta content="https://axcora.com/getaxcoracms" property="og:author" />
        <meta content={article.title} name="facebook:title" />
        <meta content="website" property="og:type" />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta content={article.img} name="facebook:image" />
        <meta content={article.title} property="og:site_name" />
        <meta content={article.desc} property="facebook:description" />
        <meta content={article.desc2} property="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <link rel="apple-touch-icon" href={article.img} />

        <link href={article.img} rel="icon" type="image/x-icon" />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta content={article.img} name="twitter:image" />
        <meta content={article.desc} name="twitter:description" />
        <meta content={article.title} name="twitter:title" />
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
