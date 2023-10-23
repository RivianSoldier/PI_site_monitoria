import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/**
 * Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return (
      <>
        <div className="flex max-w-6xl items-stretch justify-center ">
          <Card className="flex justify-center  w-full">
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
