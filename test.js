var jdbc = new ( require('jdbc') );

var config = {
  libpath: '/usr/lib/phoenix/phoenix-4.0.0.2.1.3.0-563-client.jar',
  drivername: 'org.apache.phoenix.jdbc.PhoenixDriver',
  url: 'jdbc:phoenix:host3.rsd.local:2181:/hbase-unsecure'
};

jdbc.initialize(config, function(err, res) {
  if (err) {
    console.log(err);
  }
});
var genericQueryHandler = function(err, results) {
  if (err) {
    console.log(err);
  } else if (results) {
    console.log(results);
        console.log("Count: " + results[0]["COUNT_PLUS_221"]);
  }
};

query = "SELECT count(*)  from \"record_ref\"";
jdbc.open(function(err, conn) {
  if (conn) {
    // SELECT statements are called with executeQuery
 // var query;
//query = "SELECT count(*) +111 from \"events\"";
//query = "CREATE TABLE phoenix_type_test(    c1 INTEGER not null,    c2 VARCHAR, CONSTRAINT PK PRIMARY KEY (c1))";
         jdbc.executeQuery(query, genericQueryHandler);
        // jdbc.executeQuery( "SELECT count(*) +111 from \"events\"", genericQueryHandler);
   }
});

jdbc.close(function(err) {
console.log("toto" + err);
  if(err) {
    console.log(err);
  }
});
