import create from 'zustand'
import { devtools } from 'zustand/middleware'
const contractAdress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'

export const useClientStore = create(set => ({
    clients: ['Customer', 'Restaurant', 'Courrier'],
    selectedClient: 'Customer',
    setSelectedClient: client => {
        set(state => ({ selectedClient: client }))
    },
}))

export const useContractStore = create(set => ({
    contractAdress: contractAdress,
    connectedAddress: '',
    isConnectedWallet: false,
    setIsConnectedWallet: () => set(state => ({ isConnectedWallet: true })),
    setConnectedAddress: adress => set(() => ({ connectedAddress: adress })),
}))

export const useUserStore = create(
    devtools(set => ({
        user: {},
        setUser: async (balance, userAddress, customer, restaurant, courrier) => {
            set(state => ({ user: { balance: balance, userAddress: userAddress, customer: customer, restaurant: restaurant, courrier: courrier } }))
        },
        removeUser: () => set({ user: {} }),
    }))
)
export const useFoodStore = create(
    devtools(set => ({
        foods: [],
        update: 0,
        cartFoods:[],
        setUpdate:()=>set((state)=>({update:state.update+1})),
        setFoods: foods => set(state => ({ foods: foods })),
        setCartFoods: (food) => set(state => ({ cartFoods: [...state.cartFoods, food] })),
        removeFoodFromCard:(cartFood)=>set(state=>({cartFoods:state.cartFoods.filter(food=>cartFood!==food)}))
    }))
)
