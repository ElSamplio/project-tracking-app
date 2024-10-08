import Dialog from "@/components/dialog";
import InputText from "@/components/inputtext";
import { EntityType } from "@/enums/EntityType";
import useSaveProject from "@/hooks/useSaveProject";

interface ProjectDialogProps {
  visible: boolean;
  header: string;
  entityType: EntityType;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  visible,
  header,
  entityType,
  onClose,
}) => {
  const {
    name,
    setName,
    description,
    setDescription,
    saveProject,
    saveSite,
    loading,
    error,
  } = useSaveProject();

  const handleSave = async () => {
    switch (entityType) {
      case EntityType.PROJECT:
        await saveProject();
        break;
      case EntityType.SITE:
        await saveSite();
        break;
    }
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
