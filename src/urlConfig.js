const baseUrl = "http://localhost:4000";
//const baseUrl = "https://distinct-flip-flops-tuna.cyclic.app";
const cloud = "https://res.cloudinary.com/dhusvnwal/image/upload/"

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
export const generateUrl = (fileName) => {
  return `${baseUrl}${fileName}`;
};
export const generateCloud = (fileName)=>{
  return `${cloud}${fileName}`;


}





