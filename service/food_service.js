const contractAdress = '0x6c4497165a59EaEb8f2b8c202BAAd8b9BEdA5213'
import { abi } from '../public/BlockCart.json'
import { BigNumber, ethers } from 'ethers'

export const getFoods = async (setFoods) => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    const foodLenght = await connectedContract.getFoodCount()
    const foods = []
    for (let index = 1; index < foodLenght.toNumber(); index++) {
        const food = await connectedContract
            .foods(index)
            .then(tx => foods.push(tx))
            .catch(e => console.log(e))
    }
    setFoods(foods)
}

export const addFood = async ({ link, name, desc, category, price },setUpdate) => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    await connectedContract
        .addFood(link, name, desc, BigNumber.from(price), category)
        .then(tx => console.log(tx))
        .catch(e => {
            alert('ürün eklenmedi')
            console.log(e)
        })
    setUpdate()
}
export const changeActivityFood = async (id,setUpdate) => {
    const { contract, signer } = await contractConnect()
    const connectedContract = contract.connect(signer)
    await connectedContract
        .changeActiveFood(id)
        .then(tx => console.log(tx))
        .catch(e => {
            alert('işlem geröekleştirilemedi')
            console.log(e)
        })
    setUpdate()
}


export const contractConnect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAdress, abi, provider)
    return { contract, signer }
}