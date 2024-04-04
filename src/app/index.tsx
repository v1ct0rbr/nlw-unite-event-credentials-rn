import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { api } from "@/server/api";
import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Image, StatusBar, View } from "react-native";

export default function Home() {
  const [code, setSetcode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleAccessCredential() {
    try{
    if (!code.trim()) {
      return Alert.alert("Ingresso", "Código do ingresso é obrigatório");
    }
    setIsLoading(true)
    const {data} = await api.get(`/attendees/${code}/badge`);
    console.log(data)
    }catch(error){
      
      console.log(error)
      setIsLoading(false)
      Alert.alert("Ingresso", "Ingresso não encontrado");
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      ></Image>
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Código do ingresso"
            value={code}
            onChangeText={setSetcode}
          />
        </Input>
        <Button title="Acessar credencial" onPress={handleAccessCredential} />
        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
