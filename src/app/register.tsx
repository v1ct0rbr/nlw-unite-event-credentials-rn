import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { api } from "@/server/api";
import { colors } from "@/styles/colors";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, StatusBar, View } from "react-native";
import axios from 'axios'

interface RegisterResponse {
  attendeeId: number;
}


export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const EVENT_ID = "9e9bd979-9d10-4915-b339-3786b1634f33"

  async function handleRegister() {
    // Implement your register logic here
    try{
    if (!name.trim() || !email.trim()) {
      return Alert.alert("Inscrição", "Nome e e-mail são obrigatórios");
    }
    setIsLoading(true);

    const registerResponse = await api.post<RegisterResponse>(`/events/${EVENT_ID}/attendees`, {name, email})

    if(registerResponse.data.attendeeId){
      Alert.alert("Inscrição", "Inscrição realizada com sucesso", [
        {
          text: "Ok",
          onPress: () => router.push("/ticket")
        },
        {
          text: "Cancelar",
          onPress: () => setIsLoading(false)
        }
      ]);
    }

    
    }catch(error){
      console.log(error)
      setIsLoading(false)
      if(axios.isAxiosError(error)){
        if(String(error.response?.data.message).includes("already registered")){
         return Alert.alert("Inscrição", "E-mail já cadastrado");
        }
      }
      Alert.alert("Inscrição", "Erro ao realizar inscrição");
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
          <FontAwesome6
            name="user-circle"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </Input>
        <Button title="Realizar inscrição" onPress={handleRegister} isLoading={isLoading} />
        <Link
          href="/"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  );
}
