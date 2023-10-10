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
      <div className="flex flex-wrap align max-w-5xl w-full justify-center gap-y-3 gap-x-5 pt-12">
        <ModalCadastro
          title={"Cadastrar alunos"}
          description={"Cadastrar ou listar alunos"}
          modalTitle={"Cadastrar Alunos"}
          label1={"Nome"}
          label2={"Email"}
          buttonTitle={"Cadastrar"}
          label3={"Cadastrar alunos via arquivo CSV"}
        />
        <ModalCadastro
          title={"Cadastrar Professores"}
          description={"Cadastrar ou listar professores"}
          modalTitle={"Cadastrar Professores"}
          label1={"Nome"}
          label2={"Email"}
          buttonTitle={"Cadastrar"}
          label3={"Cadastrar professores via arquivo CSV"}
        />
        <ModalCadastro
          title={"Gerenciar Monitores"}
          description={"Cadastre monitores e seus horários"}
          modalTitle={"Cadastrar Monitores"}
          label1={"Nome"}
          label2={"Email"}
          buttonTitle={"Cadastrar"}
          label3={"Cadastrar monitores via arquivo CSV"}
          isMonitorModal={true}
          className="overflow-y-scroll"
        />

        <ModalCadastro
          title={"Gerenciar Disciplinas"}
          description={"Cadastre e crie exercícios para a disciplina"}
          modalTitle={"Gerenciar Disciplinas"}
          label1={"Código da disciplina"}
          label2={"Nome da disciplina"}
          buttonTitle={"Cadastrar"}
          label3={"Cadastrar exercícios para uma disciplina"}
          isDisciplinaModal={true}
        />

        <Link href="/404">
          <Dialog>
            <DialogTrigger>
              <CardUsuarios
                onClick={() => {}}
                title={"Ranking de Alunos"}
                description={"Vizualize o ranking de alunos"}
              />
            </DialogTrigger>
          </Dialog>
        </Link>
      </div>
    </main>
  );
}
