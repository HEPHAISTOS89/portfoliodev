import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* <img src={imgUrl} /> */}
        <a href={link}> <img src={imgUrl} alt="" onClick={handleClick} /></a>
        <div className="proj-txtx">
        {/* <a href={link}> <img src={imgUrl} alt="" onClick={handleClick} /></a> */}
        <a href={link}>
          <h4>{title}</h4>
          <span>{description}</span>
          </a>
        </div>
      </div>
      
    </Col>
  )
 
}
