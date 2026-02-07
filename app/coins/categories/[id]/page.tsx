import Link from "next/link";

type CategoryPageProps = {
  params: {
    id: string;
  };
};

const Category = async ({
  params,
}: CategoryPageProps) => {
  const { id } = await params;
  if (!id) return (<>Loading...</>);

  return (
    <div className="flex flex-col items-center gap-5 mx-auto text-center pt-20">
      <p><b>{id.toUpperCase()}</b> Coming soon...</p>
      <Link  href="/" className="text-black bg-white py-2 px-8 text-lg font-semibold rounded-lg">Back</Link>
    </div>
  )
}

export default Category;
