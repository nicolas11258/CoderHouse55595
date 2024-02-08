fetch('http://localhost:8080/orders')
  .then(response => response.json())
  .then(data => displayOrders(data.message))
  .catch(error => console.log(error))

function displayOrders(orders) {
  const orderList = document.querySelector('.order-list')

  orders.forEach(order => {
    const orderItem = document.createElement('li')
    orderItem.classList.add('order-item')

    const orderNumber = document.createElement('h4')
    orderNumber.textContent = `Número de orden: ${order.number}`
    orderItem.appendChild(orderNumber)

    const productList = document.createElement('ul')
    order.products.forEach(product => {
      const productItem = document.createElement('li')
      productItem.textContent = `${product.name} - $${product.price}`
      productList.appendChild(productItem)
    })
    orderItem.appendChild(productList)

    const totalPrice = document.createElement('p')
    totalPrice.textContent = `Precio total: $${order.totalPrice}`
    orderItem.appendChild(totalPrice)

    orderList.appendChild(orderItem)
  })
}
