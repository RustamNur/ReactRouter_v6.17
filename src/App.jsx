import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RouterLayout from "./layout/RouterLayout";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import ContactLayout from "./layout/ContactLayout";
import PagesNotFound from "./pages/PagesNotFound";
import ArticlesLayout from "./layout/ArticlesLayout";
import Articles from "./pages/articles/Articles";
import ArticlesDetail from "./pages/articles/ArticlesDetail";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="articles" element={<ArticlesLayout />}>
          <Route index element={<Articles />} />
          <Route path=":id" element={<ArticlesDetail />} />
        </Route>
        <Route path="*" element={<PagesNotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
