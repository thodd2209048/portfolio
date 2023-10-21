import { Col, Image, Row } from "react-bootstrap";
import avatar from "~/assets/avatar.jpg";

About.propTypes = {};

function About({ aboutRef }) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - 1990;
  return (
    <div ref={aboutRef}>
      {/* <div className="container-lg container-fluid"> */}
      <Row>
        <Col md={6} className="text-start">
          <h2 className="my-3">Hello! I'm Tho Do Duc</h2>
          <p className="mb-3">
            I am a newcomer to the field of web application development, but I
            have an understanding of front-end programming with React and
            Bootstrap. Additionally, I possess a grasp of back-end programming
            using Java. My goal is to build a career in back-end programming and
            contribute to web application development projects. I am a fast
            learner, always eager to learn and dedicate myself to enhancing my
            skills.
          </p>
          <Row>
            <Col sm={2}>
              <div className="pb-1">Age:</div>
            </Col>
            <Col sm={10}>
              <div className="pb-1 fw-bold">{age}</div>
            </Col>
            <Col sm={2}>
              <div className="pb-1">Email:</div>
            </Col>
            <Col sm={10}>
              <div className="pb-1 fw-bold">thodd90@gmail.com</div>
            </Col>
            <Col sm={2}>
              <div className="pb-1">Zalo:</div>
            </Col>
            <Col sm={10}>
              <div className="pb-1 fw-bold">+84 988201048</div>
            </Col>
            <Col sm={2}>
              <div className="pb-1">Phone:</div>
            </Col>
            <Col sm={10}>
              <div className="pb-1 fw-bold">+84 988201048</div>
            </Col>
            <Col sm={2}>
              <div className="pb-1">Address: </div>
            </Col>
            <Col sm={10}>
              <div className="pb-1 fw-bold">Hanoi, Vietnam</div>
            </Col>
          </Row>
        </Col>
        <Col md={5} className="d-flex px-5 justify-content-end offset-md-1">
          <div>
            <Image
              className="avatar img-fluid mt-5 rounded-5"
              src={avatar}
              alt="example"
              data-aos="fade-left"
            />
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </div>
  );
}

export default About;
