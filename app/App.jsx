"use client";
// import React, { useState } from "react";

import { PageLayout } from "../components/PageLayout";
import { useIsAuthenticated } from "@azure/msal-react";
// import { loginRequest } from "../config/authConfig";
// import { callMsGraph } from "../config/graph";
// import { ProfileData } from "../components/ProfileData";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
// export const ProfileContent = () => {
//   const { instance, accounts } = useMsal();
//   // const [graphData, setGraphData] = useState(null);

//   // function RequestProfileData() {
//   //   // Silently acquires an access token which is then attached to a request for MS Graph data
//   //   instance
//   //     .acquireTokenSilent({
//   //       ...loginRequest,
//   //       account: accounts[0],
//   //     })
//   //     .then((response) => {
//   //       callMsGraph(response.accessToken).then((response) =>
//   //         setGraphData(response)
//   //       );
//   //     });
//   // }

//   return (
//     <>
//       <h5 className="card-title">Welcome {accounts[0]?.name}</h5>
//       <h5 className="card-title">{accounts[0].username}</h5>
//       <br />

//       {/* {graphData ? (
//         <ProfileData graphData={graphData} />
//       ) : (
//         <button onClick={RequestProfileData}>
//           Request Profile Information
//         </button>
//       )} */}
//     </>
//   );
// };

export const ProfileContent = () => {
  const { instance, accounts } = useMsal();

  // Check if the component is being rendered on the server
  const isServer = typeof window === "undefined";

  return (
    <>
      <h5 className="card-title">
        {/* Conditionally render the user's name */}
        {!isServer && accounts[0]?.name}
      </h5>
      <h5 className="card-title">
        {/* Conditionally render the user's username */}
        {!isServer && accounts[0]?.username}
      </h5>
      <br />
    </>
  );
};

const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>

      {/* <UnauthenticatedTemplate>
        <h5>
          <center>Please sign-in to see your profile information.</center>
        </h5>
      </UnauthenticatedTemplate> */}
    </div>
  );
};

export default function App() {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return <></>; // Return an empty fragment if the user is authenticated
  }

  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <PageLayout>
        <MainContent />
      </PageLayout>
    </div>
  );
}
