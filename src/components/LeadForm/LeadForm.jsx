import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import {
  CloseIcon,
  Form,
  FormBtn,
  FormCloseBtn,
  FormTitle,
  Input,
} from './LeadForm.styled';
import { useEffect } from 'react';
// import axios from 'axios';
// import token from '../../utils/crm/tokens.json';

// axios.defaults.baseURL = 'https://apeducation.kommo.com/api/v4/';
// console.log(axios.defaults);
// // axios.defaults.withCredentials = false;
// axios.defaults.headers.common[
//   'Authorization'
// ] = `${token.token_type} ${token.access_token}`;
// axios.defaults.headers.common[' Access-Control-Allow-Origin'] = '*';
// axios

export const LeadForm = ({ closeModal }) => {
  const authUrl = 'https://apeducation.kommo.com/oauth2/access_token';
  const url = 'https://apeducation.kommo.com/api/v4/leads';

  const authenticate = async () => {
    try {
      const authRequest = {
        client_id: 'a6366f2c-eb78-462d-9239-07db1bbf8a97',
        client_secret:
          'Q4OyG4DZ1kn3wQY2egP4d3YD6eOFbdNMAvxUBQgTiGC82GlOYP2ceXn9xLFUD0Oq',
        grant_type: 'authorization_code',
        code: 'def5020027d3577c6dcce58d31fb5ba70a410ce25e01c59a57ef9be0d8475309d6683e225c49389ec39db159ae042f855521dd33b898ee89f173968975707f56078e279fc6fb92dfa181c60c10b6206ae960b0b74907dc6d96752a22d06a4b80db30f6508a2e01ba1b521eb8cd3da6dc709a0038ee1e4b7be26237db9233cc5ed48865488b096fa0beb35bf2680f0ec1af830f01b51dceb95c816cf842a59904838d57533c24a6467abaa9a887b11b5a909139bbaa3fdc55a0a92d94ef68d88ddbf2997fc1e7a0a27e94b143f2cc7583c8ff169508a6a9b7e069f6149fc171b88e9d097397c1b95f9ec80d3e61ecf1c5ce8e354f43cdf087a3adc01a97653eb9f68398ddac0c0eff68fac53f99f8b912af38879fb0e44f5d88295f91047e26272f9e569115535b17413e08a8fa191d5e131db199f3bdc7d9efaac0eba653518dc726ad172a689f4ab56d207d59c1c13bdc1643ac24f2ac442a8a93a66be3d01798033aa7c35554898c212289342a071d159cb78b38bf803f2ce958b79b85c4634f23cfb12e9002063e994e733f5906aab254587a7376e7d3e02fb6caac5f2ec980c6528cbe17d6fbc82dc5ae7f6d29d3c924474b6e894603d7d29b13f87e56055917fadff79ec79ef8ecd0b6bc33fe698fad30c97bb3de8402d1430b547039e46de63517af4854a7745312edcfeadb23cc10ecd32b599d7d95fa',
        redirect_uri: 'https://paulhighrow.github.io/wireframe/',
      };

      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authRequest),
      };

      const response = await fetch(authUrl, options);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = async () => {
    try {
      const refreshRequest = {
        client_id: '2dea53e7-7074-44ea-835c-f2b3c1301092',
        client_secret:
          '46iHB6geSPJnSmZaGYPLAqa3bfuvEmK2FvPcFAgjxaSXYWgvmWB01HOvahvluCoa',
        grant_type: 'authorization_code',
        refresh_token: 'def502002a494ab59bcf558b326607c1ea3412edef532e52aa48a18193288b872ffcb348a5c281220aeab5d2a2233a43e682827c79a28fb2fb8969976f1adc0897eb8b8489d11a74edf244f269bcbbb5d57385bb122bafe8aa00f35830f3a0757c1bfcc766e21c4eb5c82180728da6108ea75b349221e4ad27c12fac69b5a9b8a18b7884790c4e7a594e42bef2e5f072317475e5c61ce299cac65394ca8841a2f0358b10f5715d57fe8fb9dff500422177dfcdd9de2d161181a79c62b07540c9d246856ecf7bdb1205ee557baa0405de934d5adb57a954a5d9112ed80e26cfbb4c1c85158a25d8bcf068b2909c6cbd8178d8c36a3db4e92e11f55493ae444589934188b44dc6132a3d1f3daad6c740d2ca490482eee3702f71e547a4e3a1becde763c6588739820d117d6998384cad9de79ed09ecc08e8cd92e9b334a3ecbafe41724aeac300c4ca2c0652f9866cc5594d65a0e50ac2e7081f066add695b054662413f00aeb5323efd9edbeabd448b9723894785b37231d6e660bfcb4b41218b7499cbced365db98fb59153b8030b2f7b2aded11e895f3fe5fdec03adfbf70a79115add95f8cdafbc512d98cebd36a45d9866664fc4a7821feb571c36e4a87384f6638b81bc27663a71bc0486d67f8a545aa6955e400ce5b35917b5c4f79d264970d5d5c04087340fd8cfaa0137f72db',
        redirect_uri: 'https://paulhighrow.github.io/wireframe/',
      };

      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(refreshRequest),
      };

      const response = await fetch(authUrl, options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const auth = authenticate();
    if (!auth.status) {
      refreshToken();
    }
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    const testRequest = [
      {
        name: `${form.elements.username.value}`,
        pipeline_id: 6542135,
        custom_fields_values: [
          {
            field_id: 1807468,
            values: [
              {
                value: `${form.elements.phone.value}`,
              },
            ],
          },
        ],
      },
    ];

    try {
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhiMTBiZmU0NWVlZGE0NmRiMGM1ZjBiMzQxOTUzNWEwNjYzY2FiMDBlYjllYzQ2MWI1ZWRjMGM2NjFhOTFjNDVlZmEzM2Q5OTM5ZjQ4YTY2In0.eyJhdWQiOiIyZGVhNTNlNy03MDc0LTQ0ZWEtODM1Yy1mMmIzYzEzMDEwOTIiLCJqdGkiOiI4YjEwYmZlNDVlZWRhNDZkYjBjNWYwYjM0MTk1MzVhMDY2M2NhYjAwZWI5ZWM0NjFiNWVkYzBjNjYxYTkxYzQ1ZWZhMzNkOTkzOWY0OGE2NiIsImlhdCI6MTY4OTg2MDEzMywibmJmIjoxNjg5ODYwMTMzLCJleHAiOjE2ODk5NDY1MzMsInN1YiI6Ijk3Nzk3NDMiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzA5MzYwOTUsImJhc2VfZG9tYWluIjoia29tbW8uY29tIiwidmVyc2lvbiI6InYxIiwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.SGZ-QF1FMvsG13gev-d2rJ9YA0hOotybW0rvYQPq9emP8v3oQOVZMfeVgSshmqwgV6WA6uDRxSpVmnkvg8aZpzx7_t23ieGrp-Al87noy90Y7pYIr5SUGKe6tckVn91x0k1pBMLNe7lf8jERCeXzBFnu5XVpmlFRCCT6Dhn2KQ8nnedttcDzSb_W4E7F02xIjAw1F7qKVH4_BzDzPP5YMRXUe6CB8tP1uv0Qe9lSZYdeKkaRPD62tEwnTRGOrMOtoySDg1yY5RtKLus4RfDIaov8o1gxmRucfkkWjbskyjnMfm3itT3wcq9tWH7WVPO2ywQdvQF1nqnK_IUmguKqCg',
        },
        body: JSON.stringify(testRequest),
      };
      console.log(options.headers);
      const response = await fetch(url, options);
      // const response = await axios.get('leads', {
      //   headers: {
      //     Authorization:
      //       'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhiMTBiZmU0NWVlZGE0NmRiMGM1ZjBiMzQxOTUzNWEwNjYzY2FiMDBlYjllYzQ2MWI1ZWRjMGM2NjFhOTFjNDVlZmEzM2Q5OTM5ZjQ4YTY2In0',
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      //   },
      // });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Backdrop onClick={closeModal} />
      <Form onSubmit={handleSubmit}>
        <FormCloseBtn onClick={closeModal}>
          <CloseIcon />
        </FormCloseBtn>
        <FormTitle>Оформіть заявку і наш менеджер вам зателефонує</FormTitle>
        <Input type="text" name="username" placeholder="Ім'я"></Input>
        <Input type="tel" name="phone" placeholder="Телефон"></Input>
        <FormBtn type="submit">Надіслати</FormBtn>
      </Form>
    </>
  );
};
