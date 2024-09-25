import { View, Image, Text, ActivityIndicator } from "react-native";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import useGetCompany from "@/hooks/useGetCompany";
import styles from "./style";
import Colors from "@/constants/Colors";
import ActionCard from "@/components/actioncard";
import ProjectDialog from "./forms/ProjectDialog";
import Toast from "@/components/toast";
import { clearMessage } from "@/redux/slices/messageSlice";
import Button from "@/components/button";
import { InputWithIcon } from "@/components/common";
import PressableTag from "@/components/pressabletag";

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const company = useSelector((state: RootState) => state.company.company);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { loading, error, loadCompany } = useGetCompany();
  const dispatch: AppDispatch = useDispatch();

  const companyHasProjects = useMemo(
    () => company?.projects?.length && company?.projects?.length > 0,
    [company]
  );

  useEffect(() => {
    dispatch(clearMessage());
    const fetchCompanyDataAsync = async () => {
      await loadCompany();
    };
    fetchCompanyDataAsync();
  }, []);

  return loading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View style={styles.homeContainer}>
      <Image
        source={require("../assets/images/right_bubble_01.png")}
        style={[styles.bubble, styles.rightBubble1]}
      />
      <Image
        source={require("../assets/images/right_bubble_02.png")}
        style={[styles.bubble, styles.rightBubble2]}
      />
      <Text
        style={styles.nameHeader}
      >{`¡Bienvenido, ${user?.firstName}!`}</Text>

      {companyHasProjects ? (
        <View>
          <View style={styles.searchContainer}>
            <InputWithIcon iconName="search" placeholder="Buscar" />
          </View>
          <Text style={styles.sectionTitle}>Proyectos</Text>
          <View style={styles.tagsContainer}>
            {company?.projects?.map((project) => (
              <PressableTag
                key={project._id}
                tagKey={project._id}
                text={project.name}
              />
            ))}
          </View>
          <Button
            label="Nuevo proyecto"
            onPress={() => setModalVisible(true)}
          />
        </View>
      ) : (
        <ActionCard
          title="No hay proyectos"
          content="Aún no tienes proyectos en tu compañía, puedes crear tu primer proyecto pulsando el botón"
          action={{
            iconName: "arrow-forward",
            iconBackground: Colors.CLICKABLE_PRIMARY_BG,
            iconColor: "white",
            onActionPress: () => setModalVisible(true),
          }}
        />
      )}
      <ProjectDialog
        header="Nuevo proyecto"
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Toast />
    </View>
  );
};

export default HomeScreen;
