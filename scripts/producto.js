

window.addEventListener("DOMContentLoaded", function () {//todo lo que debe esperar a que se cargue la pagina se mete en esta función
    // https://www.sitepoint.com/get-url-parameters-with-javascript/
    var idProducto = parseInt(new URLSearchParams (window.location.search).get('idProd'));//parametro que hay que cogerlo de la url
    var producto=null;
    for(var i=0;i<objArrayProducto.length;i++){
        if(objArrayProducto[i].id==idProducto){
            producto=objArrayProducto[i];
            break;//dejo de buscar
        }
    }
    if(producto!=null){//aqui relleno el html de cada producto
        $("#idProducto").val(idProducto);//aqui se guarda el id del producto en un input hidden para usarlo en el carrito

        document.getElementById('fotoPro').src = producto.foto; //para la foto es .src
        document.getElementById('resPro').innerHTML = producto.resumen;
        document.getElementById('nomPro').innerHTML = producto.nombre;
        document.getElementById('precioPro').innerHTML = producto.precio + '€';
        document.getElementById('descPro').innerHTML = 'Descripción: <br/>'+ producto.descripcion;
        document.getElementById('categoriaPro').innerHTML = 'Categoría: '+producto.categoria;
    }

    $('#botonAniadir').click(function(){
        //primero se intenta obtener el carrito del local storage
        let carrito = localStorage.getItem('carrito');
        //si el carrito no existe se crea vacío
        if (!carrito){
            localStorage.setItem('carrito', '{}');//diccionario de productos, la clave es el id del producto y el valor son los datos de producto y la cantidad
        }
        //se obtiene el carrito del local storage y se traduce a javascript usando json
        let carritoJSON = JSON.parse(localStorage.getItem('carrito'));
        //se obtiene el id del producto que sera la clave en el diccionario
        let idProducto = $('#idProducto').val();
        //se inserta un producto en el carrito usando el id de producto como clave y como valor un objeto javascript con los detalles 
        if(idProducto in carritoJSON){
            carritoJSON[idProducto]['cantidad']+=1;
        }else{
            carritoJSON[idProducto]={"nombre":$('#nomPro').text(),"foto":$('#fotoPro').attr("src"),"precio":$('#precioPro').text(),"cantidad":1};
        }
        
        //una vez modificado el carrito se vuelve a guardar en el local storage
        localStorage.setItem('carrito',JSON.stringify(carritoJSON));
    });
    
});
