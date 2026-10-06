import { notFound } from "next/navigation";
import ProductForm from "@/app/admin/ProductForm";
import { getAdminProduct, updateProduct } from "@/app/actions/products";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  if (!Number.isSafeInteger(productId) || productId < 1) {
    notFound();
  }

  const product = await getAdminProduct(productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8">
        <p className="font-semibold text-indigo-600">Beheer</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Product bewerken
        </h1>
        <p className="mt-2 text-slate-600">
          Pas de productgegevens aan en sla de wijzigingen op.
        </p>
      </div>
      <ProductForm
        action={updateProduct.bind(null, product.id)}
        product={product}
        submitLabel="Wijzigingen opslaan"
      />
    </main>
  );
}
