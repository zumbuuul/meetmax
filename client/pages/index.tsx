import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Test: NextPage = () => {
  const router = useRouter();

  // ovo simulira kada nisi prijavljen
  useEffect(() => {
    router.push("/sign-up");
  }, []);

  return <div className=""></div>;
};

export default Test;
