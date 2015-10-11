var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
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