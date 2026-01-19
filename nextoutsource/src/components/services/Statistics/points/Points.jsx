import Point from "./Point";

const Points = ({ data }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return (
    <ul>
      {data?.map((point, index) => {
        const imgUrl = point.img?.url ? `${strapiUrl}${point.img.url}` : point.img;
        return (
          <Point
            key={point.id || index}
            img={imgUrl}
            description={point.description}
            heading={point.title}
          />
        );
      })}
    </ul>
  );
};

export default Points;
