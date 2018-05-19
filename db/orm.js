import connection from  './connection.js'

const Orm = {
    
    sign_up(req) {
        //connect to db to add user to table
        connection.query('', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
          });
    }

}

exports.modules = Orm