import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h4 style={{ cursor: 'pointer' }}>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}