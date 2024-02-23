import { Link } from "react-router-dom";

type CardProps = {
  cardimg: string;
  cardtext: string;
  cardbtntext: string;
  navlink: string;
};

const Card = ({ cardimg, cardtext, cardbtntext, navlink }: CardProps) => {
  return (
    <div className="app_container">
      <img className="img" src={cardimg} alt="Card Image" />
      <p className="descrip">{cardtext}</p>
      <Link to={navlink} className="card_btn">
        {cardbtntext}
      </Link>
    </div>
  );
};

export default Card;
