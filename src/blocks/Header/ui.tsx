import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="flex items-center bg-[#EDEDED] w-[632px] m-auto pt-3 pb-3 px-6 rounded-full font-text">
      <p className="m-0">Vylo.</p>

      <div className="ml-auto flex gap-4">
        <Button variant={"link"}>Price</Button>
        <Button variant={"link"}>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
