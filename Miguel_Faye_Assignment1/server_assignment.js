//The following codes allows to do server side processing.
//Resource: Lab13 Assignment

const querystring = require('querystring');
var express = require('express');
var myParser = require("body-parser");
var products = require("./public/product_data.js");

var app = express();
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(myParser.urlencoded({ extended: true }));

//go to invoice if quantity values are good, if not, redirect back to order page 
app.get("/product_page", function (request, response) {
//check for valid quantities
//look up request.query
params = request.query;
console.log(params);
   if (typeof params['purchase_submit'] != 'undefined') {
      has_errors = false; // assume that quantity values are valid
      total_qty = 0; // check if there are values in the first place, so see if total > 0
      for (i = 0; i < products.length; i++) {
        if (typeof params[`quantity${i}`] != 'undefined') {
            a_qty = params[`quantity${i}`];
            total_qty += a_qty;
        if (!isNonNegInt(a_qty)) {
            has_errors = true; }}} // see if there is invalid data

      qstr = querystring.stringify(request.query);
    // redirect to invoice if quantity data is valid or respond to invalid data
        if (has_errors || total_qty == 0) {
    //redirect to products page if quantity data is invalid
        qstr = querystring.stringify(request.query);
        response.redirect("products_page.html?" + qstr);
      } else { //the quantity data is okay for the invoice
        response.redirect("cart_page.html?" + qstr);
      }
   }
});

//assuming that at first try there's no errors but if there is, here is the following code
if (Number(q) != q) errors.push('Not a number!');
if (q < 0) errors.push('Negative value!')
if (parseInt(q) != q) errors.push('Not an integer!');
return returnErrors ? errors : (errors.length == 0);

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));