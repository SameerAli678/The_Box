import Image from "next/image";
import designs from "../../../public/images/designs.png";
import team from "../../../public/images/team.png";

const Reputation = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Reputation</h2>
      <div className="row  gx-4 gy-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border rounded p-4 h-100 d-flex flex-column">
            <Image src={team} alt="team" />
            <h5 className="fw-bold mt-3">Best Services</h5>
            <p className="text-muted mt-2">
              Nullam senectus porttitor in eget. Eget rutrum leo interdum.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border rounded p-4 h-100 d-flex flex-column">
            <Image src={team} alt="team" />
            <h5 className="fw-bold mt-3">Best Teams</h5>
            <p className="text-muted mt-2">
              Cursus semper tellus volutpat aliquet lacus.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border rounded p-4 h-100 d-flex flex-column">
            <Image src={designs} alt="designs" />
            <h5 className="fw-bold mt-3">Best Designs</h5>
            <p className="text-muted mt-2">
              Ultricies at ipsum nunc, tristique nam lectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reputation;
