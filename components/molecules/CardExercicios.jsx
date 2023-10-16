import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "../ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const CardExercicios = ({
  title,
  disciplina,
  tituloExercicio,
  descricaoExercicio,
  isMonitorScreenExModal,
}) => (
  <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
    <DialogHeader className="flex flex-col content-evenly pt-2 pb-3">
      <DialogTitle className="text-md sm:justify-center pb-2">
        {title}
      </DialogTitle>
      <DialogDescription>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="disciplina1" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="discilina1">
              Desenvolvimento Multiplataforma
            </SelectItem>
            <SelectItem value="discilina2">
              Banco de Dados Não Relacionais e Big Data
            </SelectItem>
            <SelectItem value="discilina3">Teoria da Computação</SelectItem>
          </SelectContent>
        </Select>
      </DialogDescription>
    </DialogHeader>
    <div className="flex flex-col justify-evenly p-0">
      <div>
        <Label htmlFor="titulo-exercicio">Título do exercício</Label>
        <Input id="titulo-exercicio" type="text" value={tituloExercicio} />
      </div>
      <div className="mt-3">
        <Label htmlFor="descricao-exercicio">Descrição do exercício</Label>
        <Textarea
          className="max-h-72"
          id="descricao-exercicio"
          placeholder="Escreva o exercício neste espaço"
          value={descricaoExercicio}
        />
      </div>
    </div>

    <div className="flex flex-col justify-end gap-4">
      <Button className="w-full">Salvar Exercício</Button>
      {isMonitorScreenExModal && (
        <Button className="w-full" variant="secondary">
          Visualizar exercícios
        </Button>
      )}
    </div>
  </DialogContent>
);
