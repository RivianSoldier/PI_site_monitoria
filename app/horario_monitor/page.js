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

export default function TelaMonitor() {
  const isAuthenticated = useIsAuthenticated();

  const monitores = [
    {
        nome: "Monitor1",
        horarios: ["        ","horário1","horário2","horário3","horário4","horário5","horário6"],
    },
    {
        nome: "Monitor2",
        horarios: ["        ","horário1","horário2","horário3","horário4","horário5","horário6"],
    },
    {
        nome: "Monitor3",
        horarios: ["        ","horário1","horário2","horário3","horário4","horário5","horário6"],
    },
    {
        nome: "Monitor4",
        horarios: ["        ","horário1","horário2","horário3","horário4","horário5","horário6"],
    },
    {
        nome: "Monitor5",
        horarios: ["        ","horário1","horário2","horário3","horário4","horário5","horário6"],
    },
    {
        nome: "Monitor6",
        horarios: ["        ","horário1","horário2","horário3","horário4","horário5","horário6"],
    },
  ];
  if (isAuthenticated) {
    return (
        <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans scroll-smooth">
        <Navbar />
        <div className="p-10">
          <p className="font-sans text-6xl text-center font-bold">Horários dos Monitores</p>
        </div>
        <div className="rounded-lg border-2 border-slate-900 w-80 sm:w-[500px] md:w-[752px] lg:w-[1000px] xl:w-[1264px] mt-4">
          <Table className="bg-slate-50 rounded-md">
            <TableHeader>
              <TableRow>
                {monitores[0].horarios.map((horario, index) => (
                  <TableHead className="py-6 text-center" key={index}>
                    {horario}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {monitores.map((monitor, index) => (
                <TableRow className="text-center" key={index}>
                  <TableCell className="py-5 font-medium">{monitor.nome}</TableCell>
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
