<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    /**
     *
     * @return view.blade
     */
    public function index()
    {
        $products = Product::all();
        return view('product.products', compact('products'));
    }

    /** redirect to create page
     *
     * @return view.blade
     */
    public function create()
    {
        return view('product.create',);
    }

    /** Store a newly created product in the database.
     *
     * @param \App\Http\Requests\ProductRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ProductRequest $request)
    {
        Product::create([
            'user_id' => $request->get('user_id'),
            'title' => $request->get('title'),
            'description' => $request->get('description'),
            'price' => $request->get('price'),
            'category_id' => $request->get('category_id'),
        ]);
        return redirect()->route('product.index');
    }

    public function show(string $id)
    {
        $product = Product::findOrFail($id);

        return view('product.show', compact('product'));
    }

    public function edit(string $id)
    {
        $product = Product::findOrFail($id);

        return view('product.edit', compact('product'));
    }

    public function update(ProductRequest $request)
    {

        $product = Product::find($request->get('id'));

        $product->update([
            'user_id' => $request->get('user_id'),
            'title' => $request->get('title'),
            'description' => $request->get('description'),
            'price' => $request->get('price'),
            'category_id' => $request->get('category_id'),
        ]);
        return redirect()->route('product.index');
    }

    /** delete product
     *
     * @param string $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);

        $product->delete();
        return redirect()->route('product.index');
    }
}
