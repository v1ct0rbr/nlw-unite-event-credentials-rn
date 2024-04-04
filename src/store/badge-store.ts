import {create} from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'


export type BadgeStore = {
   

    id: string
    name: string
    email: string
    eventTitle: string
    checkInURL: string
    image?: string
    
}

type StateProps = {
    data: BadgeStore | null
    save: (badge: BadgeStore) => void
    remove: () => void
    updateAvatar: (uri: string) => void
}

export const useBadgeStore = create(
    persist<StateProps>(
    (set) => ({
   data: null,
   save: (data: BadgeStore) =>  set(() => ({data})),
  remove: () => set(() => ({data: null})),
  updateAvatar: (image: string) => set((state) => ({
    data: state.data ? {...state.data, image}: state.data
 })),
 }), {
    name: "nlw-unite:badge",
    storage: createJSONStorage(() => AsyncStorage),
 }))

 /* The  useBadgeStore  function creates a store with the following properties: 
 badges : An array of badges. addBadge : A function that adds a new badge to the store. removeBadge : A function that removes a badge from the store. updateBadge : A function that updates a badge in the store. 
 The  useBadgeStore  function uses the  create  function from the  zustand  library to create a store with the specified properties. The  create  function takes a callback function as an argument. The callback function takes a  set  function as an argument. The  set  function is used to update the store. 
 The  useBadgeStore  function returns an object with the specified properties. The properties are used to access the store in the components. 
 The  useBadgeStore  function is exported so that it can be used in other files. 
 Step 4: Using the Store in a Component 
 In this step, we will use the store in a component. We will create a new component called  BadgeList  that displays the list of badges from the store. 
 Create a new file called  badge-list.tsx  in the  src/components  directory with the following content:  */
 // Path: src/components/badge-list.tsx