import Image from "next/image";

const Logo = () => {
    return ( 
        <div className="pr-2">
            <Image src="/devnty-logo-new.svg" priority  alt="Devnty logo" width={60} height={60} />
        </div>
     );
}
 
export default Logo;