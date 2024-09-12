import { View, Image, Text, ActivityIndicator } from "react-native";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import useGetCompany from "@/hooks/useGetCompany";
import styles from "./style";
import IconButton from "@/components/iconbutton";
import Colors from "@/constants/Colors";

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const company = useSelector((state: RootState) => state.company.company);
  const { loading, error, loadCompany } = useGetCompany();

  const companyHasProjects = useMemo(
    () => company?.projects?.length && company?.projects?.length > 0,
    [company]
  );

  useEffect(() => {
    const fetchCompanyDataAsync = async () => {
      await loadCompany();
    };
    fetchCompanyDataAsync();
  }, []);

  return loading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View>
      {/* <Text>User: {JSON.stringify(user)}</Text>
    <Text>Loading: {"" + loading}</Text>
    <Text>Company: {JSON.stringify(company)}</Text> */}
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
          <Text>YES PROJECTS</Text>
          <Text>Company: {JSON.stringify(company)}</Text>
          <IconButton iconName="arrow-forward" backgroundColor={Colors.CLICKABLE_PRIMARY_BG} iconColor="white" iconSize={25} size={40}/>
        </View>
      ) : (
        <View>
          <Text>NO PROJECTS here</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
