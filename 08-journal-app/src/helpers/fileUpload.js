export const fileupload = async (file) => {
  if (!file) throw new Error("No tenemos ningún archivo a subir");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dykn6t4ja/upload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "react-journal");

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("Error al subir el archivo");

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
