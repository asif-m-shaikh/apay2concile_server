var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');

function getPartnersRelatedToVendor(req, res) {

    var query = "SELECT * FROM apay_connect.partnermaster where status='Active'";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}

module.exports = {
    getPartnersRelatedToVendor: getPartnersRelatedToVendor
}