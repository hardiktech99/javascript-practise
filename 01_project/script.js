const form = document.querySelector("form")

form.addEventListener("submit" , function(e){
    e.preventDefault()
    const distanceKm = parseInt(document.querySelector("#distance").value)
    const vahicalavrage = parseInt(document.querySelector("#vhavrerage").value)
    const literFuel = parseInt(document.querySelector("#literFuel").value)
    const finalvalue = document.querySelector("#finalvalue")

    if(distanceKm === ""  ||  distanceKm < 0  ||  isNaN(distanceKm)){
        finalvalue.innerHTML = `Please give a valid total distance ${distanceKm}`
    } else if(vahicalavrage === ""  ||  vahicalavrage < 0  ||  isNaN(vahicalavrage)){
        finalvalue.innerHTML = `Please give a valid total distance ${vahicalavrage}`
    } else if(literFuel === ""  ||  literFuel < 0  ||  isNaN(literFuel)){
        finalvalue.innerHTML = `Please give a valid price  ${vahicalavrage}`
    }else{
        const fuelavrg = ((distanceKm / vahicalavrage) * literFuel).toFixed(2)
        finalvalue.innerHTML = `<span>${fuelavrg}</span>`
    }
})

