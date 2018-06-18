module.exports = {

    attributes: {

        actorId:{
            type:"Int"
        },
        nombre:{
            type:"string"
        },

        anioLanzamiento:{
            type:"string"
        },
        actoresPrincipales:{
            model:"Actor"
        }

    },
    sinopsis:{
        model:"Actor"
    }

},

};