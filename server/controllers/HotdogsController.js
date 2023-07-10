import { hotdogsService } from "../services/HotdogsService.js";
import BaseController from "../utils/BaseController.js";

export class HotdogsController extends BaseController {
    constructor() {
        super('api/hotdogs');

        this.router
            .get('', this.getHotdogs)
            .get('/:id', this.getHotdogById)
            .post('', this.createHotdog)
            .delete('/:id', this.removeHotdog)
            .put('/:id', this.updateHotdog)
    }

    async getHotdogs(req, res, next) {
        try {
            const hotdogs = await hotdogsService.getHotdogs()

            res.send(hotdogs)
        } catch (error) {
            next(error)
        }
    }

    async getHotdogById(req, res, next) {
        try {
            const hotdogId = req.params.id

            const hotdog = await hotdogsService.getHotdogById(hotdogId)

            res.send(hotdog)
        } catch (error) {
            next(error)
        }
    }

    async createHotdog(req, res, next) {
        try {
            const hotdogData = req.body

            const hotdog = await hotdogsService.createHotdog(hotdogData)

            res.send(hotdog)
        } catch (error) {
            next(error)
        }
    }

    async removeHotdog(req, res, next) {
        try {
            const hotdogId = req.params.id

            await hotdogsService.removeHotdog(hotdogId)

            res.send("The hotdog was removed from the menu!")
        } catch (error) {
            next(error)
        }
    }

    async updateHotdog(req, res, next) {
        try {
            const hotdogId = req.params.id

            const hotdogData = req.body

            const updatedHotdog = await hotdogsService.updateHotdog(hotdogId, hotdogData)

            res.send(updatedHotdog)
        } catch (error) {
            next(error)
        }
    }
}