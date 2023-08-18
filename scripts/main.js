import { getFish } from "./fish/database.js"
import {FishList} from "./fish/FishList.js"
import {TipList} from "./tips/TipList.js"
import {locationList} from "./locations/LocationList.js"

const allFish = getFish()

/*for (const fish of allFish) {
    console.log(fish)
} */

// Import the FishList function from the correct module

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish")


parentHTMLElement.innerHTML = FishList()
parentHTMLElement.innerHTML = TipList ()
parentHTMLElement.innerHTML = locationList ()


const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4]

// Only display even numbers
for (const number of numbers) {
    if (number % 3 === 0) {
        console.log(number)
    }
}


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fish ) {
        if (number % 3 === 0)
        return holyFish 
    }

   
}

/*export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
} */

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}

export const soldierFish = () => {
    const soldiers = []
    for (const fish of fish) {
        if (number % 5 ===0)
        return soldiers
    }
}