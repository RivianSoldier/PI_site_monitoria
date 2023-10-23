"use client";
import { Navbar } from "@/components/organisms/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useIsAuthenticated } from "@azure/msal-react";

export default function TelaRanking() {
  const isAuthenticated = useIsAuthenticated();

  const alunos = [
    {
      posicao: "1",
      nome: "João da Silva",
      pontuacao: "10",
    },
    {
      posicao: "2",
      nome: "João da Silva",
      pontuacao: "9",
    },
    {
      posicao: "3",
      nome: "João da Silva",
      pontuacao: "8",
    },
    {
      posicao: "4",
      nome: "João da Silva",
      pontuacao: "7",
    },
    {
      posicao: "5",
      nome: "João da Silva",
      pontuacao: "6",
    },
    {
      posicao: "6",
      nome: "João da Silva",
      pontuacao: "5",
    },
    {
      posicao: "7",
      nome: "João da Silva",
      pontuacao: "4",
    },
  ];
  if (isAuthenticated) {
    return (
      <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans scroll-smooth">
        <Navbar />
        <div className="p-10">
          <p className="font-sans text-6xl text-center font-bold">
            Ranking dos Alunos
          </p>
        </div>
        <div className="rounded-lg border-2 border-slate-900 w-80 sm:w-[500px] md:w-[752px] lg:w-[1000px] xl:w-[1264px] mt-4">
          <Table className="bg-slate-50 rounded-md">
            <TableHeader>
              <TableRow>
                <TableHead className="py-6 text-center">Posição</TableHead>
                <TableHead className="py-6 text-center">Nome</TableHead>
                <TableHead className="py-6 text-center">Pontuação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alunos.map((aluno) => (
                <TableRow className="text-center " key={aluno.posicao}>
                  <TableCell className="font-medium py-5">
                    {aluno.posicao}
                  </TableCell>
                  <TableCell className="py-5">{aluno.nome}</TableCell>
                  <TableCell className="text-center py-5">
                    {aluno.pontuacao}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    );
  } else {
    return <></>;
  }
}
