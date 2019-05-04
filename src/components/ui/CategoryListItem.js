import Link from "next/link";
const CategoryListItem = ({ term }) => (
  <span
    style={{
      paddingRight: "5px"
    }}
  >
    <Link
      href={`/category?slug=${term.slug}`}
      as={`/category/${term.slug}`}
      prefetch
    >
      <a>{term.name}</a>
    </Link>
  </span>
);

export default CategoryListItem;
