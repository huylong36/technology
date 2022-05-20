import { Button, Container, Grid, MenuItem, Select } from "@mui/material";
import { Form, Input, notification } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import blogAPI from "../../apis/api/blog";
import categoryAPI from "../../apis/api/category";
import UploadImage from "../../assets/image/upload-img.png";
import BlogItem from "../blogItem";
import { FCEditor } from "../CkEditor";
import { FCDialog } from "../Dialog/DialogComponent";
import { createBlog, fetchBlog } from "./blogSlice";
import "./style.scss";
const Newsfeed = () => {
  useEffect(() => {
    categoryAPI
      .getCategory({})
      .then((res) => {
        setcategories(res.data.category);
      })
      .catch((error) => {});
      dispatch(fetchBlog())
  }, []);
  const [selectCategory, setSelectCategory] = useState();
  const [categories, setcategories] = useState();
  const [open, setOpen] = useState(false);
  const [contentCK, setContentCK] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const [form] = Form.useForm()
  const handleCreate = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
   const dispatch = useDispatch()
  const renderCreateBlog = () => {
    const onFinish = (values) => {
      const data = {
        ...values,
        desc: contentCK,
        media: imageSelected,
        categoryId: selectCategory,
      };
      blogAPI.createBlog(data);
      if(data){
        notification.success({message:'Tạo blog thành công !'})
        setOpen(false);
      }else{
        notification.error({message:'Tạo blog thất bại !'})
      }
      form.resetFields()
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const onChangeImage = (files) => {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "m4jso0bw");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dwn6likgj/image/upload",
          formData
        )
        .then((res) => {
          setImageSelected(res.data.url);
        })
        .catch((error) => {});
    };

    return (
      <>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "40%" }}>
              <Form.Item
                label="Tiêu đề"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div style={{ width: "40%" }}>
              <Form.Item label="Chọn danh mục" name="categoryId">
                <Select
                  style={{ width: "100%" }}
                  size="large"
                  variant="filled"
                  defaultValue="Chọn"
                  className="select-category"
                  onChange={(e) => setSelectCategory(e.target.value)}
                >
                  {categories?.map((category, index) => (
                    <MenuItem key={category + index} value={category._id}>
                      {category.title}
                    </MenuItem>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <Input
                style={{ width: "50%", display: "none" }}
                onChange={(event) => {
                  onChangeImage(event.target.files);
                }}
                className="item-input"
                name="media"
                label="Ảnh sản phẩm"
                type="file"
                required
                id="image-upload"
              />
            </div>
            <div>
              <div>Chọn ảnh</div>
              <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
                {imageSelected ? (
                  <img
                    src={imageSelected}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                ) : (
                  <img
                    alt=""
                    src={UploadImage}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                  />
                )}
              </label>
            </div>
          </div>

          <Form.Item
            label="Mô tả ngắn"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <FCEditor
              handleChangeContent={(content) => setContentCK(content)}
              defaultValue=""
              height={500}
            />
          </Form.Item>

          <Button variant="contained" type="submit">Tạo</Button>
        </Form>
      </>
    );
  };
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <Button variant="contained" color="primary" onClick={handleCreate}>
              Tạo blog
            </Button>
            <Grid container>
                <BlogItem/>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            2
          </Grid>
        </Grid>
      </Container>
      <FCDialog
        open={open}
        handleClose={handleClose}
        title="Tạo Blog"
        content={renderCreateBlog()}
        size="xl"
        fullWidth
      />
    </>
  );
};

export default Newsfeed;
