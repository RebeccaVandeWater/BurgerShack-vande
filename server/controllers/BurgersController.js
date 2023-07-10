import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers');

        this.router
            .get('', this.getBurgers)
            .get('/:id', this.getBurgerById)
            .post('', this.createBurger)
            .delete('/:id', this.removeBurger)
            .put('/:id', this.updateBurger)
    }

    async getBurgers(req, res, next) {
        try {
            const burgers = await burgersService.getBurgers()

            res.send(burgers)
        } catch (error) {
            next(error)
        }

    }

    async getBurgerById(req, res, next) {
        try {
            const burgerId = req.params.id

            const burger = await burgersService.getBurgerById(burgerId)

            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next) {
        try {
            const burgerData = req.body

            const burger = await burgersService.createBurger(burgerData)

            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async removeBurger(req, res, next) {
        try {
            const burgerId = req.params.id

            await burgersService.removeBurger(burgerId)

            res.send("The burger was removed from the menu!")
        } catch (error) {
            next(error)
        }
    }

    async updateBurger(req, res, next) {
        try {
            const burgerId = req.params.id

            const burgerData = req.body

            const updatedBurger = await burgersService.updateBurger(burgerId, burgerData)

            res.send(updatedBurger)
        } catch (error) {
            next(error)
        }
    }


}