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
        client_id: '36270add-d94f-44b9-a27d-0ce6a5659ffc',
        client_secret:
          'myZN3V4QDLzGy2cbd9o6TfpeYfhtTOg5bBJsejQjXY8TbI1HauSncGaALNAVtWwK',
        grant_type: 'authorization_code',
        code: 'def5020046ca821783c416df629fadbc2eee2e1590b56bc1dbdb8e2a0666b43f21c6172fce5c7d7d00a0ff1cc972ec3e4fe2172191a1152c54f6721dc688e51c130041a70222c2e1786c9eddb1f38d6bd826bc67b9c20ebdbee683f14d097796c0cae358d744f3ed9b2fbd67c844543274892cdc437e02f2d7ac435f30d6cb271879a4a9adb0ee1f9ea45b59f3c8cbacacbbcbc925ddf913836223aac19e4d226712547f81e0ab897ef1dbae72a351ce3f302547ac7e7669caf0eb8e569ebd4acbf8f42ea2e908a6971cc8eed87f9cee6eeda15411c79f203be9ca37e22fd8477fd9c80f12e1e96101c1c5f07832fd31594ac39116460f6211f5eb241898f719139adc2818ab53d6a88d248baf9af389ba5e021b39427c94b429ead2ecd0f65c50473b0c0ea179b73877a6e1b3fbdda344c5c40950306aad0697d0a66ffec573b821afeca3ed5b94b62f1e846996867921ffb7186021f5573185d30578448e7bd6e9dd8d47b421f210bca7ca7fc65e157605b58caccfa8229d6dce9d3f3a749420b8d77e16a504ed3992c8817bfb1292d618fb3ddd96c9d98e25069f8965a43345a7354ce16586693b6213ea4abd7ea88cd61dbb87588221f9de2204596765d36ae7a575f73ce372768f879a1f23d4e070fab1b516d179845655ae2ff67a816d216f40b3781613af22d131ad628c330b2b3a06cb040e2cc75c47',
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

      console.log(options.headers);
      const response = await fetch(authUrl, options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authenticate();
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
