//business side
function Pizza (size, topping, finalCost) {
  this.size = size;
  this.topping = topping;
  this.finalCost = 0;
}

Pizza.prototype.finalPrice = function() {
  if (this.size === "Small") {
    this.finalCost = 10;
    console.log(this.finalCost);
  } else if (this.size === "Medium") {
    this.finalCost = 12;
    console.log(this.finalCost);
  } else if (this.size === "Large") {
    this.finalCost = 14;
    console.log(this.finalCost);
  } else {
    this.finalCost = 400;
    console.log(this.finalCost);
  }
};

// logic side
$(document).ready(function() {

  $("#order").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=pizza]:checked").val();
    var topping = $("#toppings").val();
    var pizza1 = new Pizza (size, topping);
    console.log(size);
    console.log(topping);
    pizza1.finalPrice();
    $("#results").fadeIn();
    $("#results").append("A " + size + " pizza with..." + "<br>");
    $("#results").append(topping + "<br>");
    $("#results").append("Final Price: "+ "$" + pizza1.finalCost);
  });

});
