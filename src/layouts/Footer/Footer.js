import SocialNav from "~/components/SocialNav/SocialNav";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className="text-center bg-light container-fluid">
      <div className="container py-4 d-flex flex-column align-items-center">
        <h3>Tho Do Duc</h3>
        <p>Full-stack developer</p>
        <SocialNav />
      </div>
    </footer>
  );
}

export default Footer;
