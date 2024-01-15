export const destructureAssetToModify = (asset) => {
  const destructuredAssetToModify = {
    ucid: asset.ucid,
    type: asset.type,
    totalArea: asset.area.total,
    coveredArea: asset.area.covered,
    title: asset.title,
    owner: asset.owner,
    operationType: asset.operation.type,
    selling: asset.operation.price.selling ,
    rental: asset.operation.price.rental ,
    charges: asset.operation.price.charges ,
    address: asset.location.address,
    zone: asset.location.zone,
    city: asset.location.city,
    age: asset.details.age,
    rooms: asset.details.rooms,
    parking: asset.details.parking, // Changed from parkingSpaces
    bathrooms: asset.details.bathrooms,
    description: asset.characteristics.description,
    keyPoints: asset.characteristics.keyPoints,
    images: asset.images
  };

  return destructuredAssetToModify
};



