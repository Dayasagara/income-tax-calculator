New Income Tax Calculator

You can calculate the tax on your income by sending the income in the path parameter.

To run the app locally, 

$ node incomeTax.js

To dockerise the application

$docker build -t income-tax .

Wait for the image to build 

$docker run -d -p 8080:8080 income-tax
