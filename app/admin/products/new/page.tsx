import ProductForm from "@/app/admin/ProductForm";
import { createProduct } from "@/app/actions/products";

export default function NewProductPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8">
        <p className="font-semibold text-indigo-600">Beheer</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Nieuw product
        </h1>
        <p className="mt-2 text-slate-600">
          Voeg een product toe aan je Supabase-database.
        </p>
      </div>
      <ProductForm action={createProduct} submitLabel="Product toevoegen" />
    </main>
  );
}
