const inmuebles = [
    {
        id: 0,
        direccion: 'calle 54 # 56-73',
        telefono: 3147247816,
        precio: 150000000,
        estado: true,
    },
    {
        id: 1,
        direccion: 'san benito centro',
        telefono: 3127247816,
        precio: 250000000,
        estado: false,
    },
    {
        id: 2,
        direccion: 'Centro de cali',
        telefono: 3147247816,
        precio: 280000000,
        estado: false,
    },
    {
        id: 3,
        direccion: 'carrera 56 # 51-68',
        telefono: 3126251762,
        precio: 275000000,
        estado: true,
    },
    {
        id: 4,
        direccion: 'aavenidad oriental con junnin',
        telefono: 3005693256,
        precio: 280000000,
        estado: false,
    },
    {
        id: 5,
        direccion: 'El salvador',
        telefono: 3176552389,
        precio: 99000000,
        estado: false,
    },
    {
        id: 6,
        direccion: 'el poblado ',
        telefono: 315000006,
        precio: 350000000,
        estado: true,
    },
    {
        id: 7,
        direccion: 'calle 54 # 56-73',
        telefono: 3147247816,
        precio: 300000000,
        estado: true,
    },
    {
        id: 8,
        direccion: 'calle 54 # 56-73',
        telefono: 3147247816,
        precio: 150000000,
        estado: true,
    },
    {
        id: 9,
        direccion: 'calle 54 # 56-73',
        telefono: 3147247816,
        precio: 150000000,
        estado: false,
    }
]
    const reiniciar = document.getElementById('reiniciar');
    const texto =document.getElementById('texto');

    





    reiniciar.addEventListener('click', reinicio)

    function reinicio(e){
        e.preventDefault();
        location.reload();
    }
/*
    const inmueble1 = document.getElementById('inmueble1').value;

    inmueble1.addEventListener('focus',function(){
        texto.textContent = '*Solo se Aceptan números';
    })

    inmueble1.addEventListener('blur',function(){
        texto.textContent = '';
    })

    para poner y quitar texto;
*/


    function encuentro(){

        const inmueble = inmuebles.filter(inmueble => {
            //inmueble.estado
            const inmueble1 = document.getElementById('inmueble1').value;
            if(inmueble1 == ''){
                alert('Debes ingresar un dato');
                return false;
            }
            let idInmueble;
            let precio;
            let telefono;
            if (inmueble.id==inmueble1 && inmueble.estado===true) {
                idInmueble = inmueble.direccion;
                precio = inmueble.precio;
                telefono = inmueble.telefono;
                document.getElementById('direccion').value=idInmueble;
                document.getElementById('precio').value=precio;
                document.getElementById('telefono').value=telefono;
            }else if(inmueble.id==inmueble1 && inmueble.estado===false){
                alert('No esta disponible');
            }
        });  
    }

    const Disponible = document.getElementById('Disponible');
    let adicionarDato = document.getElementById('enviar');

    adicionarDato.addEventListener('click', function adicionarDato(){
        //validar que todos los datos esten correctos

        let buscar = inmuebles.find(inmueble => inmueble.id == id.value)
        if(buscar == undefined){ //no encuentra id inmueble, porque recorre el arreglo y si no es undefind
            inmuebles.push({id:id.value,
                            direccion:direccion.value,
                            precio:precio.value,
                            telefono:telefono.value,
                            estado:Disponible.checked})
                            console.log(buscar);
        }
        //agregar el inmueble al arreglo de objetos

        }) 


    const lista = document.getElementById('lista');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');

    lista.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.add('modalShow');

    })

    close.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.remove('modalShow');
    })


    const disponibleModal = document.getElementById('disponibleModal');

    disponibleModal.addEventListener('click', funcionesDisponibles)

    function funcionesDisponibles(){
        
        const inmueble = inmuebles.filter(inmueble => {
            const precioModal = document.getElementById('precioModal').value;
            let idInmueble;
            let precio;
            let telefono;

            if (inmueble.precio==precioModal && inmueble.precio >= 2000000000 &&  inmueble.precio <= 3000000000) {
                precio = inmueble.precio++;
                document.getElementById('disponible').innerHTML=precio;
            }
        });  
    }

/* 
    const disponibleModal = document.getElementById('disponibleModal').value;

    disponibleModal.addEventListener('click', function disponibleModal(){
        alert('HOLA');
    })


    


function encuentro(){

    inmuebles.forEach(function(inmueble){
        

        
    })
}
*/