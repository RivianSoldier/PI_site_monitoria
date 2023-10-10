import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { CardUsuarios } from "../molecules/CardUsuarios";
import { ModalContent } from "../molecules/ModalContent";

export const ModalCadastro = ({
  title,
  description,
  modalTitle,
  label1,
  label2,
  label3,
  buttonTitle,
  isMonitorModal,
  isDisciplinaModal,
  isRanking,
}) => (
  <Dialog>
    <DialogTrigger>
      <CardUsuarios title={title} description={description} />
    </DialogTrigger>
    <ModalContent
      modalTitle={modalTitle}
      label1={label1}
      label2={label2}
      buttonTitle={buttonTitle}
      label3={label3}
      isMonitorModal={isMonitorModal}
      isDisciplinaModal={isDisciplinaModal}
    />
  </Dialog>
);
