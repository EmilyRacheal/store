import React from "react";
import ProfileWrapper from "@/molecules/layout/profileWrapper/profileWrapper";
import ExploreCard from "@/atoms/cards/exploreCard";

const Profile = () => {
  return (
    <ProfileWrapper>
      <div className="flex flex-wrap gap-x-[2%] gap-y-[20px] w-full justify-between">
        {[...Array(15)].map(() => {
          return (
            <div className="w-[32%]">
              <ExploreCard />
            </div>
          );
        })}
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
