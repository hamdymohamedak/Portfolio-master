import React from "react";
import { CgWebsite } from "react-icons/cg";
import { Image } from "larose-js";
function ProjectCards(props) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
    margin: "20px",
    overflow: "hidden",
    textAlign: "center",
    zIndex: "999",
  };

  const imageStyle = {
    height: "200px",
    width: "200px",
    objectFit: "cover",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    zIndex: "999",
  };

  return (
    <div style={cardStyle}>
      <Image edit={imageStyle} src={props.imgPath} alt={props.title} />
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontWeight: "bold", color: "white" }}>{props.title}</h3>
        <p style={{ textAlign: "justify", color: "white", fontWeight: "bold" }}>
          {props.description}
        </p>
        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            <CgWebsite /> &nbsp; Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;
