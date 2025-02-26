function submitOrder() {
  const checkboxes = document.querySelectorAll('input[name="order"]:checked');
  const orderList = document.getElementById("orderList");
  const totalPriceElement = document.getElementById("totalPrice");
  const orderSummary = document.getElementById("orderSummary");
  
  orderList.innerHTML = "";
  let totalPrice = 0;
  
  if (checkboxes.length === 0) {
    orderSummary.classList.add("hidden");
    alert("Por favor, selecciona al menos un producto.");
    return;
  }
  
  checkboxes.forEach((checkbox) => {
    let listItem = document.createElement("li");
    listItem.textContent = checkbox.value;
    orderList.appendChild(listItem);
    totalPrice += parseFloat(checkbox.dataset.price);
  });
  
  totalPriceElement.textContent = `Total: ${totalPrice.toFixed(2)}€`;
  orderSummary.classList.remove("hidden");
}