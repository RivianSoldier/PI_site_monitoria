import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return (
      <>
        <div className="flex">
          <Card className="flex w-full">
            <CardContent>
              <CardTitle className="py-4">Login</CardTitle>
              <CardDescription className="pb-3">
                Faça login usando sua conta da Mauá
              </CardDescription>
              <SignInButton />
            </CardContent>
            {props.children}
          </Card>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
