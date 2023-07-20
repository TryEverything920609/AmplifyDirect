import { Avatar, Typography } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ProfileCardWidget } from "../../components/Widgets";
import { GeneralInfoForm } from "../../components/Forms";
import { useState, useEffect, useContext } from "react";
import { DataStore, Storage, Auth } from "aws-amplify";
import { UserProfileList } from "../../models";
import defaultImage from '../../asset/img/team-4.jpeg';


function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [imageUrl, setImageUrl] = useState('');
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
  }

  useEffect(() => {
    getUserEmail();
  }, []);

  useEffect(() => {
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
  }, [email]);

  useEffect(() => {
    Storage.get(avatar, {level: 'public'})
    .then((url) => {
      console.log("avatar: ", avatar);
      console.log("GetImage", url);
      setImageUrl(url);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [avatar]);

  return (
    <>
      <Row>
        <Col xs={12} xl={8}>
          <GeneralInfoForm />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget image = { imageUrl } name = { name }/>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
