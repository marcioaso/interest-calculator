
Number.prototype.d = function() { return +this.toFixed(2) }
const getMonthYear = i => {
    const date = new Date();
    date.setMonth(date.getMonth()+(i))
    const month = date.getMonth()+1
    return `${month.toString().padStart(2,'0')}/${date.getFullYear()}`;
}

export const calculator = (init, monthly, anualfee, months, incomeTax, transactions = [], breakInstallments = -1) => {
    const table = [{
        row:0,
        info:{total:init,interest:0, invested:init},
        balance:{ gross: 0, incometax: 0, net: 0},
    }];
    let invested = +init;
    let sum = +init;
    let interest = 0;
    const perc = anualfee / 100;
    for (let i = 1; i < months+1; i++) {
        const amount = sum * Math.pow(1+perc, 1/12);
        const fee = amount - sum;
        const instBreak = breakInstallments;
        const isBroken = instBreak > -1 && i > instBreak;
        let apported = transactions[i] ? transactions[i].value : monthly;
        if(isBroken && !transactions[i]) apported = 0;

        invested += apported;
        interest += fee;

        const tax = (fee * (incomeTax/100));
        const afterIr = (fee - tax);

        table.push({
            row: i,
            info: {
                date: getMonthYear(i),
                total: (invested + interest).d(),
                interest: interest.d(),
                invested,
            },
            balance: {
                gross: fee.d(),
                incometax: tax.d(),
                net: afterIr.d() 
            },
        })
        sum += apported + fee;
    }
    return table;
}
