import Link from "next/link";
import type { Product } from "@/types/product";

type Props = {
  action: (formData: FormData) => Promise<void>;
  product?: Product;
  submitLabel: string;
};

const fieldClass =
  "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";

export default function ProductForm({
  action,
  product,
  submitLabel,
}: Props) {
  return (
    <form action={action} className="space-y-5 rounded-2xl bg-white p-6 shadow-sm">
      <label className="block font-medium text-slate-900">
        Titel *
        <input
          name="title"
          required
          defaultValue={product?.title ?? ""}
          className={fieldClass}
        />
      </label>

      <label className="block font-medium text-slate-900">
        Prijs *
        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          required
          defaultValue={product?.price ?? ""}
          className={fieldClass}
        />
      </label>

      <label className="block font-medium text-slate-900">
        Categorie
        <input
          name="category"
          defaultValue={product?.category ?? ""}
          className={fieldClass}
        />
      </label>

      <label className="block font-medium text-slate-900">
        Beschrijving
        <textarea
          name="description"
          rows={6}
          defaultValue={product?.description ?? ""}
          className={fieldClass}
        />
      </label>

      <label className="block font-medium text-slate-900">
        URL van afbeelding
        <input
          name="image_url"
          type="url"
          defaultValue={product?.image_url ?? ""}
          className={fieldClass}
          aria-describedby="image-help"
        />
        <span id="image-help" className="mt-1 block text-sm font-normal text-slate-500">
          Optioneel. Gebruik voorlopig alleen een https-URL van fakestoreapi.com.
          Laat leeg om de lokale placeholder te gebruiken.
        </span>
      </label>

      <label className="flex items-center gap-3 font-medium text-slate-900">
        <input
          name="is_hidden"
          type="checkbox"
          defaultChecked={product?.is_hidden ?? false}
          className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
        />
        Verberg in de publieke webshop
      </label>

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700"
        >
          {submitLabel}
        </button>
        <Link
          href="/admin"
          className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Annuleren
        </Link>
      </div>
    </form>
  );
}
