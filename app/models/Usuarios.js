function Usuarios(connection) {
    this._connection = connection();
}

Usuarios.prototype.inserirUsuario = function (usuario) {

    this._connection.open((erro, mongo) => {
        if (!erro) {

            mongo.collection('usuarios', (err, collection) => {
                collection.insert(usuario);

                mongo.close();
            })

        } else {
            console.log(erro)
        }
    })

}

module.exports = function () {
    return Usuarios;
}