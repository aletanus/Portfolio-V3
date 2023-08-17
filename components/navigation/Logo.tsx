import Image from "next/image";
import { a, useSpring } from "@react-spring/web";

const Logo = () => {

  const loadingLogo = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <a.div id="logo-img" style={loadingLogo}>
      <Image src="/ALTA.png" alt="Alessandro Tanus" title="Alessandro Tanus" width={48} height={48}></Image>
    </a.div>
  )
};

export default Logo;

