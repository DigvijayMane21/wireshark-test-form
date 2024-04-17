import { LoginForm } from "@/components/authform";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <LoginForm/>
    </div>
  );
}
