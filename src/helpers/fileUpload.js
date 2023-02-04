export const fileUpload = async (file) => {
    if (!file) throw new Error("No hay ningun archivo para subir")
  const cloudUrl = "https://api.cloudinary.com/v1_1/dxiiputzj/upload";

//    construimos el form-data
const formData = new FormData()
formData.append("upload_preset", "react-journal")
formData.append("file", file)

try {
    // por defecto la peticion es get, por eso tenemos que aclarar que es POST
    const resp = await fetch(cloudUrl, {method: "POST", body: formData})
    console.log(resp)
    if (!resp.ok) throw new Error("No se pudo subir la imagen")
    
    const cloudResp =  await resp.json()
    console.log({cloudResp})

    return cloudResp.secure_url;
    
} catch (error) {
    console.log(error)
    throw new Error(error.message)
}
};
