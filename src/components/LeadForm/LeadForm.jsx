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
        client_id: '2dea53e7-7074-44ea-835c-f2b3c1301092',
        client_secret:
          '46iHB6geSPJnSmZaGYPLAqa3bfuvEmK2FvPcFAgjxaSXYWgvmWB01HOvahvluCoa',
        grant_type: 'authorization_code',
        code: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU2NWIyNzk0OGI2MjVhNGIzMjg2YjEyNjM2NDIxMjc2MzQ4Nzg1NmRiMTYyMDM3NTVlZWQxNWYwZjU1ZTAyZThkZjNmMmVhYjRhY2U4OTYxIn0.eyJhdWQiOiIyZGVhNTNlNy03MDc0LTQ0ZWEtODM1Yy1mMmIzYzEzMDEwOTIiLCJqdGkiOiI1NjViMjc5NDhiNjI1YTRiMzI4NmIxMjYzNjQyMTI3NjM0ODc4NTZkYjE2MjAzNzU1ZWVkMTVmMGY1NWUwMmU4ZGYzZjJlYWI0YWNlODk2MSIsImlhdCI6MTY5MDI3MDk0MCwibmJmIjoxNjkwMjcwOTQwLCJleHAiOjE2OTAzNTczNDAsInN1YiI6Ijk3Nzk3NDMiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzA5MzYwOTUsImJhc2VfZG9tYWluIjoia29tbW8uY29tIiwidmVyc2lvbiI6InYxIiwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.g1EIGRGm-e2I23a6TpOJpOKfr3OpcpXB9DItaWmI-Hb8tq1sj-8oIot6aL60EDo2gF6Z_XY3lutBZ6im1_TTLkoYuiIHbEgB2DuUJnTkwDIb-Qqjl7mIY-i_5WyUtJcsMTYJpMDJFiezNAER6M_GKITkcYkNPW7RpLA8OkwPPiviklEDnv5jPdSPwA3pxfjhvr2CVgzTtWe6KUnEaDn7dfHEe0g_K6M_n7KeXvk8mbHtMLJxP5mdIUJR2usWzxExM11JzR3O0ut5oSnTrf1Lm8qirIR0xef4TkVs00UQj6nC-vgZooODgXy2DfHChLyekq3BmKaC2ZMCjJ3AC01cSg',
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

      console.log(options.headers);
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
