import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

import { Navbar } from "@/components/organisms/Navbar";
import { ModalCadastro } from "@/components/organisms/ModalCadastro";
import { CardUsuarios } from "@/components/molecules/CardUsuarios";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">
          Bem vindo professor
        </p>
      </div>
      <div className="flex flex-col items-center max-w-5xl w-full pt-12 mb-6"> 
        <div className="mb-3 flex">
          <Link href="/404">
            <Dialog>
              <DialogTrigger>
                <CardUsuarios
                  onClick={() => {}}
                  title={"Ranking de Alunos"}
                  description={"Visualize o ranking de alunos"}
                />
              </DialogTrigger>
            </Dialog>
          </Link>
          <div className="mx-3"></div>
          <Link href="/404">
            <Dialog>
              <DialogTrigger>
                <CardUsuarios
                  onClick={() => {}}
                  title={"Horário dos Monitores"}
                  description={"Visualize os horários dos monitores"}
                />
              </DialogTrigger>
            </Dialog>
          </Link>
        </div>

        <div>
          <Link href="/404">
            <Dialog>
              <DialogTrigger>
                <CardUsuarios
                  onClick={() => {}}
                  title={"Consultar Exercícios"}
                  description={"Visualize os exercícios"}
                />
              </DialogTrigger>
            </Dialog>
          </Link>
        </div>
      </div>
    </main>
  );
}
