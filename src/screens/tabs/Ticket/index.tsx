import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Platform,
  NativeModules,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ticket from '../../../components/Ticket';
import {COLORS, SIZES} from '../../../constants';
import {useState} from 'react';

const {StatusBarManager} = NativeModules;

function MyTicket() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const handleUpcomingTab = () => {
    setActiveTab('upcoming');
  };

  const handleCompletedTab = () => {
    setActiveTab('completed');
  };

  const handleCancelledTab = () => {
    setActiveTab('cancelled');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'upcoming':
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
          </ScrollView>
        );
      case 'completed':
        return <Text>Completed Content</Text>;
      case 'cancelled':
        return <Text>Cancelled Content</Text>;
      default:
        return <Text>Upcoming Content</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Ticket</Text>
      <View style={styles.body}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            onPress={handleUpcomingTab}
            style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}>
            <Text style={activeTab === 'upcoming' && styles.activeText}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCompletedTab}
            style={[styles.tab, activeTab === 'completed' && styles.activeTab]}>
            <Text style={activeTab === 'completed' && styles.activeText}>
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCancelledTab}
            style={[styles.tab, activeTab === 'cancelled' && styles.activeTab]}>
            <Text style={activeTab === 'cancelled' && styles.activeText}>
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>{renderContent()}</View>
      </View>
    </View>
  );
}

export default MyTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: Platform.OS
      ? StatusBarManager.HEIGHT
      : StatusBar.currentHeight || 0 + 10,
    padding: 12,
    backgroundColor: COLORS.primary2,
    paddingLeft: SIZES.medium,
  },
  body: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.white,
    paddingTop: 10,
    paddingBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
  },
  activeText: {
    color: COLORS.blue,
  },
  contentContainer: {
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
    marginBottom: 80,
  },
});
