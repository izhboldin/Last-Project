<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Test</title>
    </head>
    <body class="antialiased">
       <h1>
Hi, {{$name}}
       </h1>
       <ul>
    @foreach($tasks as $task)
        <li>{{$task}}</li>
    @endforeach
       </ul>
    </body>
</html>
