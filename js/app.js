function submitOrder() {
    const selectedItems = document.querySelectorAll('input[name="order"]:checked');
    const orderList = document.getElementById('orderList');
    const totalPriceElem = document.getElementById('totalPrice');
    orderList.innerHTML = '';
    let total = 0;
    
    if (selectedItems.length === 0) {
      alert('Por favor, selecciona al menos un producto.');
      return;
    }
    
    selectedItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.value;
      orderList.appendChild(li);
      total += parseFloat(item.getAttribute('data-price'));
    });
    
    totalPriceElem.textContent = total.toFixed(2);
    document.getElementById('orderSummary').classList.remove('hidden');
  }
  