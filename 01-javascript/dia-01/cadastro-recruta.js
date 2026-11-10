index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Recruta</title>
</head>
<body>
    <script src="index.js"></script>
</body>
</html>



index.js
const primeiroNome= prompt("Informe o primeiro nome")
const sobrenome= prompt("Informe o segundo nome")
const campoDeEstudo = prompt("Qual é o campo de estudo?")
const anoDeNascimento = prompt("Qual é o ano de nascimento")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +primeiroNome + sobrenome+
    "\nCampo de estudo: " +campoDeEstudo +
    "\nIdade: " + (2026 - anoDeNascimento)
)
