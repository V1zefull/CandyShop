import {makeAutoObservable} from "mobx";

export default class ServiceStore {
    constructor() {
        this._types = []
        this._infos = []
        this._services = []
        this._userService = []
        makeAutoObservable(this)
    }

    setServiceType(types) {
        this._types = types
    }

    setUserService(userService) {
        this._userService = userService
    }

    setServiceInfo(infos) {
        this._infos = infos
    }

    setService(services) {
        this._services = services
    }
}