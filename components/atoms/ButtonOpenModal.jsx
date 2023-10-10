import { Button } from "@/components/ui/button";

export const ButtonOpenModal = ({ title, isDisciplina }) => (
  <Button
    variant="secondary"
    className={isDisciplina ? "w-full" : "w-40 md:w-40 lg:w-44"}
  >
    {title}
  </Button>
);
