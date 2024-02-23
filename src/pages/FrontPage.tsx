import Card from "../components/Card";
import MetaCard from "../components/MetaCard";

const FrontPage = () => {
  const helmetContext = {};

  return (
    <>
      <MetaCard
        title="Blog A"
        description="Description for Tutorial for React Helmet Blog A"
        navlink="/blog-b"
        cardbtntext="Explore Now"
        cardtext="Beautiful Nature"
        cardimg="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <div className="app">
        <Card
          navlink="/blog-b"
          cardbtntext="Explore Now"
          cardtext="Beautiful Nature"
          cardimg="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </>
  );
};

export default FrontPage;
