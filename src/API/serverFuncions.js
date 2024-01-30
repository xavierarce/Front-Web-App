// export const serverAddress = "https://hogarsegurosvr.onrender.com";
export const serverAddress = "http://localhost:8000";

//! Authentication
export const serverLoginUser = async (email, password) => {
  return await fetch(`${serverAddress}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};

export const serverRegisterUser = async (registerValues) => {
  return await fetch(`${serverAddress}/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      registerValues,
    }),
  });
};

//! Token Verification
export const serverGetAgentCuenta = async (storedToken) => {
  return await fetch(`${serverAddress}/cuenta/agent`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storedToken}`,
    },
  });
};

export const serverGetUserCuenta = async (token) => {
  return await fetch(`${serverAddress}/cuenta/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

//! User Side App
export const serverGetUserCuentaInferface = async (storedToken) => {
  return await fetch(`${serverAddress}/cuenta/userinterface`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storedToken}`,
    },
  });
};

//!Assets managment

export const serverGetHighlightedAssets = async () => {
  return await fetch(`${serverAddress}/assets/getHighlightedAssets`);
};

export const serverGetAllAssets = async (currentPage, searchQuery) => {
  return await fetch(
    `${serverAddress}/assets?page=${currentPage}&search=${searchQuery}`
  );
};

export const serverGetSingleAsset = async (formattedName, ucid) => {
  console.log("hee");
  return await fetch(
    `${serverAddress}/assets/singleAsset?name=${formattedName}&ucid=${ucid}`
  );
};

export const serverGetAgencyAssets = async (token, currentPage,searchQuery) => {
  return await fetch(`${serverAddress}/assets/agency?page=${currentPage}&search=${searchQuery}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export const serverRegisterNewAsset = async (storedToken, formData) => {
  return await fetch(`${serverAddress}/assets/registerAsset`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${storedToken}`,
    },
    body: formData,
  });
};

export const serverUpdateAsset = async (token, formData) => {
  return await fetch(`${serverAddress}/assets/updateAsset`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: formData,
  });
};

export const serverUpdateImagesOrder = async (token, ucid, updatedImages) => {
  return await fetch(`${serverAddress}/assets/updateAssetImageOrder`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ucid, updatedImages }),
  });
};

export const serverDeleteAsset = async (title, ucid, token) => {
  return await fetch(
    `${serverAddress}/assets/deleteAsset/title/${encodeURIComponent(
      title.replace(/\s/g, " ")
    )}/ucid/${encodeURIComponent(ucid)}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        asset: {
          title,
          ucid,
        },
      }),
    }
  );
};

//! Favorites

export const serverGetUserFavorites = async (token) => {
  return await fetch(`${serverAddress}/favorite/getUserFavorites`, {
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const serverGetAssetIsFavorite = async (formattedName, ucid, token) => {
  return await fetch(
    `${serverAddress}/favorite/getIsFavorite?name=${formattedName}&ucid=${ucid}`,
    {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const serverAddFavorite = async (
  formattedName,
  ucid,
  token,
  currentAsset
) => {
  return await fetch(
    `${serverAddress}/favorite/addFavorite?name=${formattedName}&ucid=${ucid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ assetTitle: currentAsset.title }),
    }
  );
};

export const serverRemoveFavorite = async (
  formattedName,
  ucid,
  token,
  currentAsset
) => {
  return await fetch(
    `${serverAddress}/favorite/removeFavorite?name=${formattedName}&ucid=${ucid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ assetTitle: currentAsset.title }),
    }
  );
};

//! Visits

export const serverScheduleVisit = async (token, visitDates, assetInfo) => {
  return await fetch(`${serverAddress}/visit/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ visitDates, assetInfo }),
  });
};

export const serverGetUserVisits = async (currentUser, token) => {
  return await fetch(
    `${serverAddress}/visit/uservisits?email=${currentUser.email}`,
    { headers: { authorization: `Bearer ${token}` } }
  );
};
