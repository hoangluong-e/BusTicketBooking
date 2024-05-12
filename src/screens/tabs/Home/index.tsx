import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  StatusBar,
  NativeModules,
} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PopularRoutes from './PopularRoutes';
import Promotions from './Promotions';
import SearchTicket from './SearchTicket';
import setData from '../../../setData';

const {StatusBarManager} = NativeModules;

function Home() {
  //setData();
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
            <Text style={styles.txt_header}>Welcome</Text>
          </View>
          <View style={styles.txt_box}>
            <Text style={styles.txt_header}>
              Guarantee 150% refund if transport service is not provided
            </Text>
          </View>
          <SearchTicket />
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
  row: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    marginTop: Platform.OS ? StatusBarManager.HEIGHT : StatusBar.currentHeight,
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
  txt: {
    fontWeight: 'bold',
    color: COLORS.black2,
    fontSize: SIZES.small,
  },
  txt_header: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: SIZES.small,
  },
  txt_title: {
    fontWeight: 'bold',
    color: COLORS.black2,
    fontSize: SIZES.medium,
  },
});
