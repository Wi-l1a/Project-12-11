export const getFilteredDataForCars = (data: any[], filters: any) => {
    const {
        search, city, minYear, maxYear, color, minPrice, maxPrice, model, steeringWheel, drive, fuel, bodyType, condition } = filters;

    return data.filter((el) =>
        (!search || el.title.toLowerCase().includes(search.toLowerCase())) &&
        (!city || el.details.city === city) &&
        (minYear === undefined || minYear === '' || el.details.year >= parseInt(minYear)) &&
        (maxYear === undefined || maxYear === '' || el.details.year <= parseInt(maxYear)) &&
        (!color || el.details.color === color) &&
        (minPrice === undefined || minPrice === '' || el.price >= parseInt(minPrice)) &&
        (maxPrice === undefined || maxPrice === '' || el.price <= parseInt(maxPrice)) &&
        (!model || el.title.toLowerCase().includes(model.toLowerCase())) &&
        (!steeringWheel || el.details.steeringWheel === steeringWheel) &&
        (!drive || el.details.drive === drive) &&
        (!fuel || el.details.fuel === fuel) &&
        (!bodyType || el.details.bodyType === bodyType) &&
        (!condition || el.details.condition === condition)
    );
};




export const getFilteredDataForRealEstate = (data: any[], filters: any) => {
    const {
        search, city, minYear, maxYear, color, minPrice, maxPrice, model, steeringWheel, drive, fuel, bodyType, condition } = filters;

    return data.filter((el) =>
        (!search || el.title.toLowerCase().includes(search.toLowerCase())) &&
        (!city || el.details.city === city) &&
        (minYear === undefined || minYear === '' || el.details.year >= parseInt(minYear)) &&
        (maxYear === undefined || maxYear === '' || el.details.year <= parseInt(maxYear)) &&
        (!color || el.details.color === color) &&
        (minPrice === undefined || minPrice === '' || el.price >= parseInt(minPrice)) &&
        (maxPrice === undefined || maxPrice === '' || el.price <= parseInt(maxPrice)) &&
        (!model || el.title.toLowerCase().includes(model.toLowerCase())) &&
        (!steeringWheel || el.details.steeringWheel === steeringWheel) &&
        (!drive || el.details.drive === drive) &&
        (!fuel || el.details.fuel === fuel) &&
        (!bodyType || el.details.bodyType === bodyType) &&
        (!condition || el.details.condition === condition)
    );
};











