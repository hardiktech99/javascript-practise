const form = document.querySelector("form")

form.addEventListener("submit" , function(e){
    e.preventDefault()
    const distanceKm = parseInt(document.querySelector("#distance").value)
    const vahicalavrage = parseInt(document.querySelector("#vhavrerage").value)
    const literFuel = parseInt(document.querySelector("#literFuel").value)
    const finalvalue = document.querySelector("#finalvalue")

    const dataTitleDistance = document.querySelector("#data-title-distance")
    const dataTitleVhavrerage = document.querySelector("#data-title-vhavrerage")
    const dataTitleLiterFuel = document.querySelector("#data-title-literFuel")

    if(distanceKm === ""  ||  distanceKm < 0  ||  isNaN(distanceKm)){
        dataTitleDistance.innerHTML = `Please give a valid total distance ${distanceKm}`
    } else if(vahicalavrage === ""  ||  vahicalavrage < 0  ||  isNaN(vahicalavrage)){
        dataTitleVhavrerage.innerHTML = `Please give a valid total distance ${vahicalavrage}`
    } else if(literFuel === ""  ||  literFuel < 0  ||  isNaN(literFuel)){
        dataTitleLiterFuel.innerHTML = `Please give a valid price ${vahicalavrage}`
    }else{
        const fuelavrg = ((distanceKm / vahicalavrage) * literFuel).toFixed(2)
        finalvalue.innerHTML = `<span> ₹${fuelavrg}</span>`
    }
    // const fuelavrg = ((distanceKm / vahicalavrage) * literFuel).toFixed(2)
    // finalvalue.innerHTML = `<span> ₹${fuelavrg}</span>`


   

    dataTitleDistance.innerHTML = `<span>${distanceKm}</span>`
    dataTitleVhavrerage.innerHTML = `<span>${vahicalavrage}</span>`
    dataTitleLiterFuel.innerHTML = `<span>${literFuel}</span>`
})

