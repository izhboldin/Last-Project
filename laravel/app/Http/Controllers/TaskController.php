<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Console\View\Components\Task;
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
        return view('test.index', ['name' => 'Alex', 'tasks' => $tasks]);
        //    return $tasks;
    }

    public function store(Request $request)
    {
        if ($request->is('api/*')) {
            return 'request from API';
        }


        $data = $request->except('_token');

        $test = Test::create($data);

        return redirect()->route('test.show', ['test' => $test->id]);
    }

    public function show(string $id)
    {
        $test = Test::findOrFail($id);

        return view('test.show', ['test' => $test]);
    }
}
