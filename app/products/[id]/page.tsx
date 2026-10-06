import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVisibleProduct } from "@/lib/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getVisibleProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
      <div className="relative min-h-96 rounded-2xl border bg-white">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-10"
            priority
          />
        ) : (
          <div
            className="grid h-full min-h-96 place-items-center text-8xl text-indigo-600"
            aria-label={`Geen afbeelding beschikbaar voor ${product.title}`}
          >
            {product.title.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <article>
        {product.category && (
          <p className="font-semibold uppercase text-indigo-600">
            {product.category}
          </p>
        )}
        <h1 className="mt-3 text-4xl font-bold">{product.title}</h1>
        <p className="mt-5 text-3xl font-bold">
          € {Number(product.price).toFixed(2)}
        </p>
        {product.description && (
          <p className="mt-6 leading-7 text-gray-600">{product.description}</p>
        )}
        <Link
          href="/products"
          className="mt-8 inline-flex font-semibold text-indigo-600 hover:text-indigo-800"
        >
          ← Terug naar alle producten
        </Link>
      </article>
    </main>
  );
}
