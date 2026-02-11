
document.getElementById('pricingForm').addEventListener('input', updatePricing);

function updatePricing() {
    const pickupZone = document.getElementById('pickupZone').value;
    const dropoffZone = document.getElementById('dropoffZone').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const parcels = parseInt(document.getElementById('parcels').value);
    const serviceType = document.getElementById('serviceType').value;
    const rate = parseFloat(document.getElementById('rate').value);

    // Base prices based on zones
    const basePrices = {
        'Zone 1': 10,
        'Zone 2': 15,
        'Zone 3': 20
    };

    let customerCost = basePrices[pickupZone] + basePrices[dropoffZone] + (weight * 2) + (parcels * 5);
    let rydtCost = customerCost - (customerCost * 0.2);  // Assuming 20% margin for RYDT cost
    let profit = customerCost - rydtCost;

    // Display results
    document.getElementById('customerCost').textContent = '$' + customerCost.toFixed(2);
    document.getElementById('rydtCost').textContent = '$' + rydtCost.toFixed(2);
    document.getElementById('profit').textContent = '$' + profit.toFixed(2);
    document.getElementById('totalPrice').textContent = '$' + (customerCost + profit).toFixed(2);
}
