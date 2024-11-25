import BigDeal from "@/components/home/BigDeal";
import Collection from "@/components/home/Collection";
import Features from "@/components/home/Features";
import FeaturesProduct from "@/components/home/FeaturesProduct";
import Hero from "@/components/home/Hero";
import NewOffer from "@/components/home/NewOffer";
import collectionMen from '@/assets/images/collection/collection_men.png';
import collectionWoman from '@/assets/images/collection/collection_woman.png';
import sharee from '@/assets/images/features/one.png';
import hoodie from '@/assets/images/features/two.png';

const collectionForMen = [
  {
    id: 1,
    name: "MEN COLLECTION",
    image: collectionMen,
    direction: 'flex-col sm:flex-row'
  },
  {
    id: 2,
    name: "MEN HOODIE",
    image: hoodie,
    direction: 'flex-col sm:flex-row'
  },
  {
    id: 3,
    name: "MEN COLLECTION",
    image: collectionMen,
    direction: 'flex-col sm:flex-row'
  },
  {
    id: 4,
    name: "MEN COLLECTION",
    image: collectionMen,
    direction: 'flex-col sm:flex-row'
  }
]
const collectionForWomen = [
  {
    id: 1,
    name: "WOMEN COLLECTION",
    image: collectionWoman,
    direction: 'flex-col sm:flex-row-reverse'
  },
  {
    id: 2,
    name: "INDIAN SHAREE",
    image: sharee,
    direction: 'flex-col sm:flex-row-reverse'
  },
  {
    id: 3,
    name: "WOMEN COLLECTION",
    image: collectionWoman,
    direction: 'flex-col sm:flex-row-reverse'
  },
  {
    id: 4,
    name: "WOMEN COLLECTION",
    image: collectionWoman,
    direction: 'flex-col sm:flex-row-reverse'
  },
]
const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturesProduct />
      <NewOffer />
      <Collection collections={collectionForMen} speed={6000}/>
      <Collection collections={collectionForWomen} speed={3000}/>
      <BigDeal />
    </div>
  );
};

export default Home;