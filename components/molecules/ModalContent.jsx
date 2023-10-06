import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CardHorarios } from "./CardHorarios";

export const ModalContent = ({
  modalTitle,
  label1,
  label2,
  label3,
  buttonTitle,
  isMonitorModal,
  children,
}) => (
  <DialogContent className="sm:max-w-[325px] md:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>{modalTitle}</DialogTitle>
      <div className="flex flex-col py-4">
        <div className="flex flex-col py-4 gap-4">
          <Label htmlFor="name" className="text-start">
            {label1}
          </Label>
          <Input id="name" placeholder="Nome completo" />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="E-mail" className="text-start">
            {label2}
          </Label>
          <Input type="email" id="e-mail" placeholder="00-00000-00@maua.br" />
        </div>
        {/* tabs */}
        {isMonitorModal && (
          <div className="flex justify-center mt-4 sm:max-w-full">
            <Tabs defaultValue="Segunda-feira" className="flex flex-col w-full">
              <TabsList className="flex justify-evenly">
                <TabsTrigger value="Segunda-feira">Seg</TabsTrigger>
                <TabsTrigger value="Terça-feira">Ter</TabsTrigger>
                <TabsTrigger value="Quarta-feira">Qua</TabsTrigger>
                <TabsTrigger value="Quinta-feira">Qui</TabsTrigger>
                <TabsTrigger value="Sexta-feira">Sex</TabsTrigger>
              </TabsList>
              <TabsContent value="Segunda-feira">
                <CardHorarios
                  title={"Horários de Atendimento"}
                  description={"Segunda-feira"}
                />
              </TabsContent>
              <TabsContent value="Terça-feira">
                <CardHorarios
                  title={"Horários de Atendimento"}
                  description={"Terça-feira"}
                />
              </TabsContent>
              <TabsContent value="Quarta-feira">
                <CardHorarios
                  title={"Horários de Atendimento"}
                  description={"Quarta-feira"}
                  horarioInicio={"00:00"}
                  horarioFim={"00:00"}
                />
              </TabsContent>
              <TabsContent value="Quinta-feira">
                <CardHorarios
                  title={"Horários de Atendimento"}
                  description={"Quinta-feira"}
                  horarioInicio={"00:00"}
                  horarioFim={"00:00"}
                />
              </TabsContent>
              <TabsContent value="Sexta-feira">
                <CardHorarios
                  title={"Horários de Atendimento"}
                  description={"Sexta-feira"}
                  horarioInicio={"00:00"}
                  horarioFim={"00:00"}
                />
              </TabsContent>
            </Tabs>
          </div>
        )}

        <div className="flex flex-col gap-6 mt-4">
          <Button>{buttonTitle}</Button>
          {!isMonitorModal && (
            <div>
              <Label htmlFor="CSV_cadastro">{label3}</Label>
              <Input id="CSV_cadastro" type="file" />
            </div>
          )}
          {isMonitorModal && (
            <Button variant="secondary">
              Visualizar Horários dos Monitores
            </Button>
          )}
        </div>
      </div>
    </DialogHeader>
  </DialogContent>
);
