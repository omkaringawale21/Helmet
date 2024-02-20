import { Helmet, HelmetProvider } from "react-helmet-async";
import Card from "../components/Card";

const LastPage = () => {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <html lang="en" />
          <title>Blog B</title>
          <meta
            name="description"
            content="Description for Tutorial for React Helmet"
          />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>

        <Card
          navlink="/blog-a"
          cardbtntext="Visit It"
          cardtext="Childhood Memories"
          cardimg="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </HelmetProvider>
  );
};

export default LastPage;
