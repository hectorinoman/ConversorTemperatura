// cow.js
(function(exports) {
  "use strict";

  function Cow(name) {
    this.name = name || "Anon cow";
  }
  exports.Cow = Cow;

  Cow.prototype = { //aparece en mayuscula, porque es un constructor. El atributo prototype se definen las propiedades y los metodos de la clase
    greets: function(target) { //greets saluda, a una funcion que se le pasa el target
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target;
    }
  };
})(this);