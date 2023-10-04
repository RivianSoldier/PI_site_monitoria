import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Navbar } from "@/components/organisms/Navbar";

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
        <Card className="bg-[#545E75] border-2 border-slate-900 hover:bg-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-80 h-40">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Cadastrar Alunos
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Cadastre e liste alunos
          </CardContent>
        </Card>
        <Card className="bg-[#545E75] border-2 border-slate-900 hover:bg-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-80 h-40">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Cadastrar Professores
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Cadastre e liste professores
          </CardContent>
        </Card>
        <Card className="bg-[#545E75] border-2 border-slate-900 hover:bg-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-80 h-40">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Gerenciar Disciplinas
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Cadastre e crie exercícios para a disciplina
          </CardContent>
        </Card>
        <Card className="bg-[#545E75] border-2 border-slate-900 hover:bg-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-80 h-40">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Gerenciar Monitores
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Cadastre monitores e seus horários
          </CardContent>
        </Card>
        <Card className="bg-[#545E75] border-2 border-slate-900 hover:bg-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-80 h-40">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Ranking de Alunos
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Vizualize o ranking de alunos
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
