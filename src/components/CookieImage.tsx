import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';

interface CookieButtonProps {
  onPress: () => void;  // Alterado para void
  source: ImageSourcePropType;  // Tipo apropriado para source
}


const CookieImage: React.FC<CookieButtonProps> = ({ source, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-black">
        <Image source={source} className="i" style={{ width: 256, height: 256 }} />
      </View>
    </TouchableOpacity>
  );
};

export default CookieImage;

