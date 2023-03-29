import Image from "next/image";
import LogoLight from '../assets/logoLight.png'
import Button from "./Button";

const Navigation = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <Image src={LogoLight} width={50} height={50} alt="r.dev" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  <div>
    <Button/>
  </div>
</nav>            
        </div>
    );
}

export default Navigation;
