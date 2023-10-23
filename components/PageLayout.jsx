/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/**
 * Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return <></>; // Return an empty fragment if the user is authenticated
  }

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
            <Separator className="mt-5 mb-3" />
            <CardDescription className="my-0">
              Login como administrador
            </CardDescription>
            <Button variant="secondary" className="w-full mt-2">
              Admin
            </Button>
          </CardContent>
          {props.children}
        </Card>
      </div>
    </>
  );
};
