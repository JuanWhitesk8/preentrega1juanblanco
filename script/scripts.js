alert("Bienvenido a Tropical Store Medellín, Ingrese la opcion del producto que desea comprar")

let seleccionarProductos = Number(prompt( "1-Tshirt $75 2-Croptop $50 3-Jean $120 4-Hoddie $110 0-Finalizar compra"))
let seleccionarCantidad
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Tshirt, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 75)
      break
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Croptop, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 50)
      break
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Jean, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 120)
    break
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Hoddie, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 110)
    break

    default: 
      break
  }
  seleccionarProductos = Number(prompt( "1-Tshirt $75 2-Croptop $50 3-Jean $120 4-Hoddie $110 0-Finalizar compra"))
}

alert("el total de la compra es de: $" + total)


const envio = () => {
    if (total >= 500) {
      alert("El envio es gratuito")
    }else{
      total += 70
      alert("el costo de envio es de 70, el total es: " + total)
    }
}

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" ).toLowerCase()
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total)
  } else if ( metodo == "efectivo") {
    total -= 20
    alert("tenes un descuento de 20, el total es:" + total)
  } else {
    alert("dato incorrecto")
  }

}

metodoDePago()