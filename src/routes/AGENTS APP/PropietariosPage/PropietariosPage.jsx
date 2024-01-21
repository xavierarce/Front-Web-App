// import React, { useState } from "react";
// import {  useSearchParams } from "react-router-dom";
// import { ownersData } from "../../../AssetsFakeData";
// import CustomButton from "../../../components/CustomButton/CustomButton";
// import SearchBar from "../../../components/SearchBar/SearchBar";
// import Usuario from "../../../assets/Usuario foto.svg";
// import "./PropietariosPage.css";
// import OwnerCard from "../../../components/OwnerCard/OwnerCard";
// import NewOwnerCard from "../../../components/NewOwnerCard/NewOwnerCard";

// const itemsPerPage = 5;

// function PropietariosPage() {
//   const [cardPop, setCardPop] = useState(false);
//   const [newOwnerPop, setNewOwnerPop] = useState(false);
//   const [ownerOnCard, setOwnerOnCard] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchInput, setSearchInput] = useState(
//     searchParams.get("buscar") || ""
//   );
//   const [filteredOwners, setFilteredOwners] = useState(ownersData);

//   const handlePageChange = (newPage) => setCurrentPage(newPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const ownersToDisplay = filteredOwners.slice(startIndex, endIndex);

//   const onSearchChange = (e) => setSearchInput(e.target.value);

//   const onEditViewOwner = (user) => {
//     setCardPop(true);
//     setOwnerOnCard(user);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const searchParamValue = searchInput.trim().toLowerCase();
//     const newFilteredAssets = ownersData.filter((owner) =>
//       owner.name.toLowerCase().includes(searchParamValue)
//     );

//     setFilteredOwners(newFilteredAssets);
//     setSearchParams({ buscar: searchInput });
//   };
//   console.log(ownerOnCard);
//   return (
//     <div className="agency-sub-page">
//       {cardPop && ownerOnCard && (
//         <OwnerCard
//           ownerOnCard={ownerOnCard}
//           setOwnerOnCard={setOwnerOnCard}
//           setCardPop={setCardPop}
//         />
//       )}
//       {newOwnerPop && <NewOwnerCard setNewOwnerPop={setNewOwnerPop} />}
//       <h2 className="agency-sub-page-title">Propietarios</h2>
//       <div className="añadir-button">
//         <CustomButton
//           onButtonClick={() => {
//             setNewOwnerPop(true);
//           }}
//           content={"Añadir"}
//           pattern={"blue"}
//         />
//       </div>
//       <SearchBar onChange={onSearchChange} onSubmit={handleSubmit} />
//       <div className="agency-sub-page-card-container">
//         {ownersToDisplay.map((owner, index) => {
//           const { name, phoneNumber } = owner;
//           return (
//             <div key={index} className="agency-sub-page-card-owner">
//               <div className="agencysub-card-description">
//                 <h2 className="text-0-margin">{name}</h2>
//                 <p className="text-0-margin"> Telefono: {phoneNumber}</p>
//                 <p className="text-0-margin">Bienes:</p>
//                 {owner.assets.map((asset, idx) => {
//                   return <p className="text-0-margin">{asset.title} - {asset.type.toUpperCase()}</p>;
//                 })}
//                 <div className="agencysub-boton-y-propietario">
//                   <CustomButton
//                     pattern={"blue"}
//                     content={"Ver y Editar"}
//                     onButtonClick={() => onEditViewOwner(owner)}
//                   />
//                 </div>
//               </div>
//               <img
//                 className="agencysub-image-owner"
//                 alt={Usuario}
//                 src={Usuario}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="pagination">
//         {Array.from(
//           { length: Math.ceil(filteredOwners.length / itemsPerPage) },
//           (_, index) => (
//             <CustomButton
//               key={index}
//               pattern={`white ${currentPage === index + 1 ? "active" : null}`}
//               onButtonClick={() => handlePageChange(index + 1)}
//               content={index + 1}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default PropietariosPage;
