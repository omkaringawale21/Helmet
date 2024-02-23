import { Head } from "react-static";

type CardProps = {
  title: string;
  description: string;
  cardimg: string;
  cardtext: string;
  cardbtntext: string;
  navlink: string;
};

const MetaCard = ({
  title,
  description,
  cardtext,
  navlink,
  cardimg,
  cardbtntext,
}: CardProps) => {
  return (
    <Head>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={cardimg} />
      <link rel="icon" type="image/x-icon" href={cardimg} />
      <link href={cardimg} title={cardimg} />
      <meta name="og:description" content={cardtext} />
      <link href={navlink} title={navlink} />
      <meta name="og:description" content={cardbtntext} />
    </Head>
  );
};

export default MetaCard;
