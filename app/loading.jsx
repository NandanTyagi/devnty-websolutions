import RippleLoader from "@/components/ui/RippleLoader";

const loading = () => {
    return ( 
        <div className="z-50 relative h-screen min-h-screen flex justify-center items-center">
        <RippleLoader />
        </div>
     );
}
 
export default loading;