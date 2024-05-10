
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface CookieButtonProps {
  onPress: () => void;  
  title: string;    
}

const CookieButton: React.FC<CookieButtonProps> = ({ onPress, title }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View className="bg-blue-500 p-10">
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
}
export default CookieButton;
