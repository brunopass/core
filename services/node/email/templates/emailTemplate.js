module.exports = verificationTemplate = url =>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        h2{
            margin: 0;
            padding: 0;
        }

        p{
            margin: 0 0 20px 0;
        }

        a{
            text-decoration: none;
        }

        .btn{
            width: 200px;
            height: 50px;
            border-radius: 3px;
            background-color: #ca3900;
            color: #fff;
        }
    </style>    

</head>
<body>
    <h2>Bienvenido!</h2>
    <p>Para confirmar tu cuenta, haz click en el boton a continuación</p>
    <a href=${url}>
        <div class="btn"">
            Verificar email
        </div>
    </a>
</body>
</html>
    `
}
