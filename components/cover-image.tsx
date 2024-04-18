import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({
  title,
  coverImage,
  slug,
}: Props) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={title}
      src={coverImage?.node.sourceUrl}
      className="object-cover w-[100%] sm:h-[220px] "
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
