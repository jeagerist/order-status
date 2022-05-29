let emptyOrderGif = document.getElementById('empty-order-gif')

const executeOrder = () => {
	emptyOrderGif.style.display = 'none'

	let orderIdInput = document.getElementById('order-id-input').value

	if(!orderIdInput.length){
		alert('Please enter a valid order ID')
		return
	}

	createNewOrderColumn(orderIdInput)

	document.getElementById(orderIdInput).innerText = 'Order Placed!'

	chefReceived(orderIdInput)
		.then(pizza)
		.then(firstlayerofCheeseadded)
		.then(toppingsAdded)
		.then(keptforPizza)
		.then(pizzaCooked)
		.then(cultryaddedandpacked)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderIdInput).innerText = 'Order Ready!')
		.catch((err) => console.log(err))
}

const chefReceived = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chef received'
			resolve(orderNumber)
		}, 2000)
	})
}

const pizza = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Pizza'
			resolve(orderNumber)
		}, 10000)
	})
}

const firstlayerofCheeseadded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'First layer of Cheese added'
			resolve(orderNumber)
		}, 5000)
	})
}

const toppingsAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Toppings added'
			resolve(orderNumber)
		}, 12000)
	})
}

const keptforPizza = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Kept for Pizza'
			resolve(orderNumber)
		}, 5000)
	})
}

const pizzaCooked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Pizza Cooked'
			resolve(orderNumber)
		}, 15000)
	})
}

const cultryaddedandpacked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Cultry added and packed'
			resolve(orderNumber)
		}, 8000)
	})
}

const packageReceivedAtCounter = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Package received at counter'
			resolve(orderNumber)
		}, 2000)
	})
}

let parentDiv = document.getElementById('parent-div')

const createNewOrderColumn = (orderIdInput) => {
	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let cardBodyDiv = document.createElement('div')
	let cardTitleH5 = document.createElement('h5')
	let cardTextP = document.createElement('p')
	let cardOrderStatusSpan = document.createElement('span')
	let cardButtonA = document.createElement('a')
	let cardFooterDiv = document.createElement('div')

	let cardHeaderDivText = document.createTextNode('Order ID: ' + orderIdInput)
	let cardTitleH5Text = document.createTextNode('Bill Amount: $250')
	let cardTextPText = document.createTextNode('Pizza Order Placed')
	let cardButtonAText = document.createTextNode('Cancel Order')
	let cardOrderStatusText = document.createTextNode('Pizza is on the way')

	parentDiv.appendChild(colDiv)
	colDiv.appendChild(cardDiv)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(cardTextP)
	cardOrderStatusSpan.appendChild(cardOrderStatusText)
	cardBodyDiv.appendChild(cardOrderStatusSpan)
	cardFooterDiv.appendChild(cardButtonA)
	cardTitleH5.appendChild(cardTitleH5Text)

	cardTextP.appendChild(cardTextPText)
	cardButtonA.appendChild(cardButtonAText)
	cardHeaderDiv.appendChild(cardHeaderDivText)
	cardOrderStatusSpan.appendChild(cardOrderStatusText)

	colDiv.classList = 'col-md-4 col-xs-12 order-block'
	cardDiv.classList = 'card text-center'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardFooterDiv.classList = 'card-footer'
	cardTitleH5.classList = 'card-title'
	cardTextP.classList = 'card-text'
	cardButtonA.classList = 'btn btn-danger cancel-button'
	cardOrderStatusSpan.classList = 'badge rounded-pill bg-success order-status'

	cardOrderStatusSpan.id = orderIdInput

	cardButtonA.addEventListener('click', () => {
		// parentDiv.removeChild(colDiv)
		colDiv.style.display = 'none'
	})
}