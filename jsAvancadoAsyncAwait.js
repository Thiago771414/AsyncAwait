async function carga(n) {

    let resp1 = await fetch('https://reqres.in/api/users/' +n) //fetch = buscar
    let user =  await resp1.json();
    let resp2 = await fetch(user.data.avatar);
    let avatar = await resp2.blob();
    imagem.src = URL.createObjectURL(avatar);
    
}

output.innerHTML =
    `<p>
        <input id="idUser" type="number" value="1" />
        <button id="btn"> Ver avatar </button>
    </p>
    <p>
        <img id="imagem" />
    </p>
    `
btn.onclick = () => carga(idUser.value);