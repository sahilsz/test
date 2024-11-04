import Select from 'react-select';
import { fetchUserHouses } from './api/house';
import { useUser } from '../auth/api/user-store';
import { useEffect, useState } from 'react';

let rerender = 0;

export default function Filter({ house, setSelectedHouse }) {
  const [options, setOptions] = useState([]);

  const user = useUser.getState().user;

  useEffect(() => {
    const getUserHouses = async () => {
      const response = await fetchUserHouses(user?.email);

      const options = response?.masterOf?.map((h) => ({
        label: h?.houseName,
        value: h?.houseAccessCode,
      }));
      setOptions(options);
    };
    getUserHouses();
  }, [user]);

  rerender += 1;

  return (
    <div className="w-full bg-white p-4 mb-6 rounded-md">
      <div className="space-y-4">
        <h2 className="font-semibold text-2xl">House Name {rerender}</h2>

        <Select
          options={options}
          placeholder="Select a house"
          value={options.find((h) => {
            return h?.value === house?.value;
          })}
          onChange={(value) => setSelectedHouse(value)}
        />
      </div>
    </div>
  );
}
