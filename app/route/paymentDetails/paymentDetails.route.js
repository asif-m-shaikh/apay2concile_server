var express = require('express');
var router = express.Router();
var paymentDetails = require('../../controller/paymentDetails/paymentDetails.controller')

router.post('/getPaymentDetails', paymentDetails.getPaymentDetails)
router.post('/insertPaymentDetails', paymentDetails.insertPaymentDetails)
router.post('/deletePaymentDetails', paymentDetails.deletePaymentDetails)
router.get('/getPaymentDetailsCount', paymentDetails.getPaymentDetailsCount)
router.post('/getPaymentDetailsRelatedToPartner', paymentDetails.getPaymentDetailsRelatedToPartner)
router.post('/getPaymentDetailsOfUser', paymentDetails.getPaymentDetailsOfUser)
router.post('/getPaymentReportList', paymentDetails.getPaymentReportList)
module.exports = router