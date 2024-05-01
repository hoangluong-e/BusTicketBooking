import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  StatusBar,
  NativeModules,
  Button,
  FlatList,
} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CButton from '../../../components/Button';
import PopularRoutes from './PopularRoutes';
import Promotions from './Promotions';

const {StatusBarManager} = NativeModules;

function Home() {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/background.png')}
        style={styles.background}
      />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.row}>
            <Fontisto name="bus" size={SIZES.xxLarge} />
            <Text style={styles.txt}>Hi, Hoang</Text>
          </View>
          <View style={styles.txt_box}>
            <Text style={styles.txt}>
              Guarantee 150% refund if transport service is not provided
            </Text>
          </View>
          <View style={styles.search}>
            <View style={styles.row_search}>
              <FontAwesome
                style={styles.icon}
                name="circle-o"
                size={SIZES.xLarge}
                color={COLORS.blue}
              />
              <Text style={styles.search_txt}>Start point</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.row_search}>
              <FontAwesome
                style={styles.icon}
                name="circle-o"
                size={SIZES.xLarge}
                color={COLORS.red}
              />
              <Text style={styles.search_txt}>Where to?</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.row_search}>
              <Entypo
                style={styles.icon}
                name="calendar"
                size={SIZES.xLarge}
                color={COLORS.primary}
              />
              <Text style={styles.search_txt}>Departure time</Text>
            </View>
          </View>
          <CButton onPress={handlePress} title="Search" />
          <View style={styles.box}>
            <Text style={styles.txt_title}>Popular bus routes</Text>
            <PopularRoutes />
          </View>
          <View style={styles.box}>
            <Text style={styles.txt_title}>Promotions</Text>
            <Promotions />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -10,
  },
  body: {
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
  },
  search: {
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  row: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    marginTop: Platform.OS ? StatusBarManager.HEIGHT : StatusBar.currentHeight,
  },
  row_search: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt_box: {
    width: '85%',
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.xxLarge,
  },
  box: {
    width: '100%',
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.xLarge,
  },
  line: {
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  txt: {
    fontWeight: 'bold',
    color: COLORS.black2,
    fontSize: SIZES.small,
  },
  txt_title: {
    fontWeight: 'bold',
    color: COLORS.black2,
    fontSize: SIZES.medium,
  },
  search_txt: {
    color: COLORS.gray,
    fontSize: SIZES.medium,
    fontWeight: '500',
  },
  icon: {
    padding: 12,
  },
});
