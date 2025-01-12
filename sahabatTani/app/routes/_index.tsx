import type { MetaFunction } from "@remix-run/node";
import HomePage from "~/components/HomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "SahabatTani" },
    { name: "description", content: "Welcome to SahabatTani!" },
  ];
};

export default function Index() {
  return (
   <>
   <HomePage />
   </>
  );
}



