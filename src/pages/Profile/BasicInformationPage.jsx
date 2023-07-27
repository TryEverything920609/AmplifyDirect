import { useEffect, useState, useContext } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Card,
  Button,
  Avatar,
  Form,
  Input,
  Upload,
  message,
} from "antd";
import { DataStore, Storage } from "aws-amplify";
import { UserProfileList } from "../../models";
import AuthContext from "../../context/AuthContext";
import background1 from "../../asset/images/background-1.jpg";
import defaultAvatar from "../../asset/images/001-man.svg";

function BasicInformationPage() {
  const { name, setName } = useContext(AuthContext);
  const { email, setEmail } = useContext(AuthContext);
  const { phone, setPhone } = useContext(AuthContext);
  const { avatar, setAvatar } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState(email);
  const [first, setFirst] = useState(name.split(" ")[0]);
  const [second, setSecond] = useState(name.split(" ")[1]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    console.log("EMAIL EMAIL", email);
    console.log("NAME NAME NAME", name);
    console.log("PHONE PHONE", phone);
    const names = name.split(" ");
    if (names.length === 2) {
      setFirst(names[0]);
      setSecond(names[1]);
    }
    console.log(first, second, "full name");
    setUserEmail(email);
    setPhoneNumber(phone);
    setUserAvatar(avatar);
  }, []);

  const onChangeProfile = () => {
    console.log(
      "User perfect",
      first,
      second,
      "full name",
      phoneNumber,
      "phone number",
      userAvatar,
      "userAvatar"
    );
    DataStore.query(UserProfileList, (c) => c.Email.eq(email)).then((users) => {
      if (users.length > 0) {
        console.log("Users profile", users[0]);
        try {
          DataStore.save(
            UserProfileList.copyOf(users[0], (updated) => {
              updated.Name = first + " " + second;
              updated.PhoneNumber = phoneNumber;
              updated.Avatar = userAvatar;
              console.log(updated.Name, updated.PhoneNumber, updated.Avatar);
            })
          );
          message.success("Profile updated successfully");
          setAvatar(userAvatar);
          setName(first + " " + second);
          setPhone(phoneNumber);
        } catch (err) {
          message.error(err);
        }
      }
    });
  };

  const uploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png" || file.type === "image/jpeg";
      if (!isPNG) {
        message.error("You can only upload PNG or JPG file!");
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
    action: (file) => {
      return new Promise((resolve, reject) => {
        Storage.put(file.name, file, {
          contentType: file.type,
        })
          .then((result) => {
            console.log("result => ", result);
            setUserAvatar(result.key);
            message.success(`${file.name} file uploaded successfully`);
          })
          .catch((err) => {
            message.error(`${file.name} file upload failed`);
            reject(file);
          });
      });
    },
  };

  useEffect(() => {
    if (userAvatar) {
      Storage.get(userAvatar, { level: "public" })
        .then((result) => {
          console.log(result, "hello image url");
          setImageUrl(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userAvatar]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="profile-nav-bg" style={{ overflow: "hidden" }}>
        <img src={background1} style={{ width: "100%", height: "100%" }} />
      </div>
      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row
            justify="space-between"
            align="middle"
            gutter={[24, 0]}
            style={{ height: "110px" }}
          >
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar
                  size={74}
                  shape="circle"
                  src={imageUrl ? imageUrl : defaultAvatar}
                />
                <div className="avatar-info">
                  <h4 className="font-semibold m-0"> {name} </h4>
                  <p>Lead FullStack Developer</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "",
              }}
            >
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />} type="primary">
                  Upload
                </Button>
              </Upload>
            </Col>
          </Row>
        }
      ></Card>
      <Card title="Basic Information">
        <Form>
          <Row gutter={[24, 0]}>
            <Col span={24} md={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input
                  defaultValue={first}
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input
                  defaultValue={second}
                  value={second}
                  onChange={(e) => setSecond(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "Please input correct Email Address",
                  },
                ]}
              >
                <Input
                  defaultValue={userEmail}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} md={12}>
              <Form.Item
                label="Phone"
                name="Phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  {
                    pattern:
                      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    message: "Please enter a valid phone number!",
                  },
                ]}
              >
                <Input
                  placeholder="Phone"
                  defaultValue={phone}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Form.Item>
              <Button type="primary" onClick={() => onChangeProfile()}>
                Change
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default BasicInformationPage;
