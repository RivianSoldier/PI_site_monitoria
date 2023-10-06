import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

export const CardHorarios = ({
  title,
  description,
  horarioInicio,
  horarioFim,
}) => (
  <Card className="flex flex-col content-evenly pt-2 pb-6">
    <CardHeader className="space-y-0 p-0 sm:justify-center md:px-5">
      <CardTitle className="text-md sm:justify-center pb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="p-0">
      <div className="flex flex-row justify-evenly p-0">
        <div className="w-40">
          <Label htmlFor="horario-inicio">Horario Início</Label>
          <Input id="horario-inicio" type="time" value={horarioInicio} />
        </div>
        <div className="w-40">
          <Label htmlFor="horario-fim">Horário Fim</Label>
          <Input id="horario-fim" type="time" value={horarioFim} />
        </div>
      </div>
      
      <div className="flex justify-end px-5 pt-4">
        <Button>Salvar Horário</Button>
      </div>
    </CardContent>
  </Card>
);
