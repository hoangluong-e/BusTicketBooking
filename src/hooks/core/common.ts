import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";

export const useNavigator = () => {
    return useNavigation<NavigationProp<ParamListBase, string, undefined>>();
};

export const useNavigatorParams = <T = unknown>() => {
    const route = useRoute();
    return route.params as T;
};