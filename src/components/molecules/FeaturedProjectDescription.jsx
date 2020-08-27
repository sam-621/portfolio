import React from "react";
import "../../assets/styles/components/molecules/feturedProjectDescription.css";

import Subtitle from "../atoms/text/Subtitles";
import Content from "../atoms/text/Content";
import Node from "../../assets/img/node-js.svg";
import Typescript from "../../assets/img/typescript.svg";
import MySQL from "../../assets/img/mysql.svg";
import PrimaryButton from "../../components/atoms/btn/PrimaryButton";
import SecondaryButton from "../../components/atoms/btn/SecondaryButton";
import { Link } from "react-router-dom";

const FeaturedProjectDescription = ({
  title,
  littleDescription,
  technologies,
  Repo,
  ID,
}) => {
  const iconsTechnologies = [Node, Typescript, MySQL];
  return (
    <div>
      <div>
        <Subtitle Content={title} />
        <Content Paragraph={littleDescription} />
      </div>
      <div>
        <Subtitle Content="Technolgies" />
        <div className="FeaturedProjectDescription-Technologies">
          {technologies.map((technology, index) => {
            return (
              <img
                key={index}
                src={iconsTechnologies[index]}
                width="50px"
                height="50px"
              />
            );
          })}
        </div>
      </div>
      <div className="FeaturedProjects-btn">
        <Link to={`/project/${ID}`}>
          <PrimaryButton Content="Details" />
        </Link>
        <SecondaryButton Content="Code" url={Repo} />
      </div>
    </div>
  );
};

export default FeaturedProjectDescription;
