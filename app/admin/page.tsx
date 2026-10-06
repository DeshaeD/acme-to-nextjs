import Link from "next/link";
import { deleteProduct, getAllProducts, toggleVisibility } from "@/app/actions/products";
import DeleteButton from "./DeleteButton";

export default async function AdminPage() {
  const products = await getAllProducts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-semibold text-indigo-600">Beheer</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">
            Productbeheer
          </h1>
          <p className="mt-2 text-slate-600">
            Beheer alle producten in je Supabase-database.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700"
        >
          Nieuw product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl bg-white p-6 text-slate-600 shadow-sm">
          Er zijn nog geen producten.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
          <table className="w-full min-w-[720px] text-left text-sm">
            <caption className="sr-only">Productbeheer</caption>
            <thead className="border-b bg-slate-50 text-slate-600">
              <tr>
                <th scope="col" className="p-4 font-semibold">Product</th>
                <th scope="col" className="p-4 font-semibold">Prijs</th>
                <th scope="col" className="p-4 font-semibold">Status</th>
                <th scope="col" className="p-4 font-semibold">Acties</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="p-4">
                    <strong className="block text-slate-950">{product.title}</strong>
                    {product.category && (
                      <span className="text-slate-500">{product.category}</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap p-4 text-slate-700">
                    € {Number(product.price).toFixed(2)}
                  </td>
                  <td className="p-4 text-slate-700">
                    {product.is_hidden ? "Verborgen" : "Zichtbaar"}
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <form
                        action={toggleVisibility.bind(
                          null,
                          product.id,
                          product.is_hidden,
                        )}
                      >
                        <button
                          type="submit"
                          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                          {product.is_hidden ? "Tonen" : "Verbergen"}
                        </button>
                      </form>
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                      >
                        Bewerken
                      </Link>
                      <form action={deleteProduct.bind(null, product.id)}>
                        <DeleteButton />
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
