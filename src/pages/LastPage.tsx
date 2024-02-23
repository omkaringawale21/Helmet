import Card from "../components/Card";
import MetaCard from "../components/MetaCard";

const LastPage = () => {
  const helmetContext = {};

  return (
    <>
      <MetaCard
        title="Blog B"
        description="Description for Tutorial for React Helmet Blog B"
        navlink="/blog-a"
        cardbtntext="Visit It"
        cardtext="Childhood Memories"
        cardimg="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <div className="app">
        <Card
          navlink="/blog-a"
          cardbtntext="Visit It"
          cardtext="Childhood Memories"
          cardimg="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </>
  );
};

export default LastPage;
