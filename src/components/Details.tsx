import { FC, useEffect, useState } from "react";
import { DetailsProps, IUserDetail } from "../models";

export const Details: FC<DetailsProps> = (props) => {
  const { info: { id } } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserDetail>();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BASE_USERS_URL}/${id}.json`)

      if (response.ok) {
        const data = await response.json(); 
        setUserData(data);
      } else {
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="user-details">
      { loading
        ? <span>Loading...</span>
        : (
          <>
            <img className="user-details_avatar" src={userData?.avatar} alt={userData?.name} width={300} height={300}/>
            <p className="user-details_info name">{userData?.name}</p>
            <p className="user-details_info"><strong>City:</strong> {userData?.details.city}</p>
            <p className="user-details_info"><strong>Company:</strong> {userData?.details.company}</p>
            <p className="user-details_info"><strong>Position:</strong> {userData?.details.position}</p>
          </>
        )
      }
    </div>
  );
};
