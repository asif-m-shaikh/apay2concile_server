var express = require('express');
var router = express.Router();
var partner = require('../../controller/partner/partner.controller')

router.get('/getPartnersRelatedToVendor', partner.getPartnersRelatedToVendor)
module.exports = router