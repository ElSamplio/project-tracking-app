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
import { InputWithIcon } from "@/components/common";
import TagsBoard from "./common";
import { Tag } from "@/types/tag";
import { clearProject, setProject } from "@/redux/slices/projectSlice";

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const company = useSelector((state: RootState) => state.company.company);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { loading, error, loadCompany } = useGetCompany();
  const dispatch: AppDispatch = useDispatch();
  const project = useSelector((state: RootState) => state.project.project);

  const companyHasProjects = useMemo(
    () => company?.projects?.length && company?.projects?.length > 0,
    [company]
  );

  const projectsTags: Tag[] | undefined = useMemo(
    () =>
      company?.projects?.map((project) => ({
        id: project._id,
        label: project.name,
        selected: false,
      })),
    [company]
  );

  const sitesTags: Tag[] | undefined = useMemo(() => {
    const sites: Tag[] = [];
    if (!project) {
      company?.projects?.forEach((project) =>
        project.sites?.forEach((site) =>
          sites.push({
            id: site._id,
            label: site.name,
            selected: false,
          })
        )
      );
    } else {
      project.sites?.forEach((site) =>
        sites.push({
          id: site._id,
          label: site.name,
          selected: false,
        })
      );
    }
    return sites;
  }, [company, project]);

  useEffect(() => {
    dispatch(clearMessage());
    const fetchCompanyDataAsync = async () => {
      await loadCompany();
    };
    fetchCompanyDataAsync();
  }, []);

  const handleProjectTagPress = (tag: Tag) => {
    console.log({ tag });
    if (tag.selected) {
      const foundProject = company?.projects?.filter(
        (elem) => elem._id === tag.id
      );
      if (foundProject && foundProject.length > 0) {
        dispatch(setProject(foundProject[0]));
      }
    } else {
      dispatch(clearProject());
    }
  };

  const handleSiteTagPress = (tag: Tag) => {
    console.log({ tag });
  };

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
          <TagsBoard
            title="Proyectos"
            data={projectsTags}
            onIconButtonPress={() => setModalVisible(true)}
            onTagPress={handleProjectTagPress}
          />
          <TagsBoard
            title={!project ? "Sitios" : `Sitios - Proyecto ${project.name}`}
            data={sitesTags}
            onIconButtonPress={() => {}}
            onTagPress={handleSiteTagPress}
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
