'use client'
import DetailsImage from "@/components/details/DetailsImage";
import Breadcurmb from "@/components/global/Breadcurmb";
import ProductInfo from "@/components/details/ProductInfo";
import { useState } from "react";
import DetailsInfo from "@/components/details/DetailsInfo";
import ReviewInfo from "@/components/details/ReviewInfo";
import RelatedProducts from "@/components/details/RelatedProducts";
import DiscussionInfo from "@/components/details/DiscussionInfo";


const ProductDetails = () => {
    const [activeInfo, setActiveInfo] = useState('review');
    return (
        <div className="max-w-[1280px] m-auto px-2 py-3">
            <Breadcurmb productCategory="Feature Product" productType="New Arrival" segment="new_arrival"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div>
                    <DetailsImage />
                </div>
                <div>
                    <ProductInfo/>
                </div>
            </div>
            <div className="flex gap-8 py-4 mt-8">
                <h6 className={`cursor-pointer ${activeInfo === 'details' && 'text-purple-800'}`} onClick={()=>setActiveInfo('details')}>Details</h6>
                <h6 className={`cursor-pointer ${activeInfo === 'review' && 'text-purple-800'}`} onClick={()=>setActiveInfo('review')}>Review & Rating</h6>
                <h6 className={`cursor-pointer ${activeInfo === 'discussion' && 'text-purple-800'}`} onClick={()=>setActiveInfo('discussion')}>Discussion</h6>
            </div>
            <div className="mt-8">
                {activeInfo === 'details' && <DetailsInfo/>}
                {activeInfo === 'review' && <ReviewInfo/>}
                {activeInfo === 'discussion' && <DiscussionInfo/>}
            </div>
            <div className="mt-20">
                <RelatedProducts/>
            </div>
        </div>
    );
};

export default ProductDetails;