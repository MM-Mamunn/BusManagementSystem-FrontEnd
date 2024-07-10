import React from "react";
import { NavLink } from "react-router-dom";
import driverImage from "../pages/image/bus3.png";

export default function Header() {
  return (
    <>
    <div className="bg-black"></div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a style={{ color: "grey" }} className="btn text-xl">
            Bus Management
          </a>
        </div>
        <div className="flex-none">
          <ul style={{ color: "grey" }} className="menu menu-horizontal px-2">
            <li  style={{margin:"6px" }}>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-300 mt-1 mb-1  rounded  p-2   font-bold"
                    : ""
                }
              >
                <svg style ={{color:"grey"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M9.06165 4.82633L3.23911 9.92134C2.7398 10.3583 3.07458 11.1343 3.76238 11.1343C4.18259 11.1343 4.52324 11.4489 4.52324 11.8371V15.0806C4.52324 17.871 4.52324 19.2662 5.46176 20.1331C6.40029 21 7.91082 21 10.9319 21H13.0681C16.0892 21 17.5997 21 18.5382 20.1331C19.4768 19.2662 19.4768 17.871 19.4768 15.0806V11.8371C19.4768 11.4489 19.8174 11.1343 20.2376 11.1343C20.9254 11.1343 21.2602 10.3583 20.7609 9.92134L14.9383 4.82633C13.5469 3.60878 12.8512 3 12 3C11.1488 3 10.4531 3.60878 9.06165 4.82633Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 16H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>Home
              </NavLink>
            </li>
            <li style={{ margin:"6px" }}>
              <NavLink
                to="/trips_home"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-300 mt-1 mb-1  rounded  p-2   font-bold"
                    : ""
                }
              >
                <svg style ={{color:"grey"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M6.00391 10V5M11.0039 10V5M16.0039 10V5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.01609 17C3.59614 17 2.88616 17 2.44503 16.5607C2.00391 16.1213 2.00391 15.4142 2.00391 14V8C2.00391 6.58579 2.00391 5.87868 2.44503 5.43934C2.88616 5 3.59614 5 5.01609 5H12.1005C15.5742 5 17.311 5 18.6402 5.70624C19.619 6.22633 20.4346 7.0055 20.9971 7.95786C21.7609 9.25111 21.8332 10.9794 21.9779 14.436C22.0168 15.3678 22.0363 15.8337 21.8542 16.1862C21.7204 16.4454 21.5135 16.6601 21.2591 16.8041C20.913 17 20.4449 17 19.5085 17H19.0039M9.00391 17H15.0039" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.00391 19C8.10848 19 9.00391 18.1046 9.00391 17C9.00391 15.8954 8.10848 15 7.00391 15C5.89934 15 5.00391 15.8954 5.00391 17C5.00391 18.1046 5.89934 19 7.00391 19Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M17.0039 19C18.1085 19 19.0039 18.1046 19.0039 17C19.0039 15.8954 18.1085 15 17.0039 15C15.8993 15 15.0039 15.8954 15.0039 17C15.0039 18.1046 15.8993 19 17.0039 19Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M1.99609 10.001H15.3641C15.9911 10.001 16.2041 10.3682 16.6841 10.9442C17.2361 11.4842 17.6093 11.863 18.1241 11.9402C18.8441 12.0482 21.5081 11.9942 21.5081 11.9942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>Trips
              </NavLink>
            </li >
            <li style={{ margin:"6px" }}>
              <NavLink
                to="/drivers_home"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-300 mt-1 mb-1  rounded  p-2   font-bold"
                    : ""
                }
              >
               <svg style ={{color:"grey"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M20 22V19C20 17.1144 20 16.1716 19.4142 15.5858C18.8284 15 17.8856 15 16 15H14L12 17L10 15H8C6.11438 15 5.17157 15 4.58579 15.5858C4 16.1716 4 17.1144 4 19V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 15V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 15V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.5 9V7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7V9C8.5 10.933 10.067 12.5 12 12.5C13.933 12.5 15.5 10.933 15.5 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.5 7.5H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 2V3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>Drivers
              </NavLink>
            </li>
            <li style={{ margin:"6px" }}>
              <NavLink
                to="/bus_home"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-300 mt-1 mb-1  rounded  p-2   font-bold"
                    : ""
                }
              >
                <svg style ={{color:"grey"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M17.5 19V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.5 19V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13C20 15.8284 20 17.2426 19.1213 18.1213C18.2426 19 16.8284 19 14 19H10C7.17157 19 5.75736 19 4.87868 18.1213C4 17.2426 4 15.8284 4 13V10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M7 16H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 16H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 8L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22 8L22 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.5 5L19.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M4.5 13L19.5 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M12 13V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>Buses
              </NavLink>
            </li>
            <li style={{ margin:"6px" }}>
              <NavLink
                to="/coming_soon"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-300 mt-1 mb-1  rounded  p-2   font-bold"
                    : ""
                }
              >
                <svg style ={{color:"grey"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M13.5303 11.5303L18.5303 6.53033L17.4697 5.46967L12.4697 10.4697L13.5303 11.5303Z" fill="currentColor" />
    <path d="M17 5L16.6141 4.35688C16.4161 4.4757 16.2838 4.67914 16.2556 4.90836C16.2274 5.13758 16.3064 5.36702 16.4697 5.53033L17 5ZM19 7L18.4697 7.53033C18.633 7.69364 18.8624 7.7726 19.0916 7.74438C19.3209 7.71616 19.5243 7.58391 19.6431 7.38587L19 7ZM20.5 4.5L21.1431 4.88587C21.3202 4.59076 21.2737 4.21302 21.0303 3.96967L20.5 4.5ZM19.5 3.5L20.0303 2.96967C19.787 2.72632 19.4092 2.67982 19.1141 2.85688L19.5 3.5ZM16.4697 5.53033L18.4697 7.53033L19.5303 6.46967L17.5303 4.46967L16.4697 5.53033ZM19.6431 7.38587L21.1431 4.88587L19.8569 4.11413L18.3569 6.61413L19.6431 7.38587ZM21.0303 3.96967L20.0303 2.96967L18.9697 4.03033L19.9697 5.03033L21.0303 3.96967ZM19.1141 2.85688L16.6141 4.35688L17.3859 5.64312L19.8859 4.14312L19.1141 2.85688Z" fill="currentColor" />
    <path d="M3.23548 5.23548L3.76581 4.70515C3.58646 4.5258 3.32862 4.44925 3.08046 4.50167C2.8323 4.5541 2.62745 4.72839 2.53596 4.96495L3.23548 5.23548ZM4.02513 8.97487L3.4948 9.5052H3.4948L4.02513 8.97487ZM4.65748 6.65748L4.12715 7.18781C4.2678 7.32846 4.45857 7.40748 4.65748 7.40748V6.65748ZM6.65748 6.65748V7.40748C7.07169 7.40748 7.40748 7.07169 7.40748 6.65748H6.65748ZM6.65748 4.65748H7.40748C7.40748 4.45857 7.32846 4.2678 7.18781 4.12715L6.65748 4.65748ZM8.97487 4.02513L8.44454 4.55546V4.55546L8.97487 4.02513ZM5.23548 3.23548L4.96495 2.53596C4.72839 2.62745 4.55409 2.8323 4.50167 3.08046C4.44925 3.32862 4.5258 3.58646 4.70515 3.76581L5.23548 3.23548ZM20.7645 18.7645L20.2342 19.2949C20.4135 19.4742 20.6714 19.5508 20.9195 19.4983C21.1677 19.4459 21.3726 19.2716 21.464 19.035L20.7645 18.7645ZM19.9749 15.0251L20.5052 14.4948L19.9749 15.0251ZM19.3425 17.3425L19.8729 16.8122C19.7322 16.6715 19.5414 16.5925 19.3425 16.5925V17.3425ZM17.3425 17.3425V16.5925C16.9283 16.5925 16.5925 16.9283 16.5925 17.3425H17.3425ZM17.3425 19.3425H16.5925C16.5925 19.5414 16.6715 19.7322 16.8122 19.8729L17.3425 19.3425ZM15.0251 19.9749L15.5555 19.4445L15.0251 19.9749ZM18.7645 20.7645L19.035 21.464C19.2716 21.3726 19.4459 21.1677 19.4983 20.9195C19.5508 20.6714 19.4742 20.4135 19.2949 20.2342L18.7645 20.7645ZM16.2341 14.236L15.7037 14.7663C15.9138 14.9764 16.2279 15.0427 16.5049 14.9354L16.2341 14.236ZM14.2349 16.2369L14.9346 16.5071C15.0415 16.2303 14.9751 15.9164 14.7653 15.7066L14.2349 16.2369ZM7.76312 9.76507L8.29345 9.23474C8.08359 9.02489 7.76974 8.95851 7.4929 9.06544L7.76312 9.76507ZM9.76398 7.76593L9.06458 7.49511C8.95733 7.77208 9.02363 8.08624 9.23365 8.29626L9.76398 7.76593ZM2.53596 4.96495C1.94824 6.48469 2.26638 8.27679 3.4948 9.5052L4.55546 8.44454C3.76195 7.65104 3.55366 6.49204 3.93499 5.506L2.53596 4.96495ZM5.18781 6.12715L3.76581 4.70515L2.70515 5.76581L4.12715 7.18781L5.18781 6.12715ZM4.65748 7.40748H6.65748V5.90748H4.65748V7.40748ZM7.40748 6.65748V4.65748H5.90748V6.65748H7.40748ZM9.5052 3.4948C8.27679 2.26638 6.48469 1.94824 4.96495 2.53596L5.506 3.93499C6.49204 3.55366 7.65104 3.76195 8.44454 4.55546L9.5052 3.4948ZM7.18781 4.12715L5.76581 2.70515L4.70515 3.76581L6.12715 5.18781L7.18781 4.12715ZM21.464 19.035C22.0518 17.5153 21.7336 15.7232 20.5052 14.4948L19.4445 15.5555C20.2381 16.349 20.4463 17.508 20.065 18.494L21.464 19.035ZM18.8122 17.8729L20.2342 19.2949L21.2949 18.2342L19.8729 16.8122L18.8122 17.8729ZM19.3425 16.5925L17.3425 16.5925V18.0925L19.3425 18.0925V16.5925ZM16.5925 17.3425V19.3425H18.0925V17.3425H16.5925ZM14.4948 20.5052C15.7232 21.7336 17.5153 22.0518 19.035 21.464L18.494 20.065C17.508 20.4463 16.349 20.238 15.5555 19.4445L14.4948 20.5052ZM16.8122 19.8729L18.2342 21.2949L19.2949 20.2342L17.8729 18.8122L16.8122 19.8729ZM20.5052 14.4948C19.2763 13.2659 17.4833 12.948 15.9632 13.5366L16.5049 14.9354C17.4912 14.5535 18.6507 14.7617 19.4445 15.5555L20.5052 14.4948ZM13.5353 15.9667C12.9485 17.486 13.2668 19.2772 14.4948 20.5052L15.5555 19.4445C14.7622 18.6513 14.5538 17.4929 14.9346 16.5071L13.5353 15.9667ZM14.7653 15.7066L8.29345 9.23474L7.23279 10.2954L13.7046 16.7672L14.7653 15.7066ZM3.4948 9.5052C4.72275 10.7332 6.51397 11.0515 8.03333 10.4647L7.4929 9.06544C6.50709 9.44619 5.34866 9.23775 4.55546 8.44454L3.4948 9.5052ZM9.23365 8.29626L15.7037 14.7663L16.7644 13.7057L10.2943 7.2356L9.23365 8.29626ZM10.4634 8.03676C11.052 6.51665 10.7341 4.72367 9.5052 3.4948L8.44454 4.55546C9.23835 5.34926 9.4465 6.50884 9.06458 7.49511L10.4634 8.03676Z" fill="currentColor" />
    <path d="M6.59897 20.1041L7.1293 20.6344L7.1293 20.6344L6.59897 20.1041ZM4.68758 20.1041L5.21791 19.5737L5.21791 19.5737L4.68758 20.1041ZM3.89586 19.3123L3.36553 19.8427H3.36553L3.89586 19.3123ZM3.89586 17.401L3.36553 16.8706L3.36553 16.8706L3.89586 17.401ZM11.6727 13.9696L6.06864 19.5737L7.1293 20.6344L12.7334 15.0303L11.6727 13.9696ZM5.21791 19.5737L4.42619 18.782L3.36553 19.8427L4.15725 20.6344L5.21791 19.5737ZM4.42619 17.9313L10.0303 12.3272L8.96961 11.2665L3.36553 16.8706L4.42619 17.9313ZM4.42619 18.782C4.19127 18.5471 4.19127 18.1662 4.42619 17.9313L3.36553 16.8706C2.54482 17.6913 2.54482 19.022 3.36553 19.8427L4.42619 18.782ZM6.06864 19.5737C5.83371 19.8087 5.45283 19.8087 5.21791 19.5737L4.15725 20.6344C4.97796 21.4551 6.30859 21.4551 7.1293 20.6344L6.06864 19.5737Z" fill="currentColor" />
</svg>Maintanance
              </NavLink>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* <nav
        style={{ textShadow: "4px 4px 4px #0000ff", fontWeight: "40px" }}
        className="font-bold p-2 bg-blue-500"
      >
        <div className="flex items-center justify-between">
          <div className="flex space-x-6">
            <img className="w-16 h-12" src={driverImage} alt="Bus" />
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded  p-2   font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/trips_home"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2  font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Trip Home
            </NavLink>
            <NavLink
              to="/drivers_home"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2    font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Drivers Home
            </NavLink>
            <NavLink
              to="/bus_home"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2    font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Bus Home
            </NavLink>
            <NavLink
              to="/coming_soon"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2    font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              Maintanace
            </NavLink>
            <NavLink
              to="/about_us"
              className={({ isActive }) =>
                isActive
                  ? "text-black-200 bg-blue-300 mt-1 mb-1  rounded p-2    font-bold"
                  : "text-white-200 bg-sky-400 mt-1 mb-1  rounded   pl-2 pr-2   hover:text-blue-200"
              }
            >
              About Us
            </NavLink>
          </div>
          <a
            href="/home"
            style={{ padding: "10px", width: "170px" }}
            class="bg-indigo-950 p-6  text-white hover:text-blue-200 rounded"
          >
            Bus Maintanance
          </a>
        </div>
      </nav> */}
    </>
  );
}
