alert("Bienvenido a π΄Tropical Store MedellΓ­nπ΄, Ingrese la opcion del producto que desea comprar")

let seleccionarProductos = Number(prompt( "1-Tshirt $75 π \n2-Croptop $50 π©± \n3-Jean $120 π \n4-Hoddie $110 π§₯ \n0-Finalizar compra π°"))
let seleccionarCantidad
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Tshirt π, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 75)
      break
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Croptop π©±, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 50)
      break
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Jean π, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 120)
    break
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Hoddie π§₯, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 110)
    break

    default: 
      break
  }
  seleccionarProductos = Number(prompt( "1-Tshirt $75 π \n2-Croptop $50 π©± \n3-Jean $120 π \n4-Hoddie $110 π§₯ \n0-Finalizar compra π°"))
}

alert("el total de la compra es de: $" + total)


const envio = () => {
    if (total >= 500) {
      alert("El envio es gratuito")
    }else{
      total += 70
      alert("el costo de envio es de $70, el total es: $" + total)
    }
}

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta π³ o efectivo πΈ" ).toLowerCase()
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total)
  } else if ( metodo == "efectivo") {
    total -= 20
    alert("tenes un descuento de $20, el total es: $" + total)
  } else {
    alert("dato incorrecto")
  }

}

metodoDePago()