import { auth } from "@/app/coolAuth";
import { redirect } from "next/navigation";

import { getCategories } from "@/db_methods/methods";

import { SearchInput } from "@/components/search-input";
import { getWalls } from "@/actions/get-walls";
import { WallsList } from "@/components/walls-list";

import { Categories } from "./_components/categories";

interface SearchPageProps {
  searchParams: {
    title: string;
    category_id: string;
  }
};

const SearchPage = async ({
  searchParams
}: SearchPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const categories = await getCategories();

  const walls = await getWalls({
    userId,
    ...searchParams,
  });


  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories
          items={categories}
        />
        <WallsList items={walls} />
      </div>
    </>
   );
}
 
export default SearchPage;