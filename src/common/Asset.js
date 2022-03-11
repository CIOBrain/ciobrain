import axios from "axios";
import { axisBottom } from "d3-axis";

let URL = process.env.NODE_ENV==='development'?"http://localhost:3001/asset":"https://ciobrainapi.azurewebsites.net/asset"
let applicationAssetURL = URL + '/application'
let dataAssetURL = URL + '/data'
let infrastructureAssetURL = URL + '/infrastructure'
let talentAssetURL = URL + '/talent'
let projectsAssetURL = URL + '/projects'
let businessAssetURL = URL + '/business'

export async function getApplicationAssetById(id) {
  try {
    const response = await axios.get( applicationAssetURL + '/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getDataAssetById(id) {
  try {
    const response = await axios.get( dataAssetURL + '/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getInfrastructureAssetById(id) {
  try {
    const response = await axios.get( infrastructureAssetURL + '/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getTalentAssetById(id) {
  try {
    const response = await axios.get( talentAssetURL + '/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectsAssetById(id) {
  try {
    const response = await axios.get( projectsAssetURL + '/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBusinessAssetById(id) {
  try {
    const response = await axios.get( businessAssetURL + '/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllApplicationAssets() {
  try {
    const response = await axios.get( applicationAssetURL );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllDataAssets() {
  try {
    const response = await axios.get( dataAssetURL );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export async function getAllInfrastructureAssets() {
  try {
    const response = await axios.get( infrastructureAssetURL );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllTalentAssets() {
  try {
    const response = await axios.get( talentAssetURL );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllProjectsAssets() {
  try {
    const response = await axios.get( projectsAssetURL );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllBusinessAssets() {
  try {
    const response = await axios.get( businessAssetURL );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllAssets() {
  var assets = await getAllApplicationAssets()
  assets = assets.concat(await getAllDataAssets())
  assets = assets.concat(await getAllInfrastructureAssets())
  assets = assets.concat(await getAllTalentAssets())
  assets = assets.concat(await getAllProjectsAssets())
  assets = assets.concat(await getAllBusinessAssets())
  return assets
}

export async function getApplicationAssetChildrenById(id) {
  try {
    const response = await axios.get( applicationAssetURL + '/' + id + '/children');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getDataAssetChildrenById(id) {
  try {
    const response = await axios.get( dataAssetURL + '/' + id + '/children');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getInfrastructureAssetChildrenById(id) {
  try {
    const response = await axios.get( infrastructureAssetURL + '/' + id + '/children');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getTalentAssetChildrenById(id) {
  try {
    const response = await axios.get( talentAssetURL + '/' + id + '/children');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectsAssetChildrenById(id) {
  try {
    const response = await axios.get( projectsAssetURL + '/' + id + '/children');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBusinessAssetChildrenById(id) {
  try {
    const response = await axios.get( businessAssetURL + '/' + id + '/children');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
