"use client";
import { ExerciciosCard } from "./organisms/ExerciciosCard";
import { Navbar } from "./organisms/Navbar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ModalCardExercicios } from "./molecules/ModalCardExercicios";
import { CardExercicios } from "./molecules/CardExercicios";

export default function TelaExercicios({ modifyAccess }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans scroll-smooth">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">Exercícios</p>
      </div>
      <div>
        <div className="pb-4 flex flex-col justify-between md:flex-row gap-4">
          <Select>
            <SelectTrigger className="lg:w-1/3 md:w-1/2 sm:w-full">
              <SelectValue placeholder="Selecione uma disciplina" />
            </SelectTrigger>
            <SelectContent className="w-80 md:w-full">
              <SelectGroup>
                <SelectLabel>Disciplinas</SelectLabel>
                <SelectItem value="automatos">
                  Teoria da Computação, Autômatos e Linguagens Formais
                </SelectItem>
                <SelectItem value="multiplataforma">
                  Desenvolvimento Multiplataforma
                </SelectItem>
                <SelectItem value="engenhariaSoftware">
                  Engenharia de Software
                </SelectItem>
                <SelectItem value="algebraLinear">
                  Álgebra Linear e Geometria Analítica
                </SelectItem>
                <SelectItem value="NoSQL">
                  Banco de Dados NoSQL e Big Data
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {modifyAccess && (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Cadastrar novo exercício</Button>
              </DialogTrigger>
              <CardExercicios
                title={"Cadastrar novo exercício para uma disciplina"}
              />
            </Dialog>
          )}
        </div>
        <div className="flex flex-col gap-8 mt-5">
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
          <ExerciciosCard title={"Exercício 1"} />
        </div>
      </div>
    </main>
  );
}
