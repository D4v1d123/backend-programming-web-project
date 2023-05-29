import { buscarAmigos, getFriendId, listFriends, determineFriendOrNot, addFriend } from './firebase.js'

const user = "XuwLbaYyR8pA7xnBVMTH"

sessionStorage.setItem('user', user)
const contenedor_amigos = document.getElementById('contenedor_amigos')

//Mostrar el listado de amigos 

//Obtener el id de los amigos
const friendId = async(user) => {
    const id_friends = await getFriendId(user)
    
    id_friends.forEach(element => {
        const id_friend = element.data()
        friends(id_friend.id_friend)

    })

}

//Consultar y mostrar los amigos con respecto a su id
const friends = async(id_friend) => {
    const info_friend = await listFriends(id_friend)

    info_friend.forEach(element => {
        const info_user = element.data()
        
        contenedor_amigos.innerHTML += `
        <div class="ContenedorAmigos">
            <div class="ContenedorAmigos">
                <img src="${info_user.url_photo}" alt="Foto de perfil de un amigo" class="ImagenPerfilAmigo">
                <h3 class="Fuente" style="margin-left: 3%;">${info_user.name_user}</h3>
            </div>
            <div>
                <button class="Fuente BotonesAgregarAmigos Chat" data-id="${info_user.id}">Chatear</button>
            </div>
        </div>
        `

    })

    //Determinar qué botón Agregar a amigos se esta dando click para insertar a la persona a amigos en la base de datos
    let buttons_chat = contenedor_amigos.querySelectorAll('.Chat')
    buttons_chat.forEach(button => {
        button.addEventListener('click', (evento) => {
            const id_friend = evento.target.dataset.id
            sessionStorage.setItem('id_friend', id_friend)

            window.location.href = 'chatear.html'
        })
        
    })

}
//
friendId(user)

//Determinar que los elementos HTML de la página web se han cargado
window.addEventListener('DOMContentLoaded', async() => {
    //Obtener el texto del input 'nombre_amigo' cuando se presione la tecla 'Enter'
    const text = document.getElementById('nombre_amigo');

    text.addEventListener( 'keypress', (evento) => {
        if(evento.key === 'Enter'){
            var input_text = text.value

            listarBusquedaAmigos(input_text);

            }
            
    })

})

//Listar personas con el nombre escrito en el input 'nombre_amigo'
const listarBusquedaAmigos = async(input_text) => {
    const people = await buscarAmigos(input_text)
    const contenedor_amigos = document.getElementById('contenedor_amigos')
    //Eliminar todo lo que tenga el div 'contenedor_amigos'
    contenedor_amigos.innerHTML = ''

    people.forEach(element => {
        //Extraer los datos de los usuario que coinsidieron con lo digitado por el usuario en el input 'nombre_amigo'
        const person = element.data()

        //Determinar si ese usuario es amigo o no
        const friend = determineFriends(user, person.id)

        //Extraer el valor de friend por medio de una promesa (then)
        friend.then((value) => {
            //Dependiendo si el usuario es amigo o no, se agregará un div para Chatear u otro para Agregar a amigos
            if(value != null){
                contenedor_amigos.innerHTML += `
                <div class="ContenedorAmigos">
                    <div class="ContenedorAmigos">
                        <img src="${person.url_photo}" alt="Foto de perfil de un amigo" class="ImagenPerfilAmigo">
                        <h3 class="Fuente" style="margin-left: 3%;">${person.name_user}</h3>
                    </div>
                    <div>
                        <button class="Fuente BotonesAgregarAmigos Chat" data-id="${person.id}">Chatear</button>
                    </div>
                </div>
                `

            }else{
                contenedor_amigos.innerHTML += `
                <div class="ContenedorAmigos">
                    <div class="ContenedorAmigos">
                        <img src="${person.url_photo}" alt="Foto de perfil de un amigo" class="ImagenPerfilAmigo">
                        <h3 class="Fuente" style="margin-left: 3%;">${person.name_user}</h3>
                    </div>
                    <div>
                        <button class="Fuente BotonesAgregarAmigos AgregarAmigos" data-id="${person.id}">Agregar a amigos</button>
                    </div>
                </div>
                `
            
            }

            //Determinar qué botón Agregar a amigos se esta dando click para insertar a la persona a amigos en la base de datos
            let buttons_add_friends = contenedor_amigos.querySelectorAll('.AgregarAmigos')
            buttons_add_friends.forEach(button => {
                button.addEventListener('click', (evento) => {
                    addFriend(user, evento.target.dataset.id)

                    //Recargar la página web sin eliminar cache
                    location.reload()

                })

            })

            //Determinar qué botón Agregar a amigos se esta dando click para insertar a la persona a amigos en la base de datos
            let buttons_chat_friends = contenedor_amigos.querySelectorAll('.Chat')
            buttons_chat_friends.forEach(button => {
                button.addEventListener('click', (evento) => {
                    const id_friend = evento.target.dataset.id
                    sessionStorage.setItem('id_friend', id_friend)

                    window.location.href = 'chatear.html'
                })
                
            })

        })

    })

    
    
}

const determineFriends = async(user, id_person) => {
    const friend = await determineFriendOrNot(user, id_person)
    let ultimateFriendId = null

    friend.forEach(element => {
       const ultimateFriend = element.data()
       ultimateFriendId = ultimateFriend.id_friend

    })
    
    return ultimateFriendId

} 
//