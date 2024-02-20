import { Link } from "react-router-dom";

type CardProps = {
    cardimg: string;
    cardtext: string;
    cardbtntext: string;
    navlink: string;
}

const Card = ({cardimg, cardtext, cardbtntext, navlink}: CardProps) => {
  return (
    <div className="app_container">
      <div className="img_box">
        <img
          src={cardimg}
          alt="Card Image"
        />
      </div>
      <p className="descrip">{cardtext}</p>
      <Link to={navlink}>
        <button type="button">{cardbtntext}</button>
      </Link>
    </div>
  );
};

export default Card;
