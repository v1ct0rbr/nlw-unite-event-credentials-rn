
# NLW - Pass-In RN

Aplicativo desenvolvido para permitir o auto cadastro em eventos e a visualização do crachá do participante. Com funcionalidades de auto cadastro, geração de crachá com QR code e escolha de imagem da galeria, o Pass In RN oferece uma experiência completa para os participantes de qualquer evento.

## Funcionalidades

- Auto Cadastro: Permita que os participantes se cadastrem facilmente no evento através do aplicativo.
- Geração de Crachá: Crie crachás personalizados para os participantes, contendo informações importantes e um QR code para check-in.
- Escolha de Imagem: Ofereça aos participantes a opção de escolherem uma imagem da galeria para personalizar seus crachás.

## Tecnologias Utilizadas
O Pass In RN foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

- React Native: Um framework para o desenvolvimento de aplicativos móveis utilizando JavaScript e React.
- Async Storage: Uma biblioteca para armazenamento de dados de forma assíncrona no dispositivo.
- React Navigation: Uma biblioteca para navegação em aplicativos React Native.
- Axios: Uma biblioteca JavaScript para fazer requisições HTTP.
- Expo Image Picker: Uma biblioteca para seleção de imagens da galeria do dispositivo.
- Expo Router: Um conjunto de ferramentas de roteamento para aplicativos Expo.
- Moti: Uma biblioteca de animações para React Native.
- Native Wind: Uma biblioteca de estilos utilitários para React Native.
- React Native Reanimated: Uma biblioteca para animações complexas em React Native.
- React Native QRCode SVG: Uma biblioteca para a geração de QR codes em React Native.
- Zustand: Uma biblioteca para gerenciamento de estado em React.
## Instalação

Certifique-se de ter o aplicativo expo go instalado no dispositivo
Certifique-se também de que backend também esteja em execução.
O backend da aplicação foi feito em node e pode ser acessado através do link
https://github.com/v1ct0rbr/nlw-unite-nodejs

Redefina as configurações do arquivo: ./src/server/api.ts
para bater com as configurações de comunicação do back.

Instale as dependências

```bash
  npx expo install 
```
    
Então execute a aplicação através do comando:

```bash
  npx expo start
```
## Screenshots

![App Screenshot](https://github.com/v1ct0rbr/nlw-unite-event-credentials-rn/blob/main/assets/app-images/img01.png?raw=true)
![App Screenshot](https://github.com/v1ct0rbr/nlw-unite-event-credentials-rn/blob/main/assets/app-images/img02.png?raw=true)

