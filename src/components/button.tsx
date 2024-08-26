import { View, Image, Text, ImageSourcePropType } from "react-native";
import '@/styles/global.css'
import clsx from "clsx";

interface ButtonProps{
  label: string;
  children: any;
  classname?: string;
  variant?: "centralized" | "square" | "extended" | "list";
}

export default function Button({ label, children, classname, variant = "centralized" }: ButtonProps) {

  switch(variant){
    case "centralized":
      return (
        <View className="flex-1 h-24 flex flex-col bg-white justify-center items-center gap-1.5">
          { children }
          <Text className={clsx("font-semibold text-center align-middle px-1", classname ? classname : "text-sm")}>{label}</Text>
        </View>
      )
      
    case "square": 
      return (
        <View className="w-[100] h-[100] flex flex-col bg-white justify-center px-5 gap-2.5 rounded-xl shadow-lg shadow-black">
        { children }
        <Text className={clsx("font-semibold align-middle", classname ? classname : "text-sm")}>{label}</Text>
      </View>
      )
    
    case "extended":
      return (
        <View className="flex-1 h-16 flex flex-row bg-white items-center gap-2 px-0 pl-4">
        { children }
        <Text className={clsx("font-semibold align-middle w-[90]", classname ? classname : "text-sm")}>{label}</Text>
      </View>
      )

    case "list":
      return (
        <View className="rounded-2xl px-4 mb-2 py-3 h-20 w-[156] flex flex-row gap-2 bg-white items-center shadow-md shadow-black">
          <View className="rounded-full h-10 w-10 flex items-center justify-center bg-red-100">
            { children }
          </View>
        <Text className={clsx("font-semibold align-middle w-24", classname ? classname : "text-sm")}>{label}</Text>
      </View>
      )
    
    default: 
    return (
      <View className="flex-1 h-24 flex flex-col bg-white justify-center items-center gap-1.5">
        { children }
        <Text className={clsx("font-semibold text-center align-middle", classname ? classname : "text-sm")}>{label}</Text>
      </View>
    )
  }

 
}