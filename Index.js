function unit(element) {

    document.querySelectorAll('.unit').forEach(unit => {
        unit.classList.remove('expanded');
    });

    element.classList.add('expanded');

    const radio = element.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }

    const priceval = element.querySelector('.new-price');
    if (priceval) {
        
        const priceTxt = priceval.textContent.trim();

        const match = priceTxt.match(/[\d.]+/);
        if (match) {
            const numPrice = parseFloat(match[0]);
            
            document.getElementById('total').textContent = `$${numPrice + ".00"} USD`;
        }
    }
}
