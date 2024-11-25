import Link from "next/link";

const Breadcurmb = ({productCategory, productType, segment}) => {
    return (
        <div>
            <p><span>{productCategory} / <Link href={`/${segment}/`} className="text-purple-600">{productType}</Link></span></p>
        </div>
    );
};

export default Breadcurmb;