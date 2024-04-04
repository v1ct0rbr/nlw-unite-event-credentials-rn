import { Button } from "@/components/button";
import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {Share} from 'react-native'
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Modal
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { QRCode } from "@/components/qrcode";
import { useBadgeStore } from "@/store/badge-store";

import {Redirect} from 'expo-router'
import { MotiView } from "moti";

export default function Ticket() {

  const [image, setImage] = useState<string>("");
  const [qrCodeExpanded, setQRCodeExpanded] = useState<boolean>(false);

  const badgeStore = useBadgeStore();

  async function handleSelectImage(){
    try{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,4],
        
      });
      if(result.assets){
        
        badgeStore.updateAvatar(result.assets[0].uri);
      }

      
    }catch(err){
      Alert.alert("FOTO", "Erro ao selecionar foto");
    }
  }
  function handleRemoveCredential(){
    Alert.alert("Remover Credencial", "Deseja remover a credencial?", [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Remover",
        onPress: () => {
          badgeStore.remove();
         
        }
      }
    ])
  }

  async function handleShare() {
    try {
        if(badgeStore.data?.checkInURL){
          await Share.share({
            message: `Estou participando do ${badgeStore.data.eventTitle}!`,
            url: badgeStore.data.checkInURL
          })
        }
    }catch (error) {
      Alert.alert("Erro", "Não foi possível compartilhar");
    }
  }

  if(!badgeStore.data){
    return <Redirect href="/" />
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle={"light-content"} />
      <Header title="Minha Credencial" />
      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential data={badgeStore.data} onChangeAvatar={handleSelectImage} onExpandQRCode={() => setQRCodeExpanded(true)} />

        <MotiView from={{
          translateY: 0,
        }} animate={{
          translateY: 10
        }} 
          transition=
          {{
            loop: true,
            type: "timing",
            duration: 700
          }}>
          <FontAwesome
            name="angle-double-down"
            size={24}
            color={colors.gray[300]}
            className="self-center my-6"
          />
        </MotiView>
        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>
        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo que você vai participar do Unite Summit{' '}
          {badgeStore.data.eventTitle}
        </Text>
        <Button title="Compartilhar" onPress={handleShare} />
        <TouchableOpacity activeOpacity={0.7} className="mt-10" onPress={handleRemoveCredential}>
          <Text className="text-base text-white font-bold text-center">
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={qrCodeExpanded} statusBarTranslucent animationType="slide">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <QRCode value="teste" size={300} />
          <TouchableOpacity activeOpacity={0.7} onPress={() => setQRCodeExpanded(false)}>
            <Text className="font-bold text-orange-500 text-sm text-center mt-10">Fechar QRCode</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
