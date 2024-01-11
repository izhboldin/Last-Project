<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <title>Document</title>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Адмін Панель</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/admin-panel">Головна <span class="sr-only">(Поточна)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Модерація оголошень</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Управління акаунтами</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Рішення конфліктів</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Блокування користувачів</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    @foreach ($tests as $test)
        <p>{{ $test->name }}</p>
    @endforeach

</body>

</html>
