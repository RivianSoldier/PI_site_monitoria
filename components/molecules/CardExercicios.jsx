"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
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
import {
  Form,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const disTituloDescSchema = z.object({
  disciplina: z.string({ required_error: "Selecione uma disciplina." }),
  tituloExercicio: z
    .string()
    .min(3, "Título muito curto")
    .max(50, "Título muito longo"),
  descricaoExercicio: z
    .string()
    .min(3, "Descrição muito curta")
    .max(500, "Descrição muito longa"),
});

export const CardExercicios = ({
  title,
  tituloExercicio,
  descricaoExercicio,
  isMonitorScreenExModal,
}) => {
  const disTituloDescForm = useForm({
    resolver: zodResolver(disTituloDescSchema),
    defaultValues: {
      disciplina: "",
      tituloExercicio: "",
      descricaoExercicio: "",
    },
  });

  function onSubmit(data) {
    console.log("Dados do formulário:", data);
  }

  return (
    <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
      <DialogHeader className="flex flex-col content-evenly pt-2 pb-3">
        <Form {...disTituloDescForm}>
          <form
            onSubmit={disTituloDescForm.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={disTituloDescForm.control}
              name="disciplina"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disciplina</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="disciplina1" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="discilina1">
                        Desenvolvimento Multiplataforma
                      </SelectItem>
                      <SelectItem value="discilina2">
                        Banco de Dados Não Relacionais e Big Data
                      </SelectItem>
                      <SelectItem value="discilina3">
                        Teoria da Computação
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={disTituloDescForm.control}
              name="tituloExercicio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do exercício</FormLabel>
                  <FormControl>
                    <Input placeholder="Título" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={disTituloDescForm.control}
              name="descricaoExercicio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição do exercício</FormLabel>
                  <FormControl>
                    <Textarea
                      className="max-h-72"
                      placeholder="Escreva o exercício neste espaço"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Salvar exercício
            </Button>
          </form>
        </Form>
      </DialogHeader>
      {isMonitorScreenExModal && (
        <Link className="w-full" href="/exercicios">
          <Button className="w-full" variant="secondary">
            Visualizar exercícios
          </Button>
        </Link>
      )}
    </DialogContent>
  );
};

{
  /* <DialogHeader className="flex flex-col content-evenly pt-2 pb-3">
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
        <Link className="w-full" href="/exercicios">
          <Button className="w-full" variant="secondary">
            Visualizar exercícios
          </Button>
        </Link>
      )}
    </div> */
}
