import { Helmet, HelmetProvider } from "react-helmet-async";
import Card from "../components/Card";

const FrontPage = () => {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <html lang="en" />
          <title>Blog A</title>
          <meta
            name="description"
            content="Description for Tutorial for React Helmet"
          />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>

        <Card
          navlink="/blog-b"
          cardbtntext="Explore Now"
          cardtext="Beautiful Nature"
          cardimg="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </HelmetProvider>
  );
};

export default FrontPage;
