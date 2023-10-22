import { certificates } from "~/utils/certificates";

MyCertificates.propTypes = {};

function MyCertificates({ certificatesRef }) {
  const certificatesList = [certificates.metaFrontEnd];
  return (
    <>
      <div className="row py-3" ref={certificatesRef}>
        <div
          className="col-md-6 col-sm-8 offset-md-3 offset-sm-2"
          data-aos="fade-left"
        >
          <div className="text-start">
            {certificatesList.map((item, index) => (
              <div key={index} className="row border rounded p-1">
                <div className="col-8 col-sm-9 col-lg-10">
                  <p className="h5">{item.name}</p>
                  <p>Issued {item.issueDate}</p>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex align-items-center justify-content-end">
                  <div className="w-100">
                    <img
                      className="img-fluid rounded"
                      src={item.picture.url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCertificates;
