"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { CardUsuarios } from "./CardUsuarios";

const nomeESenhaSchema = z.object({
  name: z.string().min(3, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
});

export const ModalCadastroAlunoEProfessor = ({ title, description }) => {
  const nomeEmailForm = useForm({
    resolver: zodResolver(nomeESenhaSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(data) {
    console.log("Dados do formulário:", data);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <CardUsuarios title={title} description={description} />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="pb-3">{title}</DialogTitle>
          <FormProvider {...nomeEmailForm}>
            <form
              onSubmit={nomeEmailForm.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={nomeEmailForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={nomeEmailForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Cadastrar
              </Button>
              <div>
                <FormLabel htmlFor="CSV_cadastro">
                  Cadastre usando arquivo CSV
                </FormLabel>
                <Input
                  className="cursor-pointer"
                  id="CSV_cadastro"
                  type="file"
                />
              </div>
            </form>
          </FormProvider>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
