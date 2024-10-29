// Recupero il carrello dal localStorage e lo stampo
// nella tabella con id="cart" nel file carrello.html

let carrello = JSON.parse(localStorage.getItem("carrello")) || [];

let costoTotale = 0;

carrello.forEach(function(prodotto) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let img = document.createElement("img");
    img.src = prodotto.path_immagine;
    img.alt = prodotto.nome_prodotto;
    td.appendChild(img);
    tr.appendChild(td);
    
    td = document.createElement("td");
    td.textContent = prodotto.nome_prodotto;
    tr.appendChild(td);
    
    td = document.createElement("td");
    td.textContent = prodotto.costo_unitario + "€";
    tr.appendChild(td);
    
    costoTotale += prodotto.costo_unitario;
    
    document.getElementById("cart").appendChild(tr);
});

document.getElementById("total").textContent = "Costo totale: " + costoTotale + "€";

function emptyCart() {
    localStorage.removeItem("carrello");
    window.location.reload();
}

