"use client";
import { Navbar } from "@/components/organisms/Navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor } from "lucide-react";


export default function TelaMonitor() {
  const MonitorPresencial = [
    {
      Monitor: "Ana Luisa da Silva",
      Segunda: ['13h30 às 16h30'],
      Terca: null,
      Quarta: null,
      Quinta: ['13h30 às 15h30'],
      Sexta: null,
    },
    {
      Monitor: "Carlos Henrique Lucena Barros",
      Segunda: ['14h00 às 16h30'],
      Terca: null,
      Quarta: ['14h00 às 16h30'],
      Quinta: null,
      Sexta: null,
    },
    {
      Monitor: "Débora Witkowski",
      Segunda: ['15h00 às 16h00'],
      Terca: null,
      Quarta: null,
      Quinta: null,
      Sexta: ['13h10 às 17h10'],
    },
    {
      Monitor: "Gustavo Lourenço Losada",
      Segunda: ['13h00 às 16h00'],
      Terca: ['13h00 às 14h00'],
      Quarta: ['13h00 às 14h00'],
      Quinta: null,
      Sexta: null,
    },
    {
      Monitor: "Leonardo Cazotto Stuber",
      Segunda: ['13h30 às 16h30'],
      Terca: null,
      Quarta: null,
      Quinta: null,
      Sexta: ['13h00 às 15h00'],
    },
    {
      Monitor: "Mateus Capaldo",
      Segunda: ['14h00 às 16h00'],
      Terca: null,
      Quarta: null,
      Quinta: ['13h00 às 16h00'],
      Sexta: null,
    },
    {
      Monitor: "Luigi Guimarães Trevisan",
      Segunda: ['13h00 às 16h00'],
      Terca: ['13h00 às 16h00'],
      Quarta: ['13h00 às 16h00'],
      Quinta: ['13h00 às 16h00'],
      Sexta: null,
    },

  ];

  const MonitorOnline = [
    {
      Monitor: "Ana Luisa da Silva",
      Segunda: null,
      Terca: null,
      Quarta: ['13h00 às 15h30'],
      Quinta: null,
      Sexta: ['14h00 às 16h30'],
    },
    {
      Monitor: "Carlos Henrique Lucena Barros",
      Segunda: ['18h30 às 20h00'],
      Terca: ['14h30 às 16h30', '19h00 às 20h30'],
      Quarta: null,
      Quinta: null,
      Sexta: null,
    },
    {
      Monitor: "Débora Witkowski",
      Segunda: null,
      Terca: ['15h30 às 16h30'],
      Quarta: ['14h30 às 17h30'],
      Quinta: ['13h30 às 15h30'],
      Sexta: null,
    },
    {
      Monitor: "Gustavo Lourenço Losada",
      Segunda: null,
      Terca: ['14h30 às 15h30'],
      Quarta: ['14h30 às 16h30'],
      Quinta: null,
      Sexta: ['13h30 às 15h30'],
    },
    {
      Monitor: "Leonardo Cazotto Stuber",
      Segunda: null,
      Terca: null,
      Quarta: null,
      Quinta: ['15h30 às 20h30'],
      Sexta: null,
    },
    {
      Monitor: "Mateus Capaldo",
      Segunda: null,
      Terca: ['19h00 às 20h30'],
      Quarta: ['19h00 às 20h30'],
      Quinta: null,
      Sexta: ['13h30 às 15h30'],
    },
    {
      Monitor: "Luigi Guimarães Trevisan",
      Segunda: ['16h30 às 17h30'],
      Terca: ['16h30 às 17h30'],
      Quarta: ['16h30 às 17h30'],
      Quinta: ['16h30 às 17h30'],
      Sexta: ['16h30 às 17h30'],
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans scroll-smooth">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">
          Horários dos Monitores
        </p>
      </div>
      <div className="flex justify-start w-full ">
        <Tabs defaultValue="presencial" className="w-full px-0 lg:px-24">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presencial">Presencial</TabsTrigger>
            <TabsTrigger value="online">Online</TabsTrigger>
          </TabsList>
          <TabsContent value="presencial" className='overflow-scroll'>
            <table className="bg-slate-50 rounded-md w-full overflow-x-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Monitor</TableHead>
                  <TableHead className="text-center">Segunda</TableHead>
                  <TableHead className="text-center">Terça</TableHead>
                  <TableHead className="text-center">Quarta</TableHead>
                  <TableHead className="text-center">Quinta</TableHead>
                  <TableHead className="text-center">Sexta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MonitorPresencial.map((monitor) => (
                  <TableRow key={monitor.Monitor}>
                    <TableCell>{monitor.Monitor}</TableCell>
                    <TableCell>
                      {monitor.Segunda &&
                        monitor.Segunda.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                    <TableCell>
                      {monitor.Terca &&
                        monitor.Terca.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                    <TableCell>
                      {monitor.Quarta &&
                        monitor.Quarta.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                    <TableCell>
                      {monitor.Quinta &&
                        monitor.Quinta.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                    <TableCell>
                      {monitor.Sexta &&
                        monitor.Sexta.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </TabsContent>
          <TabsContent value="online" className='overflow-scroll'>
            <table className="bg-slate-50 rounded-md w-full overflow-x-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Monitor</TableHead>
                  <TableHead className="text-center">Segunda</TableHead>
                  <TableHead className="text-center">Terça</TableHead>
                  <TableHead className="text-center">Quarta</TableHead>
                  <TableHead className="text-center">Quinta</TableHead>
                  <TableHead className="text-center">Sexta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MonitorOnline.map((monitor) => (
                  <TableRow key={monitor.Monitor}>
                    <TableCell>{monitor.Monitor}</TableCell>
                    <TableCell>
                      {monitor.Segunda &&
                        monitor.Segunda.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                    <TableCell>
                      {monitor.Terca &&
                        monitor.Terca.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                    <TableCell>
                      {monitor.Quarta &&
                        monitor.Quarta.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                    <TableCell>
                      {monitor.Quinta &&
                        monitor.Quinta.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                    <TableCell>
                      {monitor.Sexta &&
                        monitor.Sexta.map((horario, index) => (
                          <div key={index}>{horario}</div>
                        ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
