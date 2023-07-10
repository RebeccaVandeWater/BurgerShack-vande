import { hotdogs } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class HotdogsService {

    getHotdogs() {
        return hotdogs
    }

    getHotdogById(hotdogId) {
        const foundHotdog = hotdogs.find(h => h.id == hotdogId)

        if (!foundHotdog) {
            throw new BadRequest(`${hotdogId} is not a valid ID.`)
        }

        return foundHotdog
    }

    createHotdog(hotdogData) {
        hotdogData.id = hotdogs.length + 1

        hotdogs.push(hotdogData)

        return hotdogData
    }

    removeHotdog(hotdogId) {
        const foundIndex = hotdogs.findIndex(h => h.id == hotdogId)

        if (foundIndex < 0) {
            throw new BadRequest(`${foundIndex} is not a valid index.`)
        }

        hotdogs.splice(foundIndex, 1)

    }

    updateHotdog(hotdogId, hotdogData) {
        let originalHotdog = this.getHotdogById(hotdogId)

        originalHotdog.name = hotdogData.name || originalHotdog.name

        originalHotdog.ingredients = hotdogData.ingredients || originalHotdog.ingredients

        originalHotdog.price = hotdogData.price || originalHotdog.price

        return originalHotdog
    }
}

export const hotdogsService = new HotdogsService