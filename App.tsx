import { useState } from 'react';
import { View } from 'react-native';
import CookieImage from '@/components/CookieImage';
import CookieButton from '@/components/CookieButton';

import "@/styles/global.css";

const App = () => {
  const [cookie, setCookie] = useState(require("./assets/biscoito.png"));

  const breakCookie = () => {
    setCookie(require("./assets/biscoitoQuebrado.png"));
  };

  const resetCookie = () => {
    setCookie(require("./assets/biscoito.png"));
  };

  return (
    <View className="bg-gray-500 w-full h-full">
      <View className="flex 1 mt-52 items-center justify-center ">
        <CookieImage source={cookie} onPress={breakCookie} />
      </View>
      <View className="flex 1 mt-52 items-center justify-center ">
        <CookieButton
          title="Quebrar outro biscoito da sorte"
          onPress={resetCookie}
        />
      </View>
    </View>
  );
};

export default App;

