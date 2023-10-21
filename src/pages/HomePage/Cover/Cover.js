import "aos/dist/aos.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { SymbolArrowRight } from "~/utils/symbols";
import SocialNav from "../../../components/SocialNav/SocialNav";

import programmer from "~/assets/images/programmer.svg";

Cover.propTypes = {};

function Cover(props) {
  return (
    <div className="bg-altlight">
      <Container>
        <Row>
          <Col lg={6}>
            <Image src={programmer} />
          </Col>
          <Col lg={6}>
            <div className="mt-5">
              <p className="lead text-uppercase">Hello!</p>
              <h1
                className="fw-bold "
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="400"
              >
                I'm Tho Do Duc
              </h1>
              <p
                class="lead fw-normal mt-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Full Stack Developer
              </p>
              <div data-aos="fade-up" data-aos-delay="200">
                <SocialNav />
              </div>
              <Button
                className="btn btn-primary rounded-pill mt-4 px-3 fw-semibold"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Get In Touch <SymbolArrowRight />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cover;
