import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC]">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <Image
          src="/logo-IMT.png"
          alt="IMT Logo"
          width={128}
          height={24}
          priority
        />
        <div>
          <Avatar className="flex w-16 h-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">Bem vindo professor</p>
      </div>

      <div className="flex flex-wrap align max-w-5xl w-full justify-center gap-y-3 gap-x-5 pt-4">
        <Card className="bg-gradient-to-r from-[#545E75] to-[#82A0BC] border-2 border-slate-900 hover:from-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-60">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Cadastrar Alunos
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Cadastre e liste alunos
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-[#545E75] to-[#82A0BC] border-2 border-slate-900 hover:from-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-60">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Cadastrar Professores
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Cadastre e liste professores
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-[#545E75] to-[#82A0BC] border-2 border-slate-900 hover:from-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-60">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Gerenciar Disciplinas
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Cadastre e crie exercícios para a disciplina
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-[#545E75] to-[#82A0BC] border-2 border-slate-900 hover:from-slate-50 hover:border-slate-900 text-white hover:text-black transition ease-in-out hover:scale-105 w-60">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              Gerenciar Monitores
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Cadastre monitores e seus horários
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
