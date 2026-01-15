import React                from "react";
import { Card } from "antd";
import "./ChallengeCard.scss";

const ChallengeCard = ({
                         heading,
                         description,
                         points,
                         headingColor,
                         backgroundClr,
                         backImg,
                         height
                       }) => {
  return (
    <Card
      data-aos="fade-up"
      data-aos-once="false"
      hoverable
      className="ChallengeCard"
      style={ {
        backgroundColor: backgroundClr || null
      } }
      cover={
        <img
          src={ `${ backImg }` }
          alt="Clinic Challenge"
          style={ {
            height: height || 240,
            objectFit: "cover",
            objectPosition: height && "top",
          } }
        />
      }
    >
      <p className={ "heading" } style={ { color: headingColor } }>
        { heading }
      </p>
      <p className={ "description" }>
        { description }
      </p>
      {
        points || null
      }
    </Card>
  );
};

export default ChallengeCard;
