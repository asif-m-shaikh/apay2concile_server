var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var port = process.env.PORT || 53124; // used to create, sign, and verify tokens
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
var query = require('./app/common/mysqlHelper')
var auth = require('./app/route/auth/auth.route')
var paymentDetails = require('./app/route/paymentDetails/paymentDetails.route')
var vendorMaster = require('./app/route/vendorMaster/vendorMaster.route')
var partner = require('./app/route/partner/partner.route')
var sqlinjection = require('sql-injection')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/auth', auth)
app.use('/paymentDetails', paymentDetails)
app.use('/vendorMaster', vendorMaster)
app.use('/partner', partner)
app.use(sqlinjection)

app.listen(port);
console.log('Server running at http://localhost:' + port);