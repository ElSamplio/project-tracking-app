import React from "react";
import { Modal, ModalProps, View, Text } from "react-native";
import Button from "../button";
import styles from "./style";

interface DialogAction {
  title: string;
  action: () => void;
  disabled?: boolean
}

interface DialogProps extends ModalProps {
  header: string;
  closeButtonAction?: () => void;
  action?: DialogAction;
}

const Dialog: React.FC<React.PropsWithChildren<DialogProps>> = ({
  children,
  header,
  closeButtonAction,
  action,
  ...props
}) => {
  return (
    <Modal {...props} animationType="slide">
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{header}</Text>
        </View>
        {children}
        <View style={styles.buttonsPanel}>
          <Button
            label={action?.title || ''}
            onPress={action?.action}
            buttonStyle={styles.actionButtonStyle}
            textStyle={styles.actionButtonTextStyle}
            disabled={action?.disabled}
          />
          <Button
            label="Cerrar"
            onPress={closeButtonAction}
            buttonStyle={styles.closeButtonStyle}
            textStyle={styles.closeButtonTextStyle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;
