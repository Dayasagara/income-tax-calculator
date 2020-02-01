const express = require("express")


function calculateTax(percentage, amount) {
    var tax = (amount * percentage) / 100
    return tax
}

function calculateIT(income) {
    switch (true) {
        case income < 0:
            return 'Invalid income';
        case income <= 500000:
            return 0;
        case income <= 750000:
            return (calculateTax(10, (income - 500000)));
        case income <= 1000000:
            return (37500 + calculateTax(15, (income - 750000)));
        case income <= 1250000:
            return (75000 + calculateTax(20, (income - 1000000))); 
        case income <= 1500000:
            return (125000 + calculateTax(25, (income - 1250000)));
        case income > 1500000:
            return (187500 + calculateTax(30, (income - 1500000)));
        default:
            return 'Invalid data';
    }
}


const app = express()
const income = "/calculateTax/:income"

const server = app.listen(8080, () => {
    console.log("Server is running on PORT:", 8080)
})

app.get(income, (req, res) => {
    const myIncome = [req.params.income]
    res.status(200)
    res.send({ "Tax to be paid": calculateIT(myIncome) })
})
