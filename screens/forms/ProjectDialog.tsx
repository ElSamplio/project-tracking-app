import Dialog from "@/components/dialog";
import InputText from "@/components/inputtext";
import useSaveProject from "@/hooks/useSaveProject";

interface ProjectDialogProps {
  visible: boolean;
  header: string;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  visible,
  header,
  onClose,
}) => {
  const {
    name,
    setName,
    description,
    setDescription,
    saveProject,
    loading,
    error,
  } = useSaveProject();

  const handleSave = async () => {
    await saveProject();
    onClose();
  };

  const handleClose = () => {
    onClose();
    setName("");
    setDescription("");
  };

  return (
    <Dialog
      visible={visible}
      header={header}
      closeButtonAction={handleClose}
      action={{
        title: !loading ? "Guardar" : "Guardando",
        action: handleSave,
        disabled: !name || loading,
      }}
    >
      <InputText placeholder="Nombre *" value={name} onChangeText={setName} />
      <InputText
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
    </Dialog>
  );
};

export default ProjectDialog;
