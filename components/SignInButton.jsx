import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";
import { Button } from "./ui/button";
import { TfiMicrosoftAlt } from "react-icons/tfi";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance
        .loginPopup(loginRequest)
        .then(() => {
          window.location.href = "/admin"; // Redirect to /admin after successful login
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (loginType === "redirect") {
      instance
        .loginRedirect(loginRequest)
        .then(() => {
          window.location.href = "/admin"; // Redirect to /admin after successful login
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className="w-full flex flex-col justify-center gap-4">
      <Button
        className="w-64 flex justify-evenly"
        onClick={() => handleLogin("popup")}
      >
        Login com Microsoft
        <TfiMicrosoftAlt />
      </Button>
      {/* <Button
        className="w-64 flex justify-evenly"
        onClick={() => handleLogin("redirect")}
      >
        Login com Microsoft
        <TfiMicrosoftAlt />
      </Button> */}
    </div>
  );
};
