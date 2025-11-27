import React, { useEffect, useState } from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const RecommendedHotels = () => {
  const {rooms, searchedCities} = useAppContext();
  const {recommended, setRecommend} = useState([]);
  const filterHotels = ()=>{
    const filterHotels = rooms.slice().filter( room => searchedCities.includes(room.hotel.city));
    setRecommend(filterHotels);
  }

  useEffect(()=>{
    filterHotels()
  },[rooms, searchedCities])
  
  return recommended.length > 0 && (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-26 bg-slate-50 py-20">
      <Title
        title="Khách sạn được đề xuất"
        subTitle="Khám phá những điểm đến được chúng tôi tuyển chọn kỹ lưỡng trên khắp thế giới, mang đến sự sang trọng đẳng cấp và những trải nghiệm khó quên."
      />

      <div className="flex items-center justify-center gap-6 mt-20">
        {recommended.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      
    </div>
  );
};

export default RecommendedHotels;
