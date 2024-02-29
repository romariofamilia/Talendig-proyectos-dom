const container = document.querySelector('.container');




function generarCita() {
    
    const citas = [
        {
            "name":"Epicteto",
            "citas":[
                'Podrás amenazarme, encadenarme, encerrarme o exiliarme.Pero yo te recuerdo que ni Zeus podría quitarme el poder de decidir mi actitud.',
                'Algunas cosas dependen de nosotros y otras no dependen de nosotros.',
                'Los hombres no tienen miedo de las cosas, sino de cómo las ven.',
                'Cuando hayas de sentenciar, procura olvidar a los litigantes y acordarte sólo de la causa.'
            ]
        },
        {
            "name":"Seneca",
            "citas":[
                'Quien le tenga miedo a la muerte no hará cosas dignas de quien está vivo.',
                'No es que tengamos poco tiempo, sino que perdemos mucho.',
                'Una gema no puede ser pulida sin fricción, ni un hombre perfeccionado sin pruebas.',
                'Una de las cualidades más hermosas de la verdadera amistad es entender y ser entendido.'
            ]
        }
    ];

    let randomNumAuthor = Math.floor(Math.random() * 2);
    let randomCita = Math.floor(Math.random() * 4);
    let autor = citas[randomNumAuthor]["name"];
    let showCita = citas[randomNumAuthor]["citas"][randomCita];

    const parrafoAutor = document.createElement('p');
    parrafoAutor.textContent = autor;
    const h2 = document.createElement('h2');
    
    console.log(autor);
    
    h2.textContent = showCita;
    container.innerHTML = ''
    container.style.width = '500px'
    container.appendChild(h2)
    container.appendChild(parrafoAutor)

    


}



setInterval(generarCita, 7000)
