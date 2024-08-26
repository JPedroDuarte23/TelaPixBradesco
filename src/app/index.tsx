import Button from "@/components/button";
import { View, Text, Image, Keyboard, Alert, ScrollView } from "react-native";
import 'nativewind'

export default function Index() {
  return (
    <View className="flex-1">
      <View className="bg-pink-500 h-24 pt-8 pl-4 flex flex-row gap-8 items-center">
        <Image className="w-7 h-7" source={require("@/assets/backIcon.png")}></Image>
        <Text className="text-white font-semibold text-2xl flex-1">Pix</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 overflow-scroll">

        <Image source={require("@/assets/Shape.png")} />

        <View className="flex flex-col mt-[-96] mx-6">

          <Text className="text-white font-semibold text-xl mb-4">Como você quer transferir?</Text>

          <View className="flex flex-row rounded-2xl overflow-hidden shadow-black shadow-lg mb-4 bg-white items-center">
            <Button label="Celular">
              <Image className="w-8 h-8" source={require("@/assets/icons/phoneIcon.png")} />
            </Button>
            <View className="w-px bg-gray-500 rounded-full h-3/5"></View>
            <Button label="CPF/CNPJ" classname="text-xs">
              <Image className="w-8 h-8" source={require("@/assets/icons/personalDocIcon.png")} />
            </Button>
            <View className="w-px bg-gray-500 rounded-full h-3/5"></View>
            <Button label="E-mail">
              <Image className="w-8 h-8" style={{ resizeMode: 'contain' }} source={require("@/assets/icons/mailIcon.png")} />
            </Button>
            <View className="w-px bg-gray-500 rounded-full h-3/5"></View>
            <Button label="Chave aleatória" classname="text-xs">
              <Image className="w-8 h-8" source={require("@/assets/icons/multipleKeyIcon.png")} />
            </Button>
          </View>

          <View className="flex flex-row rounded-2xl rou overflow-hidden shadow-black shadow-lg mb-6 bg-white items-center">
            <Button variant="extended" label="Escolher um contato">
              <Image className="w-8 h-8" source={require("@/assets/icons/blueStarIcon.png")} />
            </Button>
            <View className="w-px bg-gray-500 rounded-full h-3/5"></View>
            <Button variant="extended" label="Digitar agência e conta">
              <Image className="w-8 h-8" source={require("@/assets/icons/blueBankIcon.png")} />
            </Button>
          </View>

          <Text className="text-black font-semibold text-lg mb-4">Mais opções</Text>
        </View>

        <View>
          <ScrollView horizontal
            className="flex flex-row gap-4 mb-2"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 14, paddingHorizontal: 20, paddingBottom: 12 }}
          >

            <Button variant="square" label="Pix copia e cola">
              <Image className="w-7 h-7" source={require("@/assets/icons/copyIcon.png")} />
            </Button>
            <Button variant="square" label="Ler um QR Code">
              <Image className="w-8 h-8" source={require("@/assets/icons/widgetIcon.png")} />
            </Button>
            <Button variant="square" label="Trazer dinheiro">
              <Image className="w-8 h-8" source={require("@/assets/icons/holdCashIcon.png")} />
            </Button>
            <Button variant="square" label="Receber por Pix">
              <Image className="w-8 h-8" source={require("@/assets/icons/moneyIcon.png")} />
            </Button>
          </ScrollView>
        </View>


        <Text className="text-black font-semibold text-lg mb-4 ml-5">Outros serviços</Text>

        <View className="bg-gray-200 h-full px-5 pb-12 mt-[30]">
          <View className="flex flex-wrap flex-row gap-2 justify-between mt-[-30]">
            <Button variant="list" label="Extrato Pix">
              <Image className="w-8 h-8" source={require("@/assets/icons/extractIcon.png")} />
            </Button>
            <Button variant="list" label="Minhas chaves Pix">
              <Image className="w-8 h-8" source={require("@/assets/icons/keyIcon.png")} />
            </Button>
            <Button variant="list" label="Gerenciar contatos">
              <Image className="w-8 h-8" source={require("@/assets/icons/starIcon.png")} />
            </Button>
            <Button variant="list" label="Limites Pix">
              <Image className="w-8 h-8" source={require("@/assets/icons/settingsIcon.png")} />
            </Button>
            <Button variant="list" label="Pix agendados">
              <Image className="w-8 h-8" source={require("@/assets/icons/calendarIcon.png")} />
            </Button>
            <Button variant="list" label="Notificações">
              <Image className="w-8 h-8" source={require("@/assets/icons/notificationIcon.png")} />
            </Button>
            <Button variant="list" label="Contestações">
              <Image className="w-8 h-8" source={require("@/assets/icons/contestationIcon.png")} />
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
