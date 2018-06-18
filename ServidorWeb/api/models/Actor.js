module.exports = {

    attributes: {
        nombres:{
            type:"string"
        },
        apellidos:{
            type:"string"
        },

        fechaNacimiento:{
            type:"number"
        },
        numeroPeliculas:{
            collection:"Peliculas",
            via:"entrenadorId"
        }
    },
    retirado:{
        type:"boolean"
    }
}

};