
    $("document").ready( function () {
    //se crea el objeto usuario administrador
    var usuarioAdmin = {'nombreUsuario':'ron','password':'ron'};
    // Lo guardamos en localStorage, pasándolo a cadena con JSON
    localStorage.setItem('Ron', JSON.stringify(usuarioAdmin));
    // Creamos una nueva variable object2 con el valor obtenido de localStorage usando JSON recuperar el objeto inicial
    var usuarioAdmin2 = JSON.parse(localStorage.getItem('Ron'));
    



    $("#iniciar").click(function(){
        var errores =[];
        //Validación del formulario
        if($('#usuario').val().length == ''){
            errores.push('El usuario no puede estar vacio');
        }
        if($('#password').val().length == ''){
            errores.push('La contraseña no puede estar vacia');
        }
        if($('#usuario').val() != usuarioAdmin2.nombreUsuario){
            errores.push('Nombre de usuario incorrecto');
        }
        if($('#password').val() != usuarioAdmin2.password){
            errores.push('Contraseña incorrecta');
        }

        if(errores.length==0){
            // window.location.href = 'gestionarProductos.html'; esto dejo de funcionar de repente y tuve que cambiarlo poniendo un action y quitando el boton por in input
        }else{
            var htmlErrores='<p>El formulario tiene errores: </p><ul>';
                for(var i=0;i<errores.length;i++){
                    htmlErrores += 
                    '<li>'+errores[i]+'</li>';
                }
                htmlErrores += '</ul>';
                $('#errores').html(htmlErrores);
                event.preventDefault();//en el caso de errores se indica que no haga el submit
        }
    });
});
