// Aggiungo tutti i prodotti nella variabile window.prodotti
// alla tabella con id="prods" nel file prodotti.html
window.prodotti.forEach(

    function(prodotto) {
    
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

        td = document.createElement("td");
        let input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.defaultValue = 1;
        td.appendChild(input);
        tr.appendChild(td);
        
        td = document.createElement("td");
        let button = document.createElement("button");
        button.textContent = "Aggiungi al carrello";
        button.onclick = function() {
            let carrello = JSON.parse(localStorage.getItem("carrello")) || [];
            prodotto.quantita = parseInt(input.value);
            carrello.push(prodotto);
            localStorage.setItem("carrello", JSON.stringify(carrello));
        };
        td.appendChild(button);
        tr.appendChild(td);
        
        document.getElementById("prods").appendChild(tr);
    }
);
