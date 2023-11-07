"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

export const ModalTelaExercicios = ({
  viewOnly,
  modifyAccess,
  name,
  body,
  id,
}) => {
  return (
    <div>
      {modifyAccess ? (
        <Card key={id} className="flex w-full">
          <CardContent className="flex flex-row items-center p-2 flex-grow justify-between">
            <CardTitle className="text-start text-sm">{name}</CardTitle>
            <Dialog>
              <DialogTrigger>
                <Button>Resposta</Button>
              </DialogTrigger>
              <DialogContent className="overflow-auto max-h-screen">
                <DialogHeader>Resposta de {name}</DialogHeader>
                <DialogDescription className="flex flex-col gap-3">
                  {body}
                  {!viewOnly && (
                    <>
                      <Label>Atribuir nota</Label>
                      <div className="flex flex-row gap-3">
                        <Input
                          type="number"
                          min="1"
                          max="10"
                          className="w-1/2"
                        />
                        <Button className="w-1/2">Enviar</Button>
                      </div>
                    </>
                  )}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ) : (
        <Card key={id}>
          <CardContent className="flex flex-col items-center p-2 flex-grow justify-between gap-3">
            <CardTitle className="text-start text-sm">{name}</CardTitle>
            <CardDescription>{body}</CardDescription>
            <Textarea />
            <Button className="w-full">Enviar</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
