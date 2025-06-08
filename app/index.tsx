import { SafeAreaView, ScrollView } from 'react-native';

import Footer from '@/components/Footer';
import Middle from '@/components/Middle';
import Slides from '@/components/Slides';
import Top from '@/components/Top';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        className="bg-white flex-1"
      >
        <Top />
        <Middle />
        <Slides />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
