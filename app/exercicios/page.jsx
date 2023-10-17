import { ExerciciosCard } from "@/components/organisms/ExerciciosCard";
import { Navbar } from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gradient-to-br from-[#82A0BC] font-sans scroll-smooth">
      <Navbar />
      <div className="p-10">
        <p className="font-sans text-6xl text-center font-bold">Exercícios</p>
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
    </main>
  );
}
