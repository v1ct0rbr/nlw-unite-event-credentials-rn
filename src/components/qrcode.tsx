import { colors } from "@/styles/colors";
import QRCodeSVG from "react-native-qrcode-svg";


type QRCodeProps = {
    value: string
    size: number
}

export function QRCode({value, size}: QRCodeProps){
    return (
        <QRCodeSVG value={value} size={size} color={colors.white}  backgroundColor="transparent" />
    )
}