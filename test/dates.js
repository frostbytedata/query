// Generated by CoffeeScript 1.8.0
(function() {

  var assert = require('assert');
  var _ = require("lodash");
  var Logic = require("../query");

  _.mixin(Logic);

  describe("Underscore Query Tests", function() {

    it("Handles false match for null", function() {
      var rows = [
        { i: 1,   dts: null},
        { i: 2,   dts: "2017-02-27"},
        { i: 3,   dts: "2017-03-14"},
        { i: 5,   dts: "2017-04-20"},
        { i: 8,   dts: "2017-07-07"},
        { i: 13,  dts: "2017-09-12"}
      ]

      rows.forEach(function(row) {
        if (row.dts && typeof row.dts==='string') row.dt = new Date(row.dts); else row.dt = null;
      })

      var result = _.query(rows, { dt: {"$lte": new Date("2017-07-07")}});
      assert.equal(result.length,   4)

      var result = _.query(rows, { dt: {"$lte": {"$date": "2017-07-07"}}});
      assert.equal(result.length,   4)

      var result = _.query(rows, { dt: {"$before": "2017-07-07"}});
      assert.equal(result.length,   4)

      var result = _.query(rows, { dts: {"$before": "2017-07-07"}});
      assert.equal(result.length,   4)

      var result = _.query(rows, { dts: {"$before": "2017-07-07"}});
      assert.equal(result.length,   4)

      var result = _.query(rows, { dt:  "2017-02-27"});
      // console.log(result)

      var result = _.query(rows, { dt:  (new Date("2017-02-27"))});
      // console.log(result)

      // var result = _.query(rows, { dt:  1488153600000});
      // console.log(result)
      // assert.equal(result.length,   1)

    });
  });

}).call(this);