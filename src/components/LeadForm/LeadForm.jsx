import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import {
  CloseIcon,
  Form,
  FormBtn,
  FormCloseBtn,
  FormTitle,
  Input,
} from './LeadForm.styled';
// import axios from 'axios';
import token from '../../utils/crm/tokens.json';

// axios.defaults.baseURL = 'https://apeducation.kommo.com/api/v4/';
// console.log(axios.defaults);
// // axios.defaults.withCredentials = false;
// axios.defaults.headers.common[
//   'Authorization'
// ] = `${token.token_type} ${token.access_token}`;
// axios.defaults.headers.common[' Access-Control-Allow-Origin'] = '*';
// axios

export const LeadForm = ({ closeModal }) => {
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
      const url = 'https://apeducation.kommo.com/api/v4/leads';
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhiMTBiZmU0NWVlZGE0NmRiMGM1ZjBiMzQxOTUzNWEwNjYzY2FiMDBlYjllYzQ2MWI1ZWRjMGM2NjFhOTFjNDVlZmEzM2Q5OTM5ZjQ4YTY2In0.eyJhdWQiOiIyZGVhNTNlNy03MDc0LTQ0ZWEtODM1Yy1mMmIzYzEzMDEwOTIiLCJqdGkiOiI4YjEwYmZlNDVlZWRhNDZkYjBjNWYwYjM0MTk1MzVhMDY2M2NhYjAwZWI5ZWM0NjFiNWVkYzBjNjYxYTkxYzQ1ZWZhMzNkOTkzOWY0OGE2NiIsImlhdCI6MTY4OTg2MDEzMywibmJmIjoxNjg5ODYwMTMzLCJleHAiOjE2ODk5NDY1MzMsInN1YiI6Ijk3Nzk3NDMiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzA5MzYwOTUsImJhc2VfZG9tYWluIjoia29tbW8uY29tIiwidmVyc2lvbiI6InYxIiwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.SGZ-QF1FMvsG13gev-d2rJ9YA0hOotybW0rvYQPq9emP8v3oQOVZMfeVgSshmqwgV6WA6uDRxSpVmnkvg8aZpzx7_t23ieGrp-Al87noy90Y7pYIr5SUGKe6tckVn91x0k1pBMLNe7lf8jERCeXzBFnu5XVpmlFRCCT6Dhn2KQ8nnedttcDzSb_W4E7F02xIjAw1F7qKVH4_BzDzPP5YMRXUe6CB8tP1uv0Qe9lSZYdeKkaRPD62tEwnTRGOrMOtoySDg1yY5RtKLus4RfDIaov8o1gxmRucfkkWjbskyjnMfm3itT3wcq9tWH7WVPO2ywQdvQF1nqnK_IUmguKqCg',
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
