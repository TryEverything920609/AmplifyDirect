import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { DataStore, Storage, Auth, Predicates } from "aws-amplify";
import { UserProfileList } from "../../models";
import defaultImage from '../../asset/img/team-4.jpeg';
import { Upload } from "antd";

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [imageUrl, setImageUrl] = useState('')
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status:  'done',
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ]);

  const onChange = ({fileList:newFileList}) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if(!src){
      src = await new Promise(((resolve)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      }));
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  }

  function getUserEmail(){
    Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log("Hello");
      const userEmail = user.attributes.email;
      const Name = user.attributes.name;
      setEmail(userEmail);
      setName(Name);
      console.log("User: ", userEmail, "name: ", Name);
    })
    .catch((err) => console.log(err))

    DataStore.query(UserProfileList, (c) => c.Email.eq(email))
    .then((users) => {
      console.log("Hello", users);
      const Avatar = users[0].Avatar;
      if(Avatar){
        console.log("Hello", users[0].Avatar);
        setAvatar(Avatar);
      }
    })
    .catch((err) => console.log(err));

    Storage.get(avatar)
    .then((url) => {
      console.log("avatar: ", avatar);
      console.log("GetImage", url);
      setImageUrl(url);
    })
    .catch((err) => {
      console.log(err);
    })

    Storage.list('public/')
    .then((result) => {console.log("Hello", result)})
    .catch((err) => {console.log("HELLO", err)})
  }

  useEffect(() => {
    getUserEmail();
  }, []);

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('asset/images/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Upload
                        fileList={fileList}
                        listType="picture"
                        onChange={onChange}
                        onPreview={onPreview}
                      >
                        Upload
                      </Upload>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  {name}
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Los Angeles, California
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Solution Manager - Creative Tim Officer
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
