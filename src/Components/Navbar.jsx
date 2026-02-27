import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router";


const Navbar = () => {
  return (
      <>
          <div className="flex justify-around items-center h-[80px] text-white bg-[oklch(20.8%_0.042_265.755)]">
              <div className="felx flex items-center text-[oklch(68.6%_0.179_58.318)] gap-[10px]">
                  <FontAwesomeIcon icon={faVideo} size="2x" />
              <h1 className="text-[25px] font-bold">Movie Review</h1>
              </div>
              <div>
                  <ul className="flex flex-row text-[22px] gap-[30px] font-semibold">
                      <Link to={""}><li>Home</li></Link>
                        <Link to={"review"}><li>Reviews</li></Link>
                  </ul>
              </div>
          </div>
          <Outlet />
      </>
  )
}

export default Navbar
