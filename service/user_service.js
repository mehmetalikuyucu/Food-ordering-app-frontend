const contractAdress = '0x6c4497165a59EaEb8f2b8c202BAAd8b9BEdA5213'
import { abi } from '../public/BlockCart.json'
import { ethers } from 'ethers'
import { hashMessage } from 'ethers/lib/utils'

export const contractConnect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAdress, abi, provider)
    return { contract, signer }
}

export const signMessage = async setUser => {
    const { contract, signer } = await contractConnect()
    const message = 'login'
    const userAddress = ''
    const signature = await signer.signMessage(message).then(value => {
        userAddress = ethers.utils.recoverAddress(hashMessage(message), value)
    })
    const balance=''
    const courrier = {}
    const restaurant = {}
    const customer = {}
    await contract
        .customers(userAddress)
        .then(tx => (customer = tx))
        .catch(e => console.log(e))
    await contract
        .restaurants(userAddress)
        .then(tx => (restaurant = tx))
        .catch(e => console.log(e))
    await contract
        .courriers(userAddress)
        .then(tx => (courrier = tx))
        .catch(e => console.log(e))
    await contract
        .balanceOf(userAddress)
        .then(tx => balance=tx.toString())
        .catch(e => console.log(e))
    setUser(balance,userAddress, customer, restaurant, courrier)
}
export const getBalance = async address => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    connectedContract
        .balanceOf(address)
        .then(tx => console.log(tx.toString()))
        .catch(e => console.log(e))
}

export const getCustomerUser = async address => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    connectedContract
        .customers(address)
        .then(tx => console.log(tx))
        .catch(e => console.log(e))
}

export const getRestaurantUser = async address => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    connectedContract
        .restaurants(address)
        .then(tx => console.log(tx))
        .catch(e => console.log(e))
}

export const getCourrierUser = async address => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    connectedContract
        .courriers(address)
        .then(tx => console.log(tx))
        .catch(e => console.log(e))
}
export const createCourrier = async name => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    connectedContract
        .createCourrier(name)
        .then(tx => console.log(tx))
        .catch(e => {
            console.log(e)
            alert('hesap oluşturulamadı')
        })
}

export const createCustomerAccount = async (name, mail, phoneNumber) => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    connectedContract
        .createCustomer(name, mail, phoneNumber)
        .then(tx => console.log(tx))
        .catch(e => {
            console.log(e)
            alert('hesap oluşturulamadı')
        })
}

export const createRestaurantAccount = async (name, desc) => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    connectedContract
        .createRestaurant(name, desc)
        .then(tx => console.log(tx.gasPrice))
        .catch(e => {
            console.log(e)
            alert('hesap oluşturulamadı')
        })
}