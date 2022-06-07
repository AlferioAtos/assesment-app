import { useEffect, useState } from 'react';
import { getAddons, getVehicles } from '../models/vehicleAppModels';


/* Custom Hook that returns an array of companies with thei employees data */

export const useVehicles = () =>
{
    const [vehicles, setVehicles] = useState([]);
    const [addons, setAddons] = useState([]);
    useEffect(() =>
    {
        Promise.all([
            getVehicles(),
            getAddons()
        ]).then(([vehicles, addons]) =>
        {
            setVehicles(vehicles);
            setAddons(addons);
        });
    }, []);
    return [vehicles, addons];
}