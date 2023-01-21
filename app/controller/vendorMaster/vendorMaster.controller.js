var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');

function getVendormaster(req, res) {

    var query = "SELECT * FROM apay_connect.vendormaster where status='Active'";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}

function insertVendormaster(req, res) {
    let param = req.body;
    var query="INSERT INTO `apay_connect`.`vendormaster`(`merchantName`,`registeredCountry`, `currency`,`beneBankName`,`bankIfscCode`,`bankAccountNumber`,`category`,`transferType`)VALUES('"+param.merchantName+"','"+param.registeredCountry+"','"+param.currency+"','"+param.beneBankName+"','"+param.bankIfscCode+"','"+param.bankAccountNumber+"','"+param.category+"','"+param.transferType+"');"

    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: "Record Inserted" })
    })
}

function deleteVendormaster(req, res) {
    let param = req.body;
    var query = "UPDATE apay_connect.vendormaster set status='InActive' where id=" + param.id;

    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: "Record Deleted" })
    })
}

module.exports = {
    getVendormaster: getVendormaster,
    insertVendormaster: insertVendormaster,
    deleteVendormaster:deleteVendormaster
}