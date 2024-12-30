/* eslint-disable no-undef */
import { v2 as cloudinary } from "cloudinary";
import { fileupload } from "../../src/helpers/fileupload";

cloudinary.config({
  cloud_name: "dykn6t4ja",
  api_key: "321237819189876",
  api_secret: "EpxOPdKnacLZrGZkk6Wr8nIWCW8",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--BRh1sBQLV1ug6fO2Uc9WD9_zsy_aThlWw&s";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileupload(file);
    expect(typeof url).toBe("string");

    // console.log(url);
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");

    const cloudResp = await cloudinary.api.delete_resources([imageId], {
      resource_type: "image",
    });
    // console.log(cloudResp);
  });

  test("debe de retornar null ", async () => {
    const file = new File([], "foto.jpg");

    const url = await fileupload(file);
    expect(url).toBe(null);
  });
});
