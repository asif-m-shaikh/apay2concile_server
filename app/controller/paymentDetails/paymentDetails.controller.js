var mysqlQuery = require('../../common/mysqlHelper');
const { param } = require('../../route/auth/auth.route');
// var dateFormat = require('dateformat');

function getPaymentDetails(req, res) {
    let param = req.body;
    var query = "SELECT * FROM paymentdetails where isDeleted=" + param.isDeleted + "";

    if (param.fromDate && param.toDate)
        query += " and date_format(paymentdate,'%Y/%m/%d') between '" + param.fromDate + "' and '" + param.toDate + "'"
    if (!param.fromDate && param.toDate)
        query += " and date_format(paymentdate,'%Y/%m/%d') =<'" + param.toDate + "'"
    if (param.fromDate && !param.toDate)
        query += " and date_format(paymentdate,'%Y/%m/%d') >='" + param.fromDate + "'"

    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}

function insertPaymentDetails(req, res) {
    let param = req.body;
    var query = "INSERT INTO `paymentdetails`(`name`,`merchantName`,`benificiaryName`,`totalAmount`, `country`, `property`,`benificiaryAddress`,`arrivalDate`,`departureDate`,`paymentMethod`,`cardNumber`,`fareValue`,`gstValue`,`commissionValue`,`paymentMode`,`bookingNumber`,`status`) VALUES ('" + param.name + "','" + param.merchantName + "','" + param.benificiaryName + "'," + param.totalAmount + ",'" + param.country + "','" + param.property + "','" + param.benificiaryAddress + "','" + param.arrivalDate + "','" + param.departureDate + "','" + param.paymentMethod + "','" + param.cardNumber + "','" + param.fareValue + "','" + param.gstValue + "','" + param.commissionValue + "','" + param.paymentMode + "'," + param.bookingNumber + ",'" + param.status + "')";

    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: "Record Inserted" })
    })
}

function deletePaymentDetails(req, res) {
    let param = req.body;
    var query = "UPDATE apay_connect.paymentdetails set isDeleted=1 where id=" + param.id;

    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: "Record Deleted" })
    })
}

function getPaymentDetailsCount(req, res) {

    var query = "SELECT (select count(id) from apay_connect.paymentdetails where status='completed')as completed,(select count(id) from apay_connect.paymentdetails where status='awaiting')as awaiting,(select count(id) from apay_connect.paymentdetails where status='rejected')as rejected FROM apay_connect.paymentdetails group by completed, awaiting,rejected";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result[0] })
    })
}

function getPaymentDetailsRelatedToPartner(req, res) {
    let param = req.body;
    var query = "SELECT * FROM apay_connect.paymentdetails where benificiaryName like '%" + param.partnerName + "%';";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}

function getPaymentDetailsOfUser(req, res) {
    let param = req.body;
    var query = "SELECT * FROM paymentdetails where isDeleted=0 and status='" + param.status + "'";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}

function getPaymentReportList(req, res) {
    let param = req.body;
    var query = "SELECT * FROM paymentdetails where isDeleted=0 and status='" + param.status + "'" ;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}

module.exports = {
    getPaymentDetails: getPaymentDetails,
    insertPaymentDetails: insertPaymentDetails,
    deletePaymentDetails: deletePaymentDetails,
    getPaymentDetailsCount: getPaymentDetailsCount,
    getPaymentDetailsRelatedToPartner: getPaymentDetailsRelatedToPartner,
    getPaymentDetailsOfUser:getPaymentDetailsOfUser,
    getPaymentReportList:getPaymentReportList
}