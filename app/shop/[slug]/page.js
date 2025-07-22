import mock from "@/constants/mock";
import ShopPage from "@/screens/shop";

export default function Shop({ collections = mock.collections, params }) {
  const collection = collections.find(
    (collection) => collection.slug === params.slug
  );

  return <ShopPage collection={collection} />;
}
