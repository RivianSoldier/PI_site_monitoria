import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { ButtonOpenModal } from "../atoms/ButtonOpenModal";
import { CardExercicios } from "./CardExercicios";

export const ModalCardExercicios = ({
  title,
  disciplina,
  tituloExercicio,
  descricaoExercicio,
}) => (
  <Dialog>
    <DialogTrigger>
      <ButtonOpenModal title={title} isDisciplina={true} />
    </DialogTrigger>
    <CardExercicios
      title={title}
      disciplina={disciplina}
      tituloExercicio={tituloExercicio}
      descricaoExercicio={descricaoExercicio}
    />
  </Dialog>
);
