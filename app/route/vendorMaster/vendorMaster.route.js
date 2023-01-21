var express = require('express');
var router = express.Router();
var vendorMaster = require('../../controller/vendorMaster/vendorMaster.controller')

router.get('/getVendormaster', vendorMaster.getVendormaster)
router.post('/insertVendormaster', vendorMaster.insertVendormaster)
router.post('/deleteVendormaster', vendorMaster.deleteVendormaster)
module.exports = router