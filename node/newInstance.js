// Uma factory retorna uma nova instância
module.exports = () => {
    return {
        value: 1,
        increment() {
            this.value++;
        }
    }
}