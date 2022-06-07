
import { useEffect, useState } from "react";
import { useVehicles, useVehiclesByString } from "../../hooks/vehicleHooks";

export const VehicleApp = () =>
{
    const [vehicles, addons] = useVehicles();
    const [vehicle, setVehicle] = useState({
        product: '',
        price: 0,
        addonsSelected: []
    });

    const searchByStringParam = (string, addons, vehicles) =>
    {
        const wordArray = string.match(/\b(\w+)\b/g);
        const finishQery = wordArray[0].concat(' ', wordArray[1]);
        const productQuery = wordArray[2].concat(' ', wordArray[3]);
        let addon1 = '';
        let addon2 = '';
        if (wordArray.includes('with') && wordArray.includes('and'))
        {
            const withIndex = wordArray.indexOf('with');
            const andIndex = wordArray.indexOf('and');
            if (withIndex + 1 === (andIndex - 1))
            {
                addon1 = wordArray[withIndex + 1];
            } else
            {
                addon1 = wordArray[withIndex + 1].concat(' ', wordArray[andIndex - 1]);
            }


            addon2 = wordArray[andIndex + 1].concat(' ', wordArray[wordArray.length - 1]);
        } else if (wordArray.includes('with') && !wordArray.includes('and'))
        {
            const withIndex = wordArray.indexOf('with');
            addon1 = wordArray[withIndex + 1].concat(' ', wordArray[wordArray.length - 1]);
        }

        const selectedCar = vehicles.filter(vehicle => vehicle.product.toLowerCase() === productQuery.toLowerCase());
        let selectedFinalProduct = {
            product: selectedCar[0].product,
            price: selectedCar[0].finishes.filter(finish => finish.finish.toLowerCase() === finishQery.toLowerCase())[0].price,
            finish: finishQery,
            addonsSelected: []
        };
        if (addon1 !== '' && addon2 !== '')
        {

            selectedFinalProduct.addonsSelected.push(addons.filter(addon => addon.upgrade.toLowerCase() === addon1.toLowerCase())[0]);
            selectedFinalProduct.addonsSelected.push(addons.filter(addon => addon.upgrade.toLowerCase() === addon2.toLowerCase())[0]);
            setVehicle(selectedFinalProduct);
        }
        else if (addon1 !== '' && addon2 === '')
        {
            selectedFinalProduct.addonsSelected.push(addons.filter(addon => addon.upgrade.toLowerCase() === addon1.toLowerCase())[0]);
            setVehicle(selectedFinalProduct);
        }
        else
        {
            setVehicle(selectedFinalProduct);
        }
    }
    const totalPrice = () =>
    {
        if (vehicle.addonsSelected.length > 0)
        {
            return vehicle.price + vehicle.addonsSelected[0].price + vehicle.addonsSelected[1].price;
        }
        else
        {
            return vehicle.price;
        }
    }
    /*   vehicleSelectedData.upgrades.filter(upgrade => upgrade.id !== id) */

    return (

        <div className="container-fluid">


            <h2>Vehicles</h2>

            <input type="text" defaultValue='' id='string' />
            <button onClick={() => searchByStringParam(document.getElementById('string').value, addons, vehicles)}>Search</button>
            {
                vehicle ? <h1>Vehicle price = {totalPrice()}</h1> : <h1>No vehicle selected</h1>
            }
        </div>
    )
}
