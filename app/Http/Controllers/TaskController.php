<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = [
            'Таска 1',
            'Таска 2',
            'Таска 3',
            'Таска 4',
            'Таска 5',
            'Таска 6',
        ];
        return view('test', ['name' => 'Alex', 'tasks' => $tasks]);
//        return 123;

    }
}
