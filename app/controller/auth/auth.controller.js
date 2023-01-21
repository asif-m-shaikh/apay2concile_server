var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');

function login(req, res) {
    
    var param = req.body;
    if (!param.username && !param.password)
        return res.json({ error: true, message: "Please provide valid credentials" })

        var query = "SELECT * FROM user_master WHERE email_id='" + param.email + "' AND password='" + param.password + "'";
        mysqlQuery.excecuteQuery(query, function (error, result) {
            if (error)
                return res.json({ error: true, message: error })
            if (result.length > 0) {
                var payload = {
                    
                    id: result[0].id,
                    email: result[0].email,
                    first_name: result[0].first_name,
                    last_name: result[0].last_name
                }
                
                return res.json({ error: false, result: payload })
            }
            return res.json({ error: true, message: 'Username/ Password invalid' })
        })
}
module.exports = {
    login: login
}