class Inventory {
    async getAll(req, res) {
        res.status(200).send('Список всего инвентаря')
    }

    async getOne(req, res) {
        res.status(200).send('Получение одного типа из инвентаря')
    }

    async create(req, res) {
        res.status(200).send('Создание нового типа инвентаря')
    }

    async update(req, res) {
        res.status(200).send('Обновление инвентаря')
    }

    async delete(req, res) {
        res.status(200).send('Удаление инвентаря')
    }
}

export default new Inventory()