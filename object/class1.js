class Release {
    constructor(name = 'Genérico', value = 0) {
        this.name = name;
        this.value = value;
    }
}

class financialCycle {
    constructor(month, year) {
        this.month = month;
        this.year = year;
        this.releases = [];
    }
    addLancamentos(...releases) {
        releases.forEach(l => this.releases.push(l))
    }
    summary() {
        let valueConsolidated = 0;
        this.releases.forEach(l => {
            valueConsolidated += l.value;
        });
        return valueConsolidated;
    }
}

const salary = new Release('Salário', 45000);
const countOfLight = new Release('Luz', -220);

const accounts = new financialCycle(6, 2018);
accounts.addLancamentos(salary, countOfLight);
console.log(accounts.summary());