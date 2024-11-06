import { View, Image, Text, ActivityIndicator } from "react-native";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import useGetCompany from "@/hooks/useGetCompany";
import styles from "./style";
import ProjectDialog from "./forms/ProjectDialog";
import Toast from "@/components/toast";
import { clearMessage } from "@/redux/slices/messageSlice";
import { InputWithIcon } from "@/components/common";
import TagsBoard from "./common";
import { Tag } from "@/types/tag";
import { clearProject, setProject } from "@/redux/slices/projectSlice";
import { EntityType } from "@/enums/EntityType";
import ImageBoard from "./ImageBoard";
import IconButton from "@/components/iconbutton";
import Colors from "@/constants/Colors";
import useLogin from "@/hooks/useLogin";
import { clearSite, setSite } from "@/redux/slices/siteSlice";
import { Site } from "@/types/site";
import Sizes from "@/constants/Sizes";

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const company = useSelector((state: RootState) => state.company.company);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentEntityType, setCurrentEntityType] = useState<EntityType>(
    EntityType.PROJECT
  );
  const { loading, loadCompany } = useGetCompany();
  const { logout } = useLogin();
  const dispatch: AppDispatch = useDispatch();
  const project = useSelector((state: RootState) => state.project.project);
  const site = useSelector((state: RootState) => state.site.site);

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
    if (tag.selected) {
      const foundProject = company?.projects?.filter(
        (elem) => elem._id === tag.id
      );
      if (foundProject && foundProject.length > 0) {
        dispatch(setProject(foundProject[0]));
        dispatch(clearSite());
      }
    } else {
      dispatch(clearProject());
    }
  };

  const handleSiteTagPress = (tag: Tag) => {
    if (tag.selected) {
      const foundProject = company?.projects?.filter(
        (elem) => elem._id === tag.id
      );
      let foundSite: Site | undefined = undefined;
      if (project) {
        const foundSites = project.sites?.filter((elem) => elem._id === tag.id);
        if (foundSites && foundSites?.length > 0) {
          foundSite = foundSites[0];
        }
      } else {
        for (let prj of company?.projects || []) {
          const foundSites = prj.sites?.filter((elem) => elem._id === tag.id);
          if (foundSites && foundSites?.length > 0) {
            foundSite = foundSites[0];
          }
          if (foundSite) {
            break;
          }
        }
      }
      if (foundSite) {
        dispatch(setSite(foundSite));
      }
    } else {
      dispatch(clearSite());
    }
  };

  const handleNewEntity = (entityType: EntityType) => {
    setModalVisible(true);
    setCurrentEntityType(entityType);
  };

  return loading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View style={styles.homeContainer}>
      <View style={styles.logoutIcon}>
        <IconButton
          backgroundColor={Colors.TAG_BACKGROUND}
          iconColor={Colors.TAG_TEXT_COLOR}
          iconName="log-out-outline"
          iconSize={Sizes.ROUND_BUTTON_ICON_SIZE}
          size={Sizes.ROUND_BUTTON_SIZE}
          onPress={logout}
        />
      </View>
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

      <View>
        <View style={styles.searchContainer}>
          <InputWithIcon iconName="search" placeholder="Buscar" />
        </View>
        <TagsBoard
          title="Proyectos"
          data={projectsTags}
          tagType={EntityType.PROJECT}
          onIconButtonPress={() => handleNewEntity(EntityType.PROJECT)}
          onTagPress={handleProjectTagPress}
        />
        {projectsTags && projectsTags.length > 0 && (
          <TagsBoard
            title={!project ? "Sitios" : `Sitios - Proyecto ${project.name}`}
            data={sitesTags}
            tagType={EntityType.SITE}
            onIconButtonPress={() => handleNewEntity(EntityType.SITE)}
            onTagPress={handleSiteTagPress}
            disableIconButton={!project}
          />
        )}
        <ImageBoard />
      </View>
      <ProjectDialog
        entityType={currentEntityType}
        header={`Nuevo ${currentEntityType}`}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Toast />
    </View>
  );
};

export default HomeScreen;
