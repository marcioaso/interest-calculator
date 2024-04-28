
Number.prototype.d = function() { return +this.toFixed(2) }

export const calculator = (init, monthly, anualfee, months, incomeTax) => {
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
    
        (
            invested += monthly,
            interest += fee
        )

        const tax = (fee * (incomeTax/100));
        const afterIr = (fee - tax);

        table.push({
            row: i,
            info: {
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
        sum += monthly + fee;
    }
    return table;
}