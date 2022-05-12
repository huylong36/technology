import { Button, Grid, Input, TextField } from "@mui/material";
import Axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import productApi from "../../../../apis/api/productApi";
import './style.scss'
const CreateProduct = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [listImage, setListImage] = useState([]);
  const [imageSelected, setImageSelected] = useState("");
  const onSubmitCreate = async (data) => {
   await productApi.createProductApi({...data , image:imageSelected })
   .then((res) =>{
     if(res.data.newProduct.title === '' && res.data.newProduct.color === '' && res.data.newProduct.description === '' && res.data.newProduct.size === '' ){
      enqueueSnackbar("Vui lòng nhập đầy đủ thông tin ", {
        variant: "warning",
      });
      return;
     }else{
       enqueueSnackbar("Tạo sản phẩm thành công! ", {
         variant: "success",
       });
     }
   })


   console.log('data' ,data);
  };
  const onChangeImage = (files) => {
    console.log('files' , files);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "m4jso0bw");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dwn6likgj/image/upload",
      formData
    )
      .then((res) => {
        setImageSelected(res.data.url);
      })
      .catch((error) => {});
     
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitCreate)}>
        <Grid container item>
          <Grid md={6}  p={1}>
            <TextField
              fullWidth
              inputProps={{ ...register("title", { required: true }) }}
              variant="outlined"
              multiline
              placeholder="Tên sản phẩm"
              className="input-create-product"
            />
            <TextField
              fullWidth
              inputProps={{ ...register("description", { required: true }) }}
              variant="outlined"
              multiline
              placeholder="Mô tả sản phẩm"
              className="input-create-product"
            />
            <TextField
              fullWidths
              inputProps={{ ...register("color", { required: true }) }}
              variant="outlined"
              multiline
              placeholder="Màu"
              className="input-create-product"
            />
            
          </Grid>
          <Grid md={6} p={1}>
          <TextField
            onChange={(event) => {
              onChangeImage(event.target.files);
            }}
            className="item-input input-create-product"
            name=""
            type="file"
            variant="outlined"
            id="input"
        />
             <label htmlFor="input">Choose Image</label>
             
             <TextField
              fullWidth
              inputProps={{ ...register("size", { required: true }) }}
              variant="outlined"
              multiline
              placeholder="Size"
              label="Size"
              className="input-create-product"
            />
          </Grid>
        </Grid>
        <Button type="submit">Tạo</Button>
      </form>
    </div>
  );
};

export default CreateProduct;
