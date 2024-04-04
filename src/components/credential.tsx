import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function Credential() {
  return (
    <View className="w-full self-stretch items-center">
      <Image
        source={require("@/assets/ticket/band.png")}
        className="w-24 h-52 z-10"
      />
      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">Unite Summit</Text>
            <Text className="text-zinc-50 text-sm font-bold">#1234</Text>
          </View>
          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>
        <Image
          source={{ uri: "https://github.com/v1ct0rbr.png" }}
          className="w-36 h-36 rounded-full -mt-24"
        />
        <Text className="font-bold text-2xl text-zinc-50 mt-4">
          Victor Queiroga
        </Text>
        <Text className="font-regular text-base text-zinc-300 mb-4">
          contato@victorqueiroga.com
        </Text>

        <Image
          source={require("@/assets/ticket/qrcode.png")}
          className="h-32 w-32"
        />
        <TouchableOpacity activeOpacity={0.7} className="mt-6">
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
