import { useSelector } from "react-redux";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const ConfirmationModalSlot = ({ isOpen, onOpenChange, confirmSlot }) => {
  const { pendingSlotInfo, isCancelling, selectedSlot } = useSelector(
    (state) => state.slots
  );

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="modal-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Confirmación</ModalHeader>
            <ModalBody>
              {isCancelling ? (
                <p>
                  Desea cancelar el slot seleccionado para el {pendingSlotInfo.dayName}{" "}
                  {pendingSlotInfo.date} a las {pendingSlotInfo.hour}hs?
                </p>
              ) : selectedSlot ? (
                <p>
                  Usted ya tiene un slot confirmado, desea cancelarlo y confirmar para{" "}
                  {pendingSlotInfo.dayName} {pendingSlotInfo.date} a las{" "}
                  {pendingSlotInfo.hour}hs.?
                </p>
              ) : (
                <p>
                  Desea confirmar el slot para el {pendingSlotInfo.dayName}{" "}
                  {pendingSlotInfo.date} a las {pendingSlotInfo.hour}hs?
                </p>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancelar
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  confirmSlot();
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
