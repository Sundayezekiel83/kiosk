import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import AuthPagesLayout from "../../layout/AuthPagesLayout";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <AuthPagesLayout>
      <form className="w-[308px] m-[24px]">
        <h5 className="text-[24px] leading-[28.64px] mb-10 font-semibold">
          {" "}
          Login into your Dashboard
        </h5>
        <div className="form-group">
          <p className="text-[#454d54] my-0 text-[13px] leading-[15.51px] mx-2">
            Username
          </p>
          <div className="input-wrap relative">
            <input
              required=""
              type="text"
              className="pl-[14px] outline-[#43010b] rounded-[0.25rem] py-3 w-full border-[#e3e5e8] border-2"
              placeholder=""
            />
            <span className="absolute right-3 top-4 md:top-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.375 2.25C3.375 1.00736 4.38236 0 5.625 0H12.375C13.6176 0 14.625 1.00736 14.625 2.25V15.75C14.625 16.9926 13.6176 18 12.375 18H5.625C4.38236 18 3.375 16.9926 3.375 15.75V2.25ZM10.125 14.625C10.125 15.2463 9.62132 15.75 9 15.75C8.37868 15.75 7.875 15.2463 7.875 14.625C7.875 14.0037 8.37868 13.5 9 13.5C9.62132 13.5 10.125 14.0037 10.125 14.625Z"
                  fill="#BAC7DE"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="form-group">
          <p className="text-[#454d54] my-0 text-[13px] leading-[15.51px] mx-2">
            Password
          </p>
          <div className="input-wrap relative">
            <input
              required=""
              type="text"
              className="pl-[14px] outline-[#43010b] rounded-[0.25rem] py-3 w-full border-[#e3e5e8] border-2"
              placeholder=""
            />
            <span className="absolute right-3 top-4 md:top-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_706_2370)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.160423 2.59894C0.43373 2.22151 0.961254 2.13712 1.33868 2.41042L17.6511 14.2229C18.0286 14.4962 18.1131 15.0237 17.8397 15.4011C17.5664 15.7786 17.0389 15.8631 16.6615 15.5897L14.1317 13.7578C12.7639 14.8375 11.0162 15.7501 9.00007 15.7501C6.77104 15.7501 4.87038 14.6344 3.45 13.4128C2.02187 12.1846 0.990562 10.7741 0.48339 10.0111C0.0752019 9.39702 0.0739308 8.60508 0.482916 7.98973C0.881245 7.39041 1.60256 6.39216 2.58514 5.39651L0.348944 3.7772C-0.0284818 3.50389 -0.112886 2.97637 0.160423 2.59894ZM3.96984 6.39922C2.99874 7.34659 2.27786 8.33771 1.88831 8.9238C1.87081 8.95015 1.8642 8.97616 1.86422 8.99991C1.86423 9.0237 1.87091 9.05012 1.88874 9.07695C2.3529 9.77525 3.28573 11.0459 4.55033 12.1335C5.82267 13.2276 7.34336 14.0626 9.00007 14.0626C10.344 14.0626 11.5982 13.513 12.702 12.7225L10.1948 10.9069C9.84857 11.1243 9.43896 11.25 9 11.25C7.75736 11.25 6.75 10.2427 6.75 9.00001C6.75 8.81377 6.77262 8.6328 6.81528 8.45973L3.96984 6.39922ZM9.00007 3.93756C8.41913 3.93756 7.85636 4.03964 7.31395 4.21999C6.87176 4.36701 6.39411 4.12774 6.24708 3.68554C6.10005 3.24336 6.33933 2.76571 6.78152 2.61868C7.47597 2.38778 8.21855 2.25006 9.00007 2.25006C11.2291 2.25006 13.1298 3.36568 14.5501 4.58725C15.9783 5.81548 17.0096 7.22602 17.5167 7.98902C17.9254 8.60376 17.9253 9.39645 17.5167 10.0111C17.3923 10.1983 17.2376 10.4225 17.0546 10.6721C16.7789 11.0478 16.2509 11.1289 15.8752 10.8533C15.4995 10.5777 15.4182 10.0497 15.6939 9.67393C15.8601 9.44737 15.9999 9.24469 16.1114 9.07698C16.1438 9.02819 16.1438 8.9719 16.1114 8.92317C15.6472 8.22487 14.7144 6.95427 13.4498 5.86667C12.1775 4.77243 10.6568 3.93756 9.00007 3.93756Z"
                    fill="#A6B7D4"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_706_2370">
                    <rect width="18" height="18" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <label className="w-1/2 flex space-x-2 items-center mb-3">
            <input required="" type="checkbox" className="rounded-full" />
            <span className="text-sm mb-1">Remember me</span>
          </label>

          <a className="mb-3 text-sm text-[#43010b]" href="/app/dashboard">
            Forgotten password
          </a>
        </div>

        <div class=" py-4 flex items-center justify-start mt-2">
          <button
            class=" gap-2 w-full  bg-[#43010b] text-lg py-2 rounded text-white flex items-center justify-center"
            onClick={() => navigate("/home")}
          >
            Login to your account
          </button>
        </div>
      </form>
    </AuthPagesLayout>
  );
};

export default Login;
