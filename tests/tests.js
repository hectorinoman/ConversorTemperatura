var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    
    test('Resultado == String', function() {
       original.value = "-2.4K";
       calculate();
       assert.isString(converted.innerHTML);
   });
   test('Resultado != Null', function() {
      original.value = "-3.6F";
      calculate();
      assert.isNotNull(converted.innerHTML);
  })
  

});