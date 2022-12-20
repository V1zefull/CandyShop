import {makeAutoObservable} from "mobx";

export default class TrainerStore{
    constructor() {
        this._types = []
        this._brands = []
        this._trainers = []
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setTrainer(trainers){
        this._trainers = trainers
    }

    setSelectedType(type){
        this._selectedType = type
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get trainers(){
        return this._trainers
    }

    get selectedType(){
        return this._selectedType
    }
}