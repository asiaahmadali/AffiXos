import NavBar from "./NavBar";
import Hero from "./Hero-section";
function Header() {
  return (
    <>
      <div
        className="bg-no-repeat w-full"
        style={{ backgroundImage: "url('/images/Background.png')" }}
      >
        <NavBar></NavBar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default Header;
