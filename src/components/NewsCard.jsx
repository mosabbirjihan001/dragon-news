

// import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
// import { BsFillShareFill } from 'react-icons/bs'; 
// import { useState , useEffect } from 'react';

// const NewsCard = ( props = {} ) => {
//    const { news } = props || {} ;

//   return (
//     <div className="card bg-base-100 shadow-xl w-96">
//       <div className="flex items-center p-4">
//         <img
//           src={news.author.img}
//           alt="Author"
//           className="w-10 h-10 rounded-full"
//         />
//         <div className="ml-3">
//           <p className="font-semibold text-gray-800">{news.author.name}</p>
//           <p className="text-sm text-gray-500">
//             {new Date(news.author.published_date).toLocaleDateString()}
//           </p>
//         </div>
//         <BsFillShareFill className="ml-auto text-gray-500 cursor-pointer" />
//       </div>
      
//       <img
//         src={news.thumbnail_url}
//         alt="News Thumbnail"
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-4">
//         <h2 className="card-title">
//           {news.title}
//         </h2>
//         <p className="text-sm text-gray-600 mt-2">
//           {news.details.substring(0, 100)}...
//         </p>
//         <button className="text-blue-500 mt-2">Read More</button>
//       </div>

//       <div className="flex items-center p-4">
//         <div className="flex items-center">
//           <AiFillStar className="text-yellow-500" />
//           <p className="ml-1 text-gray-800 font-semibold">{news.rating.number}</p>
//         </div>
//         <p className="ml-2 text-gray-500">| {news.rating.badge}</p>
//         <div className="ml-auto flex items-center">
//           <AiOutlineEye className="text-gray-500" />
//           <p className="ml-1 text-gray-800 font-semibold">{news.total_view}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   const [newsData, setNewsData] = useState(null);

//   useEffect(() => {
//     fetch('https://openapi.programming-hero.com/api/news/category/01')
//       .then(response => response.json())
//       .then(data => {
//         setNewsData(data.data[0]); // Assuming you want the first item in the data array
//       })
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       {newsData ? <NewsCard news={newsData} /> : <p>Loading...</p>}
//     </div>
//   );
// }

import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className=" p-4 bg-white rounded-lg shadow-md">
      {/* Author Information */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-gray-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>

      {/* Thumbnail Image */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-gray-700 text-sm mb-4">
        {news.details.slice(0, 150)}...{" "}
        <span className="text-primary">Read More</span>
      </p>

      {/* Ratings and Views */}
      <div className="flex items-center justify-between text-gray-600 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;

