
import { useState } from "react";
import { useVehicles } from "../../hooks/vehicleHooks";

export const VehicleApp = () =>
{
    const [vehicleSelected, setVehilceSelected] = useState(null);
    const [warn, setWarn] = useState(false);
    const [vehicleSelectedData, setVehicleSelectedData] = useState(null);
    const [vehicles, addons] = useVehicles();
    const [showData, setShowData] = useState(false);
    const searchVehicle = (e) =>
    {
        setVehicleSelectedData(null);
        vehicleSelectedData ? document.getElementById(`finish`).value = 'Select an option' : console.log('');
        setShowData(false);
        if (e !== 'Select an option')
        {
            const selectedVehicle = vehicles.find(vehicleSearch => vehicleSearch.product === e);
            setVehilceSelected(selectedVehicle);
            setWarn(false);
        }
        else
        {

            setVehilceSelected(null);
            setWarn(true);
        }
    }
    const getVehicleData = (e) =>
    {
        setVehicleSelectedData(null);
        setShowData(false);
        if (e !== 'Select an option')
        {
            const vehicleData = { product: vehicleSelected.product, price: vehicleSelected.finishes.find(fhinish => fhinish.finish === e).price, finish: e, upgrades: [] };
            setVehicleSelectedData(vehicleData);
            setWarn(false);
        }
        else
        {
            setWarn(true);
        }
    }
    const showDataTrigger = () =>
    {
        setShowData(true);
    }
    const addUpgrade = (upgradePrice, upgrade, id) =>
    {
        const vehicleData = { ...vehicleSelectedData, price: vehicleSelectedData.price + upgradePrice, upgrades: [...vehicleSelectedData.upgrades, { id: id, upgrade: upgrade }] };
        setVehicleSelectedData(vehicleData);
        document.getElementById(`Add${id}`).hidden = true;
        document.getElementById(`Remove${id}`).hidden = false;
    }
    const removeUpgrade = (upgradePrice, id) =>
    {
        const vehicleData = { ...vehicleSelectedData, price: vehicleSelectedData.price - upgradePrice, upgrades: vehicleSelectedData.upgrades.filter(upgrade => upgrade.id !== id) };
        setVehicleSelectedData(vehicleData);
        document.getElementById(`Add${id}`).hidden = false;
        document.getElementById(`Remove${id}`).hidden = true;
    }
    return (

        <div className="container-fluid">


            <div className="mb-3">
                <label htmlFor="product" className="form-label">Disabled select menu</label>
                <select className="form-select" onChange={e => searchVehicle(e.target.value)}>
                    <option key='0' value='Select an option'>Select an option</option>
                    {vehicles.map(vehicle =>
                    {
                        return <option key={vehicle.product} value={vehicle.product}>{vehicle.product}</option>
                    })}
                </select>
            </div>
            {
                vehicleSelected ?
                    <div className="mb-3">
                        <label htmlFor="finish" className="form-label">Disabled select menu</label>
                        <select id="finish" className="form-select" onChange={e => getVehicleData(e.target.value)}>
                            <option value='Select an option' key='0'>Select an Option</option>

                            {
                                vehicleSelected.finishes.map(finish =>
                                {
                                    return <option key={finish.finish} value={finish.finish}>{finish.finish} </option>
                                })
                            }

                        </select>
                    </div>
                    : <></>
            }

            <button onClick={showDataTrigger} className="btn btn-primary" disabled={!vehicleSelected || !vehicleSelectedData || showData ? true : false}>Submit</button>
            {
                warn ?
                    <div className="alert alert-danger mt-3" role="alert">
                        Please select a valid option to continue
                    </div>
                    : <></>
            }
            {
                showData ? <table className="table table-striped" id="upgradeTable">
                    <thead>
                        <tr>
                            <th>Upgrade</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="">
                        {addons.map(
                            (upgrade, index) => (
                                <tr key={index}>
                                    <td>{upgrade.upgrade}</td>
                                    <td>$ {upgrade.price}</td>
                                    <td>
                                        <button id={`Add${index}`} className="btn btn-success"
                                            onClick={() => { addUpgrade(upgrade.price, upgrade.upgrade, index) }}
                                        >Add</button>
                                        <button hidden={true}
                                            className="btn btn-danger"
                                            id={`Remove${index}`}
                                            onClick={() => { removeUpgrade(upgrade.price, index) }}
                                        >Remove</button>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                    : <></>
            }
            {
                showData ?
                    <ul>
                        <li><h4>Product:</h4> {vehicleSelectedData.product}</li>
                        <li><h4>Finish:</h4> {vehicleSelectedData.finish}</li>
                        {
                            vehicleSelectedData.upgrades.length > 0 ?
                                <span>
                                    <li><h4>Addons</h4></li>
                                    <ol>
                                        {
                                            vehicleSelectedData.upgrades.map(upgrade =>
                                            {
                                                return <li key={upgrade.id}>{upgrade.upgrade}</li>
                                            })
                                        }
                                    </ol>
                                </span>
                                : <></>
                        }
                        <li><h4>Total:</h4> $ {vehicleSelectedData.price}</li>
                    </ul>
                    : <></>
            }

        </div>
    )
}
