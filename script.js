function calculateTotal() {
    let bruschettaQty = parseInt(document.getElementById('bruschettaQty').value);
    let springRollsQty = parseInt(document.getElementById('springRollsQty').value);
    let grilledChickenQty = parseInt(document.getElementById('grilledChickenQty').value);
    let pastaAlfredoQty = parseInt(document.getElementById('pastaAlfredoQty').value);
    let chocolateCakeQty = parseInt(document.getElementById('chocolateCakeQty').value);
    let cheesecakeQty = parseInt(document.getElementById('cheesecakeQty').value);
    let latteQty = parseInt(document.getElementById('latteQty').value);
    let cappuccinoQty = parseInt(document.getElementById('cappuccinoQty').value);

    let bruschettaPrice = 200;
    let springRollsPrice = 180;
    let grilledChickenPrice = 350;
    let pastaAlfredoPrice = 300;
    let chocolateCakePrice = 250;
    let cheesecakePrice = 280;
    let lattePrice = 170;
    let cappuccinoPrice = 180;

    let total = (bruschettaQty * bruschettaPrice) +
                (springRollsQty * springRollsPrice) +
                (grilledChickenQty * grilledChickenPrice) +
                (pastaAlfredoQty * pastaAlfredoPrice) +
                (chocolateCakeQty * chocolateCakePrice) +
                (cheesecakeQty * cheesecakePrice) +
                (latteQty * lattePrice) +
                (cappuccinoQty * cappuccinoPrice);

    document.getElementById('total').value = total;
}

function clearBill() {
    document.getElementById('bruschettaQty').value = 0;
    document.getElementById('springRollsQty').value = 0;
    document.getElementById('grilledChickenQty').value = 0;
    document.getElementById('pastaAlfredoQty').value = 0;
    document.getElementById('chocolateCakeQty').value = 0;
    document.getElementById('cheesecakeQty').value = 0;
    document.getElementById('latteQty').value = 0;
    document.getElementById('cappuccinoQty').value = 0;
    document.getElementById('total').value = 0;
}

function order() {
    var totalValue = parseInt(document.getElementById('total').value);
    if (totalValue === 0) {
        alert("Cart is empty.");
    } else {
        alert("Your order is placed!");
    }

    clearBill();
    document.getElementById('total').value = 0;
}