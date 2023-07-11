import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,view,code }) => {
 
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <div>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          <div>
            <Button href={view} target="blank" className="project_button" variant="primary">
             
                View 
              
            </Button>
            <Button href={code} target="blank"  className="code_button">
             Code
            </Button>
           
          </div>
        </div>
      </div>
    </Col>
  );
};
