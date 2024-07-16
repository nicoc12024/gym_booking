import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import useSlots from "../../../utils/hooks/useSlots";

const ConfirmationModalSlot = ({ isOpen, onOpenChange, date_and_start_time }) => {
  const { handleDeleteSlot } = useSlots();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="modal-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Confirmación</ModalHeader>
            <ModalBody>
              <p>Desea cancelar el slot</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancelar
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  handleDeleteSlot(date_and_start_time);
                  onClose();
                }}
              >
                Confirmar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModalSlot;
